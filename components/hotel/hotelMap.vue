<template>
  <section class="map">
    <!-- 地图容器 -->
    <div id="container"></div>
  </section>
</template>

 <script>
export default {
  data () {
    return {
      // 用于存储高德地图对象
      map: {}
    }
  },
  mounted () {
    // 异步导入地图js （来自于官网）
    var url = 'https://webapi.amap.com/maps?v=1.4.15&key=0e50af054087c7bec2bd57e4356a4bd3&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
    setTimeout(() => {
      this.initMap()
    }, 100)

    setTimeout(() => {
      // 调用地图的插件，获取城市名字

    }, 200);


  },
  methods: {
    initMap () {
      // 地图加载完毕之后会触发
      window.onLoad = () => {
        // 加载地图容器
        this.map = new AMap.Map('container', {
          zoom: 12,//级别
          resizeEnable: true
          // center: [116.39428, 39.90923]  //中心坐标
        });

        this.locationCenter()
      }
    },
    locationCenter () {
      let _that = this
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete (data) {
          // data是具体的定位信息
          // console.log(data);
          _that.$notify({
            title: '您的位置是：',
            message: data.addressComponent.city
          })
          _that.$emit('location', data.addressComponent.city)
        }

        function onError (data) {
          // 定位出错
        }
      })

    }
  }

}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 300px;
}
</style>
