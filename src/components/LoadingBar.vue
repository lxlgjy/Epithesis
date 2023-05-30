<template>
    <div></div>
</template>

<script lang="ts">
import {useLoadingBar} from 'naive-ui'
import {defineComponent} from "vue";

export default defineComponent({
    setup() {
        window.$loadingBar = useLoadingBar()
    }
})
</script>

<style scoped>

</style>