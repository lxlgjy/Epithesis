<template>
  <div
      class="audio componentPage-position componentPage-width-100 componentPage-background-fff componentPage-padding-0-3 componentPage-sizing"
      v-if="Start.AudioShow && Audio.MusicSongNow.length > 0">
    <div class="audio-box componentPage-flex">
      <div class="left componentPage-width-30 componentPage-flex" @click="playerAudioShow">
        <div class="left-box componentPage-flex componentPage-height-100">
          <div class="left-img componentPage-radius-50 componentPage-hidden">
            <img :src="Audio.MusicSongNow.length > 1 ? (Start.AudioMode === 1 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['al']['picUrl'] :(Start.AudioMode === 0 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['al']['picUrl'] : Audio.MusicSongNow[Start.AudioSongIndex]['al']['picUrl'] ))  : Audio.MusicSongNow[Start.AudioSongIndex]['al']['picUrl']  " alt="">
          </div>
          <div class="left-title">
            <span class="componentPage-block">{{ Audio.MusicSongNow.length > 1 ? (Start.AudioMode === 1 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['name'] : (Start.AudioMode === 0 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['name'] :Audio.MusicSongNow[Start.AudioSongIndex]['name'] ) ) : Audio.MusicSongNow[Start.AudioSongIndex]['name'] }}</span>
            <span class="componentPage-block">{{Audio.MusicSongNow.length > 1 ? (Start.AudioMode === 1  ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['ar'][0]['name'] : (Start.AudioMode === 0 ? Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['ar'][0]['name'] :Audio.MusicSongNow[Start.AudioSongIndex]['ar'][0]['name']  ) ) : Audio.MusicSongNow[Start.AudioSongIndex]['ar'][0]['name']  }}</span>
          </div>
        </div>
        <div></div>
      </div>
      <div class="middle componentPage-position-re componentPage-width-40">
        <div class="componentPage-position">

        </div>
        <div class="middle-information componentPage-flex componentPage-height-100">
          <div class="componentPage-flex">
            <div class="componentPage-center componentPage-flex-between">
              <button @click.prevent="NextAndPrevious('Previous');mess('warning')">
                <n-icon size="35" color="#000">
                  <PlaySkipBack/>
                </n-icon>
              </button>
              <button v-show="MusicPlayer === false" @click="PlayerAudio()">
                <n-icon size="40" color="#000">
                  <Play/>
                </n-icon>
              </button>
              <button v-show="MusicPlayer === true" @click="PlayerAudio()">
                <n-icon size="40" color="#000">
                  <PauseSharp/>
                </n-icon>
              </button>
              <button class="middle-information-btn-bw-last" @click.prevent="NextAndPrevious('Next');mess('warning')">
                <n-icon size="35" color="#000">
                  <PlaySkipForward/>
                </n-icon>
              </button>
            </div>
          </div>
          <div class="componentPage-flex">
            <span>{{ currentTime(MusicSongTime) }}</span>
            <n-space vertical class="Audio-Select">
              <n-slider :value="AudioValue(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)" :step="0.1" style="--n-fill-color:#165dff;--n-fill-color-hover: #165dff;--n-handle-size:8px;--n-handle-color:#165dff;"
                        @update-value="AudioProgress($event)"  :tooltip="false"/>
            </n-space>
            <span>{{Start.AudioMode === 1 ? Time(Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['dt']) : Time(Audio.MusicSongNow[Start.AudioSongIndex]['dt'])}}</span>
          </div>
        </div>
      </div>
      <div class="right componentPage-width-30 componentPage-flex componentPage-pointer">
        <div class="AudioSpeed componentPage-width-25 componentPage-height-100" @click="MusicSpeed">
          <span>{{MusicSpeedIndex + 'x'}}</span>
        </div>
        <div class="AudioPlayMode componentPage-width-25 componentPage-height-100 ">
          <div class="alignLeft componentPage-center" @click="PlaybackModeSwitching();mess('success')">
            <n-icon size="30" color="#000" class="center" v-show="MusicPlayMode === 3 ">
              <RepeatOutline/>
            </n-icon>
            <n-icon size="30" color="#000" class="center" v-show="MusicPlayMode === 2">
              <Shuffle/>
            </n-icon>
            <n-icon size="30" color="#000" class="center" v-show="MusicPlayMode === 1">
              <ReloadOutline/>
            </n-icon>
          </div>
        </div>
        <div class="AudioVolume componentPage-width-25 componentPage-height-100 ">
          <div class="AudioVolume-res componentPage-hidden  componentPage-center
componentPage-width-100 componentPage-height-100 componentPage-position-re">

            <n-space vertical class="Audio-volume-text">
              <n-slider v-model:value="value" :step="1" style="--n-fill-color:#165dff;--n-fill-color-hover: #165dff;"
                        @update-value="AudioVolumeMouseMove(value)"/>
            </n-space>

          </div>
        </div>
        <div class="AudioListOfSongs componentPage-width-25 componentPage-height-100">
          <div class="alignLeft componentPage-center" @click="SongListShowToggle">
            <n-icon size="30">
              <ReorderFour/>
            </n-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style/Flex/FlexComponents.sass'
import {
  Play,
  PlaySkipBack,
  PlaySkipForward,
  PauseSharp,
  SyncSharp,
  ReorderFour,
  ReloadOutline,
  Shuffle ,
  RepeatOutline
} from '@vicons/ionicons5'
import useStore from "../stores/counter";
import {Time, currentTime, progress, AudioValue} from '../uilt/PageWidgets'
import {MusicPlayerTime, MusicSongTime, MusicPlayer, MusicSpeedIndex , MusicPlayMode} from '../uilt/PublicStatus'
import {
  playerAudioShow,
  PlayerAudio,
  AudioVolumeMouseMove,
  AudioProgress,
  AudioToggle,
  SongListShowToggle,
  NextAndPrevious, PlaybackModeSwitching
} from '../uilt/VueIncident'
import {computed, ref} from "vue";
import {mess} from "../uilt/VueEvent";
import {MusicSpeed} from '../uilt/VueIncident'

const {Audio, Start} = useStore()

const value = ref(100)
const marks = {0:'0.5x', 20:'1x',40:'1.5x',60:'2x',80:'2.5',100:'3x'}


</script>
<style scoped lang="scss">
.audio {
  bottom: 0;
  height: 6.25rem;
  box-shadow: 10px 3px 6px #000;

  .audio-box {
    height: 100px;
  }
}

.left {
  .left-box {
    align-items: center;

    .left-img {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
    }
  }
}

.middle {
  .middle-information {
    flex-direction: column;

    button {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;

    }
  }

  .Audio-Select {
    width: 100%;
    top: 10px;
    margin: 0 8px;
    transform: translateX(-2px) translateY(8px);
  }

}

.right {
  .AudioSpeed {
    text-align: center;
    span {
      transform: translateY(2.5rem);
    }
    .SpeedSelect {
      width: 2rem;
      height: 12rem;
      transform: translateX(2.3rem) translateY(-12rem);
      border: 1px solid #000;

      .SpeedSelect-Control {}
    }





  }
  .AudioVolume, .AudioListOfSongs, .AudioPlayMode {
    justify-content: center;
    align-items: center;

    .alignLeft {
      width: 3rem;
      transform: translateX(30px) translateY(2.5rem);

      &:hover {
        border-radius: 10px;
        background-color: #eee;
      }
    }

    .AudioVolume-res {
      .Audio-volume-text {
        transform: translateY(50px);
      }
    }

  }
}
</style>
