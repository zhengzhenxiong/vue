<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix"><span>门店信息修改</span></div>
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
            </el-form>
            <el-row class="btn">
                <el-button @click="handleClick" type="primary" round>确认修改</el-button>
                <el-button type="success" round>取消修改</el-button>
            </el-row>
        </el-card>
    </div>
</template>
<script>

import { createNamespacedHelpers } from "vuex"
const { mapState, mapActions } = createNamespacedHelpers("OutletsApp")

export default {
    name:'addOutlets',
    computed: {
        ...mapState(["rows"])
    },
    mounted(){
        this.getOutletsByPageAsync()
        this.rows.map(item => {
            if(item._id === this.$route.params.dataId){
                this.from.shopName = item.shopName
                this.from.shopLicenceNum = item.shopLicenceNum
                this.from.shopAdd = item.shopAdd
                this.from.shopLocation = item.shopLocation
                this.from.shopCorporate = item.shopCorporate
                this.from.shopTel = item.shopTel
                this.from.shopFeature = item.shopFeature
                this.from.shopMoney = item.shopMoney
                this.from.shopEmployee = item.shopEmployee
            }
        })

        
    },
    data() {
      return {
        fileList: [],
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
        handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
        },
        ...mapActions(["updateOutletsByIdAsync","getOutletsByPageAsync"]),
        handleClick(){
            this.updateOutletsByIdAsync(this.from)
            this.from = ""
            // return this.$confirm(`门店修改成功`);
        }
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
        float: right
    }
    .upload-Width{
        width: 203px;
    }
</style>