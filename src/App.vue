<template oncontextmenu="stop()">
    <audio id="Audio" :hidden="true" :src="Audio.MusicSong.data ? Audio.MusicSong.data[0].url  : '为有音乐链接'"></audio>

  <!--  页面整体  -->
    <transition name="Box" mode="in-out">
        <div id="Box" :class="Setting.PageThemes"  v-if="Start.PageShow">
            <RightRibbon id="RightRibbon" ></RightRibbon>
            <left-display-area id="LeftDisplayArea"></left-display-area>
        </div>
    </transition>    

  <!-- 完整播放器 -->
    <transition name="PlayActive" mode="in-out">
        <Player v-if="!Start.PageShow"></Player>
    </transition>

  <!-- 控制播放器隐藏（完整） -->
    <PlayBack v-if="!Start.PageShow"></PlayBack>


  <!-- 整个界面遮罩 -->
    <Background v-if="MusicLoginBackgroundShow"></Background>


  <!-- 右击小菜单 -->
    <transition>
        <capabilities v-show="MusicPageCapabilities"></capabilities>
    </transition>

  <!-- 右侧播放列表 -->
    <transition name="SongList">
        <SongList v-show="MusicSongListShow"></SongList>
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
import Player from "./components/Player.vue";
import Background from "./components/Background.vue";
import SongList from "./components/SongList.vue";
import Notice from "./components/Notice.vue";
import Capabilities from "./components/Capabilities.vue";
import {
    MusicLoadingShow,
    MusicLoginBackgroundShow,
    MusicPageCapabilities,
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
import {nextTick, onBeforeMount, onMounted} from "vue";
import PlayBack from "./components/PlayBack.vue";
import i18n from "./i18n";
import {CancelsTheListDisplay} from "./uilt/VueIncident";
import router from "./router";

const {Audio, Start, Setting , Login} = useStore()

onBeforeMount(async() => {
    Start.ToggleMusicData(false)
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
    Start.ToggleMusicData(true)

    await nextTick(() => {
        i18n.global.locale.value = Setting.Language
    })
})

onMounted(() => {
    router.push('/')
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
    
    if (useStore().Start.LoginAvatar) {
        useStore().Start.ToggleLoginAvatar(false)
    }

    if (MusicSongListShow.value) {
        CancelsTheListDisplay()
    }
}

</script>