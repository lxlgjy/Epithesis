<template>
  <div class="allPageBackground" @click="allPageBackground"></div>
</template>

<script setup lang="ts">
import {allPageBackground} from '../uilt/VueIncident'
</script>

<style scoped>
.allPageBackground {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(29,33,41,.6);
}

</style>