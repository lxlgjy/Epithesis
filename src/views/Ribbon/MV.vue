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
      <div v-if="Start.MusicData" class="Mv RightHomeCss">
        <div>
          <div>
            <h3>{{ $t('msg.LatestMV') }}</h3>
          </div>
          <div class="NewMv-list">
            <router-link class="MVUl" to="/MV/Film">
              <li v-for="item in Mv.MvList.newMv.data" :key="item.id" @click="FilmMovie(item.id)">
                <div class="Mv-li">
                  <div class="Mv-image">
                    <div class="background"></div>
                    <img :alt="item.name" :src="item['cover']">
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
            <h3>{{ $t('msg.ProducedByNetEase') }}</h3>
          </div>
          <div class="NewMv-list">
            <router-link class="MVUl" to="/MV/Film">
              <li v-for="item in Mv.MvList.WYMv.data" :key="item.id" style="width: 23%" @click="FilmMovie(item.id)">
                <div class="Mv-li">
                  <div class="Mv-image">
                    <img :alt="item.name" :src="item['cover']">
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

<script lang="ts" setup>
import useStore from "../../stores/counter";
import {FilmMovie} from '../../uilt/VueIncident'
import {useRoute} from "vue-router";

const {Mv, Start} = useStore()
const route = useRoute()
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(23, 34, 45, .1);
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