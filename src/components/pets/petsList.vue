<template>
<div>
  <p style="font-size:24px;padding-bottom:20px;text-align:center; border-bottom:1px solid gray">宠物列表</p>
   <el-table
      :data="rows"
      max-height="500"
    style="width: 100%">
    <el-table-column
      label="宠物名称"
      prop="petsName"
      width="160">
    </el-table-column>
    <el-table-column
      label="品类"
      prop="petsType"
      width="160">
    </el-table-column>
     <el-table-column
      label="原产地"
      prop="petsProvenance"
      width="160">
    </el-table-column>
     <el-table-column
      label="主要颜色"
      prop="petsMainColors"
      width="160">
    </el-table-column>
    <el-table-column
      label="性格"
      prop="petsCharacter"
      width="160">
    </el-table-column>
    <el-table-column
      label="价格"
      prop="petsPrice"
      width="160">
    </el-table-column>
    <el-table-column
      label="体型"
      prop="petsShape"
      width="160">
    </el-table-column>
    <el-table-column
      label="介绍说明"
      prop="petsIntro"
      width="160">
    </el-table-column>
    <el-table-column
      align="right"
      width="280" >
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="conditions"
          size="mini"
          @keyup.native.enter='search'
          placeholder="输入关键字搜索"/>      
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="seePic(scope.$index, scope.row),centerDialogVisible = true" style="margin-right:10px">查看图片</el-button>
        <el-dialog
          :modal-append-to-body="false"
          :visible.sync="centerDialogVisible"
          width="300px"
          center>
          <img style="width:220px;height:300px" :src="petsImg" />
      </el-dialog>
        <el-button
          size="mini"
           @click="update(scope.$index, scope.row),dialogFormVisible = true">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
           <el-dialog title="修改信息" :visible.sync="dialogFormVisible" align="left" style="font-weight:600" width="700px" :modal-append-to-body="false">
                <el-form>
                  <el-form-item label="宠物名称">
                    <el-input v-model="updatePetsName" style="width:520px"></el-input>
                  </el-form-item>
                <div style="overflow:hidden">
                  <el-form-item label="品类" style="float:left;width:330px">
                    <el-select v-model="updatePetsType" placeholder="请选择品类" style="width:220px;margin-left:30px">
                    <el-option 
                    v-for="item in updatePetsTypeOptions" 
                            :key="item.value"
                            :label="item.name"
                            :value="item.name"
                          ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="原产地" style="float:left;width:330px">
                    <el-input v-model="updatePetsProvenance" style="width:220px"></el-input>
                  </el-form-item>
                  </div>
                   <div style="overflow:hidden">
                    <el-form-item label="主要颜色" style="float:left;width:330px">
                     <el-input v-model="updatePetsMainColors" style="width:220px;margin-left:4px"></el-input>
                    </el-form-item>
                      <el-form-item label="性格" style="float:left;width:330px">
                      <el-input v-model="updatePetsCharacter" style="width:220px;margin-left:16px"></el-input>
                    </el-form-item>
                    </div>
                     <div style="overflow:hidden">
                        <el-form-item label="价格" style="float:left;width:330px">
                           <el-input v-model="updatePetsPrice" style="width:220px;margin-left:30px"></el-input>
                      </el-form-item>
                      <el-form-item label="体型" style="float:left;width:330px">
                           <el-input v-model="updatePetsShape" style="width:220px;margin-left:16px"></el-input>
                      </el-form-item>
                      </div>
                      <el-form-item label="介绍说明" style="width:600px" prop="petsIntro">
                      <el-input type="textarea" v-model="updatePetsIntro"></el-input>
                    </el-form-item>
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
  "PetsApp"
);

export default {
  name: "petsList",
  data() {
    return {
      searcherValue: "",
      conditions: "",
      updatePetsName: "",
      updatePetsType: "",
      updatePetsProvenance: "",
      updatePetsMainColors: "",
      updatePetsCharacter: "",
      updatePetsPrice: "",
      updatePetsImg: "",
      updatePetsShape: "",
      updatePetsIntro: "",
      petsImg: "",
      searcher: [
        { name: "宠物名称", value: "petsName" },
        { name: "品类", value: "petsType" },
        { name: "颜色", value: "petsMainColors" },
        { name: "性格", value: "petsCharacter" },
        { name: "价格", value: "petsPrice" }
      ],
      updatePetsTypeOptions: [
        { value: 0, name: "狗" },
        { value: 1, name: "猫" },
        { value: 2, name: "兔子" },
        { value: 3, name: "鱼" },
        { value: 4, name: "蛇" },
        { value: 5, name: "其他" }
      ],
      eachPages: "",
      selected: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      centerDialogVisible: false
    };
  },
  computed: {
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  mounted() {
    this.getPetsByPageAsync();
  },
  watch: {
    curPage() {
      this.getPetsByPageAsync({ curPage: this.curPage });
    },
    eachPage() {
      this.getPetsByPageAsync({ eachPage: this.eachPage });
    }
  },
  methods: {
    ...mapActions([
      "getPetsByPageAsync",
      "upDatePetsAsync",
      "deletePetsByIdAsync",
      "searchPetsAsync"
    ]),
    ...mapMutations(["setCurPage", "setEachPage"]),
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    seePic: function(index, row) {
      this.petsImg = row.petsImg;
    },
    update: function(index, row) {
      this.updatePetsName = row.petsName;
      this.updatePetsType = row.petsType;
      this.updatePetsProvenance = row.petsProvenance;
      this.updatePetsMainColors = row.petsMainColors;
      this.updatePetsCharacter = row.petsCharacter;
      this.updatePetsPrice = row.petsPrice;
      this.updatePetsShape = row.petsShape;
      this.updatePetsIntro = row.petsIntro;
      this.updatePetsImg = row.petsImg;
      var storage = window.localStorage;
      storage._id = row._id;
    },
    confirmUpdate() {
      var _id = window.localStorage._id;
      var url = window.localStorage.url;
      const pets = {
        petsName: this.updatePetsName,
        petsType: this.updatePetsType,
        petsProvenance: this.updatePetsProvenance,
        petsMainColors: this.updatePetsMainColors,
        petsCharacter: this.updatePetsCharacter,
        petsPrice: this.updatePetsPrice,
        petsShape: this.updatePetsShape,
        petsIntro: this.updatePetsIntro,
        petsImg: this.updatePetsImg,
        _id,
        petsImg: url
      };
      this.upDatePetsAsync(pets);
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.deletePetsByIdAsync({ _id: row._id });
    },
    search() {
      const searchText = this.conditions;
      this.searchPetsAsync({ searchText });
    },

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
    pic() {},
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