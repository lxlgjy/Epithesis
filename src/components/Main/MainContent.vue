<template>
  <div>
    <div v-for="item in store.MusicDate" id="MainBox" key="item.id">
      <div id="mainLis">
        <div class="main-title">
          <h2>{{ item.Home.names }}</h2>
        </div>
        <div>
          <ul class="main-title-level">
            <li v-for="items in item.Home['introduce']['PageNames']" @click="MuiscHander(items)">{{ items }}</li>
          </ul>
        </div>
        <div class="main-box-first">
          <ul class="main-ul" style="left: 0">
            <li v-for="items in item.Home['introduce']['HomeMandarin'][index]['list']" key="items.id" class="main-lis">
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
        <div id="mainOrigin">
          <ul>
            <li v-for="item in Origin(item)" @click="OriginHander(index)"></li>
          </ul>
        </div>
      </div>
      <div id="mainSlide">
        <div class="main-slide-left">
          <a href="javascript:" @click="HanderLeft">
            <i class="main-left"></i>
          </a>
        </div>
        <div class="main-slide-right">
          <a href="javascript:" @click="HanderRight">
            <i class="main-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/assets/css/Home.css'
import { onMounted, ref} from 'vue';
import {useStore} from "../../stores/counter";
import { HanderLeft , HanderRight , OriginHander} from '../../uilt/MainContent'
import {Axios} from "../../uilt/Axios";
import {MuiscSwitch} from "../../uilt/MusicHander";
//实例创建完成，挂载后执行
const store = useStore()

let index = ref(0)

const MuiscHander = (title:string) => {
  MuiscSwitch(title,index)
}

onMounted(async () => {
  const MusicHome: any = await Axios('http://127.0.0.1:3000/api/home', 'get', 'MusicHome')
  store.getMusicDate(MusicHome.data.success.MusicTop)
})

const Origin = (item:any) => {
  const totle:number = Math.ceil(item.Home.introduce.totle / 5)
  return totle
}




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