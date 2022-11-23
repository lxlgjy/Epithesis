<template>
  <div>
    <div v-for="item in main" key="item.id" id="MainBox">
      <div id="main"></div>
      <div id="mainLis">
        <div class="main-title">
          <h2>{{ item.names }}</h2>
        </div>
        <div>
          <ul class="main-title-level">
            <li v-for="items in item.introduce">{{ items }}</li>
          </ul>
        </div>
        <div class="main-box-first">
          <ul class="main-ul">
            <li v-for="items in item.liImg" key="items.id" class="main-lis">
              <div class="main-lis-allBox">
                <div class="main-lis-kiss">
                  <a href="javascript:;">
                    <img :src="items.img" alt="">
                    <i class="main-masking"></i>
                    <i class="main-cover"></i>
                  </a>
                </div>
                <h4 class="main-lis-txt">
                                    <span>
                                        <a href="javascript:;">
                                            {{ items.titles }}
                                        </a>
                                    </span>
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/css/Home.css'
import {slide} from '@/uilt/slide'
import {onMounted} from 'vue';

//实例创建完成，挂载后执行
onMounted(() => {
  slide()
})

const main = [
  {
    id: 1,
    names: '歌单推荐',
    introduce: ['为你推荐', '原创经典', '网络歌曲', '官方歌单', '情歌'],
    liImg: [
      {
        id: 11,
        img: 'https://qpic.y.qq.com/music_cover/CdwiccEXcIPFq6IyiciasvjOyHxs63McPbmcWoiaT9Cd6glJn924u6uQvw/300?n=1',
        titles: '伤感碎片：爱情里面你我皆罪人'
      },
      {
        id: 12,
        img: 'https://qpic.y.qq.com/music_cover/3sZgibm04hICGbleGFmh9SfK2WcsYtoSoEUMIBT5fcjz4ph6uUlOJqg/300?n=1',
        titles: '90后印记｜最难以割舍的经典旋律'
      },
      {
        id: 13,
        img: 'https://qpic.y.qq.com/music_cover/8CIqeYhgt3dKXrjdPVzpdGXc0pVdGO7ia5juBHn8NAALGtAOaiaaHtZg/300?n=1',
        titles: '秋季限定·我的氛围感电音歌单'
      },
      {
        id: 14,
        img: 'https://qpic.y.qq.com/music_cover/hlZUYgj8FnMFqmDjbhO9kUqib3SlVcCib3qHbtzAuYicI2RulXoEz0QUA/300?n=1',
        titles: '治愈系｜希望岁月让我们变得更好'
      },
      {
        id: 15,
        img: 'https://qpic.y.qq.com/music_cover/p5Qmf0LevmgOiaQdIJJAYyytWBL7vOvXJTYt4kLflv1D8uiadVZ9Zrxw/300?n=1',
        titles: '海外爆火神曲·Internet Hits'
      },
      {
        id: 11,
        img: 'https://qpic.y.qq.com/music_cover/CdwiccEXcIPFq6IyiciasvjOyHxs63McPbmcWoiaT9Cd6glJn924u6uQvw/300?n=1',
        titles: '伤感碎片：爱情里面你我皆罪人'
      },
      {
        id: 12,
        img: 'https://qpic.y.qq.com/music_cover/3sZgibm04hICGbleGFmh9SfK2WcsYtoSoEUMIBT5fcjz4ph6uUlOJqg/300?n=1',
        titles: '90后印记｜最难以割舍的经典旋律'
      },
      {
        id: 13,
        img: 'https://qpic.y.qq.com/music_cover/8CIqeYhgt3dKXrjdPVzpdGXc0pVdGO7ia5juBHn8NAALGtAOaiaaHtZg/300?n=1',
        titles: '秋季限定·我的氛围感电音歌单'
      },
      {
        id: 14,
        img: 'https://qpic.y.qq.com/music_cover/hlZUYgj8FnMFqmDjbhO9kUqib3SlVcCib3qHbtzAuYicI2RulXoEz0QUA/300?n=1',
        titles: '治愈系｜希望岁月让我们变得更好'
      },
      {
        id: 15,
        img: 'https://qpic.y.qq.com/music_cover/p5Qmf0LevmgOiaQdIJJAYyytWBL7vOvXJTYt4kLflv1D8uiadVZ9Zrxw/300?n=1',
        titles: '海外爆火神曲·Internet Hits'
      },
    ]
  },
  {
    id: 2,
    names: '新歌首发',
    introduce: ['最新', '内地', '港台', '欧美', '韩国', '日本']
  },
  {
    id: 3,
    names: '精彩推荐'
  },
  {
    id: 4,
    names: '新碟首发'
  },
  {
    id: 5,
    names: '排行榜'
  },
  {
    id: 6,
    names: 'MV'
  }
]
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>