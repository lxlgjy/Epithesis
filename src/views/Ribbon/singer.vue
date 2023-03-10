<template>
  <n-scrollbar v-if="route.meta['SingerShow']" trigger="none">
    <div>

      <div v-if="Start.MusicData" class="RightHomeCss">
        <div class="singer-address">
          <div>
            <h3>歌手地区</h3>
          </div>
          <div class="singer-address-list componentPage-sizing">
            <div v-for="item in address">{{ item }}</div>
          </div>
        </div>
        <div class="singer-hot">
          <div>
            <h3>热门歌手</h3>
          </div>
          <div class="singer-hot-list">
            <router-link class="SingerUl" to="/singer/SingerDetail">
              <li v-for="item in Singer.MusicSingerArtists['list']['artists'].slice(0,12)" key="item"
                  @click="MusicSinger(item['id'])">
                <div>
                  <img v-lazy="item['img1v1Url'] + '?param=150y150'">
                </div>
                <div class="title">
                  <p>{{ item['name'] }}</p>
                </div>
              </li>
            </router-link>
          </div>
        </div>
        <div class="singer-hot">
          <div>
            <h3>歌手</h3>
          </div>
          <div class="singer-hot-list">
            <router-link class="SingerUl" to="/singer/SingerDetail">
              <li v-for="(item , index) in Singer.MusicSingerArtists['list']['artists']" v-show="index > 12"
                  key="item.id"
                  @click="MusicSinger(item.id)">
                <div class="title">
                  <p>{{ item.name }}</p>
                </div>
              </li>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </n-scrollbar>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import '@/style/Singer.sass'
import '../../style/Skeleton/Home.sass'
import useStore from "../../stores/counter";
import {useRoute} from "vue-router";
import {MusicSinger} from '../../uilt/VueIncident'

const {Singer, Start} = useStore()
const route = useRoute()
const address = ['华语', '欧美', '韩国', '日本']


</script>
