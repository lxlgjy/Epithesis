<template>
    <div :style="SongListBackground" class="SongList component-absolute component-index-4" @click.stop >
        <n-scrollbar :on-scroll="scorll">
            <div class="SongList-header component-sizing component-index-2">
                <div class="component-flex">
          <span
                  :id="MusicSongList ? 'SongListTap' : ''"
                  @click="SongListToggle('playingList')"
                  class="component-flex-between component-center component-pointer component-sizing component-font-weight component-radius-2">{{
              $t('msg.SongPlayList')
              }}</span>
                    <span :id="!MusicSongList ? 'SongListTap' : ''"
                          @click="SongListToggle('playingHistory')"
                          class="component-flex-between component-center component-pointer component-sizing component-font-weight component-radius-2">{{
                        $t('msg.SongPlayHistory')
                        }}</span>
                </div>
            </div>
            <div class="SongList-list component-padding-0-1 " v-if="MusicSongList">
                <transition-group name="list" tag="ul">
                    <li v-for="(item,index) in Audio.MusicSongNow"
                        :id="Audio.MusicSong['data'][0]['id'] === item['id'] ? 'SongList' : ''"
                        class="component-pointer component-radius-4"
                        @contextmenu="Capabilities($event , item , 'SongList')" @dblclick.stop="SongListAudio(item)"
                        :key="item.id">
                        <div class="component-flex component-center component-flex-items">
                            <div>
                                <img v-lazy="item['al']['picUrl'] + '?param=50y50'">
                            </div>
                            <div class="SongList-title component-sizing">
                                <span class="component-flex-text">{{ item.name }}</span>
                                <span class="component-flex-text">{{ item['ar'][0].name }}</span>
                            </div>
                        </div>
                    </li>
                </transition-group>
            </div>
            <div class="SongList-list component-padding-0-1 " v-else>
                <ul>
                    <li v-for="(item,index) in Playlist.MusicPlayHistory"
                        :id="Audio.MusicSong['data'] ? (Audio.MusicSong['data'][0]['id'] === item['id'] ? 'SongList' : '' ) : ''"
                        class="component-pointer component-radius-4"
                        @contextmenu="Capabilities($event , item.data , 'SongList')" @dblclick.stop="SongListAudio(item.data)">
                        <div class="component-flex component-center component-flex-items">
                            <div>
                                <img v-lazy="item['data']['al']['picUrl'] + '?param=50y50'">
                            </div>
                            <div class="SongList-title component-sizing">
                                <span class="component-flex-text">{{ item.data.name }}</span>
                                <span class="component-flex-text">{{ item['data']['ar'][0].name }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </n-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import useStore from "../stores/counter";
import {Capabilities, scorll, SongListAudio, SongListToggle} from '../uilt/VueIncident'
import {MusicSongList} from "../uilt/PublicStatus";
import {useSongListComputed} from '../uilt/vueComputed'
import {PlayHistory} from "../uilt/Api/PlaylistApi";

const {Detail, Audio , Playlist} = useStore()
const {SongListBackground} = useSongListComputed()

PlayHistory('/record/recent/song')

</script>

<style lang="scss" scoped>
#SongListTap {
  background-color: #165dff;
  color: #fff;
}

#SongList {
  //background-color: var(--selected-background);
  background-color: #165dff;

  .SongList-title {
    & span:nth-child(1) {
      color: #fff;
    }

    & span:nth-child(2) {
      color: #e4e1e1;
    }
  }
}

.SongList {
  top: 0;
  right: 0;
  width: 352px;
  //height: 89.8%;
  background-color: var(--background);
  box-shadow: 5px 1px 21px rgba(23, 34, 45, .3);
}

.SongList-header {
  position: sticky;
  top: 0;
  padding: 8px 16px;
  box-shadow: 0 1px 7px 2px rgba(23, 34, 45, .3);
  backdrop-filter: blur(10px);

  div {
    height: 32px;

    span {
      height: 100%;
      line-height: 32px;
      margin: 0 4px;
      color: var(--color);

      &:hover {
        background-color: rgba(23, 34, 45, .1);
      }
    }
  }
}

.SongList-list {
  margin-top: 10px;

  li {
    height: 48px;
    margin: 5px 0;

    &:hover {
      background-color: var(--active-background);
    }

    div {
      & div:nth-child(1) {
        width: 32px;
        height: 32px;
      }

      & div:nth-child(2) {
        flex: 4;

        &:nth-child(2) {
          font-weight: 700;
        }
      }

      & div:nth-child(1), &:nth-child(2) {
        padding: 0 8px;
      }
    }
  }

  .SongList-title {
    width: 80px;
    text-align: left;
    padding-left: 12px;

    span {
      display: block;

      &:nth-child(1) {
        font-size: 15px;
        padding: 0;
        color: var(--color);

      }

      &:nth-child(2) {
        color: var(--secondLight);
      }
    }
  }
}
</style>