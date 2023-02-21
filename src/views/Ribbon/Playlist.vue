<template>
  <n-scrollbar trigger="none" v-if="route.meta['PlayList']">
    <div>
      <div class="PlayList RightHomeCss" v-if="Start.MusicData">
        <n-card title="歌单" style="margin-bottom: 16px;--n-border-color:none;">
          <n-tabs type="line" animated
                  style="--n-bar-color: #165dff;--n-tab-text-color-hover:#165dff;--n-tab-text-color-active:#165dff;"
                  @click="Playlist_Cat($event , page )">
            <n-tab-pane :name="index" :tab="item.name" v-for="(item,index) in Playlist.MusicPlayListTitle['tags']" key="item.id">
              <div class="PlayListTest">
                  <router-link to="/Playlist/PlayListDetail" class="playlist-ul">
                    <li v-for="item in Playlist.MusicPlayList['playlists']" key="item.id" @click="MusicPlayListDetail(item.id)">
                      <div class="PlayList-image">
                        <img v-lazy="item['coverImgUrl'] + '?param=150y150'">
                      </div>
                      <div class="PlayList-text">
                        <p>{{ item.name }}</p>
                      </div>
                    </li>
                  </router-link>
              </div>
              <div class="PlayList-page">
                <n-pagination v-model:page="Start.PlayList" :page-count="50" @click.stop="PlayListToggle(item.name)"/>
              </div>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </div>
  </n-scrollbar>
  <router-view></router-view>

</template>

<script lang="ts" setup>
import '@/style/Playlist.sass'
import {useRoute} from "vue-router";
import useStore from "../../stores/counter";
import {Playlist_Cat , MusicPlayListDetail , PlayListToggle} from '../../uilt/VueIncident'

const {Playlist, Start} = useStore()
const route = useRoute()

</script>

