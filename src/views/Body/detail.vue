<template>
  <GoBack></GoBack>
  <div id="MainBoxOne">
    <div id="mainLis">
      <div>
        <div class="workTop">
          <div class="workImages">
            <img :src="store.MuiscDetail['playlist']['coverImgUrl']" alt="">
          </div>
          <div class="workRight">
            <div class="workName">
              <span>歌单名称:</span>
              <p>{{ store.MuiscDetail['playlist']['name'] }}</p>
            </div>
            <div class="workAuthor">
              <span>歌单标签:</span>
              <ul>
                <li v-for="item in store.MuiscDetail['playlist']['tags']">{{item}}</li>
              </ul>
            </div>
            <div class="workDetail">
              <span>歌单详情:</span>
              <p>{{ store.MuiscDetail['playlist']['description'] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
          <tr>
            <th></th>
            <th></th>
            <th>歌曲名称</th>
            <th>歌曲作者</th>
            <th>歌曲时间</th>
            <th>歌曲专辑</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in store.MuiscDetail['playlist']['tracks']" key="item.id" >
            <td>{{index + 1}}</td>
            <td class="table-img">
              <img :src="item['al']['picUrl']" alt="">
            </td>
            <td>{{item['name']}}</td>
            <td>{{item['ar'][0]['name']}}</td>
            <td>{{time(item['dt'])}}</td>
            <td>{{item['al']['name']}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '../../assets/css/Detail.css'
import GoBack from "../../components/Widgets/GoBack.vue";
import {useRoute} from "vue-router";
import {Axios} from "../../uilt/Axios";
import {useStore} from "../../stores/counter";
import {onMounted} from "vue";

const route = useRoute()
const store = useStore()

let id = route.params.id

const http = async () => {
  const MusicDetail: any = await Axios(`http://127.0.0.1:3000/playlist/detail?id=${id}`, 'get')
  console.log(MusicDetail.data)
  store.getMusicHomeDetail(MusicDetail.data)
}

const time = (time:any) => {
  let data:number = time
  return parseInt(data / 1000 / 60) + ':' + parseInt(time / 1000 % 60)
}
onMounted(() => {
  http()
})
</script>