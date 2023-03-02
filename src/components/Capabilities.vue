<template>
  <div class="capabilities componentPage-radius-4 componentPage-index-5" id="capabilities" style="top: 0;left:0;">
    <div class="capabilities-image-title">
      <div class="componentPage-flex">
        <div class="capabilities-image">
          <img :src="Detail.MusicCapabilities['al']['picUrl']" alt="">
        </div>
        <div class="componentPage-flex capabilities-title">
          <span>{{Detail.MusicCapabilities.name}}</span>
          <span>{{Detail.MusicCapabilities['ar'][0].name}}</span>
        </div>
      </div>
    </div>
    <div>
      <ul class="capabilities-ul componentPage-left componentPage-pointer componentPage-flex-text componentPage-hidden ">
        <router-link to="/MusicThatILove/LoveDetail/SongAlbum" >
          <li @click="MusicAlbumDetail">
            <n-icon size="20" color="#000">
              <MusicalNotesSharp/>
            </n-icon>
            <p class="">{{Detail.MusicCapabilities.al.name}}</p>
          </li>
        </router-link>
        <li v-show="!IsLove" @click.prevent="Like('true');mess('success')">
          <n-icon size="20px">
            <HeartSharp/>
          </n-icon>
          <p>添加我喜欢</p>
        </li>
        <li v-show="IsLove" @click.prevent="Like('false');mess('success')">
          <n-icon size="20px">
            <HeartSharp/>
          </n-icon>
          <p>移出我喜欢的列表</p>
        </li>
        <li @click="AudioListPush('AddASelectedSingle');mess('success')" v-if="!MusicListNoticeShow">
          <n-icon size="20px">
            <ReorderFour/>
          </n-icon>
          <p>添加到播放列表</p>
        </li>
        <li @click="AudioListPush('MoveOutOfThePlaylist');mess('success')" v-else>
          <n-icon size="20px">
            <ReorderFour/>
          </n-icon>
          <p>移除播放列表</p>
        </li>
        <li @click.prevent="MusicDownload(Detail.MusicCapabilities['id'] , Detail.MusicCapabilities['name'] , Detail.MusicCapabilities['ar'][0]['name']);mess('success')">
          <n-icon size="20px" >
            <Archive/>
          </n-icon>
          <p>下载</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../style/Flex/FlexComponents.sass'
import useStore from "../stores/counter";
import {MusicalNotesSharp , Play , Archive , LogOutSharp , HeartSharp , ReorderFour} from '@vicons/ionicons5'
import {MusicListNoticeShow} from '../uilt/PublicStatus'
import {MusicDownload, AudioListPush, MusicAlbumDetail , Like} from '../uilt/VueIncident'
import {mess} from "../uilt/VueEvent";
import {useCapabilitiesComputed} from '../uilt/vueComputed'
const {Detail } = useStore()
const {IsLove} = useCapabilitiesComputed()

</script>

<style scoped lang="scss">
.capabilities {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 1px 7px 1px rgba(23,34,45,.3);
  width: 15rem;
}
.capabilities-image-title {
  .capabilities-image {
    //width: 20px;
    flex: 2;
    height: 4rem;
    padding: .4rem .5rem;
  }
  .capabilities-title {
    flex: 2;
    display: block;
    padding: .4rem .5rem;
  }
}

.capabilities-ul {
  padding: 0 .5rem;
  li {
    height: 2rem;
    padding: 0 .5rem;
    margin: .3rem 0;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
      background-color: rgba(23,34,45,.1);
    }
    i {
      transform: translateY(5px);
      padding-right: 1rem;
    }
    p {
      display: inline;
    }
  }
}
</style>