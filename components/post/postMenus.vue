<template>
  <div class="postmenus"
       style="width:260px">
    <!-- 菜单模块 -->
    <div>
      <ul class="menu">
        <li v-for="(item,index) in menus"
            :key="index"
            class="menu-item"
            @mouseenter="handleEnter(index)"
            @mouseleave="handleLeave(index)">
          <el-row class="el-dropdown-link"
                  type="flex"
                  justify="space-between"
                  style="line-height:41px">
            {{item.type}}<i class="el-icon-arrow-right el-icon--right"
               style="font-size:22px;line-height:40px;"></i>
          </el-row>
        </li>
        <div class="box"
             v-if="isShow"
             @mouseenter="keepShow"
             @mouseleave="keepnoShow">
          <ul>
            <li v-for="(item,index) in menus[index].children"
                :key="index">
              <a href="JavaScript:void(0)"><em>{{index+1}}</em></a>
              <a href="JavaScript:void(0)"><i>{{item.city}}</i></a>
              <a href="JavaScript:void(0)"><span>{{item.desc}}</span></a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="advance">
      <h4>推荐城市</h4>
      <nuxt-link to="#">
        <img src="@/static/images/pic_sea.jpeg"
             alt=""
             class="adv-pic">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: {},
      isShow: false,
      index: null
    }
  },
  mounted () {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      this.menus = res.data.data
      // console.log(this.menus)
    })
  },
  methods: {
    handleEnter (index) {
      this.isShow = true
      this.index = index
    },
    handleLeave (index) {
      this.isShow = false
    },
    keepShow () {
      this.isShow = true
    },
    keepnoShow () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.menu {
  width: 100%;
  border-bottom: 1px solid #ddd;
  position: relative;
  .box {
    position: absolute;
    top: 0;
    left: 259px;
    width: 350px;
    height: 200px;
    border: 1px solid #ddd;
    z-index: 2;
    background-color: #fff;
  }
  .menu-item {
    width: 100%;
    color: #000;
    // border-bottom: 1px solid #ddd;
    i {
      color: #999;
    }
    .el-dropdown-link {
      height: 40px;
      padding: 0 20px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-bottom: none;
      z-index: 5;
    }
    &:hover .el-dropdown-link {
      border-right: 1px solid #fff;
      color: orange;
      i {
        color: orange;
      }
    }
  }
}
li {
  height: 40px;
  font-size: 14px;
  em {
    font-style: italic;
    font-size: 22px;
    color: orange;
    display: inline-block;
    padding: 10px 10px 0;
  }
  i {
    color: orange;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #999;
    &:hover {
      text-decoration: underline;
    }
  }
}

h4 {
  color: #000;
  font-weight: normal;
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
}
.adv-pic {
  width: 260px;
  padding-top: 10px;
}
</style>