<template>
<div>
<el-card class="box-card" style="margin-top:26px">
  <div slot="header" class="clearfix">
    <span style="font-size:24px;color:#606266">我的服务</span>
                                          <!-- 搜索 -->
    <el-input v-model="content" style="float:right;width:200px" size="mini" @keyup.native.enter="search" type="text" placeholder="请输入搜索内容"/>
  </div>
     <el-table
       :data="rows"
        style="width: 100%">
        <el-table-column width="230" prop="_id" label="服务编号"></el-table-column>
        <el-table-column width="100" prop="serviceName" label="姓名"></el-table-column>
        <el-table-column width="100" prop="serviceType" label="服务类型"></el-table-column>
        <el-table-column width="160" prop="serviceSchedule" label="排期"></el-table-column>
        <el-table-column width="100" prop="serviceCanFor" label="适用规格"></el-table-column>
        <el-table-column width="100" prop="serviceDetial" label="服务规格"></el-table-column>
        <el-table-column width="100" prop="serviceTime" label="耗时"></el-table-column>
        <el-table-column width="100" prop="serviceLevel" label="服务员等级"></el-table-column>
        <el-table-column width="100" prop="servicePrice" label="价格/元"></el-table-column>
        <el-table-column width="100" prop="serviceImg" label="服务图片"></el-table-column>        
        <el-table-column width="220" fixed="right" label="操作">
          <template slot-scope="scope"> 
            <el-button @click="update(scope.row),dialogFormVisible = true" type="primary" icon="el-icon-edit"></el-button>
                                          <!-- 修改          -->
              <el-dialog title="修改信息" :visible.sync="dialogFormVisible" :append-to-body="true">
                 <el-form :inline="true" label-width="100px">
                <el-form-item label="服务名称">
                    <el-input v-model="updateServiceName"></el-input>
                </el-form-item>
                <el-form-item label="服务类型">
                    <el-select v-model="updateServiceType" placeholder="请选择服务类型">
                        <el-option v-for="item in updateServiceTypeOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="服务时间">
                    <el-col :span="11">
                     <el-date-picker v-model="updateServiceSchedule" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker>  
                    </el-col>    
                </el-form-item>
            </el-form>
             <el-form :inline="true" label-width="100px">
               <el-form-item label="适用规格">
                    <el-select v-model="updateServiceCanFor" placeholder="请选择适用规格">
                        <el-option v-for="item in updateServiceCanForOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"
                         ></el-option>
                    </el-select>
                </el-form-item>        
              <el-form-item label="服务规格">
                    <el-select v-model="updateServiceDetial" placeholder="请选择服务类型">
                        <el-option v-for="item in updateServiceDetialOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form :inline="true" label-width="100px">
              <el-form-item label="服务耗时">
                    <el-select v-model="updateServiceTime" placeholder="请选择服务类型">
                        <el-option v-for="item in updateServiceTimeOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>   
                    </el-select>
                </el-form-item>
               <el-form-item label="服务员等级">
                    <el-select v-model="updateServiceLevel" placeholder="请选择服务类型">
                        <el-option v-for="item in updateServiceLevelOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form :inline="true" label-width="100px">
              <el-form-item label="服务价格">
                  <el-select v-model="updateServicePrice" placeholder="请选择服务价格">
                      <el-option v-for="item in updateServicePriceOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>      
                  </el-select>
              </el-form-item>
            </el-form>
              <el-form :inline="true">  
                   <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="serveresImg/upload"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-success="successful"
                        :auto-upload="false">
                        <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="mini" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
             </el-form>
             <el-form :inline="true" label-width="100px">
                <el-form-item>
                    <el-button type="success" size="mini" @click="clickUpdate">立即更新</el-button>
                    <el-button @click="dialogFormVisible = false" size="mini">取消</el-button>
                </el-form-item>
            </el-form>
            </el-dialog>
                                    <!-- 查看图片 -->
            <el-button @click="seeImg(scope.row),centerDialogVisible = true" type="info" icon="el-icon-view"></el-button>
        <el-dialog
            title=""
            :modal-append-to-body="false"
             :append-to-body="true"
            :visible.sync="centerDialogVisible"
            width="450px"
            center>
           <img style="width:100%;height:300px" :src="serviceImg">
          </el-dialog>
                                    <!-- 删除 -->
            <el-button @click="Delete(scope.row)" type="danger" icon="el-icon-delete"></el-button>  
        </template>
        </el-table-column>
  </el-table>
</el-card>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total,sizes, prev, pager, next,jumper"
      :total="total">
</el-pagination>
</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "ServeresApp"
);
export default {
  name: "serveresList",
  // 初始化数据
  data() {
    return {
      centerDialogVisible: false,
      dialogFormVisible: false,
      updateServiceName: "",
      updateServiceType: "",
      updateServiceSchedule: "",
      updateServiceCanFor: "",
      updateServiceDetial: "",
      updateServiceTime: "",
      updateServiceLevel: "",
      updateServicePrice: "",
      updateServiceImg: [],
      serviceImg: "",
      content:"",
      //服务类型
      updateServiceTypeOptions: [
        { value: 0, name: "宠物洗澡" },
        { value: 1, name: "美容美发" },
        { value: 2, name: "宠物医疗" },
        { value: 3, name: "宠物婚介" },
        { value: 4, name: "宠物游乐场" }
      ],
      //适用规格
      updateServiceCanForOptions: [
        { value: 0, name: "1-5斤" },
        { value: 1, name: "5-10斤" },
        { value: 2, name: "10-20斤" },
        { value: 3, name: "20-30斤" },
        { value: 4, name: "30-50斤" }
      ],
      //服务规格
      updateServiceDetialOptions: [
        { value: 0, name: "普通" },
        { value: 1, name: "中等" },
        { value: 2, name: "高级" }
      ],
      //耗时
      updateServiceTimeOptions: [
        { value: 0, name: "1小时" },
        { value: 1, name: "2小时" },
        { value: 2, name: "3小时" },
        { value: 3, name: "5小时" }
      ],
      //服务员等级
      updateServiceLevelOptions: [
        { value: 0, name: "A级(高级)" },
        { value: 1, name: "B级(中级)" },
        { value: 2, name: "C级(初级)" }
      ],
      //价格
      updateServicePriceOptions: [
        { value: 0, name: "50元" },
        { value: 1, name: "80元" },
        { value: 2, name: "150元" },
        { value: 3, name: "200元" },
        { value: 4, name: "300元" },
        { value: 5, name: "400元" },
        { value: 6, name: "500元" }
      ]
    };
  },
  // 生命周期函数（发送请求在这里）
  mounted() {
    // 渲染
    this.getServeresByPageAsync(); //再调用方法
  },
  //计算属性，只有当相关的书写发生改变时，才会调用
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"]) //获取到的所有数据
  },
  // 通过methods来计算值，每一次发生变化都调用的方法
  methods: {
    ...mapActions([
      "getServeresByPageAsync",
      "updateServeresAsync",
      "deleteServeresAsync",
      "searchServeresAsync"
    ]), // mapMutations操作异步方法
    ...mapMutations(["setCurPage", "setEachPage"]), //先获取同步方法-分页
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    // 点击修改按钮，获取到那条数据，并渲染到修改弹窗的输入框里
    update: function(row) {
      // console.log(row)
        this.updateServiceName = row.serviceName,
        (this.updateServiceType = row.serviceType),
        (this.updateServiceSchedule = row.serviceSchedule),
        (this.updateServiceCanFor = row.serviceCanFor),
        (this.updateServiceDetial = row.serviceCanFor),
        (this.updateServiceTime = row.serviceTime),
        (this.updateServiceLevel = row.serviceLevel),
        (this.updateServicePrice = row.servicePrice);
      this.updateServiceImg = row.serviceImg; //图片
      var storage = window.localStorage; //把id存到本地
      storage._id = row._id;
    },
    // 点击立即修改方法
    clickUpdate() {
      var _id = window.localStorage._id; //从本地获取id
      var url = window.localStorage.url;
      const serveres = {
        //修改后的数据渲染页面
        _id,
        serviceName: this.updateServiceName,
        serviceType: this.updateServiceType,
        serviceSchedule: this.updateServiceSchedule,
        serviceCanFor: this.updateServiceCanFor,
        serviceDetial: this.updateServiceDetial,
        serviceTime: this.updateServiceTime,
        serviceLevel: this.updateServiceLevel,
        servicePrice: this.updateServicePrice,
        serviceImg: url //图片
      };
      this.updateServeresAsync(serveres).then(() => {
        //调用异步修改方法传入数据（修改数据库）
        this.$message({
          message: "修改成功",
          type: "success"
        });
      });
    },
    // 点击删除方法
    Delete(row) {
      // console.log(row)
      this.deleteServeresAsync({ _id: row._id }); //传一个对象过去id
    },
    // 图片上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 文件上传成功时的钩子
    successful(response, file, fileList) {
      // console.log(123)
      this.$refs.upload.clearFiles(); //上传成功后，清空图片列表
      var storage = window.localStorage; //获取本地存储
      storage.url = response.url; //返回的路径赋值给本地路径
      // console.log(storage.url)
    },
    // 点击查看图片
    seeImg: function(row) {
      this.serviceImg = row.serviceImg;
    },
    search(){
      // console.log(this.content)  
      const seachText=this.content;   // 输入框的内容
      this.searchServeresAsync(seachText)
    }
  },
  // watch监听，指定监听某一个属性，当被监听的某一个属性发生修改，被触发
  watch: {
    curPage() {
      this.getServeresByPageAsync({
        curPage: this.curPage,
        eachPage: this.eachPage
      }); //分页
    },
    eachPage() {
      this.getServeresByPageAsync({ eachPage: this.eachPage }); //分页
    }
  }
};
</script>
<style>
/* div{
  text-align: center;

} */
</style>