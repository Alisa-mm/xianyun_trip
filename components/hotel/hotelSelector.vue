<template>
  <section class="selector">
    <el-row>
      <el-col :span="6">
        <div class="price">
          <div>
            <span>价格</span>
            <span>0-4000</span>
          </div>
          <el-slider v-model="price"
                     :format-tooltip="formatTooltip"></el-slider>
        </div>
      </el-col>

<<<<<<< HEAD
      <el-col :span="18" class="tiaoJian">
         <div class="grid-content">
          <div>住宿等级</div>
          <div class="borderHidden">
          <el-select 
                v-model="type" 
                multiple 
                collapse-tags
                class="select" 
                placeholder="请选择">
                <el-option
                  v-for="(item,index) in levels"
                  :key="index"
                  :label="item.name"
                  :value="item.level"
                ></el-option>
=======
      <el-col :span="18"
              class="tiaoJian">
        <div class="grid-content bg-purple">
          <div>住宿类型</div>
          <el-select v-model="type"
                     class="select"
                     placeholder="请选择">
            <el-option v-for="(item,index) in types"
                       :key="index"
                       :label="item.level"
                       :value="item.name"></el-option>
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
          </el-select>
          </div>
        </div>

<<<<<<< HEAD
         <div class="grid-content">
          <div>住宿类型</div>
          <div class="borderHidden">
          <el-select 
          v-model="grade"
           multiple 
           collaps-tags 
           placeholder="请选择">
            <el-option
              v-for="(item,index) in types"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
=======
        <div class="grid-content bg-purple-light">
          <div>住宿等级</div>
          <el-select v-model="grade"
                     class="select"
                     placeholder="请选择">
            <el-option v-for="(item,index) in levels"
                       :key="index"
                       :label="item.level"
                       :value="item.name"></el-option>
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
          </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>酒店设施</div>
<<<<<<< HEAD
          <div class="borderHidden">
          <el-select 
          v-model="facility" 
          multiple 
          collaps-tags 
          placeholder="请选择">
            <el-option
              v-for="(item,index) in assets"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
=======
          <el-select v-model="facility"
                     class="select"
                     placeholder="请选择">
            <el-option v-for="(item,index) in assets"
                       :key="index"
                       :label="item.id"
                       :value="item.name"></el-option>
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
          </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>酒店品牌</div>
<<<<<<< HEAD
          <div class="borderHidden">
          <el-select 
          v-model="brand" 
          multiple 
          collaps-tags 
          placeholder="请选择">
            <el-option
              v-for="(item,index) in brands"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
=======
          <el-select v-model="brand"
                     class="select"
                     placeholder="请选择">
            <el-option v-for="(item,index) in brands"
                       :key="index"
                       :label="item.id"
                       :value="item.name"></el-option>
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
          </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data () {
    return {
<<<<<<< HEAD
      price: 0,  //价格
      grade: 0,  //酒店等级
=======
      price: 100,  //价格
      grade: "",  //酒店等级
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
      type: "",   //酒店类型
      facility: "", //酒店设施
      brand: "",  //就地按品牌

      //酒店等级
      levels: [],
      //住宿类型
      types: [],
      //酒店设施
      assets: [],
      //酒店品牌
      brands: []
    }
  },

  mounted () { 
    //页面一加载请求数据
    this.hotelData()
  },
  methods: {
<<<<<<< HEAD
    //滑条价格
    formatTooltip(val){
      return val *40
    },

    //请求数据额
    hotelData(){
      this.$axios({
        url:"/hotels/options"
      }).then(({data:res})=>{
        console.log(res.data)
        //酒店等级
        this.levels = res.data.levels
        //酒店类型
        this.types = res.data.types
        //酒店设施
        this.assets = res.data.assets
        //酒店品牌
        this.brands = res.data.brands
      })
=======
    //换条价格
    formatTooltip (val) {
      return val * 40
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
    }

  }
}
</script>

<style scoped lang="less">
.el-row {
  font-size: 14px;
  color: #666;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #dcdfe6;
  .price {
    padding: 0 15px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .tiaoJian {
    display: flex;
    justify-content: space-around;
<<<<<<< HEAD
    .grid-content{
      padding:0 15px;
      border-left:1px solid #dcdfe6;
      .borderHidden{
        width: 150px;
        float:right;
        overflow: hidden;
        .el-select{
        width: 160px;
        margin:-1px;

      }
      }
=======
    .grid-content {
      padding: 0 15px;
      border-left: 1px solid #dcdfe6;
>>>>>>> 4023bf25d09340e844ebe4806ec80e06a77fc8cd
    }
  }
}
</style>
