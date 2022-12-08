<template>
  <div id="mainOrigin">
    <ul>
      <li v-for="item in Origin(item.OriginData)"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted} from "vue";
import { OriginHander} from '../uilt/MainContent'

const item = defineProps({
  OriginData:Object
})

onMounted(() => {
  OriginHander()
})

const Origin = (item:any) => {
  const totle:number = Math.ceil(item.Home.introduce.totle / 5)
  return totle
}
</script>