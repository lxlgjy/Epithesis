<template>
  <!-- 开头组件开发 -->
  <HeaderTop></HeaderTop>
  <!-- main 内容组件开发-->
  <Main></Main>
  <!-- 底部组件开发 -->
   <FooterTop></FooterTop>
</template>

<script lang="ts" setup>
import HeaderTop from './views/headerTop.vue'
import Main from './views/Main.vue'
import FooterTop from './views/footerTop.vue'
import '@/assets/css/content.css'
import '@/assets/css/AnimationEffects.css'
</script>