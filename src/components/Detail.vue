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
          <div class="detail">
            <BackgroundFilter></BackgroundFilter>
            <div class="detail-image">
              <img :src="route.meta['page'] === 'HomeRecommendedSongs' ? Detail.MusicSongsDetailList['fetchDetailSongs']['data']['dailySongs'][0]['al']['picUrl'] :
            (route.meta['page'] === 'HomePlaylist' ||route.meta['page'] === 'Recommend' ||route.meta['page'] === 'PlayListDetail' ? Detail.MusicSongsDetailList['fetchDetail']['playlist']['coverImgUrl'] :
            (route.meta['page'] === 'SingerDetail' ? Detail.MusicSongsDetailList['fetchDetail']['data']['artist']['cover'] :
            (route.meta['page'] === 'HomeAlbum' ? Detail.MusicSongsDetailList['fetchDetailSongs']['album']['picUrl'] :
            (Detail.MusicSongsDetailList['songs'] ?  Detail.MusicSongsDetailList['songs'][0]['al']['picUrl'] : '')
            )))"
                   alt="">
            </div>
            <div class="detail-title">
              <div class="margin-lineHeight">
                <h3>
                  {{
                    route.meta['page'] === 'HomeRecommendedSongs' ? '每日推荐列表' :
                        (route.meta['page'] === 'HomePlaylist' || route.meta['page'] === 'Recommend' || route.meta['page'] === 'PlayListDetail' ? Detail.MusicSongsDetailList['fetchDetail']['playlist']['name'] :
                            (route.meta['page'] === 'SingerDetail' ? Detail.MusicSongsDetailList['fetchDetail']['data']['artist']['name'] :
                                (route.meta['page'] === 'HomeAlbum' ? Detail.MusicSongsDetailList['fetchDetailSongs']['album']['name'] :
                                        '我喜欢的音乐'
                                )))
                  }}
                </h3>
              </div>
              <div class="detail-title-ul margin-lineHeight">
                <ul>
                  <li v-for="item in route.meta['page'] === 'HomeRecommendedSongs' ? ['每日','推荐'] :
            (route.meta['page'] === 'HomePlaylist' || route.meta['page'] === 'Recommend' || route.meta['page'] === 'PlayListDetail' ? Detail.MusicSongsDetailList['fetchDetail']['playlist']['tags'] :
            (route.meta['page'] === 'SingerDetail' ? Detail.MusicSongsDetailList['fetchDetail']['data']['artist']['identities'] :
            (route.meta['page'] === 'HomeAlbum' ? '' :
            (Detail.MusicSongsDetailList['songs'] ? Detail.MusicSongsDetailList['songs'][0]['alia'] :'')
            )))"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="margin-lineHeight">
                {{
                  route.meta['page'] === 'HomeRecommendedSongs' ? '音乐如同绿叶，为生命涂上了缤纷的色彩，愿你在今日的音乐推荐中，收获你生命中最美的时刻' :
                      (route.meta['page'] === 'HomePlaylist' || route.meta['page'] === 'Recommend' || route.meta['page'] === 'PlayListDetail' ? Detail.MusicSongsDetailList['fetchDetail']['playlist']['description'] :
                              (route.meta['page'] === 'SingerDetail' ? Detail.MusicSongsDetailList['fetchDetail']['data']['artist']['briefDesc'] :
                                      (route.meta['page'] === 'HomeAlbum' ? Detail.MusicSongsDetailList['fetchDetailSongs']['album']['description'] : '音乐，让我们看到了彼此的内心世界，让我们的生命变得更加美好。')
                              )
                      )
                }}
              </div>
              <div class="AudioDetail-play componentPage-flex componentPage-position">
                <div class="AudioDetail-list flex-Music-sizing flex-Music-pointer delect-border-list componentPage-flex-color-fff" @click="AudioListPush">
                  <n-icon size="15" class="AudioDetail-icon">
                    <Play/>
                  </n-icon>
                  <span class="componentPage-flex-color-fff">播放全部
                    {{ route.meta['page'] === 'SingerDetail' ? Detail.MusicSongsDetailList.fetchDetailSongs['hotSongs'].length :
                        (route.meta['page'] === 'HomeAlbum' || route.meta['page'] === 'HomePlaylist'  || route.meta['page'] === 'PlayListDetail' ? Detail.MusicSongsDetailList.fetchDetailSongs['songs'].length :
                            (route.meta['page'] === 'HomeRecommendedSongs' ? Detail.MusicSongsDetailList.fetchDetailSongs['data']['dailySongs'].length :
                                Detail.MusicSongsDetailList['songs'].length ))
                    }}
                  </span>
                </div>
                <div class="AudioDetail-add delect-border-add componentPage-flex-color-fff flex-Music-pointer" @click="AudioListPush('add')">
                  <n-icon size="15" class="AudioDetail-icon">
                    <AddSharp/>
                  </n-icon>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!--列表展示 -->
        <div v-if="route.meta['page'] !== 'SingerDetail'">
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
              <li  v-for="(item,index) in route.meta['page'] === 'HomeRecommendedSongs' ? Detail.MusicSongsDetailList['fetchDetailSongs']['data']['dailySongs'] :
             (route.meta['page'] === 'HomePlaylist' || route.meta['page'] === 'Recommend' || route.meta['page'] === 'PlayListDetail' || route.meta['page'] === 'HomeAlbum' ? Detail.MusicSongsDetailList['fetchDetailSongs']['songs'] :
             (route.name === 'Search' ? Detail.MusicSongsDetailList['result']['songs'] :
             Detail.MusicSongsDetailList['songs']))"
                  key="item.id" @dblclick="Player(item['id'] , item)" @contextmenu="Capabilities($event , item)"
              >
                <div class="songs flex-Music-pointer" :id="Audio.MusicSong['data'][0]['id'] === item['id'] ? 'Selected' : ''">
                  <p v-if="route.meta['page'] !== 'HomeAlbum'">
                    <img v-lazy="item['al']['picUrl'] + '?param=50y50' ">
                  </p>
                  <p v-else>{{index +1 }}</p>
                  <p>{{ item['name'] }}</p>
                  <p>{{ item['ar'][0]['name'] }}</p>
                  <p>{{ item['al']['name'] }}</p>
                  <p>{{ Time(item['dt']) }}</p>
<!--                  <p>-->
<!--                    <router-link to="/OtherFilm">-->
<!--                      <n-icon size="20" color="#000" v-if="item['mv'] !== 0" @click="FilmMovie(item['mv'],'OtherFilm')">-->
<!--                        <Film/>-->
<!--                      </n-icon>-->
<!--                    </router-link>-->
<!--                  </p>-->
<!--                  <p>-->
<!--                    <n-icon size="20">-->
<!--                      <HeartSharp v-if="Love(item.id)" @click="Like($event,item.id,'false')"/>-->
<!--                      <HeartOutline v-else @click="Like($event,item.id,'true')"/>-->
<!--                    </n-icon>-->
<!--                  </p>-->
<!--                  <p>-->
<!--                    <n-icon size="20" @click.stop="MusicDownload(item.id , item['name'],item['ar'][0]['name']);mess('success')">-->
<!--                      <CloudDownloadOutline/>-->
<!--                    </n-icon>-->
<!--                  </p>-->
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="route.meta['page'] === 'SingerDetail' ">
          <n-card title="true" style="margin-bottom: 16px">
            <n-tabs type="line" animated>
              <n-tab-pane name="oasis" tab="歌手作品">
                <ul>
                  <li v-for="(item,index) in Detail.MusicSongsDetailList['fetchDetailSongs']['hotSongs']"
                      @click="Player(item.id , item)">
                    <div class="songs">
                      <p>
                        <img v-lazy="item['al']['picUrl'] + '?param=50y50'">
                      </p>
                      <p>{{ item.name }}</p>
                      <p>{{ item.ar[0].name }}</p>
                      <p>{{ item['al']['name'] }}</p>
                      <p>{{ Time(item['dt']) }}</p>
                      <p>
                        <router-link to="/OtherFilm">
                          <n-icon size="20" color="#000" v-if="item['mv'] !== 0"
                                  @click="FilmMovie(item['mv'],'OtherFilm')">
                            <Film/>
                          </n-icon>
                        </router-link>
                      </p>
                      <p>
                        <n-icon size="20">
                          <HeartSharp v-if="Love(item.id)" @click="Like($event,item.id,'false')"/>
                          <HeartOutline v-else @click="Like($event,item.id,'true')"/>
                        </n-icon>
                      </p>
                      <p>
                        <n-icon size="20">
                          <CloudDownloadOutline/>
                        </n-icon>
                      </p>
                    </div>
                  </li>
                </ul>
              </n-tab-pane>
              <n-tab-pane :name="index + 1" :tab="item['ti']"
                          v-for="(item , index) in Detail.MusicSongsDetailList['fetchDetailAlbum']['introduction']">
                <div>{{ item['txt'] }}</div>
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </div>
      </div>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import '../style/Detail/Playlist.sass'
import BackgroundFilter from "./BackgroundFilter.vue";
import {nextTick, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "../stores/counter";
import {Time} from '../uilt/PageWidgets'
import {Player, FilmMovie, Like , AudioListPush  ,MusicDownload , Capabilities , scorll} from "../uilt/VueIncident";
import {Film, HeartSharp, HeartOutline, CloudDownloadOutline,Play,AddSharp} from '@vicons/ionicons5'
import {Love , mess} from "../uilt/VueEvent";

const route = useRoute()
const {Detail, Start , Audio} = useStore()
const router = useRouter()
const alert = ref(false)

</script>