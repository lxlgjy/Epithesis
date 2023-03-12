<template>
  <div>
    <div class="Logo">
      <span>#Love Music</span>
    </div>
    <div class="Title">
      <span>MUSIC</span>
    </div>
    <div class="Ribbon">
      <ul>
        <router-link v-for="item in PageMusicData" v-slot="{navigate , isActive}" :to="item.router">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon class="Home" size="20">
              <component :is="item.icon"></component>
            </n-icon>
            <li>{{ item.notice }}</li>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="Title">
      <span>My Music</span>
    </div>
    <div class="Ribbon">
      <ul>
        <router-link v-for="item in PageRibbonData" v-slot="{navigate , isActive}" :to="item.router">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon class="Home" size="20">
              <component :is="item.icon"></component>
            </n-icon>
            <li>{{ item.notice }}</li>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="text">
      <span>2022-2023毕业设计</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/style/RightRibbon.sass'
import {Archive, CardSharp, HeartSharp, HomeSharp, ListCircle, Person} from '@vicons/ionicons5'
import useStore from "../stores/counter";

const {Start} = useStore()
const PageMusicData = [{router: '/Home', notice: '首页', icon: HomeSharp}, {
  router: '/Playlist',
  notice: '歌单',
  icon: ListCircle
}, {router: '/singer', notice: '歌手', icon: Person}, {router: '/MV', notice: 'MV', icon: CardSharp}]

const PageRibbonData = [{router: '/MusicThatILove', notice: '音乐库', icon: HeartSharp}, {
  router: '/MyDownloads',
  notice: '我的下载',
  icon: Archive
}]
</script>

<style scoped>
.music {
  background-color: #165dff;
  color: #fff;
}
</style>