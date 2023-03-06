<template>
<div>
  <header-top></header-top>
    <router-view>

    </router-view>
</div>
</template>

<script setup lang="ts">
import '../style/AnimationEffects.sass'
import HeaderTop from "../components/HeaderTop.vue";
// import {useStore} from "../stores/counter";
// const store = useStore()
</script>
