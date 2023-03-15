<template>
  <div>
    <div class="SettingTitle">
      <h3>{{ data.title }}</h3>
    </div>
    <div class="SettingContent component-flex component-content">
      <span>{{ data.Introduce + ':' }}</span>
      <slot v-if="slotTrue"></slot>
      <n-popselect v-else :options="Notice" :value="Select" trigger="click"
                   @update:value="Setting($event,data.title)">
        <n-button>{{ Select || '弹出选择' }}</n-button>
      </n-popselect>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'
import {Setting} from '../uilt/VueIncident'

const data = defineProps({
  title: String,
  Introduce: String,
  slotTrue: Boolean,
  Select: String,
  Notice: Array
})

</script>

<style lang="scss" scoped>
.SettingTitle {
  margin: 1rem 0;

  h3 {
    border-bottom: 1px solid hsla(0, 0%, 50.2%, .18);
    padding-bottom: 1rem;
  }
}

.SettingContent {
  padding: 0 1.5rem;


  span {
    margin-right: 2rem;
  }
}
</style>