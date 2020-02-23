<template>
  <section class="hotelDetails">
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
          <span>36<i>条评价</i></span>
          <span>46<i>篇游记</i></span>
        </div>
        <div>{{item.address}}</div>
      </el-col>
      <el-col :span="6">
        <div>
          <span>携程</span>
          <span>￥140起 ></span>
        </div>
        <div>
          携程 ￥
          <span>140</span>起>
        </div>
        <div>
          携程 ￥
          <span>140</span>起>
        </div>
      </el-col>
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
.hotelDetails{
  margin-top:20px;
  .el-row{
    margin-bottom:15px;
    padding-bottom:15px;
    border-bottom:1px solid #ddd;
    .hotelXQ{
      h2{
        font-size:x-large;
        font-weight:400;
        color:inherit;
      }
      .alias{     
          font-size:16px;
          margin-bottom:10px;
          color:#999;
          .iconfont{
            color:#ff9900;
          }
      }
    }
    .pingFen{
      display:flex;
      justify-content: flex-start;
      font-size:16px;
      color:#ff9900;
      margin-bottom:10px;
      span{
        margin-left:50px;
        i{
          color: #000;
        }
      }
    }
  }
}
</style>
