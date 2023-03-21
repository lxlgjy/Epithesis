<template>
  <div>
    <scroll v-show="$route.meta.SingerShow">
      <div>
        <div class="RightHomeCss">
          <div class="singer-address">
            <div>
              <h3>{{ $t('msg.SingerRegion') }}</h3>
            </div>
            <div class="singer-address-list componentPage-sizing componentPage-flex">
              <div v-for="item in address" class="SingerRegion">{{ item }}</div>
            </div>
          </div>
          <div class="singer-hot">
            <div>
              <h3>{{ $t('msg.HotSinger') }}</h3>
            </div>
            <div class="singer-hot-list">
              <router-link class="SingerUl Music-grid" to="/singer/SingerDetail">
                <li v-for="item in Singer.MusicSingerArtists['list']['artists'].slice(0,12)" key="item"
                    class="SingerLi " @click="MusicSinger(item['id'])">
                  <div class="Music-radius-50">
                    <img v-lazy="item['img1v1Url'] + '?param=300y300'" class="Music-radius-50">
                  </div>
                  <div class="Music-center">
                    <p>{{ item['name'] }}</p>
                  </div>
                </li>
              </router-link>
            </div>
          </div>
          <div class="singer-hot">
            <div>
              <h3>{{ $t('msg.Singer') }}</h3>
            </div>
            <div class="singer-hot-list">
              <router-link class="SingerTextUl Music-grid" to="/singer/SingerDetail">
                <li v-for="(item , index) in Singer.MusicSingerArtists['list']['artists']" v-show="index > 12"
                    key="item.id"
                    class="SingerTextLi" @click="MusicSinger(item.id)">
                  <div class="title Music-center">
                    <p>{{ item.name }}</p>
                  </div>
                </li>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <secondary-routing-page/>
  </div>

</template>

<script lang="ts" setup>
import '@/style/Singer.scss'
import '../../style/Skeleton/Home.sass'
import useStore from "../../stores/counter";
import {useRoute} from "vue-router";
import {MusicSinger} from '../../uilt/VueIncident'
import Scroll from '../../components/MusicScroll.vue'
import SecondaryRoutingPage from "../../components/SecondaryRoutingPage.vue";


const {Singer, Start} = useStore()
const route = useRoute()
const address = ['华语', '欧美', '韩国', '日本']


</script>
