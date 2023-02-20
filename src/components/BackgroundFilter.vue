<template>
  <div class="detail-background">
    <img :src="route.meta['page'] === 'HomeRecommendedSongs' ? Detail.MusicSongsDetailList['fetchDetailSongs']['data']['dailySongs'][0]['al']['picUrl'] :
            (route.meta['page'] === 'HomePlaylist' ||route.meta['page'] === 'Recommend' ||route.meta['page'] === 'PlayListDetail' ? Detail.MusicSongsDetailList['fetchDetail']['playlist']['coverImgUrl'] :
            (route.meta['page'] === 'SingerDetail' ? Detail.MusicSongsDetailList['fetchDetail']['data']['artist']['cover'] :
            (route.meta['page'] === 'HomeAlbum' ? Detail.MusicSongsDetailList['fetchDetailSongs']['album']['picUrl'] :
            (Detail.MusicSongsDetailList['songs'] ?  Detail.MusicSongsDetailList['songs'][0]['al']['picUrl'] : '')
            )))"
         alt="">
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import useStore from "../stores/counter";

const {Detail} = useStore()
const route = useRoute()
</script>

<style scoped lang="scss">
.detail-background {
  position: absolute;
  width: 100%;
  height: 15.3rem;
  overflow: hidden;
  filter: blur(3px);
  top: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    background: linear-gradient(0deg, #fff 0, hsla(0, 0%, 100%, .996) 8.1%, hsla(0, 0%, 100%, .983) 15.5%, hsla(0, 0%, 100%, .964) 22.5%, hsla(0, 0%, 100%, .939) 29%, hsla(0, 0%, 100%, .909) 35.3%, hsla(0, 0%, 100%, .877) 41.2%, hsla(0, 0%, 100%, .842) 47.1%, hsla(0, 0%, 100%, .808) 52.9%, hsla(0, 0%, 100%, .773) 58.8%, hsla(0, 0%, 100%, .741) 64.7%, hsla(0, 0%, 100%, .711) 71%, hsla(0, 0%, 100%, .686) 77.5%, hsla(0, 0%, 100%, .667) 84.5%, hsla(0, 0%, 100%, .654) 91.9%, hsla(0, 0%, 100%, .65));
    position: absolute;
    left: 0;
    width: 100%;
    height: 15.3rem;
  }
}
</style>