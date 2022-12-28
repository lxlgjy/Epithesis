<template>
  <div id="MainBoxOne">
    <div id="mainLis">
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
        <tr v-for="(item,index) in store.MusicList['playlist']['tracks']" key="item.id" >
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
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {Axios} from "../../uilt/Axios";
import {useStore} from "../../stores/counter";
import {onMounted} from "vue";
import '../../assets/css/Detail.css'
const router = useRoute()
const store = useStore()

const id = router.params.id
const http = async () => {
  const MusicList: any = await Axios(`http://127.0.0.1:3000/playlist/detail?id=${id}`, 'get')
  console.log(MusicList.data)
  store.getMuiscList(MusicList.data)
}
const time = (time:any) => {
  let data:number = time
  return parseInt(data / 1000 / 60) + ':' + parseInt(time / 1000 % 60)
}

onMounted(() => {
  http()
})
</script>

