<script lang="ts" setup name="AppHeaderSticky">
import AppHeaderNav from './app-header-nav.vue'
// import { onMounted, ref, onBeforeUnmount } from 'vue'
// const isShow = ref(false)
// function scrollScreen() {
//   if (window.document.documentElement.scrollTop >= 78) {
//     isShow.value = true
//   } else {
//     isShow.value = false
//   }
// }
// onMounted(() => {
//   window.document.addEventListener('scroll', scrollScreen)
// })
// onBeforeUnmount(() => {
//   //防止内存泄漏
//   window.document.removeEventListener('scroll', scrollScreen)
// })

//vueuse
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
const isShow = computed(() => {
  return y.value >= 78
})
</script>

<template>
  <div class="app-header-sticky" :class="{ show: isShow }">
    <div class="container" v-show="isShow">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);

  &.show {
    transition: all 0.3s linear;
    transform: translateY(0%);
  }
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
