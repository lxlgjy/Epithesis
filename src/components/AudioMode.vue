<template>
  <div class="component-position AudioModeShow component-index-5">
    <div class="AudioMode-box">
      <div class="component-width-100 AudioMode-title component-font-weight">
        <span class="component-sizing component-span-padding component-font-18">播放设置</span>
      </div>
      <div class="AudioMode-speed">
        <div>
          <span class="component-span-padding component-sizing">播放速率</span>
        </div>
        <div class="component-flex">
          <div v-for="item in dataSpeed" class="component-flex-between" @click="AudioSpeed(item.speed)">
            <input :checked="item.checked" name="speed" type="radio">
            <span>{{ item.speed + 'x' }}</span>
          </div>
        </div>
      </div>
      <div class=" AudioMode-mode component-sizing">
        <div class="component-span-padding component-sizing">
          <span>播放模式</span>
        </div>
        <div class="component-flex">
          <div v-for="(item) in AudioModeNotice" :key="item.ModeId"
               :class="Start.AudioMode === item.ModeId ? 'AudioModeHandoff' : ''"
               class="component-flex-between component-sizing AudioMode-mode-box"
               @click.stop="AudioMode(item.ModeId);mess('success')">
            <n-icon :size="item.ModeSize">
              <component :is="item.ModeComponent"/>
            </n-icon>
            <span>{{ item.ModeName }}</span>
          </div>
        </div>
      </div>
      <div class="AudioMode-close component-width-100 component-pointer" @click="AudioToggle">
        <div>关闭</div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import '../style/Flex/FlexComponents.sass'
import {ReloadOutline, RepeatOutline, Shuffle} from '@vicons/ionicons5'
import {AudioMode, AudioSpeed, AudioToggle} from '../uilt/VueIncident'
import {mess} from "../uilt/VueEvent";
import {onMounted} from "vue";
import useStore from "../stores/counter";

const dataSpeed = [{speed: 0.5, checked: false}, {speed: 1, checked: true}, {speed: 1.5, checked: false}, {
  speed: 2,
  checked: false
}, {speed: 2.5, checked: false}, {speed: 3, checked: false}]

const {Start} = useStore()
const AudioModeNotice = [
  {
    ModeId: 0,
    ModeName: '循环',
    ModeComponent: ReloadOutline,
    ModeSize: '25'
  },
  {
    ModeId: 1,
    ModeName: '随机',
    ModeComponent: Shuffle,
    ModeSize: '25'
  },
  {
    ModeId: 2,
    ModeName: '列表',
    ModeComponent: RepeatOutline,
    ModeSize: '25'
  }
]

onMounted(() => {
  document.querySelectorAll('.component-flex-between')
})

</script>

<style lang="scss" scoped>
// 播放模式切换样式

.AudioMode-mode .component-flex .AudioModeHandoff {
  background: #165dff;
  color: #fff;

  span {
    color: #fff;
  }
}

.AudioMode-box {
  position: relative;
}

.AudioModeShow {
  width: 20rem;
  height: 16rem;
  background-color: #fff;
  box-shadow: -1px -3px 17px 1px rgba(23, 34, 45, .4);
  top: 55%;
  left: 7%;
  border-radius: 4px;
  text-align: center;
}

.AudioMode-title {
  height: 2rem;

  span {
    display: block;
    height: 100%;
    text-align: left;
  }
}

.AudioMode-speed {
  height: 5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 80%;
    height: 2px;
    border-top: 2px solid rgba(23, 34, 45, .7);
    top: 38px;
    left: 10%;
    z-index: -1;
  }

  .component-span-padding {
    text-align: left;
  }

  .component-flex-between {
    height: 100%;

    span {
      color: rgba(23, 34, 45, .7);
    }
  }
}

.AudioMode-mode {
  height: 6.5rem;

  .AudioMode-chosen {

  }

  .AudioMode-mode-box {
    background: rgba(23, 34, 45, .1);
    margin: 2px 4px;
    border-radius: 8px;
    cursor: pointer;
  }

  .component-span-padding {
    text-align: left;
  }
}

.AudioMode-close {
  height: 2.5rem;
  line-height: 3rem;
  background: rgba(23, 34, 45, .1);
  text-align: center;
}
</style>