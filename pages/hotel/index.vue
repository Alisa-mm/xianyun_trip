<template>
  <section class="container">
    <!-- 顶部筛选器 -->
    <HotelFlights/>

    <!-- 区域信息 -->
    <el-row type="flex">
      <el-col :span="14">
        <div>区域：<span 
        v-for="(item, index) in scenics"
        :key="index"
        class="site">
        {{item.name}}
        </span></div>
        
        均价：<span v-for="(item,index) in prices"
        :key="index">
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <span>￥{{item.price}}</span>
        </span>
      </el-col>
      <el-col :span="10">
        <!-- 地图组件 -->
        <HotelMap/>
      </el-col>
    </el-row>

    <!-- 选择器 -->
    <HotelSelector/>

    <!-- 酒店详情 -->
    <HotelDetails/>

    
  </section>
</template>

<script>
import HotelFlights from "@/components/hotel/hotelFlights";
import HotelMap from "@/components/hotel/hotelMap";
import HotelSelector from "@/components/hotel/HotelSelector";
import HotelDetails from "@/components/hotel/hotelDetails";
export default {
  data(){
    return{
      //酒店列表
      scenics:[
        {
          name:"人民广场",
          price:197
        },
        {
          name:"城桥镇",
          price:222
        },
        {
          name:"金山区",
          price:333
        },
        {
          name:"新河镇",
          price:197
        },
        {
          name:"人民广南门场",
          price:197
        },
      ],
      prices:[
        {
          price:120
        },
        {
          price:188
        },
        {
          price:888
        },
      ]
    }
  },
  //注册组件
  components:{
    HotelFlights,
    HotelSelector,
    HotelMap,
    HotelDetails
  },

  mounted(){
    //页面一加载请求数据
    this.getData();
  },
  methods:{
    //请求数据
    getData(){
      this.$axios({
        url:"cities",
        //请求的参数
        params:{
          id:this.id,
          name:this.name
        }
      }).then(res => {
        console.log(this.data);
      })
    }
  }

}
</script>

<style scoped lang="less">
.container{
  width: 1000px;
  margin:10px auto;
  .el-row{
    margin-top:20px;
    span{
      .iconfont{
        color: #f7ba2a;
      }
    }
  }
}

</style>