<template>
  <div class="componentPage-position AudioModeShow componentPage-index-5">
    <div class="componentPage-width-100 AudioMode-title componentPage-font-weight">
      <span class="componentPage-sizing componentPage-span-padding componentPage-font-18">播放设置</span>
    </div>
    <div class="AudioMode-speed">
      <div>
        <span class="componentPage-span-padding componentPage-sizing">播放速率</span>
      </div>
      <div class="componentPage-flex">
        <div v-for="item in dataSpeed" class="componentPage-flex-between">
          <input type="radio" name="speed" :checked="item.checked">
          <span>{{item.speed}}</span>
        </div>
      </div>
    </div>
    <div class=" AudioMode-mode componentPage-sizing">
      <div class="componentPage-span-padding componentPage-sizing">
        <span>播放模式</span>
      </div>
      <div class="componentPage-flex">
        <div :class=" MusicAudioModeIndex === 0 ? 'AudioModeHandoff' : '' " class="componentPage-flex-between componentPage-sizing AudioMode-mode-box" @click="AudioMode(0)">
          <div>
            <n-icon size="25">
              <ReloadOutline/>
            </n-icon>
            <span>循环</span>
          </div>
        </div>
        <div :class="MusicAudioModeIndex === 1 ? 'AudioModeHandoff' : '' " class="componentPage-flex-between componentPage-sizing AudioMode-mode-box" @click="AudioMode(1)">
          <div>
            <n-icon size="25">
              <Shuffle/>
            </n-icon>
            <span>随机</span>
          </div>
        </div>
        <div :class="MusicAudioModeIndex === 2 ? 'AudioModeHandoff' : '' " class="componentPage-flex-between componentPage-sizing AudioMode-mode-box" @click="AudioMode(2)">
          <div>
            <n-icon size="25">
              <RepeatOutline/>
            </n-icon>
            <span>列表</span>
          </div>
        </div>
      </div>
    </div>
    <div class="AudioMode-close componentPage-width-100 componentPage-pointer" @click="AudioToggle">
      <div>关闭</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style/Flex/FlexComponents.sass'
import {Shuffle , ReloadOutline , RepeatOutline} from '@vicons/ionicons5'
import {MusicAudioModeIndex} from '../uilt/PublicStatus'
import {AudioMode , AudioToggle} from '../uilt/VueIncident'
import {onMounted} from "vue";

const dataSpeed = [{speed:'0.5x',checked:false} , {speed:'1x',checked:true},{speed:'1.5x',checked:false},{speed:'2x',checked:false},{speed:'2.5x',checked:false},{speed:'3x',checked:false}]

onMounted(() => {
  document.querySelectorAll('.componentPage-flex-between')
  console.log(typeof MusicAudioModeIndex.value)
})
</script>

<style lang="scss" scoped>
// 播放模式切换样式

.AudioMode-mode .componentPage-flex .AudioModeHandoff {
  background: #165dff;
  color: #fff;
  span {
    color: #fff;
  }
}
.AudioModeShow {
  width: 20rem;
  height: 16rem;
  background-color: #fff;
  box-shadow: -1px -3px 17px 1px rgba(23,34,45,.4);
  top: 66%;
  right: 18%;
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
    border-top: 2px solid rgba(23,34,45,.7);
    top: 38px;
    left: 10%;
    z-index: -1;
  }
  .componentPage-span-padding {
    text-align: left;
  }
  .componentPage-flex-between {
    height: 100%;
    span {
      color: rgba(23,34,45,.7);
    }
  }
}
.AudioMode-mode {
  height: 6.5rem;
  .AudioMode-chosen {

  }
  .AudioMode-mode-box {
    background: rgba(23,34,45,.1);
    margin: 2px 4px;
    border-radius: 8px;
    cursor: pointer;
  }
  .componentPage-span-padding {
    text-align: left;
  }
}
.AudioMode-close {
  height: 2.5rem;
  line-height: 3rem;
  background: rgba(23,34,45,.1);
  text-align: center;
}
</style>