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
              <span>攻略：{{commentList.createdDate}}</span>
              <span>阅读：{{commentList.watch}}</span>
            </div>

            <div class="article">
              <!-- 展示文章内容 -->
              <div v-html="commentList.content"></div>
              <!-- 评论 分享 图标 -->
              <div class="iconfont">
                <div class="iconfontWrap">
                  <i class="iconpinglun iconimage"></i>
                  <span>评论({{commentsLength}})</span>
                </div>
                <div class="iconfontWrap">
                  <i class="iconfenxiang iconimage"></i>
                  <span>分享</span>
                </div>
              </div>

              <!-- 评论模块 -->
              <div class="comment">
                <p>评论</p>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>

                <!-- 图片上传 -->
                <div class="uploadImage">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>

                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt />
                  </el-dialog>

                  <el-button type="primary" size="small">提交</el-button>
                </div>

                <!-- 评论组件 -->
                <Comment />
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
import moment from "moment";
export default {
  components: { Comment },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      textarea: "",
      commentList: "",
      commentsLength:''
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 获取文章内容
    getComment() {
      this.$axios({
        url: "/posts",
        data: {
          id: this.$route.query.id
        }
      }).then(res => {
        let list = res.data.data.filter(e => {
          return e.id == this.$route.query.id;
        });

        // 格式化日期
        list[0].createdDate = moment(list[0].created_at).format(
          "YYYY-MM-DD HH:mm"
        )
        this.commentList = list[0];
        this.commentsLength = this.commentList.comments.length
        console.log(this.commentList);
      })
    }
  },
  mounted() {
    this.getComment()
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
  width: 100px;
  height: 100px;
  line-height: 100px;
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
      display: inline-block;
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
    p {
      margin: 10px 0;
    }
    /deep/.el-textarea__inner {
      margin: 10px 0;
    }

    .uploadImage {
      display: flex;
      justify-content: space-between;
      /deep/.el-button {
        height: 30px;
      }
      /deep/.el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>