<template>
  <div class="box">
    <el-steps :active="1" align-center>
      <el-step title="步骤1" description="申请注册"></el-step>
      <el-step title="步骤2" description="等待审核"></el-step>
      <el-step title="步骤3" description="注册成功"></el-step>
    </el-steps>
    <br>
    <div class="box2">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名称" prop="userAcount">
          <el-input v-model="ruleForm.userAcount" placeholder="输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="用户密码" prop="userPwd">
          <el-input
            type="password"
            v-model="ruleForm.userPwd"
            placeholder="输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkuserPwd">
          <el-input
            type="password"
            v-model="ruleForm.checkuserPwd"
            placeholder="重复密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="userPhone">
          <el-input v-model="ruleForm.userPhone" placeholder="手机号"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="userMail">
          <el-input v-model="ruleForm.userMail" placeholder="邮箱"></el-input>
        </el-form-item>

        <el-form-item label="真实姓名" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="真实姓名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="regAsync">申请注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "reg",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkuserPwd !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.userPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userAcount: "", //用户账号
        userPwd: "", //用户密码
        checkuserPwd: "", //重复密码
        userPhone: "", //用户手机
        userMail: "", //用户邮箱
        userName: "", //用户真实姓名
        userType: 1, //用户角色，1为门店，0为平台管理,此页面是注册门店，默认为1
        userStatus: 1 //1为申请，2为可用，3为不可用，默认为1
      },
      rules: {
        userPwd: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkuserPwd: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        userPhone: [
          { required: true, message: "不能为空", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "只能为数字，并且11为",
            trigger: "blur"
          }
        ],
        userMail: [
          { required: true, message: "不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
            message: "请输入正确的邮箱格式",
            trigger: "blur"
          }
        ],
        userName: [
          { required: true, message: "不能为空", trigger: "blur" },
          {
            pattern: /^[\u4E00-\u9FA5]+$/,
            message: "用户名只能为中文",
            trigger: "blur"
          }
        ],
        userAcount: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    };
  },

  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       const data = fetch(`/outletUsers/regOutlet`, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         body: `userAcount=${this.ruleForm.userAcount}
    //     &userPwd=${this.ruleForm.userPwd}
    //     &userPhone=${this.ruleForm.userPhone}
    //     &userMail=${this.ruleForm.userMail}
    //     &userName=${this.ruleForm.userName}
    //     &userType=${this.ruleForm.userType}
    //     &userStatus=${this.ruleForm.userStatus}`
    //       }).then(response => response.json());
    //       if (data.code) {
    //         alert("申请注册成功，等待管理员审核");
    //         this.$router.push({
    //           name: "_login",
    //           params: { username: this.username }
    //         });
    //       } else {
    //         alert("注册失败，账号重复");
    //       }
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // 异步方法
    async regAsync() {
      console.log(123);

      const data = await fetch(`/outletUsers/regOutlet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `userAcount=${this.ruleForm.userAcount}
        &userPwd=${this.ruleForm.userPwd}
        &userPhone=${this.ruleForm.userPhone}
        &userMail=${this.ruleForm.userMail}
        &userName=${this.ruleForm.userName}
        &userType=${this.ruleForm.userType}
        &userStatus=${this.ruleForm.userStatus}`
      }).then(response => response.json());
      if (data.code) {
        alert("申请注册成功，等待管理员审核");
        this.$router.push({
          name: "_login",
          params: { username: this.username }
        });
      } else {
        alert("注册失败，账号重复");
      }
    }
  }
};
</script>
<style>
.box {
  width: 800px;
  height: 550px;
  margin: 0 auto;
  background-image: url("../../assets/timg.jpg");
}
.box2 {
  width: 350px;
  margin: 0 auto;
}
</style>
