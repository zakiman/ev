<template>
  <div class="login_container" :loading="loading">
    <!-- 登录方式选择 -->
    <div class="title clearfix">
      <img :src="typeIsQr ? typeCode : typeQr" @click="typeIsQr = !typeIsQr" alt="更换登录方式">
      <p class="notice_box">{{ typeIsQr ? '密码' : '扫码' }}登录点这里</p>
      <p class="login_type">{{ typeIsQr ? 'XX扫码，安全登录' : '账号密码登录' }}</p>
    </div>
    <!-- 密码登录表单 -->
    <el-form class="login_form" :model="loginForm" :rules="loginRules" ref="loginForm"
      v-show="!typeIsQr">
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="OA 账户">
          <i slot="prefix" class="iconfont icon-people"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="pwdType" v-model="loginForm.password" placeholder="密码"
          @keyup.enter.native="handleLogin">
          <i slot="prefix" class="iconfont icon-lock"></i>
          <i slot="suffix" class="iconfont icon-browse" @click="showPwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
      <span class="forger_pwd">忘记密码</span>
    </el-form>
    <!-- 二维码登录 -->
    <div v-show="typeIsQr" class="qrcode_wrap">
      <img :src="qrCode" alt="XX移动端二维码">
      <p>
        <i class="iconfont icon-scan"></i>
        打开<a href="#">XX移动端</a>扫一扫登录</p>
    </div>
  </div>
</template>

<script>
import typeCode from '@/assets/login_images/type_code.png'
import typeQr from '@/assets/login_images/type_qr.png'
import qrCode from '@/assets/login_images/qr_code.png'
import { resizeWin, hideWin } from '@/utils/window'

export default {
  name: 'login',
  data() {
    return {
      typeCode,
      typeQr,
      qrCode,
      typeIsQr: false, // 是否使用扫码登录
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [],
        password: []
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          hideWin()
          this.$router.push({ path: '/' })
        } else {
          this.loading = false
        }
      })
    }
  },
  created() {
    resizeWin(350, 350)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scopd>
$blue: #409EFF;
$textColor: #999;
$borderClor: #DCDFE6;
$iconBg: #eff2f7;

/* reset element-ui css */
.login_container {
  font-size: 14px;
  .el-form-item {
    margin-bottom: 10px;
  }
  .el-input {
    input {
      height: 38px;
      padding: 12px 43px 12px 55px;
      border: 1px solid $borderClor;
      border-radius: 1px;
      color: $textColor;
    }
  }
  .el-input__suffix {
    right: 0;
  }
}

.login_container {
  color: $textColor;
  width: 100%;
  .title {
    padding: 8px 8px 5px 20px;
    img {
      float: right;
      width: 70px;
      cursor: pointer;
    }
    .login_type {
      padding-top: 40px;
    }
  }
  .login_form {
    padding: 0 30px 0 43px;
    .iconfont {
      display: inline-block;
      font-size: 22px;
      width: 43px;
      height: 36px;
      margin-top: 2px;
    }
    .icon-lock,
    .icon-people {
      margin: 2px 0 0 -4px;
      border-right: 1px solid $borderClor;
      background-color: $iconBg;
    }
    .icon-browse {
      cursor: pointer;
    }
  }
  .forger_pwd {
    position: absolute;
    right: 36px;
    bottom: 46px;
    color: $blue;
    cursor: pointer;
  }
}

// 消息框
.notice_box {
  float: right;
  box-sizing: border-box;
  position: relative;
  width: 128px;
  margin-right: 7px;
  border: 2px solid #9ac6ff;
  border-radius: 1px;
  background: #fff;
  color: #64a7fe;
  line-height: 22px;
  text-align: center;
}
.notice_box:before {
  content: "";
  position: absolute;
  top: 7px;
  right: -5px;
  width: 6px;
  height: 6px;
  border: 2px solid #9ac6ff;
  border-left: none;
  border-bottom: none;
  background: #fff;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
}

// 二维码
.qrcode_wrap {
  text-align: center;
  i {
    font-size: 19px;
    vertical-align: -2px;
    color: $blue;
  }
  img {
    box-sizing: border-box;
    width: 218px;
    height: 218px;
    padding: 14px;
    border: 1px solid $borderClor;
  }
  p {
    line-height: 45px;
    a {
      color: $blue;
    }
  }
}
</style>
