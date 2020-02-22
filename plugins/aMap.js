export default function MapLoader() {
  return new Promise((resolve, reject) => {
      // 全局对象如果存在地图直接将结果抛出
      if (window.AMap) {
          resolve(window.AMap)
      } else {
          // 创建script标签并放入cdn链接
          var script = document.createElement('script')
          script.type = 'text/javascript'
          script.async = true
          script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=9300549242e638172154e47433553378&callback=initAMap'
          script.onerror = reject
          document.head.appendChild(script)
      }
      window.initAMap = () => {
          // 注入相关插件
          window.AMap.plugin(['AMap.ToolBar', 'AMap.CircleEditor', 'AMap.PolyEditor'], function () {
              //异步同时加载多个插件
              var toolbar = new AMap.ToolBar();
              map.addControl(toolbar);
          });
          // 将结果抛出
          resolve(window.AMap)
      }
  })
}
