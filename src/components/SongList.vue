<template>
  <div class="SongList componentPage-position componentPage-index-4">
    <n-scrollbar :on-scroll="scorll">
      <div class="SongList-header componentPage-sizing componentPage-index-2">
        <div class="componentPage-flex" @click="SongListToggle">
          <span
              class="componentPage-flex-between componentPage-center componentPage-pointer componentPage-sizing componentPage-font-weight componentPage-radius-2"
              :id="MusicSongList ? 'SongListTap' : ''">播放列表</span>
          <span
              class="componentPage-flex-between componentPage-center componentPage-pointer componentPage-sizing componentPage-font-weight componentPage-radius-2"
              :id="!MusicSongList ? 'SongListTap' : ''">播放历史</span>
        </div>
      </div>
      <div class="SongList-list componentPage-padding-0-1 ">
        <ul>
          <li v-for="(item,index) in Audio.MusicSongNow" class="componentPage-pointer componentPage-radius-4" @contextmenu="Capabilities($event , item , 'SongList')" :id="Audio.MusicSong['data'][0]['id'] === item['id'] ? 'SongList' : ''">
            <div class="componentPage-flex componentPage-center componentPage-flex-items">
              <div>
                <img v-lazy="item['al']['picUrl'] + '?param=50y50'">
              </div>
              <div class="SongList-title componentPage-sizing">
                <span class="componentPage-flex-text">{{ item.name }}</span>
                <span class="componentPage-flex-text">{{ item['ar'][0].name }}</span>
              </div>
              <!--       专辑（要需要自行添加）       -->
              <!--<span class="componentPage-flex-text">{{item['al'].name}}</span>-->
              <!--       歌词时间舍弃       -->
            </div>
          </li>
        </ul>
      </div>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import useStore from "../stores/counter";
import {Time} from '../uilt/PageWidgets'
import {SongListToggle, Capabilities , scorll} from '../uilt/VueIncident'
import {MusicSongList} from "../uilt/PublicStatus";
import {CloseOutline, EllipsisVertical} from '@vicons/ionicons5'

const {Detail, Audio} = useStore()

</script>

<style scoped lang="scss">
#SongListTap {
  background-color: #165dff;
  color: #fff;
}

#SongList {
  background-color: #3780ce;
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
  width: 22rem;
  height: 89.8%;
  background-color: #fff;
  box-shadow: 5px 1px 21px rgba(23, 34, 45, .3);
}

.SongList-header {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 8px 1rem;
  box-shadow: 0 1px 7px 2px rgba(23, 34, 45, .3);

  div {
    height: 2rem;

    span {
      height: 100%;
      line-height: 2rem;
      margin: 0 4px;

      &:hover {
        background-color: rgba(23, 34, 45, .1);
      }
    }
  }
}

.SongList-list {
  margin-top: 10px;

  li {
    height: 3rem;

    &:hover {
      background-color: rgba(23, 34, 45, .1);
    }

    div {
      & div:nth-child(1) {
        flex: 1;
        height: 2rem;
      }

      & div:nth-child(2) {
        flex: 4;
        &:nth-child(2) {
          font-weight: 700;
        }
      }

      & div:nth-child(1) , &:nth-child(2) {
        padding: 0 .5rem;
      }
    }
  }

  .SongList-title {
    width: 5rem;
    text-align: left;
    padding-left: 12px;

    span {
      display: block;

      &:nth-child(1) {
        font-size: 15px;
        padding: 0;
      }

      &:nth-child(2) {
        color: rgba(23, 34, 45, .3);
      }
    }
  }
}
</style>