<template>
  <div id="Search" :style="searchBackground">
    <div class="Search-page">
      <div class="Search-top">
        <div>
          <!--linux桌面端多方歌曲搜索-->
        </div>
        <div class="Search-top-input">
          <input placeholder="搜索" type="text">
          <button @click="search">{{ $t('msg.Search') }}</button>
        </div>
      </div>
      <div class="Search-bottom component-warp component-sizing">
        <div class="SearchPopular component-hidden component-height-100">
          <h3>{{ $t('msg.PopularSearches') }}</h3>
          <n-scrollbar trigger="hover">
            <div v-for="item in Search.HotSearchList"
                 class="SearchPopularList component-pointer component-sizing"
                 @click="search('Hot',item.searchWord)">
              {{ item.searchWord }}
            </div>
          </n-scrollbar>
        </div>
        <div class="SearchHistory">
          <h3>{{ $t('msg.SearchHistory') }}</h3>
          <n-scrollbar trigger="hover">
            <div v-for="item in Search.SearchHistory" v-if="Search.SearchHistory.length"
                 class="SearchHistoryList component-sizing component-pointer"
                 @click="search('Hot',item.SearchForAValue)">
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
import {useSearchComputed} from '../uilt/vueComputed'

const {Search} = useStore()
const {searchBackground} = useSearchComputed()
</script>

<style lang="scss" scoped>
#Search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 560px;
  height: 480px;
  z-index: 120;
  background: var(--search-background);


  .Search-page {
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .Search-top {
      width: 100%;
      height: 80px;
      border-bottom: 1px solid var(--active);

      .Search-top-input {
        padding: 5px 20px;
        box-sizing: border-box;
        display: flex;

        input {
          width: 100%;
          height: 64px;
          border: none;
          outline: none;
          background: var(--search-background);
          color: var(--color);
        }

        button {
          color: var(--color);

          &:hover {
            cursor: pointer
          }
        }
      }
    }

    .Search-bottom {
      height: 400px;
      padding: 8px 32px;

      .SearchHistory, .SearchPopular {
        width: 50%;

        h3 {
          text-align: center;
          margin-bottom: 4.8px;
        }
      }

      .SearchPopular {

        .SearchPopularList {
          width: 192px;
          padding: 3.2px 9.6px;
        }

        .SearchPopularList:hover {
          background-color: var(--active);
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
          margin: 8px 4.8px;
          background-color: var(--history);
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