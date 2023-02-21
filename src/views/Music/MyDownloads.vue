<template>
  <div id="Download" class="RightHomeCss">
    <n-result
        status="info"
        title="提示"
        description="该功能暂时不在web网页端展示，下载结果请在浏览器常用下载目录查看"
    >
    </n-result>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#Download {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>