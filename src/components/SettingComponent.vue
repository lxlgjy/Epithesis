<template>
    <div>
        <div class="SettingTitle">
            <h3>{{ data.title }}</h3>
        </div>
        <div class="SettingContent component-flex component-content">
            <span>{{ data.Introduce + ':' }}</span>
            <slot v-if="slotTrue"></slot>
            <n-popselect v-else :options="data.Notice" :value="data.Select" trigger="click"
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
  margin: 16px 0;

  h3 {
    border-bottom: 1px solid hsla(0, 0%, 50.2%, .18);
    padding-bottom: 16px;
  }
}

.SettingContent {
  padding: 0 18px;


  span {
    margin-right: 32px;
  }
}
</style>