<template>
    <div :style="AudioBackground"
         class="audio  component-width-100 component-sizing">
        <div class="audio-box">
            <div class="left component-width-30 component-flex" @click="playerAudioShow">
                <div class="left-box component-flex">
                    <div class="left-img component-radius-4 component-hidden">
                        <img :src="AudioImg" alt="" v-if="Audio.MusicSongNow.length">
                        <n-icon size="58" v-else>
                            <ImageOutline/>
                        </n-icon>
                    </div>
                    <div class="left-title">
                        <span class="component-block">{{ AudioName  }}</span>
                        <span class="component-block">{{ AudioSinger }}</span>
                    </div>
                </div>
                <div></div>
            </div>
            <div class="middle component-position-re component-width-40">
                <div class="middle-information component-height-100">
                    <div class="middle-btn component-center component-flex component-flex-between">
                        <button @click.prevent="NextAndPrevious('Previous');mess('warning')">
                            <n-icon size="20">
                                <PlaySkipBack/>
                            </n-icon>
                        </button>
                        <button v-show="!MusicPlayer" @click="PlayerAudio()">
                            <n-icon size="35">
                                <Play/>
                            </n-icon>
                        </button>
                        <button v-show="MusicPlayer" @click="PlayerAudio()">
                            <n-icon size="35">
                                <PauseSharp/>
                            </n-icon>
                        </button>
                        <button class="middle-information-btn-bw-last"
                                @click.prevent="NextAndPrevious('Next');mess('warning')">
                            <n-icon size="20">
                                <PlaySkipForward/>
                            </n-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="right component-width-30 component-flex component-pointer">
                <div class="AudioPlayMode  component-height-100 ">
                    <music-mode :size="28"></music-mode>
                </div>
                <div class="AudioVolume  component-height-100 ">
                    <div class="AudioVolume-res component-hidden  component-center component-width-100 component-position-re">
                        <n-space class="Audio-volume-text" vertical>
                            <n-slider v-model:value="value" :step="1"
                                      style="--n-fill-color:#165dff;--n-fill-color-hover: #165dff;"
                                      @update-value="AudioVolumeMouseMove(value)"/>
                        </n-space>
                    </div>
                </div>
                <div class="AudioListOfSongs  component-height-100">
                    <div class="alignLeft component-center" @click.stop="SongListShowToggle">
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
    ReorderFour,
    ImageOutline
} from '@vicons/ionicons5'
import useStore from "../stores/counter";
import {MusicPlayer, MusicPlayerTime, MusicSongTime} from '../uilt/PublicStatus'
import {
    AudioVolumeMouseMove,
    NextAndPrevious,
    PlayerAudio,
    playerAudioShow,
    SongListShowToggle
} from '../uilt/VueIncident'
import {ref} from "vue";
import {mess} from "../uilt/VueEvent";
import {useAudioComputed} from '../uilt/vueComputed'
import MusicMode from "./MusicMode.vue";

const {Audio, Start} = useStore()
const {AudioImg, AudioBackground, AudioName, AudioSinger} = useAudioComputed()
const value = ref(100)


</script>
<style lang="scss" scoped>
.audio {
  position: sticky;
  bottom: 0;
  z-index: 20;
  height: 10vh;
  box-shadow: 10px 3px 6px #000;
  background-color: var(--capabilities-background);

  .audio-box {
    height: 100px;
  }
}

.left, .middle, .right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left {
  left: 5%;
  width: 27.5%;

  .left-box {
    height: 58px;

    .left-img {
      width: 58px;
      height: 58px;
      margin-right: 16px;
    }

    .left-title {
      span {
        color: var(--color);

      }
    }
  }
}

.middle {
  left: 50%;
  width: 35%;
  transform: translateX(-50%) translateY(-50%);

  .middle-information {
    .middle-btn {
      padding: 0 80px;
    }

    button {
      width: 58px;
      height: 58px;

      i {
        color: var(--color)
      }

      &:nth-child(1) {
        flex: 1.3;
      }

      &:nth-child(2) {
        flex: 2;
      }

      &:nth-child(3) {
        flex: 2;
      }

      &:nth-child(4) {
        flex: 1.3;
      }
    }

  }
}

.right {
  right: 5%;
  width: 27.5%;

  .AudioListOfSongs, .AudioPlayMode {
    flex: 1;

    div {
      transform: translateY(3px);
    }

  }

  .AudioVolume {
    flex: 2;

    .AudioVolume-res {
      height: 40px;
      transform: translateY(7.5px);

      .Audio-volume-text {
        transform: translateY(3px);
      }
    }
  }
}
</style>
