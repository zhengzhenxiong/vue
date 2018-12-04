<template>
  <el-container style="height: auto; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1','2','3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            门店管理(门店管理员)
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><router-link to="/info/goods">选项1</router-link></el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-goods"></i>商品管理(门店管理员)
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-service"></i>服务管理(门店管理员)
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><router-link to="/info/serveres">我的服务</router-link></el-menu-item>
             <el-menu-item index="3-3"><router-link to="/info/addServeres">新增服务</router-link></el-menu-item>
             <!-- <el-menu-item index="3-1"><router-link to="/info/serviceSchedule">修改</router-link></el-menu-item> -->
          </el-menu-item-group>  
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align:center; font-size: 24px; line-height: 50%"> <p>爱宠帮后台管理</p></el-header>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "info",
  
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  
}

.el-aside {
  color: #333;
 
}
</style>

