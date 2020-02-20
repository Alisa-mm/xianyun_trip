<template>
  <sction class="selector">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <p>
            价格：
            <span>0-4000</span>
          </p>
          <el-slider v-model="value1"></el-slider>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <p>住宿等级</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p>住宿类型</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <p>酒店设施</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <p>酒店品牌</p>
        </div>
      </el-col>
    </el-row>
  </sction>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.el-row{
    padding:10px;
    margin-top:20px;
    border:2px solid #DCDFE6;
    .el-col{
        height: 100%;
        border-right:2px solid #DCDFE6;
        padding-left:5px;

    }
}
</style>>
