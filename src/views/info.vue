<template>
  <el-container style="height: 600px; border: 1px solid #eee">
   
    <el-aside width="200px">
      <el-menu :default-ative="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            门店管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1"> <router-link to="/shop/goods">选项1</router-link></el-menu-item>
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
            <i class="el-icon-goods"></i>商品管理
          </template>
          <el-submenu index="2-4">
            <template slot="title">宠物</template>
            <el-menu-item index="2-4-1"><router-link to="/info/pets">宠物列表</router-link></el-menu-item>
            <el-menu-item index="2-4-2"><router-link to="/info/addPets">新增宠物</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="2-4">
            <template slot="title">商品</template>
            <el-menu-item index="2-4-1"><router-link to="/info/goods">商品列表</router-link></el-menu-item>
            <el-menu-item index="2-4-2"><router-link to="/info/addGoods">新增商品</router-link></el-menu-item>
          </el-submenu>
        </el-submenu>

        
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-service"></i>服务管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><router-link to="/info/serveres">我的服务</router-link></el-menu-item>
             <el-menu-item index="3-3"><router-link to="/info/addServeres">新增服务</router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: center;height:80px;color:#fff">
        <router-link to="/" style="font-size:12px;color:#606266;float:right;margin-top:60px">退出系统</router-link>
         <p><span style="font-weight:600;font-size: 30px;">爱宠邦管理系统</span></p>
         
         <router-view></router-view>
         </el-header>
  </el-container>
  </el-container>
</template>

<script>
export default {
  name: "info"
};
</script>
<style>
.el-header {
  background-color: #5b6075;
  color: #333;
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  color: #333;
}
.el-pagination{
  text-align: left
}
</style>

