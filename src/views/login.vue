<template>

  <el-card class="logins">
    <div slot="header" class="clearfix">
      <span style="font-size:40px; font-weight:600">爱宠帮管理系统</span>
    </div>
    <div class="text item"  style="margin-top:200px">用户名称：
      <input type="text" v-model="userAcount" style="padding-left:5px;outline:none">

      <div>
        <br>用户密码：
        <input type="password" v-model="userPwd" style="padding-left:5px;outline:none">
      </div>
    </div>
    <el-button type="warning" @click="ploginAsync">管理员登陆</el-button>
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
        this.$message({
          showClose: true,
          message: "账号密码错误",
          type: "error"
        });
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
        this.$message({
          showClose: true,
          message: "警告,该账号非平台管理员",
          type: "warning"
        });
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
.logins.el-card__header {
  border-bottom: none;
}
</style>


