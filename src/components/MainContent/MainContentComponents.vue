<template>
  <div style="position: relative">
    <div id="mainLis">
      <div class="main-title">
        <h2>歌单推荐</h2>
      </div>
      <div>
        <ul class="main-title-level">
          <li v-for="(items,index) in List" @click="MuiscHander(items,index)">{{items}}</li>
        </ul>
      </div>
      <div class="main-box-first">
        <ul class="main-ul" style="left: 0">
          <li v-for="items in store.MusicDate"  key="items.id"
              class="main-lis" @click="detali(items['id'])">
            <div class="main-lis-allBox">
              <div class="main-lis-kiss">
                <a href="javascript:">
                  <img :src="items['coverImgUrl']" alt="">
                  <i class="main-masking"></i>
                  <i class="main-cover"></i>
                </a>
              </div>
              <h4 class="main-lis-txt">
                     <span>
                      <a href="javascript:">
                          {{ items.name}}
                       </a>
                      </span>
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
      <hander-left-right :Box=" '.main-box-first' " :LI=" '.main-ul li' " :UL=" '.main-ul' " :index="5"></hander-left-right>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref} from 'vue'
import HanderLeftRight from "../Widgets/HanderLeftRight.vue";
import router from "../../router";
import {useStore} from "../../stores/counter";
import {Axios} from "../../uilt/Axios";

const store = useStore()

const List = ['流行','轻音乐','影视原声','电子','华语','民谣']

const detali = (id:string) => {
  router.push({
    name:'Detail',
    params:{
      id:id,
    }
  })
}

let index = ref(0)

const MuiscHander = async(title: string,index:number) => {
  const lis = document.querySelectorAll('.main-title-level li') as NodeListOf<HTMLLIElement>

  for(let i = 0; i <lis.length; i++) {
    lis[i].style.color = '#000'
  }

  for(let i = 0; i <lis.length; i++) {
    lis[index].style.color = '#39a9ed'
  }
  const newData:any =await Axios(`http://127.0.0.1:3000/top/playlist?cat=${title}&limit=35`,'get')

  store.getMusicDate(newData.data.playlists)

}

</script>
<style scoped>
#mainOrigin ul {
  width: auto;
  height: auto;
  text-align: center;
  cursor: pointer;
}

#mainOrigin {
  z-index: 150;

}

#mainOrigin ul li {
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