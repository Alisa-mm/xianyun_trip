<template>
  <section class="contianer">
    <!-- 条件筛选 -->
    <el-form class="form">
      <el-input placeholder="切换城市"
                class="switchCity"
                v-model.trim="CityValue"></el-input>

      <!-- 住宿时间 -->
      <el-date-picker type="daterange"
                      range-separator="-"
                      start-placeholder="入住日期"
                      end-placeholder="离店日期"
                      class="stayTime"
                      v-model="stayTime"
                      :picker-options="pickerOptions"></el-date-picker>

      <!-- 人数 -->
      <el-input placeholder="人数未定"
                suffix-icon="el-input_icon iconfont iconuser"
                v-model="NumberValue"
                class="NumberPeople"></el-input>
      <el-card shadow="always"
               class="el-card">
        <span>每件</span>
        <el-select v-model="value"
                   placeholder="成人">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>

        <el-select v-model="value"
                   placeholder="儿童">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>

        <div class="hr"></div>

        <el-button type="primary">确定</el-button>
      </el-card>

      <el-button type="primary"
                 class="btn">查询价格</el-button>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      CityValue: "",  //切换城市
      stayTime: "",    //入住时间
      NumberValue: "", //人数
      value: "",

      //模拟的数据
      options: [
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        },
        {
          label: "3",
          value: "3"
        },
        {
          label: "4",
          value: "4"
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
    // 点击隐藏显示
    handeHidden () {

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
  .NumberPeople {
    // position: relative;

    width: 200px;
    margin-right: 15px;
  }
  .el-card {
    position: absolute;
    top: 170px;
    right: 335px;
    display: none;
    width: 300px;
    height: 200px;
    z-index: 2368;
    .el-select {
      width: 100px;
    }
    .hr {
      margin: 20px 0;
      border-top: 1px solid #dcdfe6;
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
