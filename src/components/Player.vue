<template>
  <div>
    <!--  背景颜色  -->
    <!--    <canvas class="Player-BackgroundImage"></canvas>-->
    <div class="Player-BackgroundImage"></div>
    <div class="Player">
      <div class="Player-flex">
        <div class="Player-show flex-Music-dirJust flex-Music-flexWarped">
          <div class="Player-image flex-Music-res">
            <img :src="PlayerImg" alt="">
          </div>
          <div class="Player-title flex-Music-left flex-Music-flexWarped ">
            <div class="PLayer-SongTitleAndSinger ">
              <span class="componentPage-flex-text">{{ PlayerSongName }}</span>
              <span class="componentPage-flex-text">{{ PlayerSingerName }}</span>
            </div>
            <div
                class="componentPage-width-25 componentPage-height-100 componentPage-flex componentPage-flex-justify ">
              <n-icon v-if="value < 20" class="componentPage-Player-translateY-icon" color="#fff" size="20">
                <VolumeOffOutline/>
              </n-icon>
              <n-icon v-else-if="value < 90" class="componentPage-Player-translateY-icon" color="#fff" size="20">
                <VolumeLowOutline/>
              </n-icon>
              <n-icon v-else class="componentPage-Player-translateY-icon" color="#fff" size="20">
                <VolumeMediumOutline/>
              </n-icon>
              <n-space class="Audio-volume-text componentPage-width-100 componentPage-Player-translateY"
                       style="height: 4px"
                       vertical>
                <n-slider v-model:value="value" :step="1"
                          style="--n-fill-color:#fff;--n-fill-color-hover: #fff;--n-handle-size:0px;--n-rail-color:rgb(219, 219, 223,.2);--n-rail-color-hover:rgb(219, 219, 223,.2);"
                          @update-value="AudioVolumeMouseMove(value)"/>
              </n-space>
            </div>
            <div class="Player-unit flex-Music-res">
              <button class="flex-Music-sizing">
                <n-icon color="#fff" size="20">
                  <EllipsisHorizontal/>
                </n-icon>
              </button>
              <div class="MoreFunction">
                <!--       小功能菜单         -->
                <ul>
                  <li>

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div class="progress-input flex-Music-flexWarped">
              <span>{{ currentTime(MusicSongTime) }}</span>
              <n-space class="Audio-Select" vertical>
                <n-slider id="ProgressBar"
                          :step="0.1"
                          :tooltip="false"
                          :value="AudioValue(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)"
                          style="--n-fill-color:#fff;--n-fill-color-hover: #fff;--n-handle-size:0px;--n-rail-color:rgb(219, 219, 223,.2);--n-rail-color-hover:rgb(219, 219, 223,.2);"
                          @update-value="AudioProgress($event)"/>
              </n-space>
              <span>{{ PlayerFinalSongTime }}</span>
            </div>
          </div>
          <div class="Player-btn flex-Music-sizing flex-Music-flexWarped" @click.stop="AudioToggle">
            <button>
              <n-icon color="#fff" size="40">
                <SyncSharp/>
              </n-icon>
            </button>
            <button @click.stop="NextAndPrevious('Previous');mess('warning')">
              <n-icon color="#fff" size="40">
                <PlaySkipBack/>
              </n-icon>
            </button>
            <button v-show="MusicPlayer === false" @click.stop="PlayerAudio()">
              <n-icon color="#fff" size="45">
                <Play/>
              </n-icon>
            </button>
            <button v-show="MusicPlayer === true " @click.stop="PlayerAudio()">
              <n-icon color="#fff" size="45">
                <PauseSharp/>
              </n-icon>
            </button>
            <button @click.stop="NextAndPrevious('Next');mess('warning')">
              <n-icon color="#fff" size="40">
                <PlaySkipForward/>
              </n-icon>
            </button>
            <button @click.stop="PlayToggle(MusicPlayerToggle)">
              <n-icon color="#fff" size="40">
                <ListSharp/>
              </n-icon>
            </button>
          </div>
        </div>
        <div v-show="MusicPlayerToggle === true" class="Player-lyric">
          <transition mode="out-in" name="player">
            <ul id="PlayLyricScroll"
                class="Player-lyric-list flex-Music-height-100"
                style="transform: translateY(500px);">
              <li v-for="(item,index) in Audio.MusicLyric" :id="MusicI === index ? 'playing' : ''"
                  :style="{fontSize:Setting.LyricSize}"
                  class=" PlayerLyric flex-Music-pointer flex-Music-radius-12 flex-Music-sizing flex-Music-height-100"
                  @click="lyricSelect(item.time)">
                {{ item.text }}
              </li>
            </ul>
          </transition>
        </div>
        <div v-show="MusicPlayerToggle === false" class="Player-SongList">
          <n-scrollbar>
            <transition mode="out-in" name="player">
              <ul v-show="MusicPlayerToggle === false" style="transform: translateY(70px)">
                <li v-for="(item,index) in Audio.MusicSongNow"
                    :id=" item.id === Audio.MusicSong['data'][0]['id'] ? 'player-lyric-song': '' "
                    class="flex-Music-sizing flex-Music-pointer" @dblclick="SongListAudio(item)">
                  <div class="Player-lyric-songs-list flex-Music-flexWarped">
                    <div class="flex-Music-sizing">
                      <img v-lazy="item['al']['picUrl']" alt=""/>
                    </div>
                    <div class="flex-Music-font-hidden">
                      <span>{{ item['name'] }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </transition>
          </n-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/style/Player.sass'
import '../style/AnimationEffects.sass'
import {onMounted, ref} from "vue";
import {
  EllipsisHorizontal,
  ListSharp,
  PauseSharp,
  Play,
  PlaySkipBack,
  PlaySkipForward,
  SyncSharp,
  VolumeLowOutline,
  VolumeMediumOutline,
  VolumeOffOutline
} from '@vicons/ionicons5'
import {MusicI, MusicPlayer, MusicPlayerTime, MusicPlayerToggle, MusicSongTime,} from '../uilt/PublicStatus'
import useStore from "../stores/counter";
import {AudioValue, BackgroundImage, currentTime,} from "../uilt/PageWidgets";
import {
  AudioProgress,
  AudioToggle,
  AudioVolumeMouseMove,
  lyricSelect,
  NextAndPrevious,
  PlayerAudio,
  PlayToggle,
  SongListAudio
} from '../uilt/VueIncident'
import {AudioLyric, mess} from "../uilt/VueEvent";
import {usePlayerComponent} from '../uilt/vueComputed'


const {Audio, Detail, Start, Setting} = useStore()
const {PlayerImg, PlayerSongName, PlayerSingerName, PlayerFinalSongTime} = usePlayerComponent()
const value = ref(100)

onMounted(() => {

  BackgroundImage()

  AudioLyric()

})

</script>

<style scoped>
#playing {
  transition-duration: 500ms;
  font-size: 32px;
  color: #fff;
  opacity: 1;
}

#player-lyric-song {
  color: #fff;
  opacity: 1;
  background-color: rgba(255, 255, 255, .4);
}

span {
  color: #fff;
}
</style>