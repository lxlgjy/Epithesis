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
        <router-link
            v-for="item in [{router: '/Home', notice: $t('msg.LeftBoxHome'), icon: HomeSharp}, {router: '/Playlist',notice: $t('msg.HomePLayList'),icon: ListCircle}, {router: '/singer', notice: $t('msg.LeftBoxSinger'), icon: Person}, {router: '/MV',notice: $t('msg.LeftBoxMV'),icon: CardSharp}]"
            v-slot="{navigate , isActive}" :to="item.router">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon class="Home" size="20">
              <component :is="item.icon"></component>
            </n-icon>
            <p>{{ item.notice }}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="Title">
      <span>My Music</span>
    </div>
    <div class="Ribbon">
      <ul>
        <router-link
            v-for="item in [{router: '/MusicThatILove',notice: $t('msg.LeftBoxMusicLibrary'),icon: HeartSharp}]"
            v-slot="{navigate , isActive}" :to="item.router">
          <div :class="isActive ? 'music' : ''" class="li" @click="navigate">
            <n-icon class="Home" size="20">
              <component :is="item.icon"></component>
            </n-icon>
            <li>{{ item.notice }}</li>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@/style/RightRibbon.sass'
import {Archive, CardSharp, HeartSharp, HomeSharp, ListCircle, Person} from '@vicons/ionicons5'
import useStore from "../stores/counter";
import i18n from "../i18n";

const {Start} = useStore()

</script>

<style scoped>
.music {
  background-color: #165dff;
  color: #fff;
}
</style>