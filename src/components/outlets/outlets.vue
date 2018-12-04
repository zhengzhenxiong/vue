<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix"><span>门店信息</span></div>
            <el-table :data="rows" border style="width: 100%" stripe>
                <el-table-column fixed prop="_id" label="门店编号" width="230" align="center"></el-table-column>
                <el-table-column prop="shopName" label="门店名称" width="120" align="center"></el-table-column>
                <el-table-column prop="shopLicenceNum" label="营业执照号码" width="120" align="center"></el-table-column>
                <el-table-column prop="shopAdd" label="营业执照地址" width="120" align="center"></el-table-column>
                <el-table-column prop="shopLocation" label="门店定位" width="120" align="center"></el-table-column>
                <el-table-column prop="shopCorporate" label="法人" width="120" align="center"></el-table-column>
                <el-table-column prop="shopTel" label="电话" width="120" align="center"></el-table-column>
                <el-table-column prop="shopFeature" label="特色" width="120" align="center"></el-table-column>
                <el-table-column prop="shopMoney" label="佣金比例（%）" width="120" align="center"></el-table-column>
                <el-table-column fixed="right" label="查询" width="210" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" round size="small">门店商品</el-button>
                        <el-button type="success" round size="small">门店服务</el-button>
                        <div style="height:10px"></div>
                        <el-button type="danger" round size="small">门店管理员</el-button>
                        <el-button @click="shopEmployee(scope.row)" type="warning" round size="small">店员管理</el-button>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100" align="center">
                    <template slot-scope="scope">
                        <el-button @click="update(scope.row)" type="primary" round size="small">修改</el-button>
                        <div style="height:10px"></div>
                        <el-button @click="upload(scope.row)" type="success" round size="small">文件信息</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                align="center"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="curPage"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="eachPage"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>
<script>

import { createNamespacedHelpers } from "vuex"

const { mapState, mapActions, mapMutations } = createNamespacedHelpers("OutletsApp")

export default {
    name:"outlets",
    computed: {
        ...mapState(["rows", "curPage", "eachPage", "total", "maxPage"])
    },
    mounted(){
        this.getOutletsByPageAsync()
    },
    watch:{
        curPage(){
            this.getOutletsByPageAsync({ curPage: this.curPage })
        },
        eachPage(){
            this.getOutletsByPageAsync({ eachPage: this.eachPage })
        }
    },
    methods: {
        ...mapActions(["getOutletsByPageAsync"]),
        ...mapMutations(["setCurPage","setEachPage"]),
        handleSizeChange(val) {
            this.setEachPage(val)
        },
        handleCurrentChange(val) {
            this.setCurPage(val)
        },
        update(row){
            this.$router.push({
                name:"updateOutlets",
                params:{
                    dataId: row._id
                }
            })
        },
        upload(row){
            this.$router.push({
                name:"outletsFileUpload",
                params:{
                    dataId: row._id
                }
            })
        },
        shopEmployee(row){
            this.$router.push({
                name:"shopEmployee",
                params:{
                    dataId: row._id
                }
            })
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
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>
