<template>
  <section class="contianer">
    <!-- 条件筛选 -->
    <el-form class="form">
      <el-input placeholder="切换城市" class="switchCity" v-model.trim="CityValue"></el-input>

      <!-- 住宿时间 -->
      <el-date-picker
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
        class="stayTime"
        v-model="stayTime"
        :picker-options="pickerOptions"
      ></el-date-picker>

      <div class="renNumber">
        <!-- 人数 -->
        <el-input
          placeholder="人数未定"
          suffix-icon="el-input_icon iconfont iconuser"
          v-model="NumberValue"
          class="NumberPeople"
          @click.native="handleHidden()"
        ></el-input>
        <el-card shadow="always" class="el-card" v-if="isShow">
          <span>每件</span>
          <el-select class="select" v-model="adult" placeholder="成人">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-select v-model="child" placeholder="儿童">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <div class="hr"></div>

          <el-button type="primary" @click="handleClose">确定</el-button>
        </el-card>
      </div>

      <el-button type="primary" class="btn">查询价格</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      CityValue: "",  //切换城市
      stayTime: "",    //入住时间
      NumberValue: [], //人数
      adult: "",   //成人
      child: "",    //儿童
      isShow: false,

      //模拟的数据
      options: [
        {
          label: 1,
          value: 1
        },
        {
          label: 2,
          value: 2
        },
        {
          label: 3,
          value: 3
        },
        {
          label: 4,
          value: 4
        },
        {
          label: 5,
          value: 5
        },
      ],

      // 日期可选配置
      pickerOptions: {
        // 如果返回true表示可选
        disabledDate (time) {
          return time.getTime() + 3600 * 1000 * 24 < Date.now();
        },
      }
    }
  },
  methods: {
    // 点击显示隐藏切换
    handleHidden () {
      //改变isShow的值
      this.isShow = !this.isShow;
    },
    //失去焦点时触发画板隐藏
    // handleBlur () {
    //   this.isShow = false;
    // },
    handleClose(){
      // console.log(111);
      this.NumberValue.splice(0,2,this.adult,this.child)
    },
    // 筛选
    handleClick () {
      if (this.CityValue !== '') {
        this.$emit('searchCity', this.CityValue)
      }
    },
  }
}
</script>

<style lang="less" scoped>
.el-title {
  height: 30px;
  line-height: 30px;
}
.form {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  .switchCity {
    width: 200px;
    margin-right: 15px;
  }
  .stayTime {
    width: 400px;
    margin-right: 10px;
  }
  .renNumber {
    position: relative;
    .NumberPeople {
      width: 200px;
      margin-right: 15px;
    }
    .el-card {
      position: absolute;
      top: 50px;
      right: -80px;
      // display: none;
      width: 300px;
      height: 150px;
      z-index: 2000;
      .el-select {
        width: 100px;
        
      }
      .hr {
        margin: 20px 0;
        border-top: 1px solid #dcdfe6;
      }
    }

    .el-button {
      font-size: 12px;
      font-weight: 500;
      border-radius: 3px;
      width: 58px;
      height: 30px;
      // line-height: 28px;
      text-align: center;
      margin-left: 200px;
    }
  }
  .btn {
    font-size: 14px;
  }
}


</style>
