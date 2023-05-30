<template>
    <div>
        <n-scrollbar>
            <div class="RightHomeCss" v-if="Start.MusicData">
                <div class="film-video">
                    <video :src="Detail.MusicMV['fetchAddress']['data']['url']" controls autoplay></video>
                </div>
                <div class="film-title">
                    <div class="film-title-float">
                        <h3>{{ Detail.MusicMV['fetchDetail']['data']['name'] }}</h3>
                        <p>{{ Detail.MusicMV['fetchDetail']['data']['artistName'] }}</p>
                    </div>
                    <div class="film-title-desc">
                        <p>{{ Detail.MusicMV['fetchDetail']['data']['desc'] }}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </n-scrollbar>
    </div>

</template>

<script setup lang="ts">
import '../style/Film.sass'
import useStore from "../stores/counter";
import {onBeforeUnmount, onMounted} from "vue";
import {MusicPlay, MusicPlayer} from "../uilt/PublicStatus";
import {timeupdate} from "../uilt/VueEvent";

const {Detail, Start} = useStore()

onMounted(() => {
    MusicPlayer.value = false
    MusicPlay.value = false
    timeupdate()
})

onBeforeUnmount(() => {
    MusicPlayer.value = true
    MusicPlay.value = true
    timeupdate()
})
</script>

<style scoped>

</style>