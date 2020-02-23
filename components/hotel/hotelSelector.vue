<template>
  <section class="selector">
    <el-row>
      <el-col :span="6">
        <div class="price">
          <div>
            <span>价格</span>
            <span>0-4000</span>
          </div>
          <!-- <el-slider v-model="price"></el-slider> -->
          <el-slider v-model="price" :format-tooltip="formatTooltip"></el-slider>
        </div>
      </el-col>

      <el-col :span="18" class="tiaoJian">
         <div class="grid-content">
          <div>住宿类型</div>
          <div class="borderHidden">
          <el-select 
                v-model="type" 
                multiple 
                collapse-tags
                class="select" 
                placeholder="请选择">
                <el-option
                  v-for="(item,index) in types"
                  :key="index"
                  :label="item.level"
                  :value="item.name"
                ></el-option>
          </el-select>
          </div>
        </div>

         <div class="grid-content">
          <div>住宿等级</div>
          <div class="borderHidden">
          <el-select 
          v-model="grade"
           multiple 
           collaps-tags 
           placeholder="请选择">
            <el-option
              v-for="(item,index) in levels"
              :key="index"
              :label="item.level"
              :value="item.name"
            ></el-option>
          </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>酒店设施</div>
          <div class="borderHidden">
          <el-select 
          v-model="facility" 
          multiple 
          collaps-tags 
          placeholder="请选择">
            <el-option
              v-for="(item,index) in assets"
              :key="index"
              :label="item.id"
              :value="item.name"
            ></el-option>
          </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>酒店品牌</div>
          <div class="borderHidden">
          <el-select 
          v-model="brand" 
          multiple 
          collaps-tags 
          placeholder="请选择">
            <el-option
              v-for="(item,index) in brands"
              :key="index"
              :label="item.id"
              :value="item.name"
            ></el-option>
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
      price: 0,  //价格
      grade: 0,  //酒店等级
      type: "",   //酒店类型
      facility: "", //酒店设施
      brand: "",  //就地按品牌

      //模拟数据
      //酒店等级
      levels: [
        {
          level: 1,
          name: "1星"
        },
        {
          level: 2,
          name: "2星"
        },
        {
          level: 3,
          name: "3星"
        },
      ],
      //住宿类型
      types: [
        {
          id: 1,
          name: "舒适型"
        },
        {
          id: 2,
          name: "高档型"
        },
        {
          id: 3,
          name: "豪华型"
        },
      ],

      //酒店设施
      assets: [
        {
          id: 1,
          name: "wifi",
          type: "房间设施"
        },
        {
          id: 2,
          name: "热水壶",
          type: "房间设施"
        },
        {
          id: 3,
          name: "吹风机",
          type: "房间设施"
        },
      ],
      //酒店品牌
      brands: [
        {
          id: 1,
          name: "七天连锁"
        },
        {
          id: 2,
          name: "汉庭"
        },
        {
          id: 3,
          name: "余家"
        },
      ]
    }
  },

  mounted () { },
  methods: {
    //换条价格
    formatTooltip(val){
      return val *40
    }
  }
}
</script>

<style scoped lang="less">
.el-row {
  font-size:14px;
  color:#666;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #dcdfe6;
  .price{
    padding:0 15px;
    div{
      display:flex;
      justify-content: space-between;
    }
  }
  .tiaoJian{
    display:flex;
    justify-content: space-around;
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
    }
  }
}
</style>
