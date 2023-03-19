<template>
  <div class="scroll">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.scroll {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .3);
    border-radius: 5px;
  }

}
</style>