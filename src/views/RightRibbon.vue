<template>
  <div>
    <div class="Logo">
      <span>#Love Music</span>
    </div>
    <div class="Title">
      <span>MUSIC</span>
    </div>
    <div class="Ribbon">
      <ul>
        <router-link v-slot="{navigate , isActive}" custom to="/Home">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon :class="isActive ? 'icon Home' :
            'Home initialIcon' " size="20">
              <HomeSharp/>
            </n-icon>
            <li>首页</li>
          </div>
        </router-link>
        <router-link v-slot="{navigate ,isActive}" custom to="/Playlist">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon :class="isActive ? 'icon Home' :
            'Home initialIcon' " size="20">
              <ListCircle/>
            </n-icon>
            <li>歌单</li>
          </div>
        </router-link>
        <router-link v-slot="{navigate , isActive}" custom to="/singer">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate()">
            <n-icon :class="isActive ? 'icon Home' :
            'Home initialIcon' " size="20">
              <Person/>
            </n-icon>
            <li>歌手</li>
          </div>
        </router-link>
        <router-link v-slot="{navigate , isActive}" custom to="/MV">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon :class="isActive ? 'icon Home' :
            'Home initialIcon' " size="20">
              <CardSharp/>
            </n-icon>
            <li>MV</li>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="Title">
      <span>My Music</span>
    </div>
    <div class="Ribbon">
      <ul>
        <router-link v-slot="{navigate , isActive}" custom to="/MusicThatILove">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon :class="isActive ? 'icon Home' :
            'Home initialIcon' " size="20">
              <HeartSharp/>
            </n-icon>
            <li>我喜欢的音乐</li>
          </div>
        </router-link>
        <router-link v-slot="{navigate , isActive}" custom to="/MyDownloads">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon :class="isActive ? 'icon Home' :
            'Home initialIcon' " size="20">
              <Archive/>
            </n-icon>
            <li>我的下载</li>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="Attach">
      <div class="setting">
        <router-link v-slot="{navigate , isActive}" custom to="/Setting">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <li>设置</li>
          </div>
        </router-link>
      </div>
      <div class="agreement">
        <router-link v-slot="{navigate , isActive}" custom to="/Agreement">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <li>协议</li>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text">
      <span>2022-2023毕业设计</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/style/RightRibbon.sass'
import {
  Archive,
  CardSharp,
  CaretForwardCircleSharp,
  HeartSharp,
  HomeSharp,
  ListCircle,
  LogoDiscord,
  LogoFlickr,
  MusicalNotesSharp,
  Person
} from '@vicons/ionicons5'
</script>

<style scoped>
.music {
  background-color: #165dff;
  color: #fff;
}

.icon {
  color: #fff
}

.initialIcon {
  color: #000;
}
</style>