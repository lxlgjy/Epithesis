<template>
  <div>
    <scroll v-show="$route.meta.MVShow">
      <div>
        <div class="MV RightHomeCss">
          <div class="LatestMV">
            <div>
              <h3>{{ $t('msg.LatestMV') }}</h3>
            </div>
            <div class="Music-hidden">
              <router-link class="MVUl Music-grid" to="/MV/Film">
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
              <router-link class="MVUl Music-grid" to="/MV/Film">
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
    </scroll>
    <secondary-routing-page/>
  </div>
</template>

<script lang="ts" setup>
import '@/style/MV.scss'
import useStore from "../../stores/counter";
import {FilmMovie} from '../../uilt/VueIncident'
import {useRoute} from "vue-router";
import Scroll from '../../components/MusicScroll.vue'
import SecondaryRoutingPage from "../../components/SecondaryRoutingPage.vue";

const {Mv, Start} = useStore()
const route = useRoute()
</script>