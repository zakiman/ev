<template>
  <header class="header canotSelect">
    <el-input v-model="query"
      placeholder="搜索"
      clearable
      class="search_wrap"
      prefix-icon="el-icon-search"></el-input>
    <span class="cannot_select">{{title}}</span>
    <toolbar></toolbar>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters([
      'title'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scopd>
/* reset element-ui css */
.header {
  position: relative;
  text-align: center;
  font-size: 19px;
  letter-spacing: 2px;
  color: #409eff;
  -webkit-app-region: drag; // 设置header部分为可拖拽区
  .search_wrap {
    -webkit-app-region: no-drag; // 阻止input可拖拽
    position: absolute;
    left: 43px;
    width: 250px;
    input {
      height: 30px;
      border-color: #dedede;
      border-radius: 15px;
    }
  }
}
</style>

