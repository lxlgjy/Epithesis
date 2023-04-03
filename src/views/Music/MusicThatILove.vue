<template>
    <div v-if="Start.LoginShow" class="RightHomeCss MusicLove Music-relative">
        <Information></Information>
    </div>
    <div v-else>
        <div v-if="route.meta['ThatLoveShow']" class="RightHomeCss">
            <div class="MyLove Music-sizing">
                <h2>{{ $t('msg.MusicThatILove') }}</h2>
                <div class="Music-flex">
                    <router-link class="MyLove-left Music-radius-10 Music-relative" to="/MusicThatILove/LoveDetail">
                        <span class=" MyLove-text Music-padding-title-List Music-sizing Music-absolute">在这个音乐的世界里，你可以随心所欲地倾听你最喜爱的艺术家和音乐类型。从轻松的流行曲到古典音乐，我们的音乐库中拥有无数的歌曲和专辑等待着你来发现和欣赏。</span>
                        <div class="MyLove-left-text Music-absolute Music-flex Music-padding-title-List Music-sizing">
                            <div class="MyLove-btn-native">
                                <span>我喜欢的音乐</span>
                                <span>{{ Detail.MusicSongsDetailList.DetailSong.length + '首歌' }}</span>
                            </div>
                            <div class="MyLove-btn-play Music-center"
                                 @click.stop.prevent="AudioListPush()">
                                <n-icon class="Music-radius-50" color="#fff" size="30">
                                    <play/>
                                </n-icon>
                            </div>
                        </div>
                    </router-link>
                    <div class="MyLove-right">
                        <ul class="MyLoveUl Music-grid">
                            <li v-for="item in Detail.MusicSongsDetailList.DetailSong.slice(0,12)"
                                :id="Audio.MusicSong.length === 0 ? '' : (Audio.MusicSong.data[0]['id'] === item['id'] ? 'MyLoveSelect' : '') "
                                class="MyLoveLi Music-sizing Music-padding-title-HomeRecommendation Music-radius-3 Music-pointer"
                                @dblclick="Player(item['id'] , item)">
                                <div class="MyLoveLiBox Music-flex">
                                    <div class="MyLove-img">
                                        <img v-lazy="item['al']['picUrl'] + '?param=400y400'"
                                             class="Music-radius-3">
                                    </div>
                                    <div class="MyLove-title">
                                        <span class="flex-Music-font-hidden">{{ item['name'] }}</span>
                                        <span class="flex-Music-font-hidden">{{ item['ar'][0]['name'] }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
            <div class="MyPlayList flex-Music-sizing">
                <h2>{{ $t('msg.MyPlaylist') }}</h2>
                <!--      <div>可在在这里进行标题修改</div>-->
                <!--      <div>数据已在DetailApi中进行选择存储如有需要，请去该文件中添加</div>-->
                <h2>数据已在DetailApi中进行选择存储，如有需要，请去该文件中添加</h2>
            </div>
        </div>
        <secondary-routing-page/>
    </div>
</template>

<script lang="ts" setup>
import '../../style/ThatLove.scss'
import Information from '../../components/TextInformation.vue'
import {Play} from '@vicons/ionicons5'
import {AudioListPush, Player} from '../../uilt/VueIncident'
import useStore from "../../stores/counter";
import {DetailThatLove} from "../../uilt/Api/DetailApi";
import {nextTick, onMounted} from "vue";
import {useRoute} from "vue-router";
import SecondaryRoutingPage from "../../components/SecondaryRoutingPage.vue";

const {Start, Detail, Audio} = useStore()
const route = useRoute()

onMounted(() => {
    if (window.localStorage.getItem('cookie')) {
        nextTick(() => {
            if (route.matched.length === 2 || route.matched.length === 1) {
                DetailThatLove()
                let SongsListId: Array<any> = []
                for (let i = 0; i < Detail.MusicSongsDetailList.DetailSong.length; i++) {
                    SongsListId.push(Detail.MusicSongsDetailList.DetailSong[i].id)
                }

                Detail.getMusicLoveListId(SongsListId)
            }
        })

    }
})

</script>

