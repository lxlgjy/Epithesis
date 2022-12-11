<template>
  <div>
    <div id="MainBox">
      <main-content-components :MusicData="store.MusicDate"></main-content-components>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/assets/css/Home.css'
import { onMounted, ref} from 'vue';
import {useStore} from "../../stores/counter";
import {Axios} from "../../uilt/Axios";
import MainContentComponents from "../../components/MainContentComponents.vue";
//实例创建完成，挂载后执行
const store = useStore()

onMounted(async () => {
  const MusicHome: any = await Axios('http://127.0.0.1:3000/api/home', 'get', 'MusicHome')
  store.getMusicDate(MusicHome.data.success)
})

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