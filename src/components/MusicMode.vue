<template>
    <div class="alignLeft component-center" @click.stop="PlaybackModeSwitching();mess('success')">
        <n-icon v-show="Start.AudioMode === 2 " class="center" :size="Notice.size">
            <RepeatOutline/>
        </n-icon>
        <n-icon v-show="Start.AudioMode=== 1" class="center" :size="Notice.size">
            <Shuffle/>
        </n-icon>
        <n-icon v-show="Start.AudioMode === 0" class="center" :size="Notice.size">
            <ReloadOutline/>
        </n-icon>
    </div>
</template>

<script lang="ts" setup>
import {ReloadOutline, RepeatOutline, Shuffle} from "@vicons/ionicons5";
import {PlaybackModeSwitching} from "../uilt/VueIncident.js";
import {mess} from "../uilt/VueEvent.js";
import useStore from "../stores/counter";
import {defineProps, PropType} from 'vue'

const {Start} = useStore()

const Notice = defineProps({
    size: Number || String || undefined
})


</script>

<style scoped>
i {
    color: var(--color)
}
</style>