<template>
  <!-- 顶部 -->
  <appTopnavVue></appTopnavVue>
  <!-- navbar -->
  <appHeader></appHeader>
  <appHeaderStickyVue></appHeaderStickyVue>
  <!-- 主体内容部分 -->
  <main class="app-body">
    <!-- 二级路由占位符的位置 -->
    <router-view></router-view>
  </main>
  <!-- footer -->
  <appFooter></appFooter>
</template>

<script setup lang="ts" name="Layout">
import appTopnavVue from '@/views/app-topnav.vue'
import appHeader from '@/views/app-header.vue'
import appFooter from '@/views/app-footer.vue'
import appHeaderStickyVue from './app-header-sticky.vue'
import useStore from '@/store'
const category = useStore().category
</script>

<style scoped lang="less"></style>
