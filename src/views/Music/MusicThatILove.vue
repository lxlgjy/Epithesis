<template>
  <div class="RightHomeCss MusicLove" v-if="Start.LoginShow">
    <Information></Information>
  </div>
  <DetailDom v-else></DetailDom>
</template>

<script setup lang="ts">
import Information from '../../components/TextInformation.vue'
import DetailDom from "../../components/Detail.vue";
import useStore from "../../stores/counter";
import {DetailThatLove} from "../../uilt/Api/DetailApi";
import {onMounted} from "vue";

const {Start , Detail} = useStore()


onMounted(async() => {
  if(window.localStorage.getItem('cookie')) {
    await DetailThatLove()

    let SongsListId = []
    for(let i =0 ; i < Detail.MusicSongsDetailList.DetailSong.length ; i++) {
      SongsListId.push(Detail.MusicSongsDetailList.DetailSong[i].id)
    }

    Detail.getMusicLoveListId(SongsListId)
  }
})

</script>
<style scoped>
.MusicLove {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
