<template>
  <div style="position: relative">
    <div id="mainLis">
      <div class="main-title">
        <h2>歌单推荐</h2>
      </div>
      <div>
        <ul class="main-title-level">
          <li v-for="items in item.MusicData" @click="MuiscHander(items.name)">{{ items.name }}</li>
        </ul>
      </div>
      <div class="main-box-first">
        <ul class="main-ul" style="left: 0">
          <li v-for="items in item.MusicData[index].data" key="items.id" class="main-lis" v-show="items[1] !== '图片链接'">
            <div class="main-lis-allBox">
              <div class="main-lis-kiss">
                <a href="javascript:">
                  <img :src="items[1] === '图片链接' ? undefined : items[1] " alt="">
                  <i class="main-masking"></i>
                  <i class="main-cover"></i>
                </a>
              </div>
              <h4 class="main-lis-txt">
               <span>
                <a href="javascript:">
                    {{ items[0] }}
                 </a>
                </span>
              </h4>
            </div>
          </li>
        </ul>
      </div>
            <Origin :OriginData="item.MusicData"></Origin>
    </div>
        <hander-left-right></hander-left-right>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps, ref} from 'vue'
import {MuiscSwitch} from "../uilt/MusicHander";
import HanderLeftRight from "./HanderLeftRight.vue";
import Origin from "./Origin.vue";

const item = defineProps({
  MusicData: Object
})



let index = ref(0)

const MuiscHander = (title: string) => {
  MuiscSwitch(title, index)
}

</script>