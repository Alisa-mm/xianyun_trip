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
                       name="first">
            <el-table :data="sceneryList.pois"
                      style="width: 100%"
                      border
                      height="310">
              <el-table-column prop="name"
                               label="地点"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               label="地址">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="交通"
                       name="second">
            <el-table :data="trafficList.pois"
                      style="width: 100%"
                      border
                      height="310">
              <el-table-column prop="name"
                               label="地点"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               label="地址">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="美食"
                       name="third">
            <el-table :data="sceneryList.pois"
                      style="width: 100%"
                      border
                      height="310">
              <el-table-column prop="name"
                               label="地点"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               label="地址">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      mapCenter: [],
      map: '',
      data: [],
      sceneryList: {},
      trafficList: {},
      footList: {}
    }
  },
  mounted () {
    // this.mapInit()
    setTimeout(() => {
      this.mapCenter = [
        this.$store.state.hotel.detailData.location.longitude,
        this.$store.state.hotel.detailData.location.latitude
      ]
      this.data = this.$store.state.hotel.detailData
    }, 100)

    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=9300549242e638172154e47433553378&callback=onLoad&plugin=AMap.PlaceSearch"
    var jsapi = document.createElement("script")
    jsapi.charset = "utf-8"
    jsapi.src = url
    document.head.appendChild(jsapi)
    //组件加载完后执行的函数
    setTimeout(() => {
      this.mapInit()
    }, 200)
  },
  methods: {
    // 地图初始化
    mapInit () {
      // let that = this
      // MapLoader().then(AMap => {
      //   that.map = new AMap.map('container', {
      //     center: [118.02, 39.63],
      //     zoom: 13
      //   })
      // }).catch(err => {
      //   console.log('地图加载失败', err)
      // })
      window.onLoad = () => {
        this.map = new AMap.Map("container", {
          center: this.mapCenter,
          zoom: 15, //初始地图级别
          resizeEnable: true
        });
        var marker = new AMap.Marker({
          position: new AMap.LngLat(...this.mapCenter),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: this.data.name
        });
        this.map.add(marker);
        this.searchScenery();
      };
    },
    searchScenery () {
      let _that = this
      AMap.service(["AMap.PlaceSearch"], () => {
        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 20, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: this.data.city.name, // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          map: this.map // 展现结果的地图实例
        });
        //关键字查询
        placeSearch.searchNearBy("风景", this.mapCenter, 5000, function (
          status,
          result
        ) {

          console.log(result)
          _that.sceneryList = result.poiList

        });
      });
    },
    handleTabClick (tab, event) {

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
  height: 360px;
}
// .el-tabs__content {
// }
</style>
