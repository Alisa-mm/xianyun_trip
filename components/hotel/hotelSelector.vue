<template>
  <section class="selector">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div>
            价格：
            <span>0-4000</span>
          </div>
          <el-slider v-model="price"></el-slider>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <div>住宿等级</div>
          <el-select v-model="grade" class="select" placeholder="请选择">
            <el-option
              v-for="(item,index) in levels"
              :key="index"
              :label="item.level"
              :value="item.name"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div>住宿类型</div>
          <el-select v-model="type" class="select" placeholder="请选择">
            <el-option
              v-for="(item,index) in types"
              :key="index"
              :label="item.level"
              :value="item.name"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <div>酒店设施</div>
          <el-select v-model="facility" class="select" placeholder="请选择">
            <el-option
              v-for="(item,index) in assets"
              :key="index"
              :label="item.id"
              :value="item.name"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div>酒店品牌</div>
          <el-select v-model="brand" class="select" placeholder="请选择">
            <el-option
              v-for="(item,index) in brands"
              :key="index"
              :label="item.id"
              :value="item.name"
            ></el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data () {
    return {
      price:"",  //价格
      grade:"",  //酒店等级
      type:"",   //酒店类型
      facility:"", //酒店设施
      brand:"",  //就地按品牌

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

  mounted(){},
  methods:{}
}
</script>

<style scoped lang="less">
.el-row {
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #dcdfe6;
  .el-col {
    height: 100%;
    border-right: 1px solid #dcdfe6;
    padding: 0 10px;
    .bg-purple-light {
      .select{
        border:none;
      }
    }
  }
}
</style>
