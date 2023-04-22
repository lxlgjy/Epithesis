<template>
    <div v-if="SkeletonShow"
         class="RightHomeCss">
        <div class="component-flex ">
            <n-skeleton class="Detail-img component-radius-4"/>
            <div class="Detail-title">
                <n-skeleton height="40px" style="margin-bottom: 10px"/>
                <n-skeleton :repeat="2" height="25px" style="margin-top: 20px"/>
                <n-skeleton :round="true" height="35px" style="margin-top: 35px" width="145px"/>
            </div>
        </div>
        <n-skeleton :repeat="4" :sharp="false" height="40px" style="margin-bottom: 15px;margin-top: 15px"/>
    </div>
    <div v-else>
        <div class="RightHomeCss">
            <n-skeleton height="30px" style="margin-bottom: 20px"/>
            <div class="component-flex">
                <n-skeleton class="MyLove-img" width="350px" height="300px"/>
                <div class="MyLove">
                    <n-skeleton  height="40px" style="margin-bottom: 20px"/>
                    <n-skeleton :repeat="3" height="40px" style="margin: 30px 0"/>
                </div>
            </div>
            <n-skeleton height="30px" style="margin-top: 20px"/>
            <n-skeleton height="50px" style="margin-top: 25px"/>
        </div>

    </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {useSkeletonComputed} from '../uilt/vueComputed'

const {SkeletonShow} = useSkeletonComputed()


const route = useRoute()

</script>

<style lang="scss" scoped>
.Detail-img {
  width: 240px;
  height: 240px;
}

.Detail-title {
  width: 79%;
  margin-left: 15px;
}

.MyLove-img {
    flex: 2;
}
.MyLove {
    flex: 5;
    margin-left: 15px;
}
</style>