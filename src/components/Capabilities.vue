<template>
  <div class="capabilities componentPage-radius-4 componentPage-index-5" id="capabilities" style="top: 0;left:0;">
    <div class="capabilities-image-title">
      <div class="componentPage-flex">
        <div class="capabilities-image">
          <img :src="Detail.MusicCapabilities['al']['picUrl']" alt="">
        </div>
        <div class="componentPage-flex capabilities-title">
          <span>{{Detail.MusicCapabilities.name}}</span>
          <span>{{Detail.MusicCapabilities['ar'][0].name}}</span>
        </div>
      </div>
    </div>
    <div>
      <ul class="capabilities-ul componentPage-left componentPage-pointer componentPage-flex-text componentPage-hidden ">
        <li>
          <n-icon size="20">
            <MusicalNotesSharp/>
          </n-icon>
          <p class="">{{Detail.MusicCapabilities['al'].name}}</p>
        </li>
        <li>
          <n-icon size="20px">
            <Play/>
          </n-icon>
          <p>播放</p>
        </li>
        <li>
          <n-icon size="20px">
            <Archive/>
          </n-icon>
          <p>下载</p>
        </li>
        <li>
          <n-icon size="20px">
            <LogOutSharp/>
          </n-icon>
          <p>移出</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style/Flex/FlexComponents.sass'
import useStore from "../stores/counter";
import {MusicalNotesSharp , Play , Archive , LogOutSharp} from '@vicons/ionicons5'
const {Detail } = useStore()

</script>

<style scoped lang="scss">
.capabilities {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 1px 7px 1px rgba(23,34,45,.3);
  width: 15rem;
}
.capabilities-image-title {
  .capabilities-image {
    //width: 20px;
    flex: 2;
    height: 4rem;
    padding: .4rem .5rem;
  }
  .capabilities-title {
    flex: 2;
    display: block;
    padding: .4rem .5rem;
  }
}

.capabilities-ul {
  padding: 0 .5rem;
  li {
    height: 2rem;
    padding: 0 .5rem;
    margin: .3rem 0;
    border-radius: 2px;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(23,34,45,.1);
    }
    i {
      transform: translateY(5px);
      padding-right: 1rem;
    }
    p {
      display: inline;
    }
  }
}
</style>