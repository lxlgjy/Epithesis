<template>
  <n-scrollbar trigger="none" v-if="route.meta['MVShow']">
    <div>
      <div class="Swiper RightHomeCss" v-if="Start.MusicData === false">
        <n-space vertical>
          <n-skeleton height="26px" width="100%" class="PlaylistTitle"/>
          <div class="flex-Music-flex">
            <n-skeleton height="240px" width="48%" :sharp="false" class="flex-Music-margin" v-for="item in 2"/>
          </div>
          <n-skeleton height="26px" width="100%" class="PlaylistTitleTwo"/>
          <div class="flex-Music-flex">
            <n-skeleton height="270px" width="23%" class="flex-Music-margin" v-for="item in 8"/>
          </div>
        </n-space>
      </div>
      <div class="Mv RightHomeCss" v-if="Start.MusicData">
        <div>
          <div>
            <h3>最新MV</h3>
          </div>
          <div class="NewMv-list">
            <router-link to="/MV/Film" class="MVUl">
              <li v-for="item in Mv.MvList.newMv.data" :key="item.id" @click="FilmMovie(item.id)">
                <div class="Mv-li">
                  <div class="Mv-image">
                    <div class="background"></div>
                    <img :src="item['cover']" :alt="item.name">
                  </div>
                  <div class="Mv-title">
                    <p>{{ item.name }}</p>
                    <p>{{ item['artistName'] }}</p>
                  </div>
                </div>
              </li>
            </router-link>
          </div>
        </div>
        <div>
          <div>
            <h3>网易出品</h3>
          </div>
          <div class="NewMv-list">
            <router-link to="/MV/Film" class="MVUl">
              <li v-for="item in Mv.MvList.WYMv.data" :key="item.id" style="width: 23%" @click="FilmMovie(item.id)">
                <div class="Mv-li">
                  <div class="Mv-image">
                    <img :src="item['cover']" :alt="item.name">
                  </div>
                  <div class="Mv-title">
                    <p>{{ item.name }}</p>
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

<script setup lang="ts">
import {MvAxios} from "../../uilt/Api/MvApi";
import useStore from "../../stores/counter";
import {FilmMovie} from '../../uilt/VueIncident'
import {useRoute} from "vue-router";

const {Mv  , Start} = useStore()
const route = useRoute()
</script>

<style scoped lang="scss">
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(23,34,45,.1);
  z-index: 10;
}
.NewMv-list {
  overflow: hidden;

  .MVUl {
    display: flex;
    flex-wrap: wrap;

    li {
      position: relative;
      width: 48%;
      height: 18rem;
      margin: 8px;

      .Mv-li {
        width: 100%;
        height: 100%;

        .Mv-image {
          position: relative;
          width: 100%;
          height: 15rem;
        }

        .Mv-title {
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:nth-child(1) {
            font-size: 18px;
            font-weight: 700;
          }

          p:nth-child(2) {
            font-size: 15px;
            color: rgba(23, 34, 45, .3);
          }
        }
      }
    }
  }
}
</style>