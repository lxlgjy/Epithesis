<template oncontextmenu="stop()">
  <audio id="Audio" :hidden="true" :src="Audio.MusicSong['data'] ? Audio.MusicSong['data'][0]['url']  : null"></audio>

  <!--  页面整体  -->
  <div v-show="Start.PageShow" id="Box" :class="Setting.PageThemes">
    <RightRibbon id="RightRibbon"></RightRibbon>
    <left-display-area id="LeftDisplayArea"></left-display-area>
  </div>
  <!-- 底部播放器 -->
  <play-audio v-show="Start.PageShow"></play-audio>

  <!-- 完整播放器 -->
  <transition name="PlayActive">
    <Player v-show="Start.PageShow === false"></Player>
  </transition>

  <!-- 控制播放器隐藏（完整） -->
  <PlayBack v-show="Start.PageShow === false"></PlayBack>

  <!-- 搜索界面 -->
  <transition name="Search">
    <Search v-if="MusicSearchInputShow"></Search>
  </transition>

  <!-- 整个界面遮罩 -->
  <Background v-if="MusicLoginBackgroundShow"></Background>

  <!-- 登录 -->
  <Logon v-if="MusicLoginShow"></Logon>

  <!-- 右击小菜单 -->
  <capabilities v-show="MusicPageCapabilities"></capabilities>

  <!-- 播放模式 -->
  <transition name="AudioMode">
    <AudioMode v-if="MusicAudioModeShow"></AudioMode>
  </transition>

  <!-- 右侧播放列表 -->
  <transition name="SongList">
    <SongList v-if="MusicSongListShow"></SongList>
  </transition>

  <!-- 加载条 -->
  <n-space v-if="MusicLoadingShow"
           style="position:absolute;top:50%;left:50%;transform: translateX(-50%) translateY(-50%);">
    <n-spin size="small" stroke="blue"/>
  </n-space>

  <!-- 页面大体提示信息 -->
  <n-message-provider>
    <Notice/>
  </n-message-provider>

</template>

<script lang="ts" setup>
import RightRibbon from '@/views/RightRibbon.vue'
import LeftDisplayArea from "@/views/LeftDisplayArea.vue";
import '@/style/content.sass'
import '@/style/main.sass'
import '@/style/Flex/FlexLayout.sass'
import '@/style/Themes.scss'
import useStore from "./stores/counter";
import PlayAudio from './components/Audio.vue'
import Player from "./components/Player.vue";
import Search from './components/Search.vue'
import Background from "./components/Background.vue";
import Logon from './components/Logon.vue'
import AudioMode from "./components/AudioMode.vue";
import SongList from "./components/SongList.vue";
import Notice from "./components/Notice.vue";
import Capabilities from "./components/Capabilities.vue";
import {
  MusicAudioModeShow,
  MusicLoadingShow,
  MusicLoginBackgroundShow,
  MusicLoginShow,
  MusicPageCapabilities,
  MusicSearchInputShow,
  MusicSongListShow,
} from './uilt/PublicStatus'
import {
  HomeHotSinger,
  HomeLatestAlbum,
  HomeRankingAxios,
  HomeRecommendAxios,
  HomeSwiperAxios
} from "./uilt/Api/HomeApi";
import {MvAxios} from "./uilt/Api/MvApi";
import {SingerAxios} from "./uilt/Api/SingerApi";
import {PlayListAxios, PlayListTitleAxios} from "./uilt/Api/PlaylistApi";
import {nextTick, onMounted} from "vue";
import PlayBack from "./components/PlayBack.vue";
import i18n from "./i18n";

const {Audio, Start, Setting} = useStore()


onMounted(async () => {

  await Start.ToggleMusicData(false)
  await Promise.all([
    HomeSwiperAxios('/personalized/privatecontent/list?limit=10&offset=0'),
    HomeRecommendAxios('/top/playlist/highquality?limit=35'),
    HomeRankingAxios('/toplist'),
    HomeLatestAlbum('/album/newest'),
    HomeHotSinger('/top/artists?limit=8'),
    MvAxios(),
    SingerAxios('/toplist/artist?type=1'),
    PlayListTitleAxios('/playlist/hot'),
    PlayListAxios('/top/playlist?limit=35&order=hot&offset=1&cat=华语'),
  ])
  await Start.ToggleMusicData(true)

  await nextTick(() => {
    i18n.global.locale.value = Setting.Language
  })
})

nextTick(() => {

})


document.oncontextmenu = () => {
  return false
}

document.onselectstart = () => {
  return false;
}

document.onclick = () => {
  if (MusicPageCapabilities.value) {
    MusicPageCapabilities.value = false
  }
}

</script>