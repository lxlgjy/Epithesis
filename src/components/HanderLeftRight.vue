<template>
  <div id="mainSlide">
    <div class="main-slide-left">
      <a href="javascript:" @click="HanderLeft">
        <i class="main-left"></i>
      </a>
    </div>
    <div class="main-slide-right">
      <a href="javascript:" @click="HanderRight">
        <i class="main-right"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HanderLeft , HanderRight } from '../uilt/MainContent'
</script>