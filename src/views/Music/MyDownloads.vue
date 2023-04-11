<template>
  <div  class="RightHomeCss download Music-relative">
      <div class="Download Music-relative">
          <n-result
                  status="info"
                  title="提示"
                  description="该功能暂时不在web网页端展示，下载结果请在浏览器常用下载目录查看"
          >
          </n-result>
      </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.download {
  top: 50%;
  left: 50%;
}
.Download {
  transform: translateX(-50%) translateY(-50%);
}
</style>