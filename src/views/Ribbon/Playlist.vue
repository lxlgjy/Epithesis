<template>
  <n-scrollbar v-if="route.meta['PlayList']" trigger="none">
    <div>
      <div v-if="Start.MusicData" class="PlayList RightHomeCss">
        <n-card :style="PlayerThemesStyle" :title="$t('msg.PlayList')"
                style="margin-bottom: 16px;--n-border-color:none;">
          <n-tabs animated
                  style="--n-bar-color: #165dff;--n-tab-text-color-hover:#165dff;--n-tab-text-color-active:#165dff;"
                  type="line"
                  @click.stop="Playlist_Cat($event)">
            <n-tab-pane v-for="(item,index) in Playlist.MusicPlayListTitle" key="item.id" :name="index"
                        :tab="item.name">
              <div class="PlayListTest">
                <router-link class="playlist-ul" to="/Playlist/PlayListDetail">
                  <li v-for="item in Playlist.MusicPlayList" key="item.id" @click.stop="MusicPlayListDetail(item.id)">
                    <div class="PlayList-image">
                      <img v-lazy="item['coverImgUrl'] + '?param=150y150'">
                    </div>
                    <div class="PlayList-text">
                      <p>{{ item.name }}</p>
                    </div>
                  </li>
                </router-link>
              </div>
              <div v-show="!Start.PlayListLoading" class="PlayList-page" @click.stop="PlayListToggle(item.name)">
                <div class="pagination componentPage-radius-8 componentPage-pointer">
                  <span>{{ $t('msg.PlayListMore') }}</span>
                </div>
              </div>
              <div v-show="Start.PlayListLoading" class="PlayList-page">
                <n-space class="pagination" style="background: transparent;display:block;">
                  <n-spin :show="true" size="small" stroke="#6270e7"/>
                </n-space>
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
import {MusicPlayListDetail, Playlist_Cat, PlayListToggle} from '../../uilt/VueIncident'
import {usePlayerComponent} from '../../uilt/vueComputed'

const {Playlist, Start} = useStore()
const {PlayerThemesStyle} = usePlayerComponent()
const route = useRoute()

</script>

