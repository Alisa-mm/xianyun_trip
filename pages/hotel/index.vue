<template>
  <section class="container">
    <!-- 顶部面包屑 -->
    <el-breadcrumb class="el-title"
                   separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>酒店预订</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 顶部筛选器 -->
    <HotelFlights @searchCity="searchCity"></HotelFlights>

    <!-- 区域信息 -->
    <el-row style="margin-top: 22px;">
      <el-col :span="14"
              class="hotel-left">
        <!-- 区域 -->
        <el-row>
          <el-col :span="3"
                  class="title">
            区域：
          </el-col>
          <el-col :span="21">
            <span v-for="(item, index) in scenics"
                  :key="index"
                  class="site">
              {{item.name}}
            </span>
          </el-col>
        </el-row>
        <!-- 均价 -->
        <el-row>
          <el-col :span="3"
                  class="title">
            均价 <el-tooltip class="item"
                        effect="dark"
                        content="等级均价由平日价格计算得出，节假日价格会有上浮。"
                        placement="top-start">
              <i class="el-icon-question"></i>
            </el-tooltip>：
          </el-col>
          <el-col :span="21">
            <el-row>

              <el-col :span="6"
                      v-for="(item,index) in prices"
                      :key="index">
                <el-tooltip class="item"
                            effect="dark"
                            content="等级评定是针对房价，设施和服务等各方面水平的综合评估。"
                            placement="top-start">
                  <i v-for="(item,index) in 3"
                     class="iconfont iconhuangguan"
                     :key="index"
                     style="color:#f7ba2a;"></i>
                </el-tooltip>
                <span>￥{{item.price}}</span>
              </el-col>

            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <!-- 地图组件 -->
        <HotelMap @location="location" />
      </el-col>
    </el-row>

    <!-- 选择器 -->
    <HotelSelector></HotelSelector>

    <!-- 酒店详情 -->
    <HotelDetails :data="cityHotel" />
    <!-- {{cityName}} -->
  </section>
</template>

<script>
import HotelFlights from "@/components/hotel/hotelFlights";
import HotelMap from "@/components/hotel/hotelMap";
import HotelSelector from "@/components/hotel/HotelSelector";
import HotelDetails from "@/components/hotel/hotelDetails";
export default {
  data () {
    return {
      // 当前城市
      cityName: '',
      // 城市id
      cityId: 0,
      // 酒店列表
      cityHotel: '',
      //区域列表
      scenics: [
        { name: '' }
      ],
      prices: [
        {
          price: 332
        },
        {
          price: 521
        },
        {
          price: 768
        },
      ]
    }
  },
  //注册组件
  components: {
    HotelFlights,
    HotelSelector,
    HotelMap,
    HotelDetails
  },

  mounted () {
    //页面一加载请求数据
    this.location()
  },
  methods: {
    location (location) {
      this.cityName = location
      this.getData(location)
    },
    //请求数据
    getData (cityName) {
      this.$axios({
        url: `cities?name=` + cityName
      }).then(({ data: res }) => {
        console.log(res.data[0]);
        this.cityId = res.data[0].id
        this.scenics = res.data[0].scenics
        this.$axios({
          url: `hotels?city=${res.data[0].id}`
        }).then(({ data: res }) => {
          console.log(res);
          this.cityHotel = res.data

        })
      })
    },
    searchCity (cityName) {
      console.log(cityName)
      this.getData(cityName)
    }
  }
}
</script>

<style scoped lang="less">
.el-breadcrumb {
  padding: 20px 0;
}
.container {
  width: 1000px;
  margin: 0 auto;
  .hotel-left {
    color: #666;
    font-size: 14px;
    > .el-row {
      padding-bottom: 20px;
    }
    .site {
      margin-right: 10px;
      &:hover {
        color: #0099ff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
