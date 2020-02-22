<template>
  <el-row class="recommend"
          type="flex"
          justify="space-between">
    <h4>
      推荐攻略
    </h4>
    <el-button type="primary"
               icon="el-icon-edit"
               @click="handleClick"> 写游记</el-button>
    <div class="underline"></div>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$router.replace("/post/travelNotes")
    }
  }
}
</script>

<style lang="less" scoped>
.recommend {
  height: 51px;
  padding-bottom: 10px;
  position: relative;
}
h4 {
  box-sizing: border-box;
  font-size: 18px;
  line-height: 41px;
  font-weight: normal;
  color: orange;
}
.underline {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 72px;
  border-bottom: 2px solid orange;
}
</style>