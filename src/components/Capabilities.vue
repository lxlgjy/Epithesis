<template>
    <div id="capabilities" :style="background" class="capabilities component-radius-4 component-index-5"
         v-show="Detail.MusicCapabilities"
    >
        <div class="capabilities-image-title" v-if="Audio.MusicSongNow.length">
            <div class="component-flex">
                <div class="capabilities-image" >
                    <img :src="CapabilitiesImg" alt="">
                </div>
                <div class="component-flex capabilities-title">
                    <span>{{ Detail.MusicCapabilities.name }}</span>
                    <span>{{ Detail.MusicCapabilities['ar'][0].name }}</span>
                </div>
            </div>
        </div>
        <div v-if="Audio.MusicSongNow.length">
            <ul class="capabilities-ul component-left component-pointer component-flex-text component-hidden ">
                <router-link to="/MusicThatILove/LoveDetail/SongAlbum">
                    <li @click="MusicAlbumDetail">
                        <n-icon size="20">
                            <MusicalNotesSharp/>
                        </n-icon>
                        <p class="">{{ Detail.MusicCapabilities.al.name }}</p>
                    </li>
                </router-link>
                <li v-show="!LoveCap" @click.stop="Like('true');mess('success')">
                    <n-icon size="20px">
                        <HeartSharp/>
                    </n-icon>
                    <p>{{ $t('msg.AddWhatILike') }}</p>
                </li>
                <li v-show="LoveCap" @click.stop="Like('false');mess('success')">
                    <n-icon size="20px">
                        <HeartSharp/>
                    </n-icon>
                    <p>{{ $t('msg.MoveOutOfTheListILike') }}</p>
                </li>
                <li v-if="!MusicListNoticeShow" @click="AudioListPush('AddASelectedSingle');mess('success')">
                    <n-icon size="20px">
                        <ReorderFour/>
                    </n-icon>
                    <p>{{ $t('msg.AddToPlaylist') }}</p>
                </li>
                <li v-if="MusicListNoticeShow"  @click="AudioListPush('MoveOutOfThePlaylist');mess('success')">
                    <n-icon size="20px">
                        <ReorderFour/>
                    </n-icon>
                    <p>{{ $t('msg.RemoveAPlaylist') }}</p>
                </li>
                <li @click.prevent="MusicDownload(Detail.MusicCapabilities['id'] , Detail.MusicCapabilities['name'] , Detail.MusicCapabilities['ar'][0]['name']);mess('success')">
                    <n-icon size="20px">
                        <Archive/>
                    </n-icon>
                    <p>{{ $t('msg.Download') }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import '../style/Flex/FlexComponents.sass'
import useStore from "../stores/counter";
import {Archive, HeartSharp, MusicalNotesSharp, ReorderFour} from '@vicons/ionicons5'
import {MusicListNoticeShow} from '../uilt/PublicStatus'
import {AudioListPush, Like, MusicAlbumDetail, MusicDownload} from '../uilt/VueIncident'
import {mess} from "../uilt/VueEvent";
import {useCapabilitiesComputed} from '../uilt/vueComputed'

const {Detail , Audio} = useStore()
const {LoveCap, background , CapabilitiesImg} = useCapabilitiesComputed()

</script>

<style lang="scss" scoped>
.capabilities {
  position: absolute;
  background-color: var(--capabilities-background);
  box-shadow: 0 1px 7px 1px rgba(23, 34, 45, .3);
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

    span {
      color: var(--color);
    }
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
    color: var(--color);

    &:hover {
      background-color: rgba(23, 34, 45, .1);
    }

    i {
      transform: translateY(5px);
      padding-right: 1rem;
      color: var(--color);
    }

    p {
      display: inline;
      color: var(--color);
    }
  }
}
</style>