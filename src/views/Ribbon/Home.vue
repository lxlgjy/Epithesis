<template>
  <div>
    <scroll v-show="$route.meta.HomeShow">
      <div class="RightHomeCss">
        <div id="main-box" class="Music-relative Music-sizing">
          <!-- 首页轮播展示 -->
          <div class="swiper">
            <n-carousel
                :show-arrow="true"
                :show-dots="true"
                effect="card"
                next-slide-style="transform: translateX(50%) translateZ(-800px);"
                prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                style="height: 240px"
            >
              <n-carousel-item v-for="item in Home.MusicSwiperData['result']" key="item.id" :style="{ width: '60%' }"
                               @click="SwiperData();mess('error')">
                <img
                    :alt="item.copywriter"
                    :src="item.picUrl"
                    class="carousel-img">
              </n-carousel-item>
            </n-carousel>
          </div>
          <div class="New-song-debut">
            <div>
              <h3>{{ $t("msg.HomeRecommend") }}</h3>
            </div>
            <ul class="MusicUl-20">
              <router-link v-if="!Start.LoginShow" class="MusicLi-48 MusicBackground tuiJan"
                           style="border-radius: 5px;height: 10rem;" to="/Home/HomeRecommendedSongs"
                           @click="MusicHomeDetail('11071110','HomeRecommendedSongs')">
                <span
                    style="font-size: 30px; font-weight: 700; transform: translateX(20px) translateY(10px)">每日推荐歌曲</span>
              </router-link>
              <li v-else class="MusicLi-48 MusicBackground tuiJan" style="border-radius: 5px;height: 10rem;">
                <span
                    style="font-size: 30px; font-weight: 700; transform: translateX(20px) translateY(10px)">每日推荐歌曲</span>
              </li>
              <li class="MusicLi-48 MusicBackground FM" style="border-radius: 5px;height: 10rem;">
                <span
                    style="font-size: 30px; font-weight: 700; transform: translateX(20px) translateY(10px)">私人FM</span>
              </li>
            </ul>
          </div>
          <div class="HomeRecommendation Music-relative Music-hidden">
            <div class="title">
              <div class="del">
                <h3>{{ $t('msg.HomePLayList') }}</h3>
              </div>
              <div class="icon">
                <n-icon color="#616060" size="19" @click="left">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"></path>
                  </svg>
                </n-icon>
                <n-icon color="#616060" size="19" @click="right">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M9 6l6 6l-6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"></path>
                  </svg>
                </n-icon>
              </div>
            </div>
            <router-link class="main-ul Music-relative Music-flex" style="left: 0" to="/Home/HomePlaylist">
              <li v-for="items in Home.MusicRecommendData['playlists']" key="items.id"
                  class="main-lis Music-flex"
                  @click="MusicHomeDetail(items.id , 'HomePlaylist')">
                <div class="main-lis-kiss Music-hidden">
                  <img v-lazy="items.coverImgUrl + '?param=300y300'">
                </div>
                <h4 class="Music-font-MultiLine-hidden">
                <span>
                    {{ items.name }}
                </span>
                </h4>
              </li>
            </router-link>
          </div>
          <div class="HomeHotSinger">
            <div>
              <h3>{{ $t('msg.HomeHotSinger') }}</h3>
            </div>
            <router-link class="HomeListUl Music-grid " to="/Home/HomeHotSinger">
              <li v-for="item in Home.MusicHotSinger" :key="item.id" class="HomeListLi "
                  @click="MusicHomeDetail(item.id ,'HomeHotSinger' )">
                <div class="Music-radius-50">
                  <img v-lazy="item.img1v1Url + '?param=300y300'" class="Music-radius-50">
                </div>
              </li>
            </router-link>
          </div>
          <div class="HomeList">
            <div>
              <h3>{{ $t('msg.HomeList') }}</h3>
            </div>
            <router-link class="HomeListUl Music-grid" to="/Home/HomeRankings">
              <li v-for="item in Home.MusicRankingData['list'].slice(0,16)" :key="item.id" class="HomeListLi"
                  @click="MusicHomeDetail(item.id,'HomeRankings')">
                <div>
                  <img v-lazy="item.coverImgUrl + '?param=300y300'">
                </div>
              </li>
            </router-link>
          </div>
          <div class="HomeAlbum">
            <div>
              <h3>{{ $t('msg.HomeAlbum') }}</h3>
            </div>
            <router-link class="HomeAlbumUl Music-grid" to="/Home/HomeAlbum">
              <li v-for="item in Home.MusicLatestAlbum['albums'].slice(0,8)" :key="item.id" class="HomeListLi"
                  @click="MusicHomeDetail(item.id,'HomeAlbum')">
                <div class="Music-img-15">
                  <img v-lazy="item.picUrl + '?param=400y400'">
                </div>
                <div>
                  <span style="font-size: 18px;font-weight: 700">{{ item.name }}</span>
                  <span style="font-size: 15px;color: rgba(23, 34, 45, .3)">{{ item.company }}</span>
                </div>
              </li>
            </router-link>
          </div>
        </div>
      </div>
    </scroll>
    <secondary-routing-page/>
  </div>
</template>

<script lang="ts" setup>
import '@/style/Home.scss'
import '@/style/Skeleton/Home.sass'
import '../../style/content.sass'
import useStore from "../../stores/counter";
import {left, MusicHomeDetail, right, SwiperData} from '../../uilt/VueIncident'
import {mess} from "../../uilt/VueEvent";
import Scroll from '../../components/MusicScroll.vue'
import {useRouter} from "vue-router";
import SecondaryRoutingPage from "../../components/SecondaryRoutingPage.vue";

const {Home, Start, Login} = useStore()
const router = useRouter()
// https://img.paulzzh.tech/touhou/random
// two
let toDepth = 0
let fromDepth = 0

router.afterEach((to, from) => {
  toDepth = to.path.split('/').length
  fromDepth = from.path.split('/').length
})
</script>

<style lang="sass" scoped>
.carousel-img
  margin: 0 auto
  width: 100%
  height: 100%
  object-fit: cover

.title
  position: relative
  height: 60px

  .del
    position: absolute
    top: 0
    left: 0

  .icon
    position: absolute
    top: 0
    right: 16px

    .n-icon:nth-child(1)
      padding-right: 20px
      padding-top: 20px

    .n-icon:hover
      cursor: pointer
</style>