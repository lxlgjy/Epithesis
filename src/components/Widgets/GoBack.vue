<!--前进和后退组件-->
<template>
  <div id="GoBack">
    <div class="GoBack">
      <lay-icon size="25px" type="layui-icon-left" @click="left"></lay-icon>
      <lay-icon size="25px" type="layui-icon-right" @right="right"></lay-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "../../router";


const left = () => {
  router.back()
}
const right = () => {
  // router.go()
}
</script>

<style scoped>
#GoBack {
  position: absolute;
  top: 41px;
  left: 180px;
}

.GoBack {
  display: flex;
}

/*layui修改*/
.layui-icon-left:hover, .layui-icon-right:hover {
  background-color: #f3f3f3;
  border-radius: 2px;
}
</style>