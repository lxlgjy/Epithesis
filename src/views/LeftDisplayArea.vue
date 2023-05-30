<template>
    <div class="rightBox">
        <header-top></header-top>
        <router-view v-slot="{ Component }">
            <transition :enter-active-class="$route.meta.transitions" mode="out-in">
                <component :is="Component" :key="$route.path" style="height: 82.5vh" />
            </transition>
        </router-view>
        <play-audio></play-audio>

        <!-- 搜索界面 -->
        <transition name="Search">
            <Search v-if="MusicSearchInputShow"></Search>
        </transition>

        <!-- 登录 -->
        <Logon v-if="MusicLoginShow"></Logon>

        <transition name="Search">
            <ArgNotice v-if="MusicArgNoticeShow"></ArgNotice>
        </transition>
    </div>
</template>

<script setup lang="ts">
import '../style/AnimationEffects.sass'
import HeaderTop from "../components/HeaderTop.vue";
import PlayAudio from '../components/Audio.vue'
import {MusicArgNoticeShow, MusicLoginShow, MusicSearchInputShow} from "../uilt/PublicStatus";
import ArgNotice from "../components/ArgNotice.vue";
import Search from "../components/Search.vue";
import Logon from "../components/Logon.vue";

</script>
