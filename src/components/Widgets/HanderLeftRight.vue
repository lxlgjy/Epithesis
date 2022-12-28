<template>
  <div id="mainSlide">
    <div class="main-slide-left">
      <a href="javascript:" @click="HanderLeft(item.UL,item.Box,item.LI)">
        <i class="main-left"></i>
      </a>
    </div>
    <div class="main-slide-right">
      <a href="javascript:" @click="HanderRight(item.UL,item.Box,item.LI,item.index)">
        <i class="main-right"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HanderLeft , HanderRight } from '../../uilt/MainContent'
import {defineProps} from 'vue'

const item = defineProps({
  UL:String,
  Box:String,
  LI:String,
  index:Number
})
</script>