<template>
  <div>
    <music-scroll>
      <div class="RightHomeCss">
        <div class="SearchBox">
        <span class="Search component-grid">
          <input class="SearchAgain component-sizing" placeholder="搜索" type="text">
          <n-icon class="component-pointer" size="20" @click="SearchAgain">
            <SearchOutline/>
          </n-icon>
        </span>
        </div>
        <div v-show="!Start.PlayListLoading" class="AListOfSearchResults">
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
              <li v-for="(item,index) in Search.SearchTheList" key="item.id"
                  class="DetailLi component-flex component-sizing component-pointer component-radius-4"
                  @contextmenu="Capabilities($event , item)"
                  @dblclick="Player(item['id'] , item)">
                <p class="imageAndIndex">
                  <img v-lazy="item.al.picUrl + '?param=50y50' ">
                </p>
                <div>
                  <p>{{ item.name }}</p>
                  <p>{{ item.ar[0].name }}</p>
                </div>
                <p class="AlbumAndTime">{{ item.al.name }}</p>
                <p class="AlbumAndTime Time">{{ Time(item.dt) }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="Start.PlayListLoading">
          <n-space class="SearchLoading component-relative" style="background: transparent;display:block;">
            <n-spin :show="true" size="small" stroke="#6270e7"/>
          </n-space>
        </div>
      </div>
    </music-scroll>
  </div>

</template>

<script lang="ts" setup>
import useStore from "../stores/counter";
import {Time} from '../uilt/PageWidgets'
import {Capabilities, Player, SearchAgain} from '../uilt/VueIncident'
import {SearchOutline} from '@vicons/ionicons5'
import MusicScroll from "./MusicScroll.vue";

const {Search, Start} = useStore()
</script>

<style lang="scss" scoped>
.SearchBox {
  text-align: center;

  .Search {
    position: sticky;
    top: 0;
    width: 550px;
    height: 30px;
    background-color: var(--search-background);
    left: 50%;
    transform: translateX(-50%);
    grid-template-columns: repeat(1, 15fr 1fr);
    align-content: center;

    input {
      outline: none;
      background: none;
      color: #fff;
      border: none;
      padding: 4px;
    }

    i {
      padding-left: 5px;
    }
  }


}

.AListOfSearchResults {
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
}

.SearchLoading {
  width: 50px;
  height: 50px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>