<template>
  <div id="Search">
    <div class="Search-page">
      <div class="Search-top">
        <div>
          <!--linux桌面端多方歌曲搜索-->
        </div>
        <div class="Search-top-input">
          <input type="text" placeholder="搜索">
          <button @click="search">搜索</button>
        </div>
      </div>
      <div class="Search-bottom">
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {search } from '../uilt/VueIncident'
</script>

<style scoped lang="scss">
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
      border-bottom: 1px solid rgba(23,45,67,.3);
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
      height: 35rem;
    }

  }
}

</style>