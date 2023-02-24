<template>
  <div id="login">
    <img src="" alt="" id="qrImg">
  </div>
</template>
<script setup lang="ts">

import {LoginAxios} from '../uilt/Api/LoginApi'
import {onMounted} from "vue";

onMounted(() => {
  LoginAxios()
})

</script>

<style lang="scss">
#login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  height: 300px;
  background-color: #fff;
  z-index: 1000;
  img {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

  }
}
</style>