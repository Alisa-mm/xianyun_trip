<template>
  <div class="comment">
    <div class="commentWrap" v-for="(item, index) in data" :key="index">
      <div class="commentHead">
        <img :src="$axios.defaults.baseURL + item.account.defaultAvatar" alt srcset />
        <p>{{item.account.nickname}}</p>
        <span>{{item.account.created_at | momentFormat}}</span>
      </div>
      <ComModule v-if="item.parent" :data="item.parent" />
      <div class="commentContent">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import ComModule from "@/components/post/commentModule";
export default {
  props: ["data"],
  components: {
    ComModule
  }
};
</script>

<style lang="less" scoped>
.comment{
  border: 1px solid #dddddd;
}
.commentWrap {
  padding: 20px;
  margin-bottom:10px;
  border-bottom: 1px dashed #dddddd;
  &:last-child{
     border-bottom: 0;
  }
  .commentHead {
    img {
      width: 30px;
      height: 30px;
    }
  }
}

</style>