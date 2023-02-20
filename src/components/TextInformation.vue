<template>
  <div class="result">
    <n-result status="418" title="抱歉，您还没有登陆，请登录查看" description="一切尽在不言中">
      <template #footer>
        <n-button @click="LoginClickShow">点击登陆</n-button>
      </template>
    </n-result>
  </div>
</template>

<script lang="ts" setup>
import {LoginClickShow} from '../uilt/VueIncident'
</script>

<style scoped>
.result {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>