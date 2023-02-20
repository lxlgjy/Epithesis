<template>
  <n-scrollbar>
    <div class="RightHomeCss" v-if="Start.MusicData">
      <div class="film-video">
        <video :src="Detail.MusicMV['fetchAddress']['data']['url']" controls autoplay></video>
      </div>
      <div class="film-title">
        <div class="film-title-float">
          <h3>{{Detail.MusicMV['fetchDetail']['data']['name']}}</h3>
          <p>{{Detail.MusicMV['fetchDetail']['data']['artistName']}}</p>
        </div>
        <div class="film-title-desc">
          <p>{{Detail.MusicMV['fetchDetail']['data']['desc']}}</p>
        </div>
      </div>
      <div></div>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import '../style/Film.sass'
import useStore from "../stores/counter";

const {Detail , Start} = useStore()
</script>

<style scoped>

</style>