<template>
<<<<<<< HEAD
  <el-container style="height: 680px; border: 1px solid #eee">
   
    <el-aside width="160px" height="660px">
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
        
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
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
      <el-header style="text-align: center; font-size: 30px;font-weight:600;height:100px;color:#fff">
         <p>爱宠邦管理系统</p>
         </el-header>
=======
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
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
      <router-view></router-view>
    </el-container>
  </el-container>
</template>


<script>
export default {
<<<<<<< HEAD
  name: "info"
=======
  name: "info",
  
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
};
</script>
<style>
.el-header {
<<<<<<< HEAD
  background-color: #5b6075;
  color: #333;
=======
  background-color: #b3c0d1;
  color: #333;
  
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
}

.el-aside {
  color: #333;
<<<<<<< HEAD
=======
 
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
}
</style>

