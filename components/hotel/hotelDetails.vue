<template>
  <section class="hotelDetails">
    <el-row v-for="(item,index) in data" :key="index">
      <el-col :span="6">{{item.photos}}</el-col>
      <el-col :span="12">
        <h2>{{item.name}}</h2>
        <div>
          {{item.alias}}
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          经济型
        </div>
        <div>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          36条评价 
          46篇游记
        </div>
        <div>{{item.address}}</div>
      </el-col>
      <el-col :span="6">
        <div>
          携程 ￥
          <span>140</span>起>
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
      value:8,
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

<style>
</style>