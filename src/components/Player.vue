<template>
  <div>
    <!--  背景颜色  -->
    <!--    <canvas class="Player-BackgroundImage"></canvas>-->
    <div class="Player-BackgroundImage"></div>
    <div class="Player">
      <div class="Player-flex">
        <div class="Player-show flex-Music-dirJust flex-Music-flexWarped">
          <div class="Player-image flex-Music-res">
            <img
                :src="Start.AudioMode === 1 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['al']['picUrl'] : Audio.MusicSongNow[Start.AudioSongIndex]['al']['picUrl']"
                alt="">
          </div>
          <div class="Player-title flex-Music-left flex-Music-flexWarped ">
            <div class="PLayer-SongTitleAndSinger ">
                <span class="componentPage-flex-text">{{
                    Start.AudioMode === 1 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['name'] : Audio.MusicSongNow[Start.AudioSongIndex]['name']
                  }}</span>
              <span class="componentPage-flex-text">{{
                  Start.AudioMode === 1 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['ar'][0]['name'] : Audio.MusicSongNow[Start.AudioSongIndex]['ar'][0]['name']
                }}</span>
            </div>
            <div
                class="componentPage-width-25 componentPage-height-100 componentPage-flex componentPage-flex-justify ">
              <n-icon size="20" color="#fff" class="componentPage-Player-translateY-icon" v-if="value < 20">
                <VolumeOffOutline/>
              </n-icon>
              <n-icon size="20" color="#fff" class="componentPage-Player-translateY-icon" v-else-if="value < 90">
                <VolumeLowOutline/>
              </n-icon>
              <n-icon size="20" color="#fff" class="componentPage-Player-translateY-icon" v-else>
                <VolumeMediumOutline/>
              </n-icon>
              <n-space vertical class="Audio-volume-text componentPage-width-100 componentPage-Player-translateY"
                       style="height: 4px">
                <n-slider v-model:value="value" :step="1"
                          style="--n-fill-color:#fff;--n-fill-color-hover: #fff;--n-handle-size:0px;--n-rail-color:rgb(219, 219, 223,.2);--n-rail-color-hover:rgb(219, 219, 223,.2);"
                          @update-value="AudioVolumeMouseMove(value)"/>
              </n-space>
            </div>
            <div class="Player-unit">
              <button>
                <n-icon size="20" color="#fff">
                  <EllipsisHorizontal/>
                </n-icon>
              </button>
            </div>
          </div>
          <div>
            <div class="progress-input flex-Music-flexWarped">
              <span>{{ currentTime(MusicSongTime) }}</span>
              <n-space vertical class="Audio-Select">
                <n-slider id="ProgressBar"
                          :value="AudioValue(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)"
                          :step="0.1"
                          style="--n-fill-color:#fff;--n-fill-color-hover: #fff;--n-handle-size:0px;--n-rail-color:rgb(219, 219, 223,.2);--n-rail-color-hover:rgb(219, 219, 223,.2);"
                          @update-value="AudioProgress($event)" :tooltip="false"/>
              </n-space>
              <span>{{
                  Start.AudioMode === 1 ? Time(Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['dt']) : Time(Audio.MusicSongNow[Start.AudioSongIndex]['dt'])
                }}</span>
            </div>
          </div>
          <div class="Player-btn flex-Music-sizing flex-Music-flexWarped" @click.stop="AudioToggle">
            <button>
              <n-icon size="40" color="#fff">
                <SyncSharp/>
              </n-icon>
            </button>
            <button @click.stop="NextAndPrevious('Previous');mess('warning')">
              <n-icon size="40" color="#fff">
                <PlaySkipBack/>
              </n-icon>
            </button>
            <button @click.stop="PlayerAudio()" v-show="MusicPlayer === false">
              <n-icon size="45" color="#fff">
                <Play/>
              </n-icon>
            </button>
            <button @click.stop="PlayerAudio()" v-show="MusicPlayer === true ">
              <n-icon size="45" color="#fff">
                <PauseSharp/>
              </n-icon>
            </button>
            <button @click.stop="NextAndPrevious('Next');mess('warning')">
              <n-icon size="40" color="#fff">
                <PlaySkipForward/>
              </n-icon>
            </button>
            <button @click.stop="PlayToggle(MusicPlayerToggle)">
              <n-icon size="40" color="#fff">
                <ListSharp/>
              </n-icon>
            </button>
          </div>
        </div>
        <div class="Player-lyric" v-show="MusicPlayerToggle === true">
          <n-scrollbar>
            <transition name="player" mode="out-in">
              <ul style="transform: translateY(500px);" id="PlayLyricScroll" class="Player-lyric-list" v-show="MusicPlayerToggle === true">
                <li v-for="(item,index) in Audio.MusicLyric" :id="MusicI === index ? 'playing' : ''"
                    @click="lyricSelect(item.time)" class="flex-Music-pointer flex-Music-radius-3">{{ item.text }}
                </li>
              </ul>
            </transition>
          </n-scrollbar>
        </div>
        <div class="Player-SongList" v-show="MusicPlayerToggle === false">
          <n-scrollbar>
            <transition name="player" mode="out-in">
              <ul style="transform: translateY(70px)" v-show="MusicPlayerToggle === false">
                <li v-for="(item,index) in Audio.MusicSongNow"
                    :id=" item.id === Audio.MusicSong['data'][0]['id'] ? 'player-lyric-song': '' " class="flex-Music-sizing flex-Music-pointer" @dblclick="SongListAudio(item)">
                  <div class="Player-lyric-songs-list flex-Music-flexWarped">
                    <div class="flex-Music-sizing">
                      <img v-lazy="item['al']['picUrl']" alt="">
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

<script setup lang="ts">
import '@/style/Player.sass'
import '../style/AnimationEffects.sass'
import { onMounted, ref} from "vue";
import {
  Play,
  PlaySkipBack,
  PlaySkipForward,
  EllipsisHorizontal,
  ListSharp,
  SyncSharp,
  PauseSharp,
  VolumeOffOutline,
  VolumeMediumOutline,
  VolumeLowOutline
} from '@vicons/ionicons5'
import {
  MusicPlayer,
  MusicSongTime,
  MusicPlayerTime,
  MusicPlayerToggle,
  MusicI,
} from '../uilt/PublicStatus'
import useStore from "../stores/counter";
import {
  currentTime,
  Time,
  lyric,
  BackgroundImage,
  AudioValue,
} from "../uilt/PageWidgets";
import {
  PlayToggle,
  lyricSelect,
  PlayerAudio,
  AudioProgress,
  NextAndPrevious,
  AudioVolumeMouseMove,
  AudioToggle, SongListAudio

} from '../uilt/VueIncident'
import {AudioLyric, mess} from "../uilt/VueEvent";


const {Audio, Detail, Start} = useStore()
const value = ref(100)

onMounted(() => {
  let Background = document.querySelector('.Player-BackgroundImage')
  BackgroundImage(Background)

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