<template>
  <div id="mainLis">
    <div class="main-title">
      <h2>精彩推荐</h2>
    </div>
    <div class="h-recommend">
      <ul class="h-recommend-ul" style="left: 0">
        <li v-for="item in item.MusicHRecommend[0].data" v-show="item[0] !== '图片地址' ">
          <img :src="item[0]" alt="">
        </li>
      </ul>
    </div>
  </div>
  <hander-left-right :Box=" '.h-recommend' " :LI=" '.h-recommend-ul li' " :UL=" '.h-recommend-ul' " :index="2"></hander-left-right>

</template>

<script lang="ts" setup>
import {defineProps, onMounted} from 'vue'
import HanderLeftRight from "../Widgets/HanderLeftRight.vue";

const item = defineProps({
  MusicHRecommend: Object
})

</script>

<style scoped>
#h-recommend ul {
  width: auto;
  height: auto;
  text-align: center;
  cursor: pointer;
}

#h-recommend {
  z-index: 150;

}

#h-recommend ul li {
  vertical-align: top;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 15px 20px 0;
  cursor: pointer;
}
</style>

