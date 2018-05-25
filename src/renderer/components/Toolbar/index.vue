<template>
    <div class="toolbar">
      <i class="iconfont icon-windowminimize"
        @click="handleClick('min')"></i>
      <i :class="`iconfont ${isMax? 'icon-windowrestore' : 'icon-windowmaximize'}`"
        @click="handleClick('max')"></i>
      <i class="iconfont icon-windowclose"
        @click="handleClick('close')"></i>
    </div>
</template>

<script>
const win = require('electron').remote.getCurrentWindow()

export default {
  name: 'Toolbar',
  data() {
    return {
      isMax: false
    }
  },
  methods: {
    handleClick: function(type) {
      switch (type) {
        case 'min':
          win.minimize()
          break

        case 'max':
          if (win.isMaximized()) {
            win.unmaximize()
            this.isMax = false
          } else {
            win.maximize()
            this.isMax = true
          }
          break

        case 'close':
          win.hide()
          win.setSkipTaskbar(true)
          break

        default:
          break
      }
    }
  }
}
</script>
    
<style rel="stylesheet/scss" lang="scss" scopd>
.toolbar {
  -webkit-app-region: no-drag;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 53px;
  font-size: 0;
  i {
    cursor: pointer;
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    margin: 22px 0;
    font-size: 20px;
    color: #eaeaea;
    & + i {
      margin-left: 30px;
    }
  }
}
</style>