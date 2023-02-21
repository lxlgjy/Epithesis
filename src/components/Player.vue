<template>
  <div>
    <!--  背景颜色  -->
    <div class="Player-BackgroundImage"></div>
    <!-- 返回  -->
    <div class="Player-back">
      <button @click="PlayerBack">
        <n-icon size="40" color="#fff">
          <ChevronDownSharp/>
        </n-icon>
      </button>
    </div>

    <div class="Player">
      <div class="Player-flex">
        <div class="Player-show flex-Music-dirJust flex-Music-flexWarped">
          <div class="Player-image flex-Music-res">
            <img :src=" Audio.MusicSongNow[Start.AudioSongIndex]['al']['picUrl']" alt="">
          </div>
          <div class="Player-title flex-Music-left flex-Music-flexWarped">
            <div>
              <span>{{ Audio.MusicSongNow[Start.AudioSongIndex]['name'] }}</span>
              <span>{{ Audio.MusicSongNow[Start.AudioSongIndex]['ar'][0]['name'] }}</span>
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
              <div class="Audio-Select flex-Music-res flex-Music-width-100 flex-Music-sizing">
                <div class="select flex-Music-hidden flex-Music-width-100 flex-Music-height-100">
                  <!--如果想添加悬浮显示进度，可以更改下方进度-->
                  <div class="progress flex-Music-pointer flex-Music-width-100 flex-Music-height-100"
                       @click.stop="AudioProgress($event)">
                    <div class="progress-left flex-Music-hidden"
                         :style=" 'width:' + progress(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)">
                    <span class="progress-btn componentPage-index-3 flex-Music-radius-50 componentPage-position"
                          :style=" 'left:' + progress(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)"></span>
                    </div>
                  </div>
                  <!--我是分割线-->
                </div>
                <!--<span class="Audio-float">01:23</span>-->
                <!-- 目前没有悬浮显示歌曲进度-->
              </div>
              <span>{{ Time(Audio.MusicSongNow[Start.AudioSongIndex]['dt']) }}</span>
            </div>
          </div>
          <div class="Player-btn flex-Music-sizing flex-Music-flexWarped">
            <button>
              <n-icon size="40" color="#fff">
                <SyncSharp/>
              </n-icon>
            </button>
            <button @click="NextAndPrevious('Previous');mess('warning')">
              <n-icon size="40" color="#fff">
                <PlaySkipBack/>
              </n-icon>
            </button>
            <button @click="PlayerAudio()" v-show="MusicPlayer === false">
              <n-icon size="45" color="#fff">
                <Play/>
              </n-icon>
            </button>
            <button @click="PlayerAudio()" v-show="MusicPlayer === true ">
              <n-icon size="45" color="#fff">
                <PauseSharp/>
              </n-icon>
            </button>
            <button @click="NextAndPrevious('Next');mess('warning')">
              <n-icon size="40" color="#fff">
                <PlaySkipForward/>
              </n-icon>
            </button>
            <button @click="PlayToggle(MusicPlayerToggle)">
              <n-icon size="40" color="#fff">
                <ListSharp/>
              </n-icon>
            </button>
          </div>
        </div>
        <div class="Player-lyric" v-show="MusicPlayerToggle === true">
          <transition name="player">
            <ul style="transform: translateY(500px);" class="PLayer-lyric-list" v-show="MusicPlayerToggle === true">
              <li v-for="(item,index) in lyric()" :id="MusicI === index ? 'playing' : ''"
                  @click="lyricSelect(item.time)">{{ item.text }}
              </li>
            </ul>
          </transition>
        </div>
        <div class="Player-lyric" v-show="MusicPlayerToggle === false">
          <n-scrollbar>
            <transition name="player">
              <ul style="transform: translateY(70px)" v-show="MusicPlayerToggle === false">
                <li v-for="item in Audio.MusicSongNow"
                    :id="Audio.MusicSongNow['id'] === item.id ? 'player-lyric-song':'' ">
                  <div class="Player-lyric-songs-list">
                    <div class="flex-Music-sizing">
                      <img v-lazy="item['al']['picUrl']" alt="">
                    </div>
                    <div>
                      <span>{{ item.name }}</span>
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
import {useRoute} from "vue-router";
import {onBeforeUnmount, onMounted} from "vue";
import {
  Play,
  PlaySkipBack,
  PlaySkipForward,
  EllipsisHorizontal,
  ListSharp,
  SyncSharp,
  PauseSharp,
  ChevronDownSharp
} from '@vicons/ionicons5'
import {MusicPlayer, MusicSongTime, MusicPlayerTime, MusicPlayerToggle, MusicI} from '../uilt/PublicStatus'
import useStore from "../stores/counter";
import {currentTime, progress, Time, lyric, BackgroundImage} from "../uilt/PageWidgets";
import {PlayToggle, lyricSelect, PlayerAudio, PlayerBack, AudioProgress, NextAndPrevious} from '../uilt/VueIncident'
import {AudioLyric, mess} from "../uilt/VueEvent";


const {Audio, Detail, Start} = useStore()

// MusicSongTime.value = 0
// MusicPlayerTime.value = 0

onMounted(() => {
  let Background = document.querySelector('.Player-BackgroundImage')
  BackgroundImage(Background)
  AudioLyric()
})

onBeforeUnmount(() => {
  // store.MusicLeftIf = true
})

const route = useRoute()


</script>

<style scoped>
#playing {
  font-size: 32px;
  color: #fff;
  opacity: 1;
}

#player-lyric-song {
  color: #fff;
  opacity: 1;
  background-color: rgba(255, 255, 255, .5);
}
</style>