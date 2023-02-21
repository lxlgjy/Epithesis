<template>
  <n-scrollbar trigger="none" v-if="route.meta['SingerShow']">
    <div>
      <div class="Swiper RightHomeCss" v-if="Start.MusicData === false">
        <n-space vertical>
          <n-skeleton class="SingerCenter" height="26px"/>
          <div class="flex-Music-flex">
            <n-skeleton height="221px" width="192px" :sharp="false" :circle="true" class="flex-Music-margin" v-for="item in 12"/>
          </div>
          <n-skeleton height="26px" width="100%" class="SingerTitleTwo"/>
          <div class="flex-Music-flex flex-Music-padding-title-List">
            <n-skeleton height="22px" width="192px" class="flex-Music-margin" v-for="item in 36"/>
          </div>
        </n-space>
      </div>
      <div class="RightHomeCss" v-if="Start.MusicData">
        <div class="singer-hot">
          <div>
            <h3>热门歌手</h3>
          </div>
          <div class="singer-hot-list">
              <router-link to="/singer/SingerDetail" class="SingerUl">
                <li v-for="item in Singer.MusicSingerArtists['list']['artists'].slice(0,12)" key="item"
                    @click="MusicSinger(item['id'])">
                  <div>
                    <img  v-lazy="item['img1v1Url'] + '?param=150y150'">
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
            <router-link to="/singer/SingerDetail" class="SingerUl">
              <li v-for="(item , index) in Singer.MusicSingerArtists['list']['artists']" key="item.id"
                  v-show="index > 12"
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

<script setup lang="ts">
import '@/style/Singer.sass'
import '../../style/Skeleton/Home.sass'
import useStore from "../../stores/counter";
import {useRoute} from "vue-router";
import {SingerAxios} from '../../uilt/Api/SingerApi'
import {MusicSinger} from '../../uilt/VueIncident'

const {Singer, Start} = useStore()
const route = useRoute()


</script>
