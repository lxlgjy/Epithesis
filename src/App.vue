<template oncontextmenu="stop()">
  <audio :src="Audio.MusicSong['data'] ? Audio.MusicSong['data'][0]['url']  : null" :hidden="true" id="Audio"></audio>

  <!--  页面整体  -->
  <div id="Box" v-show="Start.PageShow">
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
  <n-space style="position:absolute;top:50%;left:50%;transform: translateX(-50%) translateY(-50%);"
           v-if="MusicLoadingShow">
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
  MusicSearchInputShow,
  MusicLoginShow,
  MusicLoginBackgroundShow,
  MusicLoadingShow,
  MusicAudioModeShow,
  MusicSongListShow,
  MusicPageCapabilities,

} from './uilt/PublicStatus'
import {HomeLatestAlbum, HomeRankingAxios, HomeRecommendAxios, HomeSwiperAxios} from "./uilt/Api/HomeApi";
import {MvAxios} from "./uilt/Api/MvApi";
import {SingerAxios} from "./uilt/Api/SingerApi";
import {PlayListAxios, PlayListTitleAxios} from "./uilt/Api/PlaylistApi";
import {nextTick, onMounted} from "vue";
import PlayBack from "./components/PlayBack.vue";

const {Audio, Start} = useStore()


onMounted(async () => {
  await Start.ToggleMusicData(false)
  await HomeSwiperAxios('/personalized/privatecontent/list?limit=10&offset=0')
  await HomeRecommendAxios('/top/playlist/highquality?limit=35')
  await HomeRankingAxios('/toplist')
  await HomeLatestAlbum('/album/newest')
  await MvAxios()
  await SingerAxios('/toplist/artist?type=1')
  await PlayListTitleAxios('/playlist/hot')
  await PlayListAxios('/top/playlist?limit=35&order=hot&offset=1&cat=华语')
  await Start.ToggleMusicData(true)
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