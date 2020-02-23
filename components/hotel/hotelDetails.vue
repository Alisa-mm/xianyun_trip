<template>
  <section class="hotelDetails">
    <!-- 酒店详情 -->
    <el-row v-for="(item,index) in data" :key="index">
      <el-col :span="6">{{item.photos}}</el-col>
      <el-col :span="12" class="hotelXQ">
        <h2>{{item.name}}</h2>
        <div class="alias">
          <span>{{item.alias}}</span>
          <i class="iconfont iconhuangguan" v-for="(item,index) in 3" :key="index"></i>
          经济型
        </div>
        <div class="pingFen">
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <span>
            36
            <i>条评价</i>
          </span>
          <span>
            46
            <i>篇游记</i>
          </span>
        </div>
        <div class="diZhi">
          <i class="el-icon-location"></i>
          <span>{{item.address}}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="lianJie">
          <span>携程</span>
          <span>
            ￥140起
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <div class="lianJie">
          <span>携程</span>
          <span>
            ￥140起
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <div class="lianJie">
          <span>携程</span>
          <span>
            ￥140起
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-row class="paging">
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </el-row>
  </section>
</template>

<script>
export default {
  data () {
    return {
      value5: 3.7,
      data: [
        {
          photos: "图片",
          alias: "ru jia kuai jie hotel (fang zhou yuan dian)",
          name: "如家快捷酒店(天河方舟园店)",
          address: "荣乐中路12弄282号(近沪松路)",
        },
        {
          photos: "图片1",
          name: "如家快捷酒店(天河方舟园店)",
          address: "荣乐中路12弄282号(近沪松路)",
        }
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.hotelDetails {
  position: relative;
  margin-top: 20px;
  .el-row {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
    //酒店详情
    .hotelXQ {
      h2 {
        font-size: x-large;
        font-weight: 400;
        color: inherit;
      }
      .alias {
        font-size: 16px;
        margin-bottom: 10px;
        color: #999;
        .iconfont {
          color: #ff9900;
        }
      }
    }
    .pingFen {
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      color: #ff9900;
      margin-bottom: 10px;
      span {
        margin-left: 50px;
        i {
          color: #000;
        }
      }
    }
    .diZhi {
      font-size: 16px;
      color: #999;
    }

    // 链接
    .lianJie {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #606266;
      height: 50px;
      line-height: 50px;
      padding: 0 30px 0 15px;
      border-bottom: 1px solid #ddd;
    }
  }
  .paging{
    // position: absolute;
    // right:0px;
    // bottom:0px;
    margin-left:700px;
    border:0;
  }
}
</style>
