<template>
  <div v-if="Start.AudioShow && Audio.MusicSongNow.length > 0"
       :style="AudioBackground"
       class="audio component-absolute component-width-100 component-padding-0-3 component-sizing">
    <div class="audio-box component-flex">
      <div class="left component-width-30 component-flex" @click="playerAudioShow">
        <div class="left-box component-flex component-height-100">
          <div class="left-img component-radius-50 component-hidden">
            <img :src="AudioImg" alt="">
          </div>
          <div class="left-title">
            <span class="component-block">{{ AudioName }}</span>
            <span class="component-block">{{ AudioSinger }}</span>
          </div>
        </div>
        <div></div>
      </div>
      <div class="middle component-position-re component-width-40">
        <div class="component-position">

        </div>
        <div class="middle-information component-flex component-height-100">
          <div class="component-flex">
            <div class="component-center component-flex-between">
              <button @click.prevent="NextAndPrevious('Previous');mess('warning')">
                <n-icon size="35">
                  <PlaySkipBack/>
                </n-icon>
              </button>
              <button v-show="MusicPlayer === false" @click="PlayerAudio()">
                <n-icon size="40">
                  <Play/>
                </n-icon>
              </button>
              <button v-show="MusicPlayer === true" @click="PlayerAudio()">
                <n-icon size="40">
                  <PauseSharp/>
                </n-icon>
              </button>
              <button class="middle-information-btn-bw-last" @click.prevent="NextAndPrevious('Next');mess('warning')">
                <n-icon size="35">
                  <PlaySkipForward/>
                </n-icon>
              </button>
            </div>
          </div>
          <div class="AudioProgressBar component-flex">
            <span>{{ currentTime(MusicSongTime) }}</span>
            <n-space class="Audio-Select" vertical>
              <n-slider :step="0.1" :tooltip="false"
                        :value="AudioValue(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)"
                        style="--n-fill-color:#165dff;--n-fill-color-hover: #165dff;--n-handle-size:8px;--n-handle-color:#165dff;"
                        @update-value="AudioProgress($event)"/>
            </n-space>
            <span>{{
                Start.AudioMode === 1 ? Time(Audio.MusicSongNow[Start.AudioModeRandomList[Start.AudioSongIndex]]['dt']) : Time(Audio.MusicSongNow[Start.AudioSongIndex]['dt'])
              }}</span>
          </div>
        </div>
      </div>
      <div class="right component-width-30 component-flex component-pointer">
        <transition mode="out-in" name="SpeedAnimate">
          <div v-if="MusicSpeedIndex === 1" class="AudioSpeed component-width-25 component-height-100"
               @click="MusicSpeed">
            <span>{{ '1x' }}</span>
          </div>
          <div v-else-if="MusicSpeedIndex === 2" class="AudioSpeed component-width-25 component-height-100"
               @click="MusicSpeed">
            <span>{{ '2x' }}</span>
          </div>
          <div v-else class="AudioSpeed component-width-25 component-height-100" @click="MusicSpeed">
            <span>{{ '3x' }}</span>
          </div>
        </transition>

        <div class="AudioPlayMode component-width-25 component-height-100 ">
          <div class="alignLeft component-center" @click="PlaybackModeSwitching();mess('success')">
            <n-icon v-show="MusicPlayMode === 3 " class="center" size="30">
              <RepeatOutline/>
            </n-icon>
            <n-icon v-show="MusicPlayMode === 2" class="center" size="30">
              <Shuffle/>
            </n-icon>
            <n-icon v-show="MusicPlayMode === 1" class="center" size="30">
              <ReloadOutline/>
            </n-icon>
          </div>
        </div>
        <div class="AudioVolume component-width-25 component-height-100 ">
          <div class="AudioVolume-res component-hidden  component-center
component-width-100 component-height-100 component-position-re">
            <n-space class="Audio-volume-text" vertical>
              <n-slider v-model:value="value" :step="1" style="--n-fill-color:#165dff;--n-fill-color-hover: #165dff;"
                        @update-value="AudioVolumeMouseMove(value)"/>
            </n-space>
          </div>
        </div>
        <div class="AudioListOfSongs component-width-25 component-height-100">
          <div class="alignLeft component-center" @click="SongListShowToggle">
            <n-icon size="30">
              <ReorderFour/>
            </n-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '../style/Flex/FlexComponents.sass'
import {
  PauseSharp,
  Play,
  PlaySkipBack,
  PlaySkipForward,
  ReloadOutline,
  ReorderFour,
  RepeatOutline,
  Shuffle
} from '@vicons/ionicons5'
import useStore from "../stores/counter";
import {AudioValue, currentTime, Time} from '../uilt/PageWidgets'
import {MusicPlayer, MusicPlayerTime, MusicPlayMode, MusicSongTime, MusicSpeedIndex} from '../uilt/PublicStatus'
import {
  AudioProgress,
  AudioVolumeMouseMove,
  MusicSpeed,
  NextAndPrevious,
  PlaybackModeSwitching,
  PlayerAudio,
  playerAudioShow,
  SongListShowToggle
} from '../uilt/VueIncident'
import {onMounted, ref} from "vue";
import {mess} from "../uilt/VueEvent";
import {useAudioComputed} from '../uilt/vueComputed'

const {Audio, Start} = useStore()
const {AudioImg, AudioName, AudioSinger, AudioBackground} = useAudioComputed()
const value = ref(100)

onMounted(() => {

})

</script>
<style lang="scss" scoped>
.audio {
  bottom: 0;
  height: 6.25rem;
  box-shadow: 10px 3px 6px #000;
  background-color: var(--capabilities-background);

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

    .left-title {
      span {
        color: var(--color);

      }
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

      i {
        color: var(--color)
      }
    }

    .AudioProgressBar {
      span {
        color: var(--color);
      }
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
      color: var(--color);
    }

    .SpeedSelect {
      width: 2rem;
      height: 12rem;
      transform: translateX(2.3rem) translateY(-12rem);
      border: 1px solid #000;

      .SpeedSelect-Control {
      }
    }


  }

  .AudioVolume, .AudioListOfSongs, .AudioPlayMode {
    justify-content: center;
    align-items: center;

    .alignLeft {
      width: 3rem;
      transform: translateX(30px) translateY(2.5rem);

      i {
        color: var(--color);
      }

      &:hover {
        border-radius: 10px;
        background-color: var(--active);
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
