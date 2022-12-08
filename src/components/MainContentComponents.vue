<template>
  <div>
    <div id="mainLis">
      <div class="main-title">
        <h2>{{ item.MusicData.names }}</h2>
      </div>
      <div>
        <ul class="main-title-level">
          <li v-for="items in item.MusicData['introduce']['PageNames']" @click="MuiscHander(items)">{{ items }}</li>
        </ul>
      </div>
      <div class="main-box-first">
        <ul class="main-ul" style="left: 0">
          <li v-for="items in item.MusicData['introduce']['HomeMandarin'][index]['list']" key="items.id" class="main-lis">
            <div class="main-lis-allBox">
              <div class="main-lis-kiss">
                <a href="javascript:">
                  <img :src="items.img" alt="">
                  <i class="main-masking"></i>
                  <i class="main-cover"></i>
                </a>
              </div>
              <h4 class="main-lis-txt">
               <span>
                <a href="javascript:">
                    {{ items.title }}
                 </a>
                </span>
              </h4>
            </div>
          </li>
        </ul>
      </div>
<!--      <Origin :OriginData="item"></Origin>-->
    </div>
    <hander-left-right></hander-left-right>
  </div>
</template>

<script setup lang="ts">
import HanderLeftRight from '../components/HanderLeftRight.vue';
import Origin from "../components/Origin.vue";
import {defineProps, ref} from 'vue'
import {MuiscSwitch} from "../uilt/MusicHander";

const item = defineProps({
  MusicData:Object
})

let index = ref(0)

const MuiscHander = (title:string) => {
  MuiscSwitch(title,index)
}

</script>