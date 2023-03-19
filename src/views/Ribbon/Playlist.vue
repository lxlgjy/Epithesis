<template>
  <div>
    <scroll>
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
                  <router-link class="Music-grid" to="/Playlist/PlayListDetail">
                    <li v-for="item in Playlist.MusicPlayList" key="item.id"
                        class="PlayListLI Music-hidden Music-radius-3" @click.stop="MusicPlayListDetail(item.id)">
                      <div>
                        <img v-lazy="item['coverImgUrl'] + '?param=400y400'">
                      </div>
                      <div>
                        <p class="Music-font-MultiLine-hidden">{{ item.name }}</p>
                      </div>
                    </li>
                  </router-link>
                </div>
                <div v-show="!Start.PlayListLoading" class="PlayList-page Music-relative Music-center"
                     @click.stop="PlayListToggle(item.name)">
                  <div class="pagination Music-absolute Music-radius-3">
                    <span>{{ $t('msg.PlayListMore') }}</span>
                  </div>
                </div>
                <div v-show="Start.PlayListLoading" class="PlayList-page Music-relative Music-center">
                  <n-space class="pagination Music-absolute" style="background: transparent;display:block;">
                    <n-spin :show="true" size="small" stroke="#6270e7"/>
                  </n-space>
                </div>
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import '@/style/PlayList.scss'
import {useRoute} from "vue-router";
import useStore from "../../stores/counter";
import {MusicPlayListDetail, Playlist_Cat, PlayListToggle} from '../../uilt/VueIncident'
import {usePlayerComponent} from '../../uilt/vueComputed'
import Scroll from '../../components/MusicScroll.vue'

const {Playlist, Start} = useStore()
const {PlayerThemesStyle} = usePlayerComponent()
const route = useRoute()

</script>

