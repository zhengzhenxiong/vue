<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix"><span>新增店员</span></div>
            <el-form :inline="true" class="demo-form-inline" label-width="130px">
                <el-form-item label="店员姓名">
                    <el-input v-model="from.shopEmployeeName" placeholder="店员姓名"></el-input>
                </el-form-item>
                <el-form-item label="店员职级">
                    <el-input v-model="from.shopEmployeeRank" placeholder="店员职级"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="from.shopEmployeeTel" placeholder="联系电话"></el-input>
                </el-form-item>
            </el-form>
            <el-row class="btn">
                <el-button @click="handleClick" type="primary" round>确认</el-button>
                <el-button type="success" round>取消</el-button>
            </el-row>
        </el-card>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix"><span>店员信息</span></div>
                <el-table :data="rows" border style="width: 100%" stripe>
                    <el-table-column fixed prop="shopEmployeeId" label="店员编号" align="center"></el-table-column>
                    <el-table-column prop="shopEmployeeName" label="店员姓名" align="center"></el-table-column>
                    <el-table-column prop="shopEmployeeRank" label="店员职级" align="center"></el-table-column>
                    <el-table-column prop="shopEmployeeTel" label="联系电话" align="center"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="150" align="center">
                        <template slot-scope="scope">
                            <el-button type="success" round size="small">修改</el-button>
                            <el-button type="danger" round size="small">删除</el-button>
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
    </div>
</template>
<script>

import { createNamespacedHelpers } from "vuex"
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("OutletsApp")

export default {
    name:'addShopEmployee',
    data() {
      return {
        from: { 
            outletsId: this.$route.params.dataId,
            shopEmployeeName: "", 
            shopEmployeeRank: "", 
            shopEmployeeTel: ""
        }
      };
    },
    computed: {
        ...mapState(["rows", "curPage", "eachPage", "total", "maxPage"])
    },
    mounted(){
        this.getShopEmployeeByPageAsync()
    },
    watch:{
        curPage(){
            this.getShopEmployeeByPageAsync({ curPage: this.curPage })
        },
        eachPage(){
            this.getShopEmployeeByPageAsync({ eachPage: this.eachPage })
        }
    },
    methods:{
        ...mapActions(["getShopEmployeeByPageAsync","addShopEmployeeAsync"]),
        ...mapMutations(["setCurPage","setEachPage"]),
        handleSizeChange(val) {
            this.setEachPage(val)
        },
        handleCurrentChange(val) {
            this.setCurPage(val)
        },
        handleClick(){
            this.addShopEmployeeAsync({ shopEmployee: [this.from] })
            this.from = ""
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