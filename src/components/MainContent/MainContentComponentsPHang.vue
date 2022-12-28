<template>
  <div style="position: relative">
    <div id="mainLis" class="main-p-hang">
      <div class="main-title">
        <h2>排行榜</h2>
      </div>
      <div id="p-hang-box">
        <ul id="p-hang-ul-box">
          <li v-for="items in 8" key="items">
            <div>
              <div class="p-hang-images" @click="list(store.MusicPHang[items]['id'])">
                <img :src="store.MusicPHang[items]['coverImgUrl']" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, onMounted} from 'vue'
import {Aired} from '../../uilt/MainContent'
import {useStore} from "../../stores/counter";
import router from "../../router";

const store = useStore()

//渲染完成后触发函数
onMounted(() => {
  Aired()
})

const list = (id:string) => {
  router.push({
    name:'List',
    params:{
      id
    }
  })
}
//数据展示页面
// console.log(item.MusicPHang)
</script>