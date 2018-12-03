<template>
  <el-card class="logins">
    <div slot="header" class="clearfix" style="margin-top:200px">
      <span style="underline:none">爱宠帮登陆</span>
    </div>
    <div class="text item">用户名称：
      <input type="text" v-model="userAcount">

      <div>
        <br>用户密码：
        <input type="password" v-model="userPwd">
      </div>
    </div>
    <el-button type="warning" @click="ploginAsync">管理者登陆</el-button>
    <el-button @click="loginAsync" type="primary">店主登陆</el-button>
    <el-button @click="reg" type="success">店主注册</el-button>
  </el-card>
</template>
    
<script>
export default {
  name: "login",
  data() {
    return {
      userAcount: "",
      userPwd: ""
    };
  },
  methods: {
    // 异步方法
    async loginAsync() {
      const data = await fetch(`/outletUsers/getAlloutletUsers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `userAcount=${this.userAcount}&userPwd=${this.userPwd}`
      }).then(response => response.json());
      if (
        data.userAcount === this.userAcount &&
        data.userPwd === this.userPwd &&
        data.userType == 1 &&
        data.userStatus == 2
      ) {
        this.$router.push({ path: "/info" });
      } else {
        alert("帐号密码错误");
      }
    },
    // shop() {
    //
    // },
     async ploginAsync() {
      const data = await fetch(`/outletUsers/getAlloutletUsers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `userAcount=${this.userAcount}&userPwd=${this.userPwd}`
      }).then(response => response.json());
      if (
        data.userAcount === this.userAcount &&
        data.userPwd === this.userPwd &&
        data.userType == 0 &&
        data.userStatus == 2
      ) {
        this.$router.push({ path: "/info" });
      } else {
        alert("你不是平台管理员");
      }
    },

    reg() {
      this.$router.push({ path: "/reg" });
    }
  }
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.logins {
  width: 100%;
  height: 630px;
  text-align: center;
  margin: 0 auto;
  background-image: url("../assets/2464.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.logins.el-card__header{
  border-bottom:none
}
</style>


