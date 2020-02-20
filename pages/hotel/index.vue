<template>
  <section class="container">
    <!-- 顶部筛选器 -->
    <HotelFlights/>

    <!-- 区域信息 -->
    <el-row type="flex">
      <el-col :span="14">
        <p>区域： 人民广场  顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶   顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶  顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶  顶顶顶顶顶顶顶顶顶顶顶</p>
        <p>均价：@@@ ￥322  </p>
      </el-col>
      <el-col :span="10">
        <!-- 地图组件 -->
        <HotelMap/>
      </el-col>
    </el-row>

    <!-- 选择器 -->
    <HotelSelector/>

    <el-row>
      <el-col :span="8">
        图片
      </el-col>
      <el-col :span="8">
        <h2>如家快捷酒店</h2>
        <p>ju jia juai jie hotel(fang zhou yan dian ) @@@ 经济型</p>
        <p> *****   36条评价  46篇游记</p>
        <p>位于：用法付付付付付付</p>
      </el-col>
      <el-col :span="8">
        <div>携程 ￥<span>140</span>起></div>
        <div>携程 ￥<span>140</span>起></div>
        <div>携程 ￥<span>140</span>起></div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import HotelFlights from "@/components/hotel/hotelFlights";
import HotelMap from "@/components/hotel/hotelMap";
import HotelSelector from "@/components/hotel/HotelSelector";
export default {
  components:{
    HotelFlights,
    HotelSelector,
    HotelMap
  }

}
</script>

<style scoped lang="less">
.container{
  width: 1000px;
  margin:10px auto;
  .el-row{
    margin-top:20px;
  }
}

</style>