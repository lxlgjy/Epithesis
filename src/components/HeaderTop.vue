<template>
  <div id="Header-Top" class="component-grid">
    <div class="Header-Top-Router">
      <n-icon class="icon component-radius-50" size="20" @click="headerTopLeft">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"></path>
        </svg>
      </n-icon>
      <n-icon class="icon component-radius-50" size="20" @click="headerTopRight">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M9 6l6 6l-6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"></path>
        </svg>
      </n-icon>
    </div>
    <div class="Header-Top-DutyCycle"></div>
    <div class="Header-Top-Search">
      <div class="input" @click="headerTopInput">
        <span>{{ $t('msg.Search') }}</span>
      </div>
    </div>
    <div class="Header-Top-Image component-pointer" @click.stop="avatarToggle">
      <img :src="Login.MusicUname.avatarUrl" class="component-radius-50" v-if="!Start.LoginShow" />
        <n-icon size="43" color="#eee" v-else>
            <person/>
        </n-icon>
      <transition name="headerMenu">
        <div v-if="Start.LoginAvatar" class="header-menu">
          <ul>
            <li v-for="item in Start.LoginShow ? [$t('msg.Login'), $t('msg.SetUp')] : [ $t('msg.SetUp'), $t('msg.SignOut')]"
                :key="item" class="component-radius-2 component-pointer component-sizing"
                @click.stop="AvatarFunction(item)">{{ item }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

  </div>
</template>

<script lang="ts" setup>
import '../style/AnimationEffects.sass'
import {Person} from '@vicons/ionicons5'
import {AvatarFunction, headerTopInput, headerTopLeft, headerTopRight} from "../uilt/VueIncident";
import {avatarToggle} from "../uilt/StateTransitions";
import useStore from "../stores/counter";

const {Login, Start} = useStore()


</script>

<style lang="scss" scoped>
#Header-Top {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 55px;
  padding: 5px 50px;
  box-sizing: border-box;
  color: rgba(23, 34, 56, .3);
  backdrop-filter: blur(5px);
  grid-template-columns: repeat(1, 1fr 4fr 3fr 1.5fr);
}

.Header-Top-Router, .Header-Top-Search, .Header-Top-Image, .Header-Top-DutyCycle {
  background-color: transparent;
  opacity: 1;
}

.Header-Top-Router {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .icon {
    position: relative;
    width: 34px;
    height: 34px;
    text-align: center;
    margin-right: 10px;
    box-sizing: border-box;
    transition: background-color .7s;
    color: initial;
    opacity: .8;
    top: 50%;
    transform: translateY(-50%);

    svg {
      transform: translateX(-0.1rem) translateY(0.5rem);
    }

    &:hover {
      background-color: var(--header-active);
      color: initial;
      opacity: 1;
    }
  }

}


.Header-Top-Search {
  .input {
    padding: 8px;
    border-radius: 5px;
    transform: translateY(3px);
    transition: background-color .4s;

    span {
      padding-left: 5px;
      transform: translateY(-2px);
      display: block;
      text-align: center;

      &:hover {
        cursor: pointer;

      }
    }

  }
}

.Header-Top-Image {
  position: relative;
  width: 45px;
  height: 45px;
  left: 50%;
  transform: translateX(-50%);
}


.header-menu {
  position: absolute;
  left: -75px;
  top: 70px;
  background-color: var(--header-menu-background);
  color: #000;
  border: 1px solid var(--header-menu-background-shadow);

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-top: 1px solid var(--header-menu-background-shadow);
    border-right: 1px solid var(--header-menu-background-shadow);
    transform: translateX(90px) translateY(-5px) rotate(-45deg);
    background-color: var(--header-menu-background);
  }

  li {
    width: 170px;
    height: 40px;
    margin: 5px 4px;
    box-sizing: border-box;
    line-height: 40px;
    padding-left: 3px;

    &:hover {
      background-color: var(--header-menu-background-active)
    }
  }
}
</style>