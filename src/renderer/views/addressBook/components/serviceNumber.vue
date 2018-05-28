<template>
<div class="service">
    <p class="nav">A</p>
    <a href="javascript:;">
      <img src="../../../assets/logo/4.gif" alt="">
      <div class="logo">
        <p class="title">移动打卡</p>
        <p>安全新堡垒，志愿全方位</p>
      </div>
    </a>
    <p class="nav">B</p>
    <a href="javascript:;">
      <img src="../../../assets/logo/3.gif" alt="">
      <div class="logo">
        <p class="title">差旅服务</p>
        <p>高效工作新旅行</p>
      </div>
    </a>
    <p class="nav">C</p>
    <a href="javascript:;">
      <img src="../../../assets/logo/2.gif" alt="">
      <div class="logo">
        <p class="title">人力ssc</p>
        <p>高效工作新旅行</p>
      </div>
    </a>
    <p class="nav">C</p>
    <a href="javascript:;">
      <img src="../../../assets/logo/2.gif" alt="">
      <div class="logo">
        <p class="title">IT服务台</p>
        <p>高效工作新旅行</p>
      </div>
    </a>
    <a href="javascript:;">
      <img src="../../../assets/logo/2.gif" alt="">
      <div class="logo">
        <p class="title">科技服务台</p>
        <p>高效工作新旅行</p>
      </div>
    </a>
</div>
</template>

<script>
export default {
  name: 'serviceNumber',
  data() {
    return {}
  }
}
</script>

<style scoped>
  .service a {
    display: block;
    overflow: hidden;
    padding-bottom: 15px;
    padding-top: 10px;
  }
  .service img {
    padding-left: 10px;
  }
  .service .logo, img {
    float: left;
  }
  .service a p {
    color: #aaa;
  }
  .service a .logo .title {
    color: #000;
  }
  .service .nav {
    border-bottom: 1px solid #ddd;
    font-size: 14px;
  }
</style>
