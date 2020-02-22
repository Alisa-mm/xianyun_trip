<template>
  <div class="postItem">
    <div class="postItem0 poststyle"
         v-if="data.images.length == 0">
      <h4><a href="JavaScript:void(0)">{{data.title}}</a></h4>
      <p><a href="JavaScript:void(0)">{{data.summary}}</a></p>
      <el-row class="footer"
              type="flex">
        <div style="flex:1">
          <span style="width:53px;margin-right:10px"><i class="el-icon-location"></i>{{data.city.name}}</span>
          <span style="align:center;">by <a href="JavaScript:void(0)"><img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                   style="width:16px;height:16px;margin:5px;vertical-align: middle;"
                   class="userhead" />
              <span style="color:orange;">{{$store.state.user.userInfo.user.nickname}}</span></a></span>
          <span>&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;{{data.watch}}</span>
        </div>
        <span style="font-size:16px;color:orange;">{{data.like}} 赞</span>
      </el-row>
    </div>
    <div class="postItem1 poststyle"
         v-if="data.images.length == 1">
      <el-row type="flex">
        <img v-for="(item,index) in data.images"
             :key="index"
             :src="item"
             alt=""
             style="margin-right:10px;">
        <div class="info">
          <h4 style="white-space:nowrap;"><a href="JavaScript:void(0)">{{data.title}}</a></h4>
          <p style="height:82px;margin:0 0 15px;overflow: hidden;"><a href="JavaScript:void(0)">{{data.summary}}</a></p>
          <el-row class="footer"
                  type="flex">
            <div style="flex:1">
              <span style="width:53px;margin-right:10px"><i class="el-icon-location"></i>{{data.city.name}}</span>
              <span style="align:center;">by <a href="JavaScript:void(0)"><img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                       style="width:16px;height:16px;margin:5px;vertical-align: middle;"
                       class="userhead" />
                  <span style="color:orange;">{{$store.state.user.userInfo.user.nickname}}</span></a></span>
              <span>&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;{{data.watch}}</span>
            </div>
            <span style="font-size:16px;color:orange;">{{data.like}} 赞</span>
          </el-row>
        </div>
      </el-row>
    </div>
    <div class="postItem2 poststyle"
         v-if="data.images.length > 1">
      <h4>
        <nuxt-link to="JavaScript:void(0)">{{data.title}}</nuxt-link>
      </h4>
      <p style="height:63px;overflow:hidden;">
        <nuxt-link to="JavaScript:void(0);">{{data.summary}}</nuxt-link>
      </p>
      <el-row class="pics"
              type="flex"
              justify="space-around">
        <img v-for="(item,index) in data.images"
             :key="index"
             :src="item"
             alt="">
      </el-row>
      <el-row class="footer"
              type="flex">
        <div style="flex:1">
          <span style="width:53px;margin-right:10px"><i class="el-icon-location"></i>{{data.city.name}}</span>
          <span style="align:center;">by <a href="JavaScript:void(0)"><img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                   style="width:16px;height:16px;margin:5px;vertical-align: middle;"
                   class="userhead" />
              <span style="color:orange;">{{$store.state.user.userInfo.user.nickname}}</span></a></span>
          <span>&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;{{data.watch}}</span>
        </div>
        <span style="font-size:16px;color:orange;">{{data.like}} 赞</span>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
  ,
  mounted () {
    // console.log(this.data)
  },
  data () {
    return {
      dataList: [],
      currentPage: 1,
    }
  }
}
</script>

<style lang="less" scoped>
.postItem {
  img {
    width: 220px;
    height: 150px;
    .postItem1 {
      .info {
        height: 143px;
      }
    }
  }
  .footer {
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    color: #999;
  }
  .pics {
    justify-content: space-between;
  }
  p {
    height: 63px;
    margin: 0 0 15px;
    a {
      font-size: 14px;
      color: #666;
    }
  }
  h4 {
    margin: 0 0 15px;

    a {
      color: #000;
      font: 18px 'Source Sans Pro';
      &:hover {
        color: orange;
      }
    }
  }
}
.poststyle {
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #000;
}
</style>