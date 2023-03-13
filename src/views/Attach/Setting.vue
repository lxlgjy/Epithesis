<template>
  <n-scrollbar trigger="hover">
    <div class="RightHomeCss Setting">
      <h2>{{ $t('msg.SetUp') }}</h2>
      <setting-component :Introduce="$t('msg.PageThemeSwitching')" :Notice="[]" :Select="''" :slotTrue="true"
                         :title="$t('msg.WhetherToTurnOnDarkTheme')">
        <n-space>
          <n-switch v-model:value="Start.ThemesBoolean" :update.value="themes(Start.ThemesBoolean)"
                    style="--n-rail-color-active:#000"/>
        </n-space>
      </setting-component>
      <Setting-component :Introduce="$t('msg.Language')"
                         :Notice="[{label: $t('msg.Chinese'), value: $t('msg.Chinese')}, {label: $t('msg.English'),value: $t('msg.English')}]"
                         :Select="Start.Language"
                         :slotTrue="false"
                         :title="$t('msg.LanguageSwitching')"></Setting-component>
      <setting-component :Introduce="$t('msg.MusicQualitySwitching')"
                         :Notice="[{label: $t('msg.High'), value: $t('msg.High')}, {label: $t('msg.Middle'),value: $t('msg.Middle')}, {label: $t('msg.Low'),value: $t('msg.Low')}]"
                         :Select="Start.MusicQuality"
                         :slotTrue="false"
                         :title="$t('msg.MusicQuality')"></setting-component>

      <Setting-component :Introduce="$t('msg.Lyrics')"
                         :Notice="[{label: '16px', value: '16px'}, {label: '22px', value: '22px'}, {label: '32px',value: '32px'}]"
                         :Select="Start.LyricSize"
                         :slotTrue="false"
                         :title="$t('msg.LyricSize')"></Setting-component>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import useStore from "../../stores/counter";
import SettingComponent from "../../components/SettingComponent.vue";
import {themes} from '../../uilt/VueIncident'

const {Audio, Start} = useStore()

</script>

<style lang="scss" scoped>
.Setting {
  padding: 2rem 25rem;
}
</style>