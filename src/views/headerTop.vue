<template>
  <div id="header">
    <div>
      <div>
        <div id="headers">
          <!-- 网页logo -->
          <!-- <img src="@/assets/logo.png" alt=""> 备用方案 -->
          <div id="logo"></div>
          <div class="header-less">
            <!-- 路由导航 -->
            <ul>
              <router-link custom to="Main" v-slot="{navigate , isActive}">
                <li @click="navigate" :class="isActive ? 'music' : ''">音乐馆</li>
              </router-link>
              <router-link custom to="/MyMusic" v-slot="{navigate , isActive}">
                <li @click="navigate" :class="isActive ? 'music' : ''">我的音乐</li>
              </router-link>
              <router-link custom to="/CheckOutTheVIP" v-slot="{navigate , isActive}">
                <li @click="navigate" :class="isActive ? 'music' : ''">查看VIP</li>
              </router-link>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <hr class="hr-top"/>

    </div>

    <secondary-menu></secondary-menu>
  </div>

</template>

<script lang="ts" setup>
import '@/assets/css/headerTop.css'
import SecondaryMenu from "../components/SecondaryMenu.vue";
</script>
<style>
.music {
  color: #fff;
  background-color: #39a9ed;
}
</style>