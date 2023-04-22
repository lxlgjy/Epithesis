<template>
  <div class="Player-back component-index-5">
    <button @click.stop="playerAudioShow">
      <n-icon size="40" color="#fff">
        <ChevronDownSharp/>
      </n-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import {playerAudioShow} from "../uilt/VueIncident";
import {ChevronDownSharp} from '@vicons/ionicons5'</script>

<style scoped lang="scss">
.Player-back {
  position: absolute;
  right: 60px;
  top: 50px;
  padding: 20px;

  button {
    width: 100px;
    height: 100px;

    &:hover {
      background-color: rgba(193, 200, 209, .6);
      border-radius: 35%;
    }

  }
}


</style>