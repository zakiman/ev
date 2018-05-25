<template>
  <aside class="aside">
    <nav class="nav_list">
      <router-link v-for="(item, index) in nav" :key="index"
        :title="item.title"
        :class="`iconfont ${item.icon}`"
        :active-class="`${item.icon}_fill`"
        :to="item.path"
        exact
        @click.native="clickNav(item.title)"></router-link>
    </nav>
    <ul class="tools_list">
      <li class="iconfont icon-addition"></li>
      <li class="iconfont icon-search"></li>
      <li class="iconfont icon-setup"></li>
      <li class="avatar">
        <img src=" " alt="">
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      nav: [
        {
          title: '会话',
          path: '/chat/index',
          icon: 'icon-message'
        },
        {
          title: '通讯录',
          path: '/addressbook/index',
          icon: 'icon-addressbook'
        },
        {
          title: '工作台',
          path: '/workbench/index',
          icon: 'icon-computer'
        }
      ]
    }
  },
  methods: {
    clickNav(title) {
      this.$store.dispatch('setTitle', title)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scopd>
$classNav: message, addressbook, computer;

.aside {
  text-align: center;
  .iconfont {
    display: block;
    font-size: 30px;
    line-height: 30px;
    color: #a7b0b9;
    cursor: pointer;
      @each $item in $classNav {
      &.icon-#{$item}_fill {
        color: #1b84d4;
      }
    }
  }
  .nav_list {
    margin: 75px 0;
  }
  a + a {
    margin-top: 50px;
  }
  .tools_list {
    // 头像
    li + li {
      margin-top: 15px;
    }
    .avatar {
      overflow: hidden;
      line-height: 0;
      margin: 25px 12px 15px;
      img {
        display: block;
        width: 36px;
        height: 36px;
        background-color: #edf2f8;
        border-radius: 10px;
      }
    }
  }
}
</style>
