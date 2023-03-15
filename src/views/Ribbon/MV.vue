<template>
  <n-scrollbar v-if="route.meta['MVShow']" trigger="none">
    <div>
      <div v-if="Start.MusicData === false" class="Swiper RightHomeCss">
        <n-space vertical>
          <n-skeleton class="PlaylistTitle" height="26px" width="100%"/>
          <div class="flex-Music-flex">
            <n-skeleton v-for="item in 2" :sharp="false" class="flex-Music-margin" height="240px" width="48%"/>
          </div>
          <n-skeleton class="PlaylistTitleTwo" height="26px" width="100%"/>
          <div class="flex-Music-flex">
            <n-skeleton v-for="item in 8" class="flex-Music-margin" height="270px" width="23%"/>
          </div>
        </n-space>
      </div>
      <div v-if="Start.MusicData" class="MV RightHomeCss">
        <div class="LatestMV">
          <div>
            <h3>{{ $t('msg.LatestMV') }}</h3>
          </div>
          <div class="Music-hidden">
            <router-link class="MVUl Music-flex" to="/MV/Film">
              <li v-for="item in Mv.MvList.newMv.data" :key="item.id" class="MVLi Music-relative"
                  @click="FilmMovie(item.id)">
                <div class="MV-img">
                  <div class="background"></div>
                  <img :alt="item.name" :src="item['cover']">
                </div>
                <div class="MV-title">
                  <p class="Music-font-hidden">{{ item.name }}</p>
                  <p class="Music-font-hidden">{{ item['artistName'] }}</p>
                </div>
              </li>
            </router-link>
          </div>
        </div>
        <div class="NetEasePick">
          <div>
            <h3>{{ $t('msg.ProducedByNetEase') }}</h3>
          </div>
          <div>
            <router-link class="MVUl Music-flex-wrap" to="/MV/Film">
              <li v-for="item in Mv.MvList.WYMv.data" :key="item.id" class="MVLi" @click="FilmMovie(item.id)">
                <div class="Mv-li">
                  <div class="Mv-image">
                    <img :alt="item.name" :src="item['cover']">
                  </div>
                  <div class="Mv-title">
                    <p class="Music-font-MultiLine-hidden">{{ item.name }}</p>
                    <p>{{ item['artistName'] }}</p>
                  </div>
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
import '@/style/MV.scss'
import useStore from "../../stores/counter";
import {FilmMovie} from '../../uilt/VueIncident'
import {useRoute} from "vue-router";

const {Mv, Start} = useStore()
const route = useRoute()
</script>