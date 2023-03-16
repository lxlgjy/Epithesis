<template>
  <div v-if="Start.MusicData" class="RightHomeCss recommend component-grid">
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
    <div class="recommend-songs-list component-grid">
      <div class="recommend-songs">
        <div class="recommend-songs-list">
          <n-scrollbar :on-scroll="scorll" trigger="hover">
            <ul>
              <li v-for="(item,index) in Detail.MusicSongsDetailList.DetailSong"
                  :id="Audio.MusicSong['data'][0]['id'] === item['id'] ? 'SelectChange' : '' "
                  @contextmenu="Capabilities($event , item)"
                  @dblclick="Player(item['id'] , item)">
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
        <div class="component-grid">
          <img v-for="item in image(Home.MusicRankingData['list'])" :src="item['coverImgUrl']" alt=""
               @click="MusicPlayList(item)">
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
import {Capabilities, MusicPlayList, Player, scorll} from '../uilt/VueIncident'

const {Detail, Home, Start, Audio} = useStore()
const route = useRoute()

const image = (item: any) => {
  let arr = []
  for (let i = 0; i < item.length; i++) {
    // @ts-ignore
    if (item[i]['name'] !== Detail.MusicSongsDetailList.DetailTitle['title']) {
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
  grid-template-rows: repeat(2, 25vh 59vh);
  grid-row-gap: 20px;
  overflow-y: hidden;
}

.recommend-playlist {
  position: relative;
  display: flex;
  z-index: 2;
  box-shadow: -2px 1px 5px rgba(0, 0, 0, .1);

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

.recommend-songs-list {
  grid-template-columns: repeat(1, 3fr 2fr);
  grid-column-gap: 5px;
  margin-left: 5px;

  .recommend-songs, .recommend-recommend {
    height: 56.5vh;
  }

  .recommend-songs {
    .recommend-songs-list {
      height: 100%;

      ul {
        height: 50%;

        li {
          display: flex;
          height: 3rem;
          line-height: 3rem;
          transition: background .5s;
          border-radius: 3px;
          margin: 4px 0;

          &:hover {
            background-color: var(--header-menu-background-active);
            cursor: pointer;
          }

          span {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 700;


            &:nth-child(1) {
              text-align: left;
              padding: 0 8px;
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
      height: 56.5vh;
      grid-template-rows: repeat(3, 30%);
      grid-template-columns:repeat(2, 1fr);
      gap: 5px;

      & > :first-child {
        grid-column: span 2;
      }
    }

  }
}

</style>