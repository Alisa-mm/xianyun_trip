<template>
  <section class="selector">
    <el-row>
      <el-col :span="6">
        <div class="price">
          <div>
            <span>价格</span>
            <span>0-4000</span>
          </div>
          <el-slider v-model="price" :format-tooltip="formatTooltip"></el-slider>
        </div>
      </el-col>
      <el-col :span="18" class="tiaoJian">
        <div class="grid-content">
          <div>住宿等级</div>
          <div class="borderHidden">
            <el-select
              v-model="grade"
              multiple
              collapse-tags
              class="select"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in levels"
                :key="index"
                :label="item.name"
                :value="item.level"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>住宿类型</div>
          <div class="borderHidden">
            <el-select
              v-model="type"
              multiple
              collaps-tags
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in types"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>酒店设施</div>
          <div class="borderHidden">
            <el-select
              v-model="facility"
              multiple
              collaps-tags
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in assets"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="grid-content">
          <div>酒店品牌</div>
          <div class="borderHidden">
            <el-select
              v-model="brand"
              multiple
              collaps-tags
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in brands"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      price: 4000, //价格
      grade: 0, //酒店等级
      type: 0, //酒店类型
      facility: 0, //酒店设施
      brand: "", //就地按品牌

      //酒店等级
      levels: [],
      //住宿类型
      types: [],
      //酒店设施
      assets: [],
      //酒店品牌
      brands: []

      // //筛选后的酒店
      // hotelList: []
    };
  },

  mounted() {
    //页面一加载请求数据
    this.hotelData();
  },
  methods: {
    //滑条价格
    formatTooltip(val) {
      return val * 40;
    },

    //请求数据额
    hotelData() {
      this.$axios({
        url: "/hotels/options"
      }).then(({ data: res }) => {
        console.log(res.data);
        //酒店等级
        this.levels = res.data.levels;
        //酒店类型
        this.types = res.data.types;
        //酒店设施
        this.assets = res.data.assets;
        //酒店品牌
        this.brands = res.data.brands;
      });
    },

    //  获取酒店 价格 类型 星级 设施
    // getHotellevel(data) {
    //   this.$store.commit("hotel/setHotellevel", data[data.length - 1]);
    //   this.hotelGather()
    //   console.log( this.$store.state.hotel.selectHotel.hotellevel);
    // },
    // getHoteltype(data) {
    //   this.$store.commit("hotel/setHoteltype", data[data.length - 1]);
    //   this.hotelGather()
    // },
    // getHotelasset(data) {
    //   this.$store.commit("hotel/setHotelasset", data[data.length - 1]);
    //   this.hotelGather()
    // },
    // getHotelbrand(data) {
    //   this.$store.commit("hotel/setHotelbrand", data[data.length - 1]);
    //   this.hotelGather()
    // },

    // 筛选酒店
    hotelGather(){
      this.$axios({
        url: '/hotels',
        params:{
          // price_in: this.$store.state.hotel.selectHotel.price_in,
          hotellevel: this.$store.state.hotel.selectHotel.hotellevel
          // hoteltype:this.type,
          // hotelbrand:this.brand,
          // hotelasset:this.facility
        }
      }).then(res=>{
        // console.log(res.data.data);
      })
    }
  },
  watch: {
    // 监听价格改动
    price(a) {
      this.$store.commit("hotel/setPrice", a * 40);
      this.hotelGather()
    },
    grade(a){
      console.log(a[a.length - 1]);
      this.$store.commit("hotel/setHotellevel", a[a.length - 1]);
       this.hotelGather()
    },
    type(a){
      console.log(a[a.length - 1]);
      this.$store.commit("hotel/setHoteltype", a[a.length - 1]);
       this.hotelGather()
    },
    facility(a){
      console.log(a[a.length - 1]);
      this.$store.commit("hotel/setHotelasset", a[a.length - 1]);
       this.hotelGather()
    },
    brand(a){
      console.log(a[a.length - 1]);
      this.$store.commit("hotel/setHotelbrand", a[a.length - 1]);
       this.hotelGather()
    }
  }
};
</script>

<style scoped lang="less">
.el-row {
  font-size: 14px;
  color: #666;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #dcdfe6;
  .price {
    padding: 0 15px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .tiaoJian {
    display: flex;
    justify-content: space-around;
    .grid-content {
      padding: 0 15px;
      border-left: 1px solid #dcdfe6;
      .borderHidden {
        width: 150px;
        float: right;
        overflow: hidden;
        .el-select {
          width: 160px;
          margin: -1px;
        }
      }
    }
  }
}
</style>
