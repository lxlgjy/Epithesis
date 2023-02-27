<template>
  <n-scrollbar trigger="none" :on-scroll="scorll">
    <div>
      <div class="Swiper RightHomeCss" v-if="Start.MusicData === false">
        <n-space vertical>
          <n-skeleton height="240px" width="100%" class="PlaylistTitle"/>
          <n-skeleton height="40px" width="100%" class="flex-Music-flex"/>
          <div class="flex-Music-flex">
            <n-skeleton height="50px" width="100%" class="flex-Music-flex flex-Music-margin-top" v-for="item in 8"/>
          </div>
        </n-space>
      </div>
      <div class="RightHomeCss" v-if="Start.MusicData">
        <!--列表头部信息展示-->
        <div>
          <div class="detail" v-show="route.name !== 'Search' ">
            <BackgroundFilter></BackgroundFilter>
            <div class="detail-image">
              <img :src="Detail.MusicSongsDetailList.DetailTitle.img" alt="">
            </div>
            <div class="detail-title">
              <div class="margin-lineHeight">
                <h3>
                  {{ Detail.MusicSongsDetailList.DetailTitle.title }}
                </h3>
              </div>
              <div class="detail-title-ul margin-lineHeight" style="height: 2rem">
                <ul>
                  <li v-for="item in Detail.MusicSongsDetailList.DetailTitle.Label">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="margin-lineHeight componentPage-flex-text-web">
                {{ Detail.MusicSongsDetailList.DetailTitle.BriefIntroduction }}
              </div>
              <div class="AudioDetail-play componentPage-flex componentPage-position">
                <div
                    class="AudioDetail-list flex-Music-sizing flex-Music-pointer delect-border-list componentPage-flex-color-fff"
                    @click="AudioListPush">
                  <n-icon size="15" class="AudioDetail-icon">
                    <Play/>
                  </n-icon>
                  <span
                      class="componentPage-flex-color-fff">{{
                      Detail.MusicSongsDetailList.DetailTitle.MusicLength
                    }}</span>
                </div>
                <div class="AudioDetail-add delect-border-add componentPage-flex-color-fff flex-Music-pointer"
                     @click="AudioListPush('add')">
                  <n-icon size="15" class="AudioDetail-icon">
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
            <ul>
              <li></li>
              <li>歌曲标题</li>
              <li>专辑</li>
              <li>时长</li>
            </ul>
          </div>
          <div style="margin-bottom: 100px" class="PageDetail">
            <ul>
              <li v-for="(item,index) in Detail.MusicSongsDetailList.DetailSong" key="item.id"
                  @dblclick="Player(item['id'] , item)" @contextmenu="Capabilities($event , item)">
                <!-- :id="Audio.MusicSong['data'][0]['id'] === item['id'] ? 'Selected' : ''"-->
                <div class="songs flex-Music-pointer componentPage-flex">
                  <p v-if="route.meta['page'] !== 'HomeAlbum'" class="imageAndIndex">
                    <img v-lazy="item['al'].picUrl + '?param=50y50' ">
                  </p>
                  <p v-else class="imageAndIndex">{{ index + 1 }}</p>
                  <div>
                    <p>{{ item['name'] }}</p>
                    <p>{{ item['ar'][0]['name'] }}</p>
                  </div>
                  <p class="AlbumAndTime">{{ item['al']['name'] }}</p>
                  <p class="AlbumAndTime">{{ Time(item['dt']) }}</p>
                </div>
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
import {Player, FilmMovie, Like, AudioListPush, MusicDownload, Capabilities, scorll} from "../uilt/VueIncident";
import {Play, AddSharp} from '@vicons/ionicons5'
import {Love, mess} from "../uilt/VueEvent";

const route = useRoute()
const {Detail, Start, Audio} = useStore()
const router = useRouter()


</script>

<style scoped lang="scss">
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
      width: 8rem;
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
  ul {
    display: flex;
  }

  li {
    height: 30px;
    padding: 5px 0;
    line-height: 30px;
    color: rgba(23, 34, 45, .4);
  }
  li:nth-of-type(1) {
    flex: .35;
    margin:0 1rem;

  }
  li:nth-of-type(2) {
    flex: 5;
  }
  li:nth-of-type(3) {
    flex: 3;
  }
  li:nth-of-type(4) {
    flex: 3;
    text-align: right;
    margin-right: 1rem;

  }

}

.PageDetail {
  ul {
    li {
      height: 3.3rem;
      &:hover {
        background-color: rgba(242, 243, 245);
        border-radius: 5px;
      }
      .songs {
        div {
          flex: 5;
          transform: translateY(.3rem);
        }
        .imageAndIndex {
          flex: .35;
          height: 2.2rem;
          margin:0 1rem;
          transform: translateY(.6rem);
        }
        .AlbumAndTime {
          flex: 3;
          transform: translateY(1rem);
        }
        p:nth-of-type(3) {
          text-align: right;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>