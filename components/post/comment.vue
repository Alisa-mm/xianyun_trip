<template>
  <div class="comment">
    <div class="commentHead" v-for="(item, index) in data" :key="index">
        <img v-if="item.pics.length == 0" :src='$axios.defaults.baseURL + item.account.defaultAvatar' alt="" srcset="">
        <img v-if="item.pics.length == 1" :src='item.pics.url' alt="" srcset="">
        <p>{{item.account.nickname}}</p>
        <span>{{item.account.created_at | momentFormat}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    name:'comment',
    props:['data'],
    data(){
        return {
            createdTime:''
        }
    },
    mounted(){
        console.log(this.data);
        
    }
}
</script>

<style lang="less" scoped>
.comment{
    border:1px solid #eee;
    .commentHead{
        border-bottom: 1px dashed #eee;
        display: flex;
        align-items: top;
        img{
            width: 20px;
            height: 20px;
        }
        p{
            display: inline-block;
        }
    }
}
</style>