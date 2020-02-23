<template>
  <div>
    <div class="container">
      <!-- 左边 -->
      <el-row :gutter="20">
        <el-col :span="17">
          <!-- 面包屑导航 -->
          <div class="grid-content">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
              <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <!-- 主题 -->
          <h1>{{commentList.title}}</h1>

          <!-- 文章内容 -->
          <div class="content">
            <div class="strategy">
              <span>攻略：{{commentList.created_at | momentFormat}}</span>
              <span>阅读：{{commentList.watch}}</span>
            </div>

            <div class="article">
              <!-- 展示文章内容 -->
              <div v-html="commentList.content"></div>
              <!-- 评论 分享 图标 -->
              <div class="iconfont">
                <div class="iconfontWrap">
                  <i class="iconpinglun iconimage"></i>
                  <span>评论({{total}})</span>
                </div>
                <div class="iconfontWrap">
                  <i class="iconfenxiang iconimage"></i>
                  <span>分享</span>
                </div>
              </div>
            </div>
            <!-- 评论模块 -->
            <div class="comment">
              <p>评论</p>
              <!-- 回复模块 -->
              <div class="remark" v-if="remarkList">
                <span>回复：{{remarkList.account.nickname}}</span>
                <i class="el-icon-close"></i>
              </div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea"
                ref="remake"
              ></el-input>

              <!-- 图片上传 -->
              <div class="uploadImage">
                <el-upload
                  :action="$axios.defaults.baseURL + '/upload'"
                  name="files"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleImage"
                  :file-list="handleFileList"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>

                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>

                <el-button type="primary" size="small" @click="handleComment">提交</el-button>
              </div>

              <!-- 评论组件 -->
              <Comment :data="commentContent" @getRemark="getRemark" />

              <!-- 分页 -->
              <div class="pagin">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="start / limit + 1"
                  :page-sizes="[5, 10, 15, 20]"
                  :page-size="limit"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </div>
        </el-col>

        <!-- 右边 -->
        <el-col :span="7">
          <div class="grid-content bg-purple">相关攻略</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/post/comment";
export default {
  components: { Comment },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      textarea: "", // 文本框内容
      commentList: "", // 文章列表
      commentContent: "", // 评论列表
      total: 0, // 评论总数
      start: 0, // 评论显示数据
      limit: 6, // 显示的条数
      imageUrl: [], // 保存的图片
      handleFileList: [], //上传文件后的数组
      remarkList: "", // 子组件传来的回复对象
      socreList: {}, // 回复的评分对象
      followList: null // 回复的id
    };
  },
  methods: {
    /**
     * 图片预览与删除
     */
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    /**
     * 图片上传
     */
    handleImage(response, file, fileList) {
      /**
       * 通过upload接口返回的response数据，遍历之后push到 this.imageUrl即可通过添加多个图片
       */
      response.forEach(e => {
        this.imageUrl.push(e);
      });
    },

    /**
     * 获取文章
     */
    getContent() {
      this.$axios({
        url: "/posts",
        data: {
          id: this.$route.query.id
        }
      }).then(res => {
        let list = res.data.data.filter(e => {
          return e.id == this.$route.query.id;
        });
        this.commentList = list[0];
      });
    },

    /**
     * 选择展示的页数
     */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.limit = val;
      this.getComment();
    },

    /**
     * 点击当前页
     * _start: 起始的数据
     * _limit:  数据的条数
     */
    handleCurrentChange(val) {
      this.start = (val - 1) * this.limit;
      this.getComment();
    },

    /**
     * 获取评论
     */
    getComment() {
      this.$axios({
        url: "/posts/comments",
        params: {
          post: this.$route.query.id,
          _start: this.start,
          _limit: this.limit
        }
      }).then(res => {
        this.commentContent = res.data.data;
        this.total = Number(res.data.total);
        console.log(this.commentContent);
      });
    },

    /**
     * 发布评论
     */
    handleComment() {
      this.$axios({
        url: "/comments",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ` + this.$store.state.user.userInfo.token
        },
        data: {
          // 发布评论所需要的参数
          content: this.textarea,
          post: Number(this.$route.query.id),
          pics: this.imageUrl,
          score: this.socreList || {},
          follow: this.followList || null
        }
      }).then(res => {
        this.textarea = "";
        this.imageUrl = [];
        this.handleFileList = [];
        this.remarkList = "";
        this.getComment();
        this.$message.success("发表成功");
      });
    },

    /**
     * 回复功能
     */
    getRemark(data) {
      console.log(data);
      this.remarkList = data;
      this.socreList = this.remarkList.account;
      this.followList = this.remarkList.id;
      this.$refs.remake.focus();
    }
  },
  mounted() {
    this.getContent();
    this.getComment();
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
/deep/.el-upload--picture-card {
  width: 102px;
  height: 102px;
  line-height: 102px;
}

/deep/.el-textarea__inner {
  height: 50px;
  resize: none;
}

/* 自定义样式 */
.content {
  .strategy {
    display: flex;
    justify-content: flex-end;
    span {
      margin: 10px 20px;
    }
  }

  .article {
    /deep/img {
      max-width: 700px;
    }
  }

  .iconfont {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    .iconimage {
      font-size: 30px;
      color: orange;
    }
    .iconfontWrap {
      margin: 0 20px;
      i {
        display: block;
        text-align: center;
        margin: 10px 0;
      }
      span {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .comment {
    .remark {
      padding: 5px;
      border: 1px solid #e0e0e3;
      border-radius: 5px;
      background: #f4f4f5;
      color: #909399;
      font-size: 12px;
      display: inline-block;
    }
    p {
      margin: 10px 0;
    }
    /deep/.el-textarea__inner {
      margin: 10px 0;
    }

    .uploadImage {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      /deep/.el-button {
        height: 30px;
      }
      /deep/.el-upload-list--picture-card .el-upload-list__item {
        width: 103px;
        height: 103px;
      }
    }
  }
}
</style>