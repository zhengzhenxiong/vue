<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix"><span>门店申请</span></div>
            <el-form :inline="true" class="demo-form-inline" label-width="130px">
                <el-form-item label="门店名称">
                    <el-input v-model="from.shopName" placeholder="门店名称"></el-input>
                </el-form-item>
                <el-form-item label="营业执照号码">
                    <el-input v-model="from.shopLicenceNum" placeholder="营业执照号码"></el-input>
                </el-form-item>
                <el-form-item label="营业执照地址">
                    <el-input v-model="from.shopAdd" placeholder="营业执照地址"></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true" class="demo-form-inline" label-width="130px">
                <el-form-item label="门店定位">
                    <el-input v-model="from.shopLocation" placeholder="门店定位"></el-input>
                </el-form-item>
                <el-form-item label="法人">
                    <el-input v-model="from.shopCorporate" placeholder="法人"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="from.shopTel" placeholder="电话"></el-input>
                </el-form-item>
            </el-form>
            <el-form :inline="true" class="demo-form-inline" label-width="130px">
                 <el-form-item label="特色">
                    <el-input v-model="from.shopFeature" placeholder="特色"></el-input>
                </el-form-item>
                <el-form-item label="租金">
                    <el-input v-model="from.shopMoney" placeholder="租金"></el-input>
                </el-form-item>
                <el-form-item label="店员属性">
                    <el-input v-model="from.shopEmployee" placeholder="店员属性"></el-input>
                </el-form-item>
            </el-form>
            <el-row class="btn">
                <el-button @click="handleClick" type="primary" round>确认申请</el-button>
                <el-button type="success" round>取消申请</el-button>
            </el-row>
        </el-card>
    </div>
</template>
<script>

import { createNamespacedHelpers } from "vuex"
const { mapActions } = createNamespacedHelpers("OutletsApp")

export default {
    name:'addOutlets',
    data() {
      return {
        from: { 
            shopName:"", 
            shopLicenceNum:"", 
            shopAdd:"", 
            shopLocation:"",  
            shopCorporate:"", 
            shopTel:"", 
            shopFeature:"", 
            shopMoney:"",  
            shopEmployee:"",
        }
      };
    },
    methods:{
        ...mapActions(["addOutletsAsync"]),
        handleClick(){
            this.addOutletsAsync(this.from)
            this.from = ""
            // return this.$confirm(`门店申请成功`);
        },
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
        padding-bottom: 20px
    }
    .btn{
        float: right;
    }
    .upload-Width{
        width: 203px;
    }
</style>