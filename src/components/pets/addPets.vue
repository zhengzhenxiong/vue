<template>
<div>
  <p style="font-size:24px;padding-bottom:20px;text-align:center; border-bottom:1px solid gray">新增宠物</p>
  <el-form ref="form" :model="form" label-width="180px">
  <el-form-item label="宠物名称" style="marginTop:50px" prop="petsName">
    <el-input v-model="form.petsName" style="width:600px"></el-input>
  </el-form-item>
  <div style="overflow:hidden">
  <el-form-item label="品类" style="float:left" prop="petsType">
    <el-select v-model="form.petsType" placeholder="请选择品类">
     <el-option 
     v-for="item in petTypeOptions" 
            :key="item.value"
            :label="item.name"
            :value="item.name"
          ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="原产地" style="float:left" prop="petsProvenance">
    <el-input v-model="form.petsProvenance" style="width:220px"></el-input>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
  <el-form-item label="主要颜色" style="float:left" prop="petsMainColors">
   <el-input v-model="form.petsMainColors" style="width:220px"></el-input>
  </el-form-item>
    <el-form-item label="性格" style="float:left" prop="petsCharacter">
    <el-input v-model="form.petsCharacter" style="width:220px"></el-input>
  </el-form-item>
  </div>
  <div style="overflow:hidden">
    <el-form-item label="价格" style="float:left" prop="petsPrice">
     <el-input v-model="form.petsPrice" style="width:220px"></el-input>
  </el-form-item>
  <el-form-item label="体型" style="float:left" prop="petsShape">
   <el-input v-model="form.petsShape" style="width:220px"></el-input>
  </el-form-item>
  </div>
 <el-form-item label="介绍说明" style="width:600px" prop="petsIntro">
    <el-input type="textarea" v-model="form.petsIntro"></el-input>
  </el-form-item>

 <el-upload
  class="upload-demo"
  style="margin:30px 0 50px 300px"
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
    <el-button type="primary" @click="addGoods" style="margin:0 160px 50px 100px">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "PetsApp"
);
export default {
  name: "addPets",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        petsName: "",
        petsType: "",
        petsProvenance: "",
        petsMainColors: "",
        petsCharacter: "",
        petsPrice: "",
        petsShape:"",
        petsIntro:"",
        petsImg: ""
      },
      upLoadData: {
        img_base64: "",
        type: 1
      },
      petTypeOptions: [
        { value: 0, name: "狗" },
        { value: 1, name: "猫" },
        { value: 2, name: "兔子" },
        { value: 3, name: "鱼" },
        { value: 4, name: "其他小宠" }
      ]
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["addPetsAsync"]),
    // 新增商品
    addGoods() {
      var url = window.localStorage.url;
      const pets = {
        petsName: this.form.petsName,
        petsType: this.form.petsType,
        petsProvenance: this.form.petsProvenance,
        petsMainColors: this.form.petsMainColors,
        petsCharacter: this.form.petsCharacter,
        petsIntro: this.form.petsIntro,
        petsShape: this.form.petsIntro,
        petsPrice: this.form.petsPrice,
        petsImg: url
      };
      this.addPetsAsync(pets)
        .then(() => {
          this.$message({
            showClose: true,
            message: "添加成功",
            type: "success"
          });
          // 清空表单
          this.$refs.form.resetFields();
        })
        .catch(e => console.log("Oops, error", e));
    },
    // 上传图片后清空图片列表
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 图片上传成功后的回调函数
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


