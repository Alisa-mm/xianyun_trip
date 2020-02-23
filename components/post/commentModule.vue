<template>
  <div class="commentHead">
    <comment v-if="data.parent" :data="data.parent" />
    <div @mouseenter="mouseHover" @mouseleave="mouseLeave">
      <div class="commentHeader">
        <p>{{data.account.nickname}}</p>
        <span>{{data.account.created_at | momentFormat}}</span>
      </div>
      <div class="commentContent">
        <img v-for="(a,i) in data.pics" :key="i" :src="$axios.defaults.baseURL + a.url" />
        <p>{{data.content}}</p>
        <a href="javascript:;" ref="aDom" v-show="blockShow" @click="postRemark(item)">回复</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    data: {
      type: Object,
      default: {}
    }
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
.commentHead {
  padding: 2px;
  background: #f9f9f9;
  border: 1px solid #dddddd;
  .commentHeader {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px 0;
    p {
      color: #666666;
      padding-left: 20px;
    }
    span {
      padding-left: 10px;
      color: #666666;
    }
  }
}
.commentContent {
  position: relative;
  padding-left: 20px;
  a {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #1e50a2;
    padding-right: 10px;
  }
  img {
    max-width: 150px;
  }
}
</style>