<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix"><span>图片信息</span></div>
            <el-form :inline="true" class="demo-form-inline" label-width="130px">
                <el-form-item label="营业执照图片">
                    <el-upload v-model="from.shopLicenceImg"  class="upload-demo"
                        action="http://localhost:3000/outlets/OutletsFileUpload"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload v-model="from.shopImg"  class="upload-demo"
                        action="http://localhost:3000/outlets/OutletsFileUpload"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <div style="width:500px">
                <div style="display: block;float: left">
                    <span>营业执照图片</span>
                    <div><img src="../../../images/冯.png" alt=""/></div>
                </div>
                <div style="display: block;float: right">
                    <span>头像</span>
                    <div><img src="../../../images/冯.png" alt=""/></div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>

import { createNamespacedHelpers } from "vuex"
const { mapActions } = createNamespacedHelpers("OutletsApp")

export default {
    name:'outletsFileUpload',
    data() {
      return {
        fileList: [],
        from: { 
            shopLicenceImg: [{ name: "", url: "" }],
            shopImg: [{ name: "", url: "" }]
        }
      };
    },
    methods:{
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        ...mapActions(["updateOutletsByIdAsync"]),

    }
}
</script>
<style>
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both;
    }
    .box-card {
        width: 100%;
        margin: auto;
        padding-bottom: 20px;
        
    }
</style>