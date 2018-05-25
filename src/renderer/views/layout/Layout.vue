<template>
  <div class="app_wrap">
    <el-button @click="logout">out</el-button>
    <navbar class="header"></navbar>
    <div class="body">
      <sidebar class="aside"></sidebar>
      <app-main class="main"></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import { resizeWin, hideWin } from '@/utils/window'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  methods: {
    logout() {
      hideWin()
      this.$router.push({ path: '/login' })
    }
  },
  created() {
    resizeWin(960, 660)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scopd>
  .app_wrap {
    display: -webkit-flex;
    /* Safari */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .header {
      height: 60px;
      min-height: 60px;
      line-height: 60px;
      padding: 0 52px 0 43px;
      background-color: #f7f7f7;
      border-bottom: 1px solid #eaeaea;
    }
    .body {
      display: -webkit-flex;
      height: 600px;
      /* Safari */
      display: flex;
      flex: 1 1 auto;
      .aside {
        width: 60px;
        border-top: 1px solid #efefef;
        border-right: 1px solid #dedede;
        background-color: #f7f7f7;
      }
      .main {
        flex: 1 1 auto;
      }
    }
  }
</style>
