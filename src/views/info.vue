<template>
  <el-container style="height: 500px; border: 1px solid #eee">
   
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="[]">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            门店管理(门店管理员)
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1"> <router-link to="/shop/outlets">选项1</router-link></el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>

          <el-menu-item index="1-3">选项3</el-menu-item>

          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-goods"></i>商品管理(门店管理员)
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><router-link to="/shop/goods">选项1</router-link></el-menu-item>
            <el-menu-item index="2-2">选项1</el-menu-item>
          </el-menu-item-group>

          <el-menu-item index="2-3">选项3</el-menu-item>

          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-service"></i>服务管理(门店管理员)
          </template>
          <el-menu-item-group>
        
            <el-menu-item index="3-1"><router-link to="/shop/serveres">服务菜单</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/shop/addServeres">增加服务</router-link></el-menu-item>
          </el-menu-item-group>

          <el-menu-item index="3-3">选项3</el-menu-item>

                <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: center; font-size: 24px"> <p>门店管理</p></el-header>
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

