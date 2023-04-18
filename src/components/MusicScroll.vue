<template>
    <div :class="data.hidden ? 'scrollHidden' : 'scroll'" >
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


.scrollHidden {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>