<template>
  <div class="commentHead">
    <comment v-if="data.parent" :data="data.parent" />
    <p>{{data.account.nickname}}</p>
    <span>{{data.account.created_at | momentFormat}}</span>
    <div class="commentContent">{{data.content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  name: "comment"
};
</script>

<style lang="less" scoped>
.commentHead {
  padding: 2px;
  background: #f9f9f9;
  border: 1px solid #dddddd;
}
</style>