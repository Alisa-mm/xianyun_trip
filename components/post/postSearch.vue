<template>
  <div>
    <!-- 搜索框 -->
    <el-row class="search-bar"
            type="flex">
      <input type="text"
             style="outline:none"
             placeholder="请输入想去的地方，比如：'广州'"
             v-model="city">
      <i class="el-icon-search"
         @click="handleClick"></i>
    </el-row>
    <!-- 推荐城市 -->
    <div class="recommend">
      推荐： <a href="JavaScript:void(0)"
         @click="advance('广州')">广州 </a><a href="JavaScript:void(0)"
         @click="advance('上海')">上海 </a><a href="JavaScript:void(0)"
         @click="advance('北京')">北京</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      restaurants: [],
      state4: '',
      timeout: null,
      city: ""
    }
  },
  methods: {
    handleClick () {
      this.$store.commit("post/setCity", this.city)
    },
    advance (city) {
      this.$store.commit("post/setCity", city)
    }
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  width: 700px;
  border: 3px solid orange;
  input {
    padding: 0 20px;
    width: 620px;
    border: none;
  }
  i {
    color: orange;
    font-size: 20px;
    font-weight: 700;
    margin-top: 7px;
  }
}
.recommend {
  font-size: 12px;
  color: #666;
  padding: 10px 0;
  a {
    margin-right: 5px;
    &:hover {
      text-decoration: underline;
      color: orange;
    }
  }
}
</style>