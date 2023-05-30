<script setup lang="ts">
import {useSearchComputed} from "../uilt/vueComputed";
import useStore from "../stores/counter";
import {useOtherSetting} from '../uilt/vueComputed'
import MusicScroll from "./MusicScroll.vue";

const {Start} = useStore()
const {OtherSettingTitle} = useOtherSetting()
const {searchBackground} = useSearchComputed()

</script>

<template>
    <div id="ArgNotice" :style="searchBackground">
        <div class="title">
            <span>{{ OtherSettingTitle }}</span>
        </div>
        <div class="content" v-show="Start.otherSetting === 'concerning'">
            <span>爱音乐-2023毕业设计，作品灵感借鉴MyFreeMp3与YesPlayMusic</span>
            <span>如有疑问请发送邮件 lxldrsk@outlook.com或2387046197@qq.com</span>
        </div>
        <div class="content" v-show="Start.otherSetting === 'agreement'">
            <music-scroll>
                <p>麻省理工学院许可证</p>
                <p>版权所有（c）[年份][全名]</p>
                <p>特此免费向任何获得副本的人授予许可</p>
                <p>本软件和相关文档文件（“软件”）的在软件中不受限制，包括但不限于权利使用、复制、修改、合并、发布、分发、分许可和/或出售软件的副本，并允许软件的使用者按照以下条件提供：</p>
                <p>上述版权声明和本许可声明应包含在软件的副本或实质部分。</p>
                <p>软件是“按原样”提供的，没有任何形式的担保，明示或 隐含的，包括但不限于适销性保证，适用于特定目的和不侵权。在任何情况下作者或版权持有人应对任何索赔、损害或其他责任，无论是在合同诉讼、侵权行为还是其他方面，由，因软件或在软件。</p>
            </music-scroll>
        </div>
        <div class="content" v-show="Start.otherSetting === 'ThisUpdate'">
            <p>1、歌曲喜欢与页面样式更新</p>
            <p>2、打包界面优化</p>
            <p>3、修复若干bug</p>
            <p>4、修复播放列表与小菜单显示，增加播放历史查看</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
#ArgNotice {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 560px;
  height: 480px;
  z-index: 1200;
  background: var(--search-background);

  .title, .content {
    padding: 15px 20px;
  }

  .title {
    text-align: center;
  }

  .content {
    overflow: hidden;

    & span:nth-child(n), p:nth-child(n) {
      margin: 8px 0;
    }
  }
}
</style>