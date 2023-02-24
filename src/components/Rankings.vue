<template>
  <div class="RightHomeCss recommend" v-if="Start.MusicData">
    <div class="recommend-playlist">
      <BackgroundFilter></BackgroundFilter>
      <div class="image">
        <img :src="Detail.MusicSongsDetailList.DetailTitle.img" alt="">
      </div>
      <div class="title">
        <span>{{ Detail.MusicSongsDetailList.DetailTitle.title }}</span>
        <span>{{ Detail.MusicSongsDetailList.DetailTitle.BriefIntroduction }}</span>
      </div>
    </div>
    <div class="recommend-songs-recommend">
      <div class="recommend-songs">
        <div class="recommend-songs-list">
          <n-scrollbar trigger="hover" style="max-height: 100%">
            <ul>
              <li v-for="(item,index) in Detail.MusicSongsDetailList.DetailSong"
                  @dblclick="Player(item['id'] , item)">
<!--                <span>{{ index + 1 }}</span>-->
                <span>
                  <img v-lazy="item['al']['picUrl'] + '?param=50y50'">
                </span>
                <span>{{ item['name'] }}</span>
                <span>{{ item['ar'][0].name }}</span>
                <span>{{ item['al']['name'] }}</span>
                <span>{{ Time(item['dt']) }}</span>
              </li>
            </ul>
          </n-scrollbar>
        </div>
      </div>
      <div class="recommend-recommend">
        <div>
          <img :src="item['coverImgUrl']" alt="" v-for="item in image(Home.MusicRankingData['list'])">
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import BackgroundFilter from '../components/BackgroundFilter.vue'
import useStore from "../stores/counter";
import {useRoute} from "vue-router";
import {Time} from '../uilt/PageWidgets'
import {Player} from '../uilt/VueIncident'

const {Detail, Home , Start} = useStore()
const route = useRoute()

console.log(Detail.MusicSongsDetailList.DetailTitle)
const image = (item:any) => {
  let arr = []
  for (let i = 0; i < item.length; i++) {
    // @ts-ignore
    if (item[i]['id'] !== parseInt(Detail.MusicSongsDetailList.DetailSong[i]['id'])) {
      arr.push(item[i])
    }
  }
  return arr.slice(0, 5)
}
</script>

<style scoped lang="scss">
.recommend {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  .recommend-playlist {
    flex: 1;
  }

  .recommend-playlist {
    position: relative;
    height: 20%;
    display: flex;
    z-index: 2;
    box-shadow: -2px 4px 5px rgba(0, 0, 0, .4);

    .image {
      width: 15.3rem;
      height: 100%;
    }

    .title {
      display: flex;
      flex-direction: column;
      padding: 0 0 10px 20px;
      box-sizing: border-box;

      span:nth-child(1) {
        font-size: 24px;
        font-weight: 700;
      }

      span:nth-child(2) {
        font-size: 18px;
        color: rgba(23, 34, 56, .7);
      }
    }
  }

  .recommend-songs-recommend {
    display: flex;
    margin: 20px 0 0 5px;
    height: 80%;

    .recommend-songs, .recommend-recommend {
      flex: 1;
    }

    .recommend-songs {
      width: 100%;
      height: 100%;

      .recommend-songs-list, .recommend-songs-list ul {
        height: 100%;
      }

      .recommend-songs-list {
        ul {
          height: 50%;

          li {
            display: flex;
            height: 3rem;
            line-height: 3rem;
            transition: background .5s;
            border-radius: 3px;

            &:hover {
              background-color: rgba(23, 34, 45, .15);
              cursor: pointer;
            }

            span {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-weight: 700;


              &:nth-child(1) {
                text-align: left;
                padding:0 8px;
                width: 2.4rem;
                height: 2.4rem;
                transform: translateY(6px);
              }

              &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5) {
                flex: 1;
                text-align: center;
              }
            }

          }
        }
      }
    }

    .recommend-recommend {
      div {
        display: flex;
        flex-wrap: wrap;
      }
      img:nth-child(1) {
        width: 100%;
        height: 12.5rem;
        padding: 0 7px;
        box-sizing: border-box;
      }


      img:nth-child(2), img:nth-child(3) , img:nth-child(4) , img:nth-child(5) {
        width: 48%;
        height: 10rem;
        padding: 7px;
      }

      img {
        border-radius: 3px;
      }

    }
  }

}
</style>