<template>
  <div class="grid-content bg-purple">
    <div class="headerWrap">
      <div class="headerWrapBox">
        <div class="headerBox" v-for="(item, index) in iconfontList" :key="index">
          <i class="iconfont" :class="item.class" @click="getRemake"></i>
          <span>{{item.totalList}}</span>
        </div>
      </div>
      <el-backtop :bottom="100">
        <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >UP</div>
      </el-backtop>
    </div>

    <p>攻略目录</p>
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step v-for="(item, index) in recommendList" :key="index" :title="item.title"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  props: ["total"],
  data() {
    return {
      recommendList: "", // 推荐文章
      //   iconfontList: ["icon-pinglun", "icon-xingxing"] // 字体图标
      iconfontList: [
        {
          class: "icon-pinglun",
          totalList: this.total
        },
        {
          class: "icon-xingxing",
        //   totalList: this.commentContent
        }
      ] // 字体图标
    };
  },
  methods: {
    /**
     *  点击获取评论框焦点
     */
    // getRemake() {
    //   this.$store.state.post.remake();
    // },
      getRemake(index) {
      if (index === 0) {
        this.$store.state.post.remake();
      }
      if (index === 1) {
        this.$axios({
          url: "/posts/star",
          headers: {
            Authorization: `Bearer ` + this.$store.state.user.userInfo.token
          },
          params: {
            id: this.$route.query.id
          }
        }).then(res => {
          this.$message.success(res.data.message);
        });
      }
    },

    /**
     *  获取推荐文章
     */
    getRecommend() {
      this.$axios({
        url: "/posts/recommend"
      }).then(res => {
        this.recommendList = res.data.data;
      });
    }
  },
  mounted() {
    this.getRecommend();
  }
};
</script>

<style lang="less" scoped>
.grid-content {
  position: fixed;
  p {
    margin: 10px 0;
  }
}
.headerWrap {
  margin-bottom: 20px;
  .item {
    margin-top: 10px;
    margin-right: 20px;
  }
  .headerWrapBox {
    width: 250px;
    display: flex;
    justify-content: center;
    .headerBox {
      display: flex;
      flex: 1;
      align-items: center;
      flex-direction: column;
      i {
        font-size: 30px;
      }
      .icon-pinglun {
        color: #f89d00;
      }
      .icon-xingxing {
        color: #2098e4;
      }
    }
  }
}
</style>