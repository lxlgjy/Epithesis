<template>
  <div>
    <scroll v-show="$route.meta.PlayList">
      <div>
        <div class="PlayList RightHomeCss">
          <n-card :style="PlayerThemesStyle" :title="$t('msg.PlayList')"
                  style="margin-bottom: 16px;--n-border-color:none;">
            <n-tabs animated
                    style="--n-bar-color: #165dff;--n-tab-text-color-hover:#165dff;--n-tab-text-color-active:#165dff;"
                    type="line"
                    @click.stop="Playlist_Cat($event)">
              <n-tab-pane v-for="(item,index) in Playlist.MusicPlayListTitle" key="item.id" :name="index"
                          :tab="item.name">
                <div class="PlayListTest Music-grid">
                  <li v-for="item in Playlist.MusicPlayList"
                      class=" Music-hidden Music-radius-3">
                    <router-link class="PlayListLI" to="/Playlist/PlayListDetail"
                                 @click.stop="MusicPlayListDetail(item.id)">
                      <div>
                        <img v-lazy="item['coverImgUrl'] + '?param=400y400'">
                      </div>
                      <div>
                        <p class="Music-font-MultiLine-hidden">{{ item.name }}</p>
                      </div>
                    </router-link>
                  </li>
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
    <secondary-routing-page/>
  </div>
</template>

<script lang="ts" setup>
import '@/style/PlayList.scss'
import useStore from "../../stores/counter";
import {MusicPlayListDetail, Playlist_Cat, PlayListToggle} from '../../uilt/VueIncident'
import {usePlayerComponent} from '../../uilt/vueComputed'
import Scroll from '../../components/MusicScroll.vue'
import SecondaryRoutingPage from "../../components/SecondaryRoutingPage.vue";

const {Playlist, Start} = useStore()
const {PlayerThemesStyle} = usePlayerComponent()

</script>

