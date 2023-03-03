<template>
  <div id="Header-Top" >
    <div class="Header-Top-Router">
      <n-icon  size="20" class="icon"  @click="headerTopLeft">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"></path>
        </svg>
      </n-icon>
      <n-icon  size="20" class="icon" @click="headerTopRight">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M9 6l6 6l-6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"></path>
        </svg>
      </n-icon>
    </div>
    <div class="Header-Top-Search">
      <div class="input" @click="headerTopInput">
        <span>搜索</span>
      </div>
    </div>
    <div class="Header-Top-Image" @click="avatarToggle" >
      <img :src="Login.MusicUname.avatarUrl" >
    </div>
    <transition name="headerMenu">
      <div class="header-menu" v-if="Start.LoginAvatar">
        <ul>
          <li v-for="item in data" :key="item">{{item}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import '../style/AnimationEffects.sass'
import {headerTopLeft ,headerTopRight , headerTopInput , LoginClickShow} from "../uilt/VueIncident";
import {avatarToggle} from "../uilt/StateTransitions";
import useStore from "../stores/counter";
const {Login , Start} = useStore()
const data = Start.LoginShow ?  ['登录','非vip'] : ['vip','退出登录']
</script>

<style scoped>
.header-menu {
  position: absolute;
  right: 1rem;
  top: 4rem;
  background-color: #fff;
  color: #000;
  box-shadow: 3px 0 8px rgba(34,45,67,.3);
}
.header-menu li {
  width: 11rem;
  height: 2.5rem;
  padding: 4px 0 4px 8px;
  box-sizing: border-box;
}
.header-menu li:hover {
  background-color: rgba(34,45,67,.13);
}
.header-menu::after {
  content: '';
  display: block;
  width: .5rem;
  height: .5rem;
  border-top: 1px solid rgba(34,45,67,.3);
  border-right: 1px solid rgba(34,45,67,.3);
  transform: translateX(90px) translateY(-85px) rotate(-45deg);
  background-color: #fff;
  box-shadow: 1px -1px 2px rgba(34,45,67,.21);
}
#Header-Top {
  position: absolute;
  top: 0;
  z-index: 20;
  width: var(--page-width);
  display: flex;
  border-bottom: 1px solid var(--border);
  padding: 5px 50px;
  box-sizing: border-box;
  color: rgba(23,34,56,.3);
  backdrop-filter: blur(5px);
  background-color: rgba(255,255,255,.75);
}
.Header-Top-Router , .Header-Top-Search , .Header-Top-Image {
  background-color: transparent;
}

.Header-Top-Router .icon {
  border-radius: var(--border-round);
  width: 2.3rem;
  height: 2.3rem;
  text-align: center;
  margin-right: 10px;
  box-sizing: border-box;
  transition: background-color .7s;
  color: initial;
  opacity: .8;
}

.Header-Top-Router .icon svg {
  transform:translateX(-0.1rem) translateY(0.5rem);
}
.Header-Top-Router .icon:hover {
  background-color: rgba(39,46,59,.18);
  color: initial;
  opacity: 1;
}

.Header-Top-Search div {
  width: 100%;
  height: 1rem;
  padding: 5px;
  border-radius: 8px;
  background-color: rgba(39, 46, 59, .08);
  transform: translateY(.4rem);
  transition: background-color .4s;
}
.Header-Top-Search div:hover {
  background-color: rgba(39,46,59,.25);
}
.input span {
  padding-left: 5px;
  transform: translateY(-2px);
  display: block;
  text-align: center;
}
.input span:hover {
  cursor: pointer;
}


.Header-Top-Router {
  width: 10%;
}

.Header-Top-Search {
  width: 80%;
}

.Header-Top-Image {
  width: 2.6%;
  height: 2.3rem;
  padding-left: 80px;
}
.Header-Top-Image img {
  border-radius: 50%;

}
</style>