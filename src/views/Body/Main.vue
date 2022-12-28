<template>
  <div>
    <div id="MainBox">
      <main-content-components></main-content-components>
    </div>
    <div id="MainBox">
      <main-content-components-p-hang></main-content-components-p-hang>
    </div>
    <div id="MainBox">
<!--      <main-content-components-home-recommendation :MusicHRecommend="store.MusicHomeRecommendation"></main-content-components-home-recommendation>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
// import './assets/css/Home.css'
import {onMounted} from 'vue';
import {useStore} from "../../stores/counter";
import {Axios} from "../../uilt/Axios";
import MainContentComponents from "../../components/MainContent/MainContentComponents.vue";
import MainContentComponentsPHang from "../../components/MainContent/MainContentComponentsPHang.vue";
import MainContentComponentsHomeRecommendation
  from '../../components/MainContent/MainContentComponentsHomeRecommendation.vue'
//实例创建完成，挂载后执行
const store = useStore()

const http = async () => {
  const MusicHome: any = await Axios('http://127.0.0.1:3000/top/playlist?cat=%E6%B5%81%E8%A1%8C&limit=35', 'get')
  const MusicPHang: any = await Axios('http://127.0.0.1:3000/toplist', 'get')
  // const MusicHomeRecommendation: any = await Axios('http://127.0.0.1:3000/api/HomeRecommendation', 'get')

  store.getMusicDate(MusicHome.data.playlists)
  store.getMusicPHang(MusicPHang.data.list)
  // store.getMusicHomeRecommendation(MusicHomeRecommendation.data.success)
}

http()

</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>