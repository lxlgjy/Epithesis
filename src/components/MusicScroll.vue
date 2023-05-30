<template>
    <div :class="data.hidden ? 'scrollHidden' : 'scroll'">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

const data = defineProps({
    hidden: Boolean || undefined
})

</script>
<style lang="scss" scoped>

.scroll, .scrollHidden {
  width: 100%;
  height: 82.5vh;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .3);
    border-radius: 5px;
  }
}


.scrollHidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>