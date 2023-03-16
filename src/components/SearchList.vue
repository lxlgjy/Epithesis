<template>
  <n-scrollbar :on-scroll="scorll" trigger="hover">
    <div class="RightHomeCss">
      <div class="SearchBox">
        <input type="text">
      </div>
      <div class="AListOfSearchResults">
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
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import useStore from "../stores/counter";
import {Time} from '../uilt/PageWidgets'
import {Capabilities, Player, scorll} from '../uilt/VueIncident'

const {Search} = useStore()
</script>

<style lang="scss" scoped>
.SearchBox {
  text-align: center;

  input {
    width: 30rem;
    height: 1.5rem;
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
</style>