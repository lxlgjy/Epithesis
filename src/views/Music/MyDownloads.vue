<template>
  <div  class="RightHomeCss download Music-relative">
<!--      <div class="Download Music-relative">-->
<!--          <n-result-->
<!--                  status="info"-->
<!--                  title="提示"-->
<!--                  description="该功能暂时不在web网页端展示，下载结果请在浏览器常用下载目录查看"-->
<!--          >-->
<!--          </n-result>-->
<!--      </div>-->
      <div style="height:20rem;" class="flex-center-box Box">
          <h1>使用 anime.js 引擎，<br>驱动更自然，流畅的歌词</h1>
          <ul id="lyrics">
              <li>
                  <h1>模糊效果</h1>
              </li>
              <li>
                  <h1>超级自然的歌词动态效果</h1>
              </li>
              <li>
                  <h1>0时延超快反馈</h1>
              </li>
              <li>
                  <h1>交叉串流播放</h1>
              </li>
              <li>
                  <h1>持续优化的性能体验</h1>
              </li>
              <li>
                  <h1>响应式高兼容性布局</h1>
              </li>
          </ul>
      </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import anime from "animejs";
import {onMounted} from "vue";

onMounted(() => {
    const lyrics = document.getElementById('lyrics') as HTMLUListElement,
        lis = lyrics.getElementsByTagName("li"),
        bodyHeight = document.body.offsetHeight;
    const func = {
        funcBlur(i, lyricNum) {
            //return ''
            let offset = i - lyricNum
            return 'blur(' + (0.7 - 0.5 ** Math.abs(offset)) + 'vh)'
        },
        funcDelay(offset) {
            return Math.floor(40 * (offset * (0.9 ** Math.abs(offset))));
        }
    }
    function lyric(num){
        anime({
            easing: 'cubicBezier(.65, 0, .35, 1)', //弹簧参数  .3, .5, .2, 1
            targets: lis,
            duration: 600,

            delay: (el, i, l) => {
                return func.funcDelay(i - lyricNum)
            },
            fontSize: (el, i, l) => {
                return 1 +'em'
            },
            filter: (el, i, l) => {
                return func.funcBlur(i, lyricNum)
            },
            color: (el, i, l) => {
                let offset = i - lyricNum
                if (i == lyricNum) return 'rgb(0,0,0,0.9)'

                return 'rgb(0,0,0,' + (0.6 * (0.5 ** Math.abs(offset))) + ')'
            },translateY: (el, i, l) => {
                return Math.floor(lyrics.offsetTop - lis[lyricNum].offsetTop + (
                    bodyHeight * 0.04))
            }
        })
    }
    let lyricNum = -1
    function lyricMain(){
        lyricNum++;
        if(lyricNum == lis.length){lyricNum = 0}
        lyric()
        setTimeout(() => {
            lyricMain()
        },1500);
    }
    lyricMain()
})

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