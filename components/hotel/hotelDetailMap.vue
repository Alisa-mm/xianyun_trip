<template>
  <div>
    <el-row type="flex"
            style="margin-top: 40px;margin-bottom: 40px;">
      <!-- 地图 -->
      <div class="map-left"
           id="container"></div>
      <!-- 附近 -->
      <div class="map-right"
           style="margin-left: 20px;">
        <el-tabs v-model="activeName"
                 @tab-click="handleTabClick">
          <el-tab-pane label="风景"
                       name="first">风景</el-tab-pane>
          <el-tab-pane label="交通"
                       name="second">交通</el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  mounted () {
    // 调用高德地图
    this.mapInit()
  },
  methods: {
    // 地图初始化
    async mapInit () {
      window.onLoad = function () {
        var map = new AMap.Map('container')
      }
      const A_MAP_KEY = '9300549242e638172154e47433553378'
      var url = `https://webapi.amap.com/maps?v=1.4.15&key=${A_MAP_KEY}&callback=onLoad`
      var jsapi = document.createElement('script')
      jsapi.charset = 'utf-8'
      jsapi.src = url
      document.head.appendChild(jsapi)
    },

    handleTabClick (tab, event) {
      console.log(tab, event)
    }
  }

}
</script>

<style lang="less" scoped>
.map-left {
  height: 360px;
  width: 650px;
}
.map-right {
  flex: 1;
}
</style>
