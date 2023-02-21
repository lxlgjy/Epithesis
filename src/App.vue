<template oncontextmenu="stop()">
  <audio :src="Audio.MusicSong['data'] ? Audio.MusicSong['data'][0]['url']  : null" :hidden="true" id="Audio"></audio>

  <transition name="Box">
    <div id="Box" v-show="Start.PageShow">
      <RightRibbon id="RightRibbon" v-show="true"></RightRibbon>
      <left-display-area id="LeftDisplayArea"></left-display-area>
    </div>
  </transition>

  <play-audio v-show="Start.PageShow"></play-audio>

  <transition name="PlayActive">
    <Player v-show="Start.PageShow === false"></Player>
  </transition>

  <transition name="Search">
    <Search v-if="MusicSearchInputShow"></Search>
  </transition>

  <Background v-if="MusicLoginBackgroundShow"></Background>

  <Logon v-if="MusicLoginShow"></Logon>

  <capabilities v-show="MusicPageCapabilities"></capabilities>

  <transition name="AudioMode">
    <AudioMode v-if="MusicAudioModeShow"></AudioMode>
  </transition>

  <transition name="SongList">
    <SongList v-if="MusicSongListShow"></SongList>
  </transition>

  <n-space style="position: absolute;top:50%;left:50%;transform: translateX(-50%) translateY(-50%);"
           v-if="MusicLoadingShow">
    <n-spin size="small" stroke="blue"/>
  </n-space>

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
  MusicPageCapabilities
} from './uilt/PublicStatus'
import {HomeLatestAlbum, HomeRankingAxios, HomeRecommendAxios, HomeSwiperAxios} from "./uilt/Api/HomeApi";
import {MvAxios} from "./uilt/Api/MvApi";
import {SingerAxios} from "./uilt/Api/SingerApi";
import {PlayListAxios, PlayListTitleAxios} from "./uilt/Api/PlaylistApi";
import {nextTick, onErrorCaptured, onMounted} from "vue";

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
  console.log(Start.AudioSongIndex)
})

onErrorCaptured((err, instance, info) => {
  //组件页面错误信息 instance差，在vue3中无法定位组件错误。。。
  console.log(err.message)
  // console.log(instance)
  console.log(info)
  return false
})


document.oncontextmenu = () => {
  return false
}

document.onselectstart = () => {
  return false;
}

document.onclick = () => {
  if(MusicPageCapabilities.value) {
    MusicPageCapabilities.value = false
  }
}
</script>