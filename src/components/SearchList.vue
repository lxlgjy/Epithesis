<template>
  <n-scrollbar trigger="hover">
    <div class="RightHomeCss">
      <div class="SearchBox">
        <input type="text">
      </div>
      <div class="AListOfSearchResults">
        <div class="ListTitle">
          <ul>
            <li class="SearchImg"></li>
            <li class="SearchNotice">歌曲标题</li>
            <li class="SearchAlbum">专辑</li>
            <li class="SearchTime">时长</li>
          </ul>
        </div>
        <div class="ListInformation">
          <ul>
            <li v-for="(item,index) in Search.SearchTheList" :key="item.id"
                class="componentPage-sizing componentPage-pointer" @contextmenu="Capabilities($event , item)"
                @dblclick="Player(item['id'] , item)">
              <p class="SearchImg componentPage-sizing">
                <img v-lazy="item.al.picUrl + '?param=50y50' ">
              </p>
              <div class="SearchNotice">
                <p>{{ item.name }}</p>
                <p>{{ item.ar[0].name }}</p>
              </div>
              <p class="SearchAlbum">{{ item.al.name }}</p>
              <p class="SearchTime">{{ Time(item.dt) }}</p>
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
import {Capabilities, Player} from '../uilt/VueIncident'

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

  .ListTitle, .ListInformation {
    li {
      box-sizing: border-box;

    }

    .SearchImg {
      width: 5%;
      padding: .4rem .5rem;
      height: 100%;
      margin-right: .4rem;
    }

    .SearchAlbum {
      width: 35%;
    }

    .SearchTime {
      width: 15%;
      text-align: right;
      margin-right: .4rem;
    }

    .SearchNotice {
      width: 45%;
    }
  }

  .ListTitle {
    ul {
      display: flex;

      li {
        color: rgba(23, 34, 45, .5);

        &:nth-of-type(2) {
        }
      }
    }
  }

  .ListInformation {
    ul {
      li {
        display: flex;
        height: 3rem;


        .SearchAlbum, .SearchTime {
          transform: translateY(.8rem);
        }


        &:hover {
          background-color: rgba(23, 34, 45, .2);
        }
      }

    }

  }
}
</style>