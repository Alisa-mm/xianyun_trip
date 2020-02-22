<template>
  <el-row class="container"
          type="flex"
          justify="space-between">

    <div class="menus-wrapper">

      <div class="menus-body">
        <postMenus></postMenus>
      </div>

    </div>

    <div class="post-wrapper">

      <div class="search-wrapper">
        <PostSearch></PostSearch>
      </div>

      <div class="post-title">
        <PostRecommend></PostRecommend>
      </div>

      <div class="post-list">
        <PostItem v-for="(item,index) in dataList"
                  :key="index"
                  :data="item"></PostItem>
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageIndex"
                       :page-sizes="[3, 6, 9, 12]"
                       :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="postData.total">
        </el-pagination>
      </div>
    </div>
  </el-row>
</template>

<script>
import PostMenus from "@/components/post/postMenus"
import PostSearch from "@/components/post/postSearch"
import PostRecommend from "@/components/post/postRecommend"
import PostItem from "@/components/post/postItem"
export default {
  data () {
    return {
      pageIndex: 1,
      pageSize: 3,
      postData: {
        data: [],
        total: null
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val

    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val
    }
  },
  computed: {
    // 当前要展示的数据数组
    dataList () {
      if (!this.postData.data) {
        return []
      }
      const arr = this.postData.data.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      ) //slice切割返回包含0不包含5索引
      return arr
    }
  },
  mounted () {
    this.$axios({
      url: "/posts"
    }).then(res => {
      this.postData = res.data;
      console.log(this.postData)
      // var max = 0;
      // this.dataList.forEach(v => {
      //   if (v.images.length > max) {
      //     max = v.images.length
      //   }
      // })
      // console.log(max)
      //最多有4个图片
    })
  },
  components: {
    PostMenus, PostSearch, PostRecommend, PostItem
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
  .menus-wrapper {
    width: 260px;
  }
  .post-wrapper {
    width: 700px;
  }
}
</style>