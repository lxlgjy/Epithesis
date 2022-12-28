<template>
  <li id="search">
    <lay-button border="blue" @click="login">登录</lay-button>
  </li>
  <lay-layer title="登录" v-model="visible1" :move="false" anim="3" :area="['400px','500px']">
    <div id="login">
      <div id="admin">
        <lay-input  type="text" placeholder="用户名或手机号"></lay-input>
      </div>
      <div id="psod">
        <lay-input  type="password" placeholder="密码"></lay-input>
      </div>
      <div id="checked">
        <lay-checkbox name="like" skin="primary"  v-model="checked1" value="1" label="记住密码"></lay-checkbox>
      </div>
      <div id="btn">
        <lay-button type="normal" size="lg">登录</lay-button>
      </div>
    </div>
  </lay-layer>
</template>

<script setup lang="ts">
import {ref} from "vue";

const visible1 = ref(false)

const login = function() {
  visible1.value = !visible1.value
}

const checked1 = ref(false)

</script>