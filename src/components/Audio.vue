<template>
  <div
      class="audio componentPage-position componentPage-width-100 componentPage-background-fff componentPage-padding-0-3 componentPage-sizing"
      v-if="Start.AudioShow">
    <div class="audio-box componentPage-flex">
      <div class="left componentPage-width-30 componentPage-flex" @click="playerAudioShow">
        <div class="left-box componentPage-flex componentPage-height-100">
          <div class="left-img componentPage-radius-50 componentPage-hidden">
            <img :src="Audio.MusicSongNow ? Audio.MusicSongNow[Start.AudioSongIndex]['al']['picUrl'] :'' " alt="">
          </div>
          <div class="left-title">
            <span class="componentPage-block">{{ Audio.MusicSongNow[Start.AudioSongIndex]['name'] }}</span>
            <span class="componentPage-block">{{ Audio.MusicSongNow[Start.AudioSongIndex]['ar'][0]['name'] }}</span>
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
              <button @click="NextAndPrevious('Previous');mess()">
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
              <button class="middle-information-btn-bw-last" @click="NextAndPrevious('Next');mess()">
                <n-icon size="35" color="#000">
                  <PlaySkipForward/>
                </n-icon>
              </button>
            </div>
          </div>
          <div class="componentPage-flex">
            <span>{{ currentTime(MusicSongTime) }}</span>
            <div class="Audio-Select componentPage-position-re componentPage-width-100 componentPage-sizing">
              <div class="select componentPage-hidden componentPage-width-100 componentPage-height-100">
                <!--如果想添加悬浮显示进度，可以更改下方进度-->
                <div class="progress componentPage-pointer componentPage-width-100" @click.stop="AudioProgress($event)">
                  <div class="progress-left componentPage-hidden"
                       :style=" 'width:' + progress(Audio.MusicSongNow[Start.AudioSongIndex]['dt'],MusicPlayerTime)">
                    <span class="progress-btn componentPage-index-3 componentPage-radius-50 componentPage-position"
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
      </div>
      <div class="right componentPage-width-30 componentPage-flex">
        <div class="AudioPlayMode componentPage-width-30 componentPage-height-100 ">
          <div class="alignLeft componentPage-center" @click="AudioToggle">
            <n-icon size="30" color="#000" class="center">
              <SyncSharp/>
            </n-icon>
          </div>
        </div>
        <div class="AudioVolume componentPage-width-40 componentPage-height-100 ">
          <div class="AudioVolume-res componentPage-hidden  componentPage-center
componentPage-width-100 componentPage-height-100 componentPage-position-re">

            <n-space vertical class="Audio-volume-text">
              <n-slider v-model:value="value" :step="1" style="--n-fill-color:#165dff;--n-fill-color-hover: #165dff;"
                        @update-value="AudioVolumeMouseMove(value)"/>
            </n-space>

          </div>
        </div>
        <div class="AudioListOfSongs componentPage-width-30 componentPage-height-100">
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
  ReorderFour
} from '@vicons/ionicons5'
import useStore from "../stores/counter";
import {Time, currentTime, progress} from '../uilt/PageWidgets'
import {MusicPlayerTime, MusicSongTime, MusicPlayer} from '../uilt/PublicStatus'
import {
  playerAudioShow,
  PlayerAudio,
  AudioVolumeMouseMove,
  AudioProgress,
  AudioToggle,
  SongListShowToggle,
  NextAndPrevious
} from '../uilt/VueIncident'
import { ref} from "vue";
import {mess} from "../uilt/VueEvent";


const {Audio, Start} = useStore()

const value = ref(100)

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
    height: .3rem;
    top: 10px;
    margin: 0 8px;
    transform: translateX(-2px) translateY(-1px);

    .select {
      border-radius: 10px;

      .progress {
        background: rgba(193, 200, 209, .6);

        .progress-left {
          background-color: #165dff;
          height: 100%;

          .progress-btn {
            width: .5rem;
            height: .5rem;
            background-color: #165dff;
            transform: translateY(-2px);
          }
        }
      }
    }
  }

  .progress {
    left: 0;
    z-index: -1;
    background: rgba(193, 200, 209, .6);
    border-radius: 10rem;
    height: 100%;
  }

  .Audio-float {
    position: absolute;
    top: -32px;
    width: 3rem;
    height: 1.6rem;
    background-color: #000;
    border-radius: 7px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    line-height: 1.6rem;
    z-index: 10;

    &::after {
      content: "";
      display: block;
      width: .4rem;
      height: .4rem;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
      position: absolute;
      left: 20px;
      background-color: #000;
      bottom: -2px;
    }
  }

}

.right {
  .AudioVolume, .AudioListOfSongs, .AudioPlayMode {
    justify-content: center;
    align-items: center;

    .alignLeft {
      width: 3rem;
      transform: translateX(52px) translateY(2.5rem);

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
