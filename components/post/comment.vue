<template>
  <div class="comment">
    <div class="commentWrap" v-for="(item, index) in data" :key="index">
      <div class="commentHeader">
        <img :src="$axios.defaults.baseURL + item.account.defaultAvatar" alt srcset />
        <p>{{item.account.nickname}}</p>
        <span>{{item.account.created_at | momentFormat}}</span>
      </div>
      <ComModule v-if="item.parent" :data="item.parent" />
      <div @mouseenter="mouseHover" @mouseleave="mouseLeave">
          <div class="commentImage">
              <img v-for="(a,i) in item.pics" :key="i" :src="$axios.defaults.baseURL + a.url" alt="">
          </div>
        <div class="commentContent">{{item.content}}</div>
        <div class="iconfontList">
          <i class="iconfont icon-dianzan"></i>
          <span>点赞数：</span>
        </div>
        <a href="javascript:;" ref="aDom" v-show="blockShow" @click="postRemark(item)">回复</a>
      </div>
    </div>
  </div>
</template>

<script>
import ComModule from "@/components/post/commentModule";
export default {
  props: ["data"],
  components: {
    ComModule
  },
  data() {
    return {
      blockShow: false
    };
  },
  methods: {
    mouseHover(i) {
      this.blockShow = true;
    },
    mouseLeave(i) {
      this.blockShow = false;
    },

    /**
     * 发出监听事件，传值到父组件
     */
    postRemark(item) {
      this.$emit("getRemark", item);
    }
  }
};
</script>

<style lang="less" scoped>
.comment {
  position: relative;
  font-size: 12px;
  border: 1px solid #dddddd;
}
.commentWrap {
  padding: 20px;
  margin-bottom: 10px;
  border-bottom: 1px dashed #dddddd;
  &:last-child {
    border-bottom: 0;
  }
  &:hover a {
    display: block;
  }
  .commentHeader {
    display: flex;
    justify-content: left;
    align-items: center;
    p {
      color: #666666;
    }
    span {
      padding-left: 10px;
      color: #666666;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }

  .commentContent {
    padding-left: 30px;
  }
  a {
    color: #1e50a2;
    position: absolute;
    right: 20px;
    display: none;
  }
  .iconfontList{
    position: absolute;
    right: 60px;
  }
}
img {
  display: inline-block;
    max-width: 100px;
  }
</style>