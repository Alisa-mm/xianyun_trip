import Vue from 'vue'
import moment from 'moment'

Vue.filter('momentFormat', (v)=>{
   return moment(v).format('YYYY-MM-DD HH:mm')
})