<template>
  <n-scrollbar trigger="none" v-if="route.meta['HomeShow']">
    <div>
      <div class="Swiper RightHomeCss" v-if="Start.MusicData === false">
        <n-space vertical>
          <n-skeleton height="240px" width="100%" class="flex-Music-margin"/>
          <n-skeleton height="26px" width="100%" class="flex-Music-margin"/>
          <div class="flex-Music-flex">
            <n-skeleton height="170px" width="48%" :sharp="false" class="flex-Music-margin" v-for="item in 2"/>
          </div>
          <n-skeleton height="26px" width="100%" class="flex-Music-margin"/>
          <div class="flex-Music-flex flex-Music-padding-title-HomeRecommendation">
            <n-skeleton height="194px" width="177px" :sharp="false" class="flex-Music-margin" v-for="item in 7"/>
          </div>
          <n-skeleton height="26px" width="100%" class="flex-Music-margin"/>
          <div class="flex-Music-flex flex-Music-padding-title-List">
            <n-skeleton height="170px" width="170px" class="flex-Music-margin" v-for="item in 7"/>
          </div>
        </n-space>
      </div>
      <div class="RightHomeCss" v-if="Start.MusicData">
        <div id="main-box">
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
              <n-carousel-item v-for="item in Home.MusicSwiperData['result']" key="item.id" :style="{ width: '60%' }">
                <img
                    :src="item['picUrl']"
                    alt="item.copywriter"
                    class="carousel-img">
              </n-carousel-item>
            </n-carousel>
          </div>
          <div class="New-song-debut">
            <div>
              <h3>每日推荐</h3>
            </div>
            <ul class="MusicUl-20">
              <router-link @click="MusicHomeDetail('11071110','HomeRecommendedSongs')" to="/Home/HomeRecommendedSongs"
                           class="MusicLi-48 MusicBackground tuiJan" style="border-radius: 5px;height: 10rem;"
                           v-if="Login.MusicUname">
                <span
                    style="font-size: 30px; font-weight: 700; transform: translateX(20px) translateY(10px)">每日推荐歌曲</span>
              </router-link>
              <li v-else class="MusicLi-48 MusicBackground tuiJan" style="border-radius: 5px;height: 10rem;">
                <span
                    style="font-size: 30px; font-weight: 700; transform: translateX(20px) translateY(10px)">每日推荐歌曲</span>
              </li>
              <li style="border-radius: 5px;height: 10rem;" class="MusicLi-48 MusicBackground FM">
                <span
                    style="font-size: 30px; font-weight: 700; transform: translateX(20px) translateY(10px)">私人FM</span>
              </li>
            </ul>
          </div>
          <div class="HomeRecommendation">
            <div class="title">
              <div class="del">
                <h3>歌单</h3>
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
            <router-link to="/Home/HomePlaylist" class="main-ul" style="left: 0">
              <li v-for="items in Home.MusicRecommendData['playlists']" key="items.id" class="main-lis"
                  @click="MusicHomeDetail(items.id , 'HomePlaylist')">
                <div class="main-lis-allBox">
                  <div class="main-lis-kiss">
                    <img :src="items['coverImgUrl']" alt="">
                  </div>
                  <h4 class="main-lis-txt">
                <span>
                    {{ items.name }}
                </span>
                  </h4>
                </div>
              </li>
            </router-link>
          </div>
          <div class="List">
            <div>
              <h3>排行榜</h3>
            </div>
            <router-link to="/Home/HomeRankings" class="list-ul">
              <li v-for="item in Home.MusicRankingData['list'].slice(0,14)" :key="item.id" class="list-lis"
                  @click="MusicHomeDetail(item['id'],'HomeRankings')">
                <div>
                  <img :src="item['coverImgUrl']" :alt="item.name">
                </div>
              </li>
            </router-link>
          </div>
          <div class="Latest-album">
            <div>
              <h3>最新专辑</h3>
            </div>
            <router-link to="/Home/HomeAlbum" class="MusicUl-warp">
              <li v-for="item in Home.MusicLatestAlbum['albums'].slice(0,4)" :key="item.id" class="MusicLi-48"
                  @click="MusicHomeDetail(item['id'],'HomeAlbum')">
                <div class="Music-img-15">
                  <img :src="item['picUrl']" :alt="item.name">
                </div>
                <div>
                  <span style="font-size: 18px;font-weight: 700">{{ item.name }}</span>
                  <span style="font-size: 15px;color: var(--span-color)">{{ item['company'] }}</span>
                </div>
              </li>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </n-scrollbar>

  <router-view>

  </router-view>
</template>

<script lang="ts" setup>
import '@/style/Home.sass'
import '@/style/Skeleton/Home.sass'
import '../../style/content.sass'
import useStore from "../../stores/counter";
import {left, right, MusicHomeDetail} from '../../uilt/VueIncident'
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import {HomeLatestAlbum, HomeRankingAxios, HomeRecommendAxios, HomeSwiperAxios} from "../../uilt/Api/HomeApi";

const {Home, Start, Login} = useStore()
const route = useRoute()



</script>

<style scoped lang="sass">
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