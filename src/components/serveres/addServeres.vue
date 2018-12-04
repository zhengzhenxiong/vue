<template>
<div>
      <el-card class="box-card" style="margin-top:26px;width:100%">
            <div slot="header" class="clearfix">
              <span style="font-size:24px;color:#606266">新增服务</span>
            </div>
            <el-form :inline="true" ref="form" :model="form" label-width="105px">
                <el-form-item label="服务名称">
                    <el-input v-model="form.serviceName" style="width:220px"></el-input>
                </el-form-item>
                <el-form-item label="服务类型">
                    <el-select v-model="form.serviceType" placeholder="请选择服务类型" style="width:220px">
                        <el-option v-for="item in serviceTypeOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"
                        ></el-option>
                    </el-select>
                </el-form-item>
                
                
            </el-form>
            <el-form :inline="true" ref="form" :model="form" label-width="105px">
            <el-form-item label="服务时间" style="margin-left:-4px">
                    <el-col :span="11">
                     <el-date-picker v-model="form.serviceSchedule" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" style="width:220px"></el-date-picker>  
                    </el-col>    
                </el-form-item>
        <el-form-item label="服务价格" >
                  <el-select v-model="form.servicePrice" placeholder="请选择服务价格">
                      <el-option v-for="item in servicePriceOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>
                  </el-select>
              </el-form-item>
                </el-form>
            <el-form :inline="true" ref="form" :model="form" label-width="100px">
               <el-form-item label="适用规格">
                    <el-select v-model="form.serviceCanFor" placeholder="请选择适用规格">
                        <el-option v-for="item in serviceCanForOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"
                         ></el-option>
                        
                    </el-select>
                </el-form-item>        
              <el-form-item label="服务规格">
                    <el-select v-model="form.serviceDetial" placeholder="请选择服务类型">
                        <el-option v-for="item in serviceDetialOptions"
                        style="width:220px"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>  
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form :inline="true" ref="form" :model="form" label-width="100px">
              <el-form-item label="服务耗时">
                    <el-select v-model="form.serviceTime" placeholder="请选择服务类型" style="width:220px">
                        <el-option v-for="item in serviceTimeOptions"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name"></el-option>
                        
                    </el-select>
                </el-form-item>
               <el-form-item label="服务员等级">
                    <el-select v-model="form.serviceLevel" placeholder="请选择服务类型" style="width:220px">
                        <el-option v-for="item in serviceLevelOptions"
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
                        :on-success="successful"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传图片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
             </el-form>
            <el-form :inline="true" ref="form" :model="form" label-width="100px">
                <el-form-item style="margin:50px 0 0 450px" >
                    <el-button type="primary" @click="create()" style="margin:0 160px 50px -380px">立即新增</el-button>
                    <el-button type="primary">取消</el-button>
                </el-form-item>
            </el-form>
          </el-card>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "ServeresApp"
);
export default {
  name: "addServeres",
  // 初始化数据
  data() {
    return {
      form: {
        serviceName: "",
        serviceType: "",
        serviceSchedule: "",
        serviceCanFor: "",
        serviceDetial: "",
        serviceTime: "",
        serviceLevel: "",
        servicePrice: "",
        serviceImg: ""
      },
      //服务类型
      serviceTypeOptions: [
        { value: 0, name: "宠物洗澡" },
        { value: 1, name: "美容美发" },
        { value: 2, name: "宠物医疗" },
        { value: 3, name: "宠物婚介" },
        { value: 4, name: "宠物游乐场" }
      ],
      //适用规格
      serviceCanForOptions: [
        { value: 0, name: "1-5斤" },
        { value: 1, name: "5-10斤" },
        { value: 2, name: "10-20斤" },
        { value: 3, name: "20-30斤" },
        { value: 4, name: "30-50斤" }
      ],
      //服务规格
      serviceDetialOptions: [
        { value: 0, name: "普通" },
        { value: 1, name: "中等" },
        { value: 2, name: "高级" }
      ],
      //耗时
      serviceTimeOptions: [
        { value: 0, name: "1小时" },
        { value: 1, name: "2小时" },
        { value: 2, name: "3小时" },
        { value: 3, name: "5小时" }
      ],
      //服务员等级
      serviceLevelOptions: [
        { value: 0, name: "A级(高级)" },
        { value: 1, name: "B级(中级)" },
        { value: 2, name: "C级(初级)" }
      ],
      //价格
      servicePriceOptions: [
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
  methods: {
    ...mapActions(["addServeresAsync"]),
    // 点击新增方法
    create: function() {
      var url = window.localStorage.url;
      const serveres = {
        serviceName: this.form.serviceName,
        serviceType: this.form.serviceType,
        serviceSchedule: this.form.serviceSchedule,
        serviceCanFor: this.form.serviceCanFor,
        serviceDetial: this.form.serviceDetial,
        serviceTime: this.form.serviceTime,
        serviceLevel: this.form.serviceLevel,
        servicePrice: this.form.servicePrice,
        serviceImg: url
      };
      this.addServeresAsync(serveres).then(() => {
        //调用异步方法，传数据过去;   //.then方法，里面回调函数，成功后弹窗
        this.$message({
          message: "新增成功",
          type: "success"
        });
        //把所有输入框清空
        this.form.serviceName="",
        this.form.serviceType="",
        this.form.serviceSchedule="",
        this.form.serviceCanFor="",
        this.form.serviceDetial="",
        this.form.serviceTime="",
        this.form.serviceLevel="",
        this.form.servicePrice="",
        this.form.serviceImg=""
      });
    
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
      this.$refs.upload.clearFiles(); //上传成功后，清空图片列表
      var storage = window.localStorage; //获取本地存储
      storage.url = response.url; //返回的路径赋值给本地路径
    }
  }
};
</script>
<style>

</style>
