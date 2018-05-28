<template>
  <div>
    <!--会话列表-->
    <div class="chat-list" v-for="(item, index) in chatList" :key="index">
      <div class="list-item">
        <div style="padding:10px">
          <img src="http://meitu.qqzong.com/uploads/allimg/160318/09340161A-0-lit.jpg" alt=""
            class="list-img">
          <div class="list-msg-wrap">
            <h5 class="list-title">技术创新部</h5>
            <h5 class="list-msg">成员1：asdasdsssdasdasdasddasdasdasdsfd</h5>
          </div>
          <div style="float: right">
            <span class="list-time">12:14</span>
            <span class="list-unread">22</span>
          </div>
        </div>
      </div>
    </div>
    <!--<div style="background: #ccc;margin-left: 250px">-->
        <!--asdasd-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      chatList: [
        {}, {}, {}, {}, {}, {},
      ]
    }
  }
}
</script>

<style>
.chat-list {
  width: 250px;
  height: 100%;
  background: #eee;
  /*position:relative;*/
}

.list-item {
  position: relative;
  width: 100%;
  height: 70px;
  /*padding:10px;*/
  border-bottom: 1px solid #aaa;
}

.list-img {
  display: block;
  width: 50px;
  height: 50px;
  float: left;
}

.list-msg-wrap {
  position: absolute;
  top: 10px;
  left: 60px;
  margin-left: 10px;
  width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.list-title {
  position: relative;
  bottom: 20px;
}

.list-msg {
  position: relative;
  bottom: 35px;
  color: #a0a0a0;
}

.list-time {
  font-size: 13px;
}

.list-unread {
  font-size: 13px;
  width: 20px;
  height: 20px;
  background: rgb(237, 97, 67);
  display: table;
  text-align: center;
  border-radius: 50%;
  color: white;
  margin: 5px 0 0 10px;
  line-height: 20px;
}
</style>

