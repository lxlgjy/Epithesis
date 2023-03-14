<template>
  <div id="Header-Top">
    <div class="Header-Top-Router">
      <n-icon class="icon" size="20" @click="headerTopLeft">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M15 6l-6 6l6 6" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"></path>
        </svg>
      </n-icon>
      <n-icon class="icon" size="20" @click="headerTopRight">
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
    <div class="Header-Top-Image componentPage-pointer" @click="avatarToggle">
      <img :src="Login.MusicUname.avatarUrl">
    </div>
    <transition name="headerMenu">
      <div v-if="Start.LoginAvatar" class="header-menu">
        <ul>
          <li v-for="item in Start.LoginShow ? [$t('msg.Login'), $t('msg.NonVIP'), $t('msg.CheckTheVersion'), $t('msg.SetUp'),$t('msg.Concerning'), $t('msg.Agreement')] : [$t('msg.VIP'), $t('msg.CheckTheVersion'), $t('msg.SetUp'), $t('msg.Concerning'), $t('msg.Agreement'), $t('msg.SignOut')]"
              :key="item" class="componentPage-radius-2 componentPage-pointer componentPage-sizing"
              @click.stop="AvatarFunction(item)">{{ item }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import '../style/AnimationEffects.sass'
import {AvatarFunction, headerTopInput, headerTopLeft, headerTopRight} from "../uilt/VueIncident";
import {avatarToggle} from "../uilt/StateTransitions";
import useStore from "../stores/counter";

const {Login, Start} = useStore()


</script>

<style lang="scss" scoped>
#Header-Top {
  position: absolute;
  top: 0;
  z-index: 20;
  width: var(--page-width);
  display: flex;
  padding: 5px 50px;
  box-sizing: border-box;
  color: rgba(23, 34, 56, .3);
  backdrop-filter: blur(5px);
}

.Header-Top-Router, .Header-Top-Search, .Header-Top-Image, .Header-Top-DutyCycle {
  background-color: transparent;
  opacity: 1;
}

.Header-Top-Router {
  width: 10%;
}

.Header-Top-DutyCycle {
  width: 70%;
}

.Header-Top-Search {
  width: 20%;
}

.Header-Top-Image {
  width: 2.6%;
  height: 2.3rem;
  padding-left: 80px;
}

.Header-Top-Router {
  .icon {
    border-radius: var(--border-round);
    width: 2.3rem;
    height: 2.3rem;
    text-align: center;
    margin-right: 10px;
    box-sizing: border-box;
    transition: background-color .7s;
    color: initial;
    opacity: .8;

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
    width: 100%;
    height: 1rem;
    padding: .5rem;
    border-radius: 5px;
    transform: translateY(.2rem);
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
  width: 2.4rem;
  height: 2.4rem;

  img {
    border-radius: 50%;

  }
}


.header-menu {
  position: absolute;
  right: 1rem;
  top: 4rem;
  background-color: var(--header-menu-background);
  color: #000;
  border: 1px solid var(--header-menu-background-shadow);

  &::before {
    content: '';
    display: block;
    width: .5rem;
    height: .5rem;
    border-top: 1px solid var(--header-menu-background-shadow);
    border-right: 1px solid var(--header-menu-background-shadow);
    transform: translateX(90px) translateY(-5px) rotate(-45deg);
    background-color: var(--header-menu-background);
  }

  li {
    width: 11rem;
    height: 2.5rem;
    margin: 5px 4px;
    box-sizing: border-box;
    line-height: 2.5rem;
    padding-left: 3px;

    &:hover {
      background-color: var(--header-menu-background-active)
    }
  }
}
</style>