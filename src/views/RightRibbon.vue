<template>
  <div id="main">
    <div class="Title">
      <span>Love Music</span>
    </div>
    <div>
      <span>MUSIC</span>
    </div>
    <ul>
      <router-link v-slot="{navigate , isActive}" custom to="/Main">
        <li :class="isActive ? 'music' : ''" @click="navigate">首页</li>
      </router-link>
      <router-link v-slot="{navigate , isActive}" custom to="/Main">
        <li :class="isActive ? 'music' : ''" @click="navigate">音乐馆</li>
      </router-link>
      <router-link v-slot="{navigate , isActive}" custom to="/Main">
        <li :class="isActive ? 'music' : ''" @click="navigate">歌单</li>
      </router-link>
      <router-link v-slot="{navigate , isActive}" custom to="/Main">
        <li :class="isActive ? 'music' : ''" @click="navigate">歌手</li>
      </router-link>
      <router-link v-slot="{navigate , isActive}" custom to="/Main">
        <li :class="isActive ? 'music' : ''" @click="navigate">mv</li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import '@'

</script>