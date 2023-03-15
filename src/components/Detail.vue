<template>
  <n-scrollbar :on-scroll="scorll" trigger="none">
    <div>
      <div v-if="Start.MusicData === false" class="Swiper RightHomeCss">
        <n-space vertical>
          <n-skeleton class="PlaylistTitle" height="240px" width="100%"/>
          <n-skeleton class="flex-Music-flex" height="40px" width="100%"/>
          <div class="flex-Music-flex">
            <n-skeleton v-for="item in 8" class="flex-Music-flex flex-Music-margin-top" height="50px" width="100%"/>
          </div>
        </n-space>
      </div>
      <div v-if="Start.MusicData" class="RightHomeCss">
        <!--列表头部信息展示-->
        <div>
          <div v-show="route.name !== 'Search' " class="detail">
            <BackgroundFilter></BackgroundFilter>
            <div class="detail-image">
              <img :src="DetailImg" alt="">
            </div>
            <div class="detail-title">
              <div class="margin-lineHeight">
                <h3>
                  {{ DetailTitle }}
                </h3>
              </div>
              <div class="detail-title-ul margin-lineHeight" style="height: 2rem">
                <ul>
                  <li v-for="item in DetailLabel">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="margin-lineHeight component-flex-text-web">
                {{ DetailBriefIntroduction }}
              </div>
              <div class="AudioDetail-play component-flex component-absolute component-pointer">
                <div
                    class="AudioDetail-list flex-Music-sizing flex-Music-pointer delect-border-list component-flex-color-fff"
                    @click="AudioListPush">
                  <n-icon class="AudioDetail-icon" size="15">
                    <Play/>
                  </n-icon>
                  <span
                      class="componentPage-flex-color-fff">{{ DetailMusicLength }}</span>
                </div>
                <div class="AudioDetail-add delect-border-add component-flex-color-fff flex-Music-pointer"
                     @click="AudioListPush('AddsAllSongsFromTheCurrentList')">
                  <n-icon class="AudioDetail-icon" size="15">
                    <AddSharp/>
                  </n-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--列表展示 -->
        <div>
          <div class="song-list">
            <ul class="TitleUl component-flex component-sizing">
              <li></li>
              <li>{{ $t('msg.SongTitle') }}</li>
              <li>{{ $t('msg.SongAlbum') }}</li>
              <li class="Time">{{ $t('msg.SongDuration') }}</li>
            </ul>
          </div>
          <div class="PageDetail" style="margin-bottom: 100px">
            <ul class="DetailUl component-grid">
              <li v-for="(item,index) in DetailSongList" key="item.id"
                  class="DetailLi component-flex component-sizing component-pointer component-radius-4"
                  @contextmenu="Capabilities($event , item)"
                  @dblclick="Player(item['id'] , item)">
                <p v-if="route.meta['page'] !== 'HomeAlbum' && route.meta['page'] !== 'SongAlbum' "
                   class="imageAndIndex">
                  <img v-lazy="item['al'].picUrl + '?param=50y50' ">
                </p>
                <p v-else class="imageAndIndex index">{{ index + 1 }}</p>
                <div>
                  <p>{{ item['name'] }}</p>
                  <p>{{ item['ar'][0]['name'] }}</p>
                </div>
                <p class="AlbumAndTime">{{ item['al']['name'] }}</p>
                <p class="AlbumAndTime Time">{{ Time(item['dt']) }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import BackgroundFilter from "./BackgroundFilter.vue";
import {useRoute, useRouter} from "vue-router";
import useStore from "../stores/counter";
import {Time} from '../uilt/PageWidgets'
import {AudioListPush, Capabilities, Player, scorll} from "../uilt/VueIncident";
import {AddSharp, Play} from '@vicons/ionicons5'
import {useDetailComputed} from '../uilt/vueComputed'

const route = useRoute()
const {Detail, Start, Audio} = useStore()
const router = useRouter()
const {
  DetailImg,
  DetailTitle,
  DetailLabel,
  DetailBriefIntroduction,
  DetailMusicLength,
  DetailSongList
} = useDetailComputed()


</script>

<style lang="scss" scoped>
#Selected {
  background-color: #3780ce;

  p {
    color: #fff;
  }
}

.error {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
}


.detail {
  display: flex;
  position: relative;
  z-index: 10;
}


.detail-image {
  width: 15rem;
  height: 15rem;
  border-radius: 5px;
  overflow: hidden;
}

.margin-lineHeight {
  margin-top: 10px;
  height: 3rem;
}

.detail-title {
  width: 79%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  .detail-title-ul {

    ul {
      display: flex;

      li {
        margin-right: 5px;

        &:nth-child(2) {
          margin-right: 0

        }
      }
    }
  }

  .AudioDetail-play {
    top: 200px;

    .AudioDetail-add, .AudioDetail-list {
      height: 2rem;
      line-height: 2rem;
      border-radius: 16px;
      background-color: #2d53c4;
    }

    span {
      display: inline;
    }

    .AudioDetail-list {
      width: 120px;
      padding: 0 4px;

      & i:nth-child(1) {
        padding-left: 10px;
        padding-right: 3px;
      }

    }

    .AudioDetail-add {
      width: 2rem

    }

    .delect-border-list {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }


    .delect-border-add {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }


    .AudioDetail-icon {
      transform: translateY(3px);

    }

  }
}


.song-list {
  .TitleUl {
    padding: 8px;

    li:nth-of-type(1) {
      flex: 1;
      margin-right: 10px;
    }

    li:nth-of-type(2) {
      flex: 13;
    }

    li:nth-of-type(3), li:nth-of-type(4) {
      flex: 5;
    }

    .Time {
      text-align: right;
      margin-right: 10px;
    }
  }
}

.PageDetail {
  .DetailUl {
    grid-template-rows: repeat(auto-fill, auto);

    .DetailLi {
      justify-content: space-between;
      align-items: center;
      padding: 8px;

      .index {
        transform: translateY(12px);
      }

      &:hover {
        background-color: var(--header-menu-background-active);
      }

      .imageAndIndex:nth-of-type(1) {
        flex: 1;
        height: 50px;
        margin-right: 10px;
      }

      div:nth-of-type(1) {
        flex: 13;
      }

      .AlbumAndTime {
        flex: 5;
      }

      .Time {
        text-align: right;
        margin-right: 10px;
      }
    }
  }
}
</style>