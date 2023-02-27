<template>
  <div class="RightHomeCss MusicLove" v-if="Start.LoginShow">
    <Information></Information>
  </div>
  <div class="RightHomeCss" v-if="route.meta['ThatLoveShow']">
    <div class="MyLove flex-Music-sizing">
      <h2>我喜欢的音乐</h2>
      <div class="flex-Music-flexWarped">
        <router-link to="/MusicThatILove/LoveDetail" class="MyLove-left flex-Music-radius-10 flex-Music-res">
          <span class="flex-Music-padding-title-List flex-Music-sizing flex-Music-position">在这个音乐的世界里，你可以随心所欲地倾听你最喜爱的艺术家和音乐类型。从轻松的流行曲到古典音乐，我们的音乐库中拥有无数的歌曲和专辑等待着你来发现和欣赏。</span>
          <div
              class="MyLove-left-text flex-Music-position  flex-Music-flex flex-Music-padding-title-List flex-Music-sizing">
            <div class="">
              <span>我喜欢的音乐</span>
              <span>{{ Detail.MusicSongsDetailList.DetailSong.length + '首歌' }}</span>
            </div>
            <div class="MyLove-left-play flex-Music-radius-50 flex-Music-radius-50" @click.stop="AudioListPush()">
              <n-icon size="30" color="#fff">
                <play/>
              </n-icon>
            </div>
          </div>
        </router-link>
        <div class="MyLove-right">
          <ul class="flex-Music-flex">
            <li v-for="item in Detail.MusicSongsDetailList.DetailSong.slice(0,12)"
                class="flex-Music-sizing flex-Music-padding-title-HomeRecommendation flex-Music-radius-3 flex-Music-pointer"
                :id="Audio.MusicSong.length === 0 ? '' : (Audio.MusicSong.data[0]['id'] === item['id'] ? 'MyLoveSelect' : '') ">
              <!--              item['id'] === Audio.MusicSong.data[0]['id'] ? 'MyLoveSelect' : ''-->
              <div class="flex-Music-flex">
                <div>
                  <img v-lazy="item['al']['picUrl'] + '?param=400y400'">
                </div>
                <div>
                  <span>{{ item['name'] }}</span>
                  <span>{{ item['ar'][0]['name'] }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div></div>

    </div>

    <div class="MyPlayList flex-Music-sizing">
      <h2>我的歌单</h2>
      <!--      <div>可在在这里进行标题修改</div>-->
      <!--      <div>数据已在DetailApi中进行选择存储如有需要，请去该文件中添加</div>-->
      <h2>数据已在DetailApi中进行选择存储，如有需要，请去该文件中添加</h2>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import '../../style/ThatLove.sass'
import Information from '../../components/TextInformation.vue'
import {Play} from '@vicons/ionicons5'
import {AudioListPush} from '../../uilt/VueIncident'
import useStore from "../../stores/counter";
import {DetailThatLove} from "../../uilt/Api/DetailApi";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const {Start, Detail, Audio} = useStore()
const route = useRoute()
console.log(Audio.MusicSong)

onMounted(async () => {
  if (window.localStorage.getItem('cookie')) {
    await DetailThatLove()

    let SongsListId: Array<any> = []
    for (let i = 0; i < Detail.MusicSongsDetailList.DetailSong.length; i++) {
      SongsListId.push(Detail.MusicSongsDetailList.DetailSong[i].id)
    }

    Detail.getMusicLoveListId(SongsListId)
  }
})

</script>

