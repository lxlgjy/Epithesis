<template>
  <div>
    <header-top></header-top>
    <router-view v-slot="{Component , route}">
      <transition :name="route.meta.transition || 'fade' " mode="out-in">
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import '../style/AnimationEffects.sass'
import HeaderTop from "../components/HeaderTop.vue";</script>
