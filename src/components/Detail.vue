<template>
  <n-scrollbar trigger="none" :on-scroll="scorll">
    <div>
      <div class="Swiper RightHomeCss" v-if="Start.MusicData === false">
        <n-space vertical>
          <n-skeleton height="240px" width="100%" class="PlaylistTitle"/>
          <n-skeleton height="40px" width="100%" class="flex-Music-flex"/>
          <div class="flex-Music-flex">
            <n-skeleton height="50px" width="100%" class="flex-Music-flex flex-Music-margin-top" v-for="item in 8"/>
          </div>
        </n-space>
      </div>
      <div class="RightHomeCss" v-if="Start.MusicData">
        <!--列表头部信息展示-->
        <div>
          <div class="detail" v-show="route.name !== 'Search' ">
            <BackgroundFilter></BackgroundFilter>
            <div class="detail-image">
              <img :src="Detail.MusicSongsDetailList.DetailTitle.img" alt="">
            </div>
            <div class="detail-title">
              <div class="margin-lineHeight">
                <h3>
                  {{ Detail.MusicSongsDetailList.DetailTitle.title }}
                </h3>
              </div>
              <div class="detail-title-ul margin-lineHeight">
                <ul>
                  <li v-for="item in Detail.MusicSongsDetailList.DetailTitle.Label">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="margin-lineHeight">
                {{ Detail.MusicSongsDetailList.DetailTitle.BriefIntroduction }}
              </div>
              <div class="AudioDetail-play componentPage-flex componentPage-position">
                <div
                    class="AudioDetail-list flex-Music-sizing flex-Music-pointer delect-border-list componentPage-flex-color-fff"
                    @click="AudioListPush">
                  <n-icon size="15" class="AudioDetail-icon">
                    <Play/>
                  </n-icon>
                  <span
                      class="componentPage-flex-color-fff">{{ Detail.MusicSongsDetailList.DetailTitle.MusicLength }}</span>
                </div>
                <div class="AudioDetail-add delect-border-add componentPage-flex-color-fff flex-Music-pointer"
                     @click="AudioListPush('add')">
                  <n-icon size="15" class="AudioDetail-icon">
                    <AddSharp/>
                  </n-icon>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!--列表展示 -->
        <div>
          <div class="song-list">
            <ul>
              <li></li>
              <li>歌曲标题</li>
              <li>歌手</li>
              <li>专辑</li>
              <li>时长</li>
            </ul>
          </div>
          <div style="margin-bottom: 100px" class="PageDetail">
            <ul>
              <li v-for="(item,index) in Detail.MusicSongsDetailList.DetailSong" key="item.id"
                  @dblclick="Player(item['id'] , item)" @contextmenu="Capabilities($event , item)">
                <!-- :id="Audio.MusicSong['data'][0]['id'] === item['id'] ? 'Selected' : ''"-->
                <div class="songs flex-Music-pointer">
                  <p v-if="route.meta['page'] !== 'HomeAlbum'">
                    <img v-lazy="item.al.picUrl + '?param=50y50' ">
                  </p>
                  <p v-else>{{ index + 1 }}</p>
                  <p>{{ item['name'] }}</p>
                  <p>{{ item['ar'][0]['name'] }}</p>
                  <p>{{ item['al']['name'] }}</p>
                  <p>{{ Time(item['dt']) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import '../style/Detail/Playlist.sass'
import BackgroundFilter from "./BackgroundFilter.vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "../stores/counter";
import {Time} from '../uilt/PageWidgets'
import {Player, FilmMovie, Like, AudioListPush, MusicDownload, Capabilities, scorll} from "../uilt/VueIncident";
import {Film, HeartSharp, HeartOutline, CloudDownloadOutline, Play, AddSharp} from '@vicons/ionicons5'
import {Love, mess} from "../uilt/VueEvent";

const route = useRoute()
const {Detail, Start, Audio} = useStore()
const router = useRouter()


</script>