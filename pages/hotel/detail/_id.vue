<template>
  <div class="detail">
    <!-- 面包屑导航 -->
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in breadcrumb"
                            :key="index">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <!-- 标题 -->
    <el-row>
      <h4 class="detail-title">{{ $store.state.hotel.detailData.name }}</h4>
    </el-row>
    <el-row>
      <span class="detail-name">{{ $store.state.hotel.detailData.alias }}</span>
    </el-row>
    <el-row>
      <i class="el-icon-location">{{ $store.state.hotel.detailData.address }}</i>
    </el-row>
    <!-- 酒店图片 -->
    <HotelImage></HotelImage>

    <!-- 表格 -->
    <HotelPrice :data="$store.state.hotel.detailData.products"></HotelPrice>

    <!-- 地图&附近 -->
    <HotelDetailMap></HotelDetailMap>
    <!-- hotel详情 -->
    <div class="hotel-info-row">
      <!-- 基本信息 -->
      <el-row class="hotel-info-row">
        <el-row>
          <el-col :span="4">
            基本信息
          </el-col>
          <el-col :span="20">
            <el-row>
              <el-col :span="6">入住时间: 14:00之后</el-col>
              <el-col :span="6">离店时间: 12:00之前</el-col>
              <el-col :span="6">{{ $store.state.hotel.detailData.creation_time }} {{ $store.state.hotel.detailData.renovat_time? ' / ' + $store.state.hotel.detailData.renovat_time : $store.state.hotel.detailData.renovat_time }}</el-col>
              <el-col :span="6">酒店规模: {{ $store.state.hotel.detailData.roomCount }} 间客房</el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>

      <!-- 主要设施 -->
      <el-row class="hotel-info-row">
        <el-row>
          <el-col :span="4">
            主要设施
          </el-col>
          <el-col :span="20">
            <el-tag v-for="(item, key) in $store.state.hotel.detailData.hotelassets"
                    :key="key"
                    type="info">{{ item.name }}</el-tag>
          </el-col>
        </el-row>
      </el-row>

      <!-- 停车服务 -->
      <el-row class="hotel-info-row">
        <el-row>
          <el-col :span="4">
            停车服务
          </el-col>
          <el-col :span="20">
            -
          </el-col>
        </el-row>
      </el-row>

      <!-- 品牌信息 -->
      <el-row class="hotel-info-row">
        <el-row>
          <el-col :span="4">
            品牌信息
          </el-col>
          <el-col :span="20">
            {{detailData['hotelbrand']['name']}}
          </el-col>
        </el-row>
      </el-row>

    </div>

    <!-- 用户评论 -->
    <el-row class="comment-info">
      <el-row>
        <h4>{{ $store.state.hotel.detailData.common_remarks }} 条真实用户评论</h4>
      </el-row>
      <el-row>
        <!-- 评论数 -->
        <el-col :span="4">
          <p>总评数：{{ $store.state.hotel.detailData.all_remarks }}</p>
          <p>差评数：{{ $store.state.hotel.detailData.bad_remarks }}</p>
          <p>好评数：{{ $store.state.hotel.detailData.good_remarks }}</p>
        </el-col>
        <!-- 星级 -->
        <el-col :span="5"
                class="comment-score">
          <el-rate v-model="score"
                   disabled
                   show-score
                   text-color="#ff9900">
            {{comm_score.environment}}
          </el-rate>
          <div class="stamp">推荐</div>
        </el-col>
        <!-- 评分 -->
        <el-col :span="5"
                class="comment-score">
          <el-progress type="circle"
                       v-if="comm_score.environment"
                       :percentage="comm_score.environment * 10"
                       :show-text="false"
                       :width="80"></el-progress>
          <div class="comment-info">
            <span>环境</span><span>{{ comm_score.environment }}</span>
          </div>
        </el-col>
        <el-col :span="5"
                class="comment-score">
          <el-progress type="circle"
                       v-if="comm_score.product"
                       :percentage="comm_score.product * 10"
                       :show-text="false"
                       :width="80"></el-progress>
          <div class="comment-info">
            <span>产品</span><span>{{ comm_score.product }}</span>
          </div>
        </el-col>
        <el-col :span="5"
                class="comment-score">
          <el-progress type="circle"
                       v-if="comm_score.service"
                       :percentage="comm_score.service * 10"
                       :show-text="false"
                       :width="80"></el-progress>
          <div class="comment-info">
            <span>服务</span><span>{{ comm_score.service }}</span>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import HotelImage from '@/components/hotel/hotelImage'
import HotelPrice from '@/components/hotel/hotelPrice'
import HotelDetailMap from '@/components/hotel/hotelDetailMap'
export default {
  components: {
    HotelImage,
    HotelPrice,
    HotelDetailMap
  },
  data () {
    return {
      // 评分
      comm_score: {},
      // 当前页面id
      id: this.$route.params.id,
      // 当前页面数据
      detailData: {
        hotelbrand: {}
      },
      // breadcrumb
      breadcrumb: ''
    }
  }, // data END

  computed: {
    score: {
      get () {
        let res = Number(((this.comm_score.environment + this.comm_score.product + this.comm_score.service) / 3 * 0.5).toFixed(1))
        return res
      },
      set () { }
    }
  },
  mounted () {
    // 拿取当前页数据
    this.getHotelData()
  }, // mounted END

  methods: {
    getHotelData () {
      this.$store.dispatch('hotel/findHotelData', this.id).then((res) => {
        this.comm_score = res.data[0].scores
        // console.log(this.comm_score)
        this.breadcrumb = res.data[0].breadcrumb.split('>')
        console.log(this.breadcrumb)

      })

    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  .el-breadcrumb {
    padding: 20px 0;
  }
  .detail-title {
    color: #333;
    font-weight: 400;
    font-size: x-large;
  }
  .detail-name {
    color: #666;
    font-weight: 400;
    font-size: 13px;
  }
  /deep/.el-icon-location {
    color: #666;
    font-size: 14px;
    font-style: normal;
  }

  .hotel-info-row > .el-row {
    height: 59px;
    border-bottom: 1px solid #eee;
    .el-col {
      vertical-align: center;
      font-size: 14px;
      line-height: 59px;
    }
  }
  .comment-info {
    margin: 40px 0;
    p {
      color: #666;
    }
    .comment-score {
      height: 100%;
      position: relative;
      .comment-info {
        position: absolute;
        top: 0;
        left: 20%;
        text-align: center;
        transform: translate(-50%, -50%);
        span {
          color: rgb(255, 153, 0);
        }
      }
    }
    .stamp {
      position: absolute;
      left: 20px;
      top: -3px;
      border: 2px solid #fa3;
      text-align: center;
      line-height: 70px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      opacity: 0.25;
      transform: rotate(-30deg);
      font-size: x-large;
      color: #f90;
    }
  }
}
/deep/.el-progress-circle__path {
  stroke: rgb(255, 153, 0) !important;
  stroke-width: 3 !important;
}
</style>
