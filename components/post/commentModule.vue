<template>
  <div class="commentHead">
    <comment v-if="data.parent" :data="data.parent" />

    <div @mouseenter="mouseHover" @mouseleave="mouseLeave">
      <div class="commentHeader">
        <p>{{data.account.nickname}}</p>
        <span>{{data.account.created_at | momentFormat}}</span>
      </div>
      <div class="commentContent">
        <img v-if="data.pics>=1" :src="$axios.defaults.baseURL + data.pics[0].url">
        <p>{{data.content}}</p>
        <a href="javascript:;" ref="aDom" v-show="blockShow">回复</a>
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
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  a {
    color: #1e50a2;
    padding-right: 10px;
  }
}
</style>