<template>
  <div v-if="Start.LoginShow" class="RightHomeCss MusicLove">
    <Information></Information>
  </div>
  <div v-if="route.meta['ThatLoveShow']" class="RightHomeCss">
    <div class="MyLove flex-Music-sizing">
      <h2>{{ $t('msg.MusicThatILove') }}</h2>
      <div class="flex-Music-flexWarped">
        <router-link class="MyLove-left flex-Music-radius-10 flex-Music-res" to="/MusicThatILove/LoveDetail">
          <span class="flex-Music-padding-title-List flex-Music-sizing flex-Music-position">在这个音乐的世界里，你可以随心所欲地倾听你最喜爱的艺术家和音乐类型。从轻松的流行曲到古典音乐，我们的音乐库中拥有无数的歌曲和专辑等待着你来发现和欣赏。</span>
          <div
              class="MyLove-left-text flex-Music-position  flex-Music-flex flex-Music-padding-title-List flex-Music-sizing">
            <div class="">
              <span>我喜欢的音乐</span>
              <span>{{ Detail.MusicSongsDetailList.DetailSong.length + '首歌' }}</span>
            </div>
            <div class="MyLove-left-play flex-Music-radius-50 flex-Music-radius-50"
                 @click.stop.prevent="AudioListPush()">
              <n-icon color="#fff" size="30">
                <play/>
              </n-icon>
            </div>
          </div>
        </router-link>
        <div class="MyLove-right">
          <ul class="flex-Music-flex">
            <li v-for="item in Detail.MusicSongsDetailList.DetailSong.slice(0,12)"
                :id="Audio.MusicSong.length === 0 ? '' : (Audio.MusicSong.data[0]['id'] === item['id'] ? 'MyLoveSelect' : '') "
                class="flex-Music-sizing flex-Music-padding-title-HomeRecommendation flex-Music-radius-3 flex-Music-pointer"
                @dblclick="Player(item['id'] , item)">
              <div class="flex-Music-flex">
                <div>
                  <img v-lazy="item['al']['picUrl'] + '?param=400y400'">
                </div>
                <div>
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
  <router-view></router-view>
</template>

<script lang="ts" setup>
import '../../style/ThatLove.sass'
import Information from '../../components/TextInformation.vue'
import {Play} from '@vicons/ionicons5'
import {AudioListPush, Player} from '../../uilt/VueIncident'
import useStore from "../../stores/counter";
import {DetailThatLove} from "../../uilt/Api/DetailApi";
import {nextTick, onMounted} from "vue";
import {useRoute} from "vue-router";

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

