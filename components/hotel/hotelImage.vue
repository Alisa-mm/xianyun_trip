<template>
  <div>
    <el-row class="hotel-pic">
      <el-col :span="16">
        <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="640px"
             height="360px"
             alt="">
      </el-col>
      <el-col :span="8">
        <img class="list-pics"
             src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="160px"
             alt="">
        <img class="list-pics"
             src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="160px"
             alt="">
        <img class="list-pics"
             src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="160px"
             alt="">
        <img class="list-pics"
             src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="160px"
             alt="">
        <img class="list-pics"
             src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="160px"
             alt="">
        <img class="list-pics"
             src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
             width="160px"
             alt="">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.hotel-pic {
  margin: 40px 0;
  .list-pics {
    margin-bottom: 10px;
  }
}
</style>
