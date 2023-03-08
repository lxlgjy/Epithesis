<template>
  <div id="Search">
    <div class="Search-page">
      <div class="Search-top">
        <div>
          <!--linux桌面端多方歌曲搜索-->
        </div>
        <div class="Search-top-input">
          <input placeholder="搜索" type="text">
          <button @click="search">搜索</button>
        </div>
      </div>
      <div class="Search-bottom componentPage-flex-warp componentPage-sizing">
        <div class="SearchPopular componentPage-hidden componentPage-height-100">
          <h3>热门搜索</h3>
          <n-scrollbar trigger="hover">
            <div v-for="item in Search.HotSearchList"
                 class="SearchPopularList componentPage-pointer componentPage-sizing"
                 @click="search('Hot',item.searchWord)">
              {{ item.searchWord }}
            </div>
          </n-scrollbar>
        </div>
        <div class="SearchHistory">
          <h3>搜索历史</h3>
          <n-scrollbar trigger="hover">
            <div v-for="item in Search.SearchHistory" v-if="Search.SearchHistory.length"
                 class="SearchHistoryList componentPage-sizing" @click="search('Hot',item.SearchForAValue)">
              {{ item.SearchForAValue }}
            </div>
            <div v-else class="TheSearchHistoryIsEmpty">搜索历史为空</div>
          </n-scrollbar>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {search} from '../uilt/VueIncident'
import useStore from "../stores/counter";

const {Search} = useStore()
</script>

<style lang="scss" scoped>
#Search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 35rem;
  height: 40rem;
  z-index: 120;

  .Search-page {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .Search-top {
      width: 100%;
      height: 5rem;
      border-bottom: 1px solid rgba(23, 45, 67, .3);

      .Search-top-input {
        padding: 5px 20px;
        box-sizing: border-box;
        display: flex;

        input {
          width: 100%;
          height: 4rem;
          border: none;
          outline: none;
        }

        button {
          color: rgba(24, 34, 43, 0.8);

          &:hover {
            cursor: pointer
          }
        }
      }
    }

    .Search-bottom {
      height: 25rem;
      padding: .5rem 2rem;

      .SearchHistory, .SearchPopular {
        width: 50%;

        h3 {
          text-align: center;
          margin-bottom: .3rem;

        }
      }

      .SearchPopular {

        .SearchPopularList {
          width: 12rem;
          padding: .2rem .6rem;
        }

        .SearchPopularList:hover {
          background-color: rgba(34, 45, 56, .15);
          //background-color: #3780ce;
        }
      }

      .SearchHistory {
        position: relative;

        .SearchHistoryList {
          width: auto;
          height: auto;
          display: inline-block;
          padding: .5rem;
          border-radius: 3px;
          margin: .2rem .3rem;
          background-color: rgba(23, 34, 45, .1);
        }

        .TheSearchHistoryIsEmpty {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }

  }
}

</style>