<template>
<div>
  <p style="font-size:24px;padding:20px 0;text-align:center; border-bottom:1px solid gray;color:#606266">商品列表</p>
   <el-table
       :data="rows"
       max-height="500"
    style="width: 100%">
    <el-table-column
      label="商品名称"
      prop="goodsName"
      width="160">
    </el-table-column>
    <el-table-column
      label="商品规格"
      prop="goodsType"
      width="160">
    </el-table-column>
     <el-table-column
      label="价格"
      prop="goodsPrice"
      width="160">
    </el-table-column>
    <el-table-column
      label="口味"
      prop="goodsTaste"
      width="160">
    </el-table-column>
     <el-table-column
      label="材质或制作方法"
      prop="goodsMaterial"
      width="160">
    </el-table-column>
    <el-table-column
      label="产地"
      prop="goodsRegion"
      width="160">
    </el-table-column>
     <el-table-column
      label="适用规格"
      prop="goodsCanFor"
      width="160">
    </el-table-column>
     <el-table-column
      label="专属规格"
      prop="goodsOnlyFor"
      width="160">
    </el-table-column>
    <el-table-column
      label="包装规格"
      prop="goodsSize"
      width="160">
    </el-table-column>
    <el-table-column
      label="特殊功能"
      prop="goodsSpecial"
      width="160">
    </el-table-column>
     <el-table-column
      label="出产日期"
      prop="goodsData"
      width="160">
    </el-table-column>
     <el-table-column
      label="保质期"
      prop="goodsTime"
      width="160">
    </el-table-column>
    <el-table-column
      label="供应商"
      prop="goodsSupplier"
      width="160">
    </el-table-column>
      <el-table-column
      label="特色说明"
      prop="goodsIntro"
      width="160">
    </el-table-column>
    <el-table-column
      align="right"
      fixed="right"
      width="240" >
      <template slot="header" slot-scope="scope" >       
        <el-input
          v-model="conditions"
          size="mini"
          @keyup.native.enter='search'
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
          <el-button size="mini" @click="seePic(scope.$index, scope.row),centerDialogVisible = true" style="margin-right:10px">查看图片</el-button>
        <el-dialog
          title=""
          :modal-append-to-body="false"
          :visible.sync="centerDialogVisible"
          width="300px"
          center>
          <img style="width:220px;height:300px" :src="goodsImg" />
      </el-dialog>
        <el-button
          size="mini"
          @click="update(scope.$index, scope.row),dialogFormVisible = true">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-dialog title="修改信息" :visible.sync="dialogFormVisible" align="left" style="font-weight:600" width="700px">
                <el-form>
                  <el-form-item label="商品名称">
                    <el-input v-model="updateGoodsName" style="width:560px"></el-input>
                  </el-form-item>

                <div style="overflow:hidden">
                  <el-form-item label="品类" style="float:left;width:330px">
                    <el-select v-model="updateGoodsType" placeholder="请选择品类" style="width:220px;margin-left:30px" >
                    <el-option 
                    style="width:220px"
                    v-for="item in updateGoodsTypeOptions" 
                            :key="item.value"
                            :label="item.name"
                            :value="item.name"
                          ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="材质/ 制作方法" style="float:left;width:330px">
                    <el-input v-model="updateGoodsMaterial" style="width:220px"></el-input>
                  </el-form-item>
                  </div>

                   <div style="overflow:hidden">
                    <el-form-item label="适用规格" style="float:left;width:330px">
                      <el-select v-model="updateGoodsCanFor" placeholder="请选择" style="width:220px;">
                        <el-option 
                      v-for="item in updateGoodsCanForOptions" 
                              :key="item.value"
                              :label="item.name"
                              :value="item.name"
                            ></el-option>
                      </el-select>
                    </el-form-item>
                      <el-form-item label="专属规格" style="float:left;width:330px">
                      <el-input v-model="updateGoodsOnlyFor" style="width:220px;margin-left:40px"></el-input>
                    </el-form-item>
                    </div>

                     <div style="overflow:hidden">
                        <el-form-item label="包装规格" style="float:left;width:330px">
                          <el-select v-model="updateGoodsSize" placeholder="请选择" style="width:220px">
                              <el-option 
                        v-for="item in updateGoodsSizeOptions" 
                                :key="item.value"
                                :label="item.name"
                                :value="item.name"
                              ></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="口味" style="float:left;width:330px">
                        <el-select v-model="updateGoodsTaste" placeholder="请选择" style="width:220px;margin-left:70px">
                              <el-option 
                        v-for="item in updateGoodsTasteOptions" 
                                :key="item.value"
                                :label="item.name"
                                :value="item.name"
                              ></el-option>
                        </el-select>
                      </el-form-item>
                      </div>
              <div style="overflow:hidden">
                <el-form-item label="特殊功效" style="float:left;width:330px">
                <el-input v-model="updateGoodsSpecial" style="width:220px"></el-input>
                  </el-form-item>
                  <el-form-item label="产地" style="float:left;width:330px;">
                <el-input v-model="updateGoodsRegion" style="width:220px;margin-left:70px"></el-input>
                  </el-form-item>
                </div>
                <div style="overflow:hidden">
                <el-form-item label="生产日期" style="float:left;width:330px">
                    <el-date-picker type="date" placeholder="选择日期" v-model="updateGoodsData" value-format="yyyy-MM-dd" style="width: 220px"></el-date-picker>
                </el-form-item>
                <el-form-item label="保质期" style="float:left;width:330px;">
                    <el-input v-model="updateGoodsTime" style="width:220px;margin-left:56px"></el-input>
                </el-form-item>
                </div>
                <div style="overflow:hidden">
                <el-form-item label="供应商" style="float:left;width:330px">
              <el-input v-model="updateGoodsSupplier" style="width:220px;margin-left:14px"></el-input>
                </el-form-item>
                 <el-form-item label="价格" style="float:left;width:330px;">
              <el-input v-model="updateGoodsPrice" style="width:220px;margin-left:70px"></el-input>
                </el-form-item>
                </div>
                <div>
                <el-form-item label="特色说明">
                  <el-input type="textarea" v-model="updateGoodsIntro" style="width:520px"></el-input>
                </el-form-item>
                </div>
                 <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="/img/upload?{size:1}"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="successed"
                    :auto-upload="false">
                    <el-button slot="trigger" size="mini" type="primary">选择图片</el-button>
                    <el-button style="margin-left: 40px;" size="mini" type="success" @click="submitUpload">上传图片</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>

                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false" size="mini">取 消</el-button>
                  <el-button type="primary" @click="confirmUpdate(),dialogFormVisible = false" size="mini">确 定</el-button>
                  
                </div>

            </el-dialog>
      </template>
    </el-table-column>
  </el-table>
      <div class="block" style="width: 100%">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[5, 10, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "GoodsApp"
);

export default {
  name: "goodsList",
  data() {
    return {
      searcherValue: "",
      conditions: "",
      updateGoodsName: "",
      updateGoodsType: "",
      updateGoodsMaterial: "",
      updateGoodsCanFor: "",
      updateGoodsOnlyFor: "",
      updateGoodsSize: "",
      updateGoodsTaste: "",
      updateGoodsSpecial: "",
      updateGoodsRegion: "",
      updateGoodsData: "",
      updateGoodsTime: "",
      updateGoodsSupplier: "",
      updateGoodsIntro: "",
      updateGoodsPrice: "",
      updateGoodsImg: "",
      goodsImg:"",
      updateGoodsTypeOptions: [
        { value: 0, name: "狗粮" },
        { value: 1, name: "猫粮" },
        { value: 2, name: "猫砂" },
        { value: 3, name: "玩具" }
      ],
      updateGoodsCanForOptions: [
        { value: 0, name: "成宠" },
        { value: 1, name: "幼宠" }
      ],
      updateGoodsSizeOptions: [
        { value: 0, name: "1kg" },
        { value: 1, name: "5kg" },
        { value: 2, name: "10kg" }
      ],
      updateGoodsTasteOptions: [
        { value: 0, name: "鸡肉味" },
        { value: 1, name: "牛肉味" }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      centerDialogVisible: false
    };
  },
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getGoodsByPageAsync();
  },
  watch: {
    curPage() {
      this.getGoodsByPageAsync({ curPage: this.curPage });
    },
    eachPage() {
      this.getGoodsByPageAsync({ eachPage: this.eachPage });
    }
  },
  methods: {
    ...mapActions([
      "getGoodsByPageAsync",
      "upDateGoodsAsync",
      "deleteGoodsByIdAsync",
      "searchGoodsAsync"
    ]),
    ...mapMutations(["setCurPage", "setEachPage"]),
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    seePic:function(index, row){
      this.goodsImg=row.goodsImg
    },
    update: function(index, row) {
      this.updateGoodsName = row.goodsName;
      this.updateGoodsType = row.goodsType;
      this.updateGoodsMaterial = row.goodsMaterial;
      this.updateGoodsCanFor = row.goodsCanFor;
      this.updateGoodsOnlyFor = row.goodsOnlyFor;
      this.updateGoodsSize = row.goodsSize;
      this.updateGoodsTaste = row.goodsTaste;
      this.updateGoodsSpecial = row.goodsSpecial;
      this.updateGoodsRegion = row.goodsRegion;
      this.updateGoodsData = row.goodsData;
      this.updateGoodsTime = row.goodsTime;
      this.updateGoodsSupplier = row.goodsSupplier;
      this.updateGoodsIntro = row.goodsIntro;
      this.updateGoodsPrice = row.goodsPrice;
      this.updateGoodsImg = row.goodsImg;
      var storage = window.localStorage;
      storage._id = row._id;
    },
    confirmUpdate() {
      var _id = window.localStorage._id;
      var url = window.localStorage.url;
      const goods = {
        goodsName: this.updateGoodsName,
        goodsType: this.updateGoodsType,
        goodsMaterial: this.updateGoodsMaterial,
        goodsCanFor: this.updateGoodsCanFor,
        goodsOnlyFor: this.updateGoodsOnlyFor,
        goodsSize: this.updateGoodsSize,
        goodsTaste: this.updateGoodsTaste,
        goodsSpecial: this.updateGoodsSpecial,
        goodsRegion: this.updateGoodsRegion,
        goodsData: this.updateGoodsData,
        goodsTime: this.updateGoodsTime,
        goodsSupplier: this.updateGoodsSupplier,
        goodsIntro: this.updateGoodsIntro,
        goodsPrice: this.updateGoodsPrice,
        goodsImg: this.updateGoodsImg,
        _id,
        goodsImg: url
      };
      this.upDateGoodsAsync(goods);
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.deleteGoodsByIdAsync({ _id: row._id });
    },
    search() {
      const searchText = this.conditions;
      this.searchGoodsAsync({ searchText });
    },
    // 上传图片
    submitUpload() {
      var _id = window.localStorage._id;
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    successed(response, file, fileList) {
      this.$refs.upload.clearFiles();
      var storage = window.localStorage;
      storage.url = response.url;
    }
  }
};
</script>
<style>
</style>