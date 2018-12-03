<template>
<div>
  <p style="font-size:24px;padding-bottom:20px;text-align:center; border-bottom:1px solid gray">新增商品</p>
  <el-form ref="form" :model="form" label-width="180px">
  <el-form-item label="商品名称" style="marginTop:50px" prop="goodsName">
    <el-input v-model="form.goodsName" style="width:600px"></el-input>
  </el-form-item>
  <div style="overflow:hidden">
  <el-form-item label="品类" style="float:left" prop="goodsType">
    <el-select v-model="form.goodsType" placeholder="请选择品类" >
     <el-option 
     v-for="item in goodsTypeOptions" 
            :key="item.value"
            :label="item.name"
            :value="item.name"
          ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="材质/ 制作方法" style="float:left" prop="goodsMaterial">
    <el-input v-model="form.goodsMaterial" style="width:230px"></el-input>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
  <el-form-item label="适用规格" style="float:left" prop="goodsCanFor">
    <el-select v-model="form.goodsCanFor" placeholder="请选择">
      <el-option 
     v-for="item in goodsCanForOptions" 
            :key="item.value"
            :label="item.name"
            :value="item.name"
          ></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="专属规格" style="float:left" prop="goodsOnlyFor">
    <el-input v-model="form.goodsOnlyFor" style="width:230px"></el-input>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
    <el-form-item label="包装规格" style="float:left" prop="goodsSize">
      <el-select v-model="form.goodsSize" placeholder="请选择">
          <el-option 
     v-for="item in goodsSizeOptions" 
            :key="item.value"
            :label="item.name"
            :value="item.name"
          ></el-option>
      </el-select>
  </el-form-item>
  <el-form-item label="口味" style="float:left" prop="goodsTaste">
    <el-select v-model="form.goodsTaste" placeholder="请选择" style="width:230px">
          <el-option 
     v-for="item in goodsTasteOptions" 
            :key="item.value"
            :label="item.name"
            :value="item.name"
          ></el-option>
    </el-select>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
  <el-form-item label="特殊功效" style="float:left" prop="goodsSpecial">
 <el-input v-model="form.goodsSpecial" style="width:220px"></el-input>
  </el-form-item>
  <el-form-item label="产地" style="float:left" prop="goodsRegion">
 <el-input v-model="form.goodsRegion" style="width:230px"></el-input>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
  <el-form-item label="生产日期" style="float:left" prop="goodsData">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.goodsData" value-format="yyyy-MM-dd HH:mm:ss" style="width:220px"></el-date-picker>
  </el-form-item>
  <el-form-item label="保质期" style="float:left" prop="goodsTime">
 <el-input v-model="form.goodsTime" style="width:230px"></el-input>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
  <el-form-item label="供应商" style="float:left" prop="goodsSupplier">
 <el-input v-model="form.goodsSupplier" style="width:220px"></el-input>
  </el-form-item>
  <el-form-item label="价格" style="float:left" prop="goodsPrice">
 <el-input v-model="form.goodsPrice" style="width:230px"></el-input>
  </el-form-item>
  </div>
  <el-form-item label="特色说明" style="width:600px" prop="goodsIntro">
    <el-input type="textarea" v-model="form.goodsIntro"></el-input>
  </el-form-item>

 <el-upload
 style="margin:30px 0 50px 300px"
  class="upload-demo"
  ref="upload"
  action="/img/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="successeed"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选择图片</el-button>
  <el-button style="margin-left: 60px;" size="small" type="success" @click="submitUpload">上传图片</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

  <el-form-item>
    <el-button type="primary" @click="touch" style="margin:0 300px 50px 0">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item> 
</el-form>
</div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "GoodsApp"
);
export default {
  name: "addGoods",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        goodsName: "",
        goodsType: "",
        goodsMaterial: "",
        goodsCanFor: "",
        goodsOnlyFor: "",
        goodsSize: "",
        goodsTaste: "",
        goodsSpecial: "",
        goodsRegion: "",
        goodsData: "",
        goodsTime: "",
        goodsSupplier: "",
        goodsIntro: "",
        goodsPrice: "",
        goodsImg: ""
      },
      upLoadData:{
        img_base64:"",
        type:1
    },
      goodsTypeOptions: [
        { value: 0, name: "狗粮" },
        { value: 1, name: "猫粮" },
        { value: 2, name: "猫砂" },
        { value: 3, name: "玩具" }
      ],
      goodsMaterialOptions: [
        { value: 0, name: "橡胶" },
        { value: 1, name: "木质" },
        { value: 2, name: "金属" },
        { value: 3, name: "烘焙" },
        { value: 4, name: "膨化" }
      ],
      goodsCanForOptions: [
        { value: 0, name: "成宠" },
        { value: 1, name: "幼宠" }
      ],
      goodsSizeOptions: [
        { value: 0, name: "1kg" },
        { value: 1, name: "5kg" },
        { value: 2, name: "10kg" }
      ],
      goodsTasteOptions: [
        { value: 0, name: "鸡肉味" },
        { value: 1, name: "牛肉味" },
        { value: 3, name: "无" }
      ]
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["addGoodsAsync"]),
    touch() {
      var url = window.localStorage.url;
      const goods = {
        goodsName: this.form.goodsName,
        goodsType: this.form.goodsType,
        goodsMaterial: this.form.goodsMaterial,
        goodsCanFor: this.form.goodsCanFor,
        goodsOnlyFor: this.form.goodsOnlyFor,
        goodsSize: this.form.goodsSize,
        goodsTaste: this.form.goodsTaste,
        goodsSpecial: this.form.goodsSpecial,
        goodsRegion: this.form.goodsRegion,
        goodsData: this.form.goodsData,
        goodsTime: this.form.goodsTime,
        goodsSupplier: this.form.goodsSupplier,
        goodsIntro: this.form.goodsIntro,
        goodsPrice: this.form.goodsPrice,
        goodsImg:url
      };
      this.addGoodsAsync(goods)
        .then(() => {
          this.$message({
            showClose: true,
            message: "添加成功",
            type: "success"
          });
          this.$refs.form.resetFields()
        })
        .catch(e => console.log("Oops, error", e));
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    successeed(response, file, fileList) {
      this.$refs.upload.clearFiles(); 
      var storage = window.localStorage;
      storage.url = response.url;
    }
  }
};
</script>
<style>
</style>


