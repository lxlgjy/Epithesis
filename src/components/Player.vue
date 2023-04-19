<template>
    <div class="component-sticky component-index-4">
        <!--        <div class="Player-BackgroundImage"></div>-->
        <div class="backgroundColor"
             :style="'background:url(' + AudioImg + ') no-repeat 110% 90% /cover fixed' "></div>
        <div class="Player component-relative component-sizing">
            <div class="Player-flex component-grid component-index-2  component-sizing component-center component-justify">
                <div class="Player-show component-flex">
                    <div class="PlayerBox">
                        <div class="Player-image">
                            <img :src="AudioImg" alt="" class="component-radius-4">
                        </div>
                        <div class="Player-notice component-flex">
                            <div class="Player-title component-flex">
                                <div class="Player-SongTitleAndSinger component-left">
                                    <span class="component-flex-text">{{ AudioName }}</span>
                                    <span class="component-flex-text">{{ AudioSinger }}</span>
                                </div>
                                <div class="Player-VolumeWithLikes component-flex">
                                    <div class="Player-volume component-flex">
                                        <n-icon v-if="value < 20" class="component-Player-translateY-icon" color="#000"
                                                size="20">
                                            <VolumeOffOutline/>
                                        </n-icon>
                                        <n-icon v-else-if="value < 90" class="component-Player-translateY-icon"
                                                color="#000" size="20">
                                            <VolumeLowOutline/>
                                        </n-icon>
                                        <n-icon v-else class="component-Player-translateY-icon" color="#000" size="20">
                                            <VolumeMediumOutline/>
                                        </n-icon>
                                        <n-space
                                                class="Audio-volume-text component-width-100 component-Player-translateY"
                                                style="height: 4px"
                                                vertical>
                                            <n-slider v-model:value="value" :step="1"
                                                      style="--n-fill-color:#000;--n-fill-color-hover: #000;--n-handle-size:0px;--n-rail-color:rgb(219, 219, 223,.2);--n-rail-color-hover:rgb(219, 219, 223,.2);"
                                                      @update-value="AudioVolumeMouseMove(value)"/>
                                        </n-space>
                                    </div>
                                    <div class="Player-unit component-radius-50 ">
                                        <button class="component-sizing ">
                                            <n-icon color="#fff" size="20">
                                                <EllipsisHorizontal/>
                                            </n-icon>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div class="Player-progress">
                                <div class="progress-input component-flex">
                                    <span>{{ currentTime(MusicSongTime) }}</span>
                                    <n-space class="Audio-Select component-sizing" vertical>
                                        <n-slider id="ProgressBar"
                                                  :step="0.1"
                                                  :tooltip="false"
                                                  :value="AudioValue(playerTime,MusicPlayerTime)"
                                                  style="--n-fill-color:#000;--n-fill-color-hover: #000;--n-handle-size:0px;--n-rail-color:rgb(219, 219, 223,.2);--n-rail-color-hover:rgb(219, 219, 223,.2);"
                                                  @update-value="AudioProgress($event)"/>
                                    </n-space>
                                    <span>{{ AudioLastTime }}</span>
                                </div>
                            </div>
                            <div class="Player-button  component-flex">
                                <music-mode :size="25" style="align-items: center;display: flex;"></music-mode>
                                <div class="Player-Play component-flex">
                                    <button @click.stop="NextAndPrevious('Previous');mess('warning')">
                                        <n-icon color="#000" size="25">
                                            <PlaySkipBack/>
                                        </n-icon>
                                    </button>
                                    <button v-show="!MusicPlayer" @click.stop="PlayerAudio()">
                                        <n-icon color="#000" size="35">
                                            <Play/>
                                        </n-icon>
                                    </button>
                                    <button v-show="MusicPlayer " @click.stop="PlayerAudio()">
                                        <n-icon color="#000" size="35">
                                            <PauseSharp/>
                                        </n-icon>
                                    </button>
                                    <button @click.stop="NextAndPrevious('Next');mess('warning')">
                                        <n-icon color="#000" size="25">
                                            <PlaySkipForward/>
                                        </n-icon>
                                    </button>
                                </div>
                                <button @click.stop="PlayToggle(MusicPlayerToggle)">
                                    <n-icon color="#000" size="25">
                                        <ListSharp/>
                                    </n-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="MusicPlayerToggle" class="Player-lyric component-index-3"
                     style="transform: translateY(400px)">
                    <div class="component-height-100">
                        <ul id="PlayLyricScroll"
                            class="Player-lyric-list">
                            <li v-for="(item,index) in Audio.MusicLyric"
                                :class="Setting.LyricSize"
                                class=" PlayerLyric component-pointer component-radius-8 component-sizing component-sizing component-height-100"
                                @click="lyricSelect(item.time)">{{ item.text }}
                            </li>
                        </ul>
                    </div>
                </div>

                <transition mode="out-in" enter-active-class="animate__animated animate__bounceInUp"
                            leave-active-class="animate__animated animate__bounceInUp">
                    <div v-show="!MusicPlayerToggle">
                        <div class="Player-SongList">
                            <scroll :hidden="true">
                                <ul class="player-songList-ul component-grid ">
                                    <li v-for="(item,index) in Audio.MusicSongNow"
                                        :id=" item.id === Audio.MusicSong['data'][0]['id'] ? 'player-lyric-song': '' "
                                        class="Music-sizing Music-pointer" @dblclick="SongListAudio(item)">
                                        <div class="player-songList-li component-flex Player-lyric-songs-list Music-flexWarped">
                                            <div class="songList-img Music-sizing">
                                                <img v-lazy="item['al']['picUrl']" alt=""/>
                                            </div>
                                            <div class="songList-title Music-font-hidden">
                                                <span>{{ item['name'] }}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </scroll>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import '@/style/Player.scss'
import '../style/AnimationEffects.sass'
import {onMounted, ref} from "vue";
import {
    EllipsisHorizontal,
    ListSharp,
    PauseSharp,
    Play,
    PlaySkipBack,
    PlaySkipForward,
    VolumeLowOutline,
    VolumeMediumOutline,
    VolumeOffOutline
} from '@vicons/ionicons5'
import {MusicPlayer, MusicPlayerTime, MusicPlayerToggle, MusicSongTime,} from '../uilt/PublicStatus'
import useStore from "../stores/counter";
import {AudioValue, BackgroundImage, currentTime,} from "../uilt/PageWidgets";
import {
    AudioProgress,
    AudioVolumeMouseMove,
    lyricSelect,
    NextAndPrevious,
    PlayerAudio,
    PlayToggle,
    SongListAudio
} from '../uilt/VueIncident'
import {AudioLyric, mess} from "../uilt/VueEvent";
import {useAudioComputed , usePlayerComponent} from '../uilt/vueComputed'
import Scroll from '../components/MusicScroll.vue'
import MusicMode from "./MusicMode.vue";


const {Audio, Detail, Start, Setting} = useStore()
const {AudioImg,AudioName,AudioSinger,AudioLastTime} = useAudioComputed()
const {playerTime} = usePlayerComponent()
const value = ref(100)


onMounted(() => {
    AudioLyric()
    BackgroundImage()
})

</script>

<style lang="scss" scoped>
span, p {
  color: #fff;
}
</style>