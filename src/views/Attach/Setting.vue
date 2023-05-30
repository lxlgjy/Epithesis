<template>
    <div>
        <scorll>
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
                                   :Notice="Quality"
                                   :Select="Start.MusicQuality"
                                   :slotTrue="false"
                                   :title="$t('msg.MusicQuality')"></setting-component>

                <Setting-component :Introduce="$t('msg.Lyrics')"
                                   :Notice="LyricSize"
                                   :Select="Start.LyricSize"
                                   :slotTrue="false"
                                   :title="$t('msg.LyricSize')"></Setting-component>

                <div class="Agreement">
                    <span @click="OtherSettings('concerning')">关于</span>
                    <span @click="OtherSettings('agreement')">协议</span>
                    <span @click="OtherSettings('ThisUpdate')">本次更新内容</span>
                </div>

            </div>
        </scorll>
    </div>
</template>

<script lang="ts" setup>
import useStore from "../../stores/counter";
import SettingComponent from "../../components/SettingComponent.vue";
import {OtherSettings, themes} from '../../uilt/VueIncident'
import Scorll from '../../components/MusicScroll.vue'


const {Audio, Start} = useStore()
const LyricSize = [{label: '16px', value: '16px'}, {label: '22px', value: '22px'}, {label: '32px', value: '32px'}]
const Quality = [{label: 'standard', value: 'standard'}, {label: 'higher', value: 'higher'}, {
    label: 'exhigh',
    value: 'exhigh'
}, {label: 'lossless', value: 'lossless'}, {label: 'hires', value: 'hires'}]
</script>

<style lang="scss" scoped>
.Setting {
  padding: 16px 200px;
    .Agreement {
        display: grid;
        margin-top: 20px;
        padding: 0 20px;
        grid-template-columns: repeat(1, 1fr 1fr 1fr);
        span {
            cursor: pointer;

        }
    }
}
</style>