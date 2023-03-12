<template>
  <n-scrollbar trigger="hover">
    <div class="RightHomeCss Setting">
      <h2>设置</h2>
      <setting-component :Introduce="'页面主题切换'" :Notice="[]" :Select="''" :slotTrue="true"
                         :title="'是否开启暗色主题'">
        <n-space>
          <n-switch v-model:value="Start.ThemesBoolean" :update.value="themes(Start.ThemesBoolean)"
                    style="--n-rail-color-active:#000"/>
        </n-space>
      </setting-component>
      <Setting-component :Introduce="'语言'" :Notice="SettingLValue" :Select="Start.Language" :slotTrue="false"
                         :title="'语言切换'"></Setting-component>
      <setting-component :Introduce="'音乐品质切换'" :Notice="SettingQ" :Select="Start.MusicQuality" :slotTrue="false"
                         :title="'音乐品质'"></setting-component>

      <Setting-component :Introduce="'歌词'" :Notice="SettingLYValue" :Select="Start.LyricSize" :slotTrue="false"
                         :title="'歌词大小'"></Setting-component>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import useStore from "../../stores/counter";
import SettingComponent from "../../components/SettingComponent.vue";
import {themes} from '../../uilt/VueIncident'

const {Audio, Start} = useStore()


const SettingQ = [{label: '高品质', value: '高'}, {label: '中品质', value: '中'}, {
  label: '低品质',
  value: '低'
}]
const SettingLValue = [{label: '汉语', value: '汉语'}, {label: '英文', value: '英文'}]
const SettingLYValue = [{label: '16px', value: '16px'}, {label: '22px', value: '22px'}, {
  label: '32px',
  value: '32px'
}]

</script>

<style lang="scss" scoped>
.Setting {
  padding: 2rem 25rem;
}
</style>