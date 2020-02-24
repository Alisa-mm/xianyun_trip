export const state = ()=>{
  return {
    // detailData
    // 当前页面数据
    detailData: {
      hotelbrand: {},
      city: {}
    },

    // 筛选酒店数据
    selectHotel:{
      price_in: 0,
      hotellevel: 0,
      hoteltype: 0,
      hotelbrand: 0,
      hotelasset: 0
    }
  }
}


export const mutations = {

  setDetailData(state, data){
    state.detailData = data
  },

  // 修改筛选酒店价格的数据
  setPrice(state, data){
    state.selectHotel.price_in = data
  },
  // 修改筛选酒店星级的数据
  setHotellevel(state, data){
    state.selectHotel.hotellevel = data
  },
  // 修改筛选酒店类型的数据
  setHoteltype(state, data){
    state.selectHotel.hoteltype = data
  },
  // 修改筛选酒店品牌的数据
  setHotelbrand(state, data){
    state.selectHotel.hotelbrand = data
  },
  // 修改筛选酒店设施的数据
  setHotelasset(state, data){
    state.selectHotel.hotelasset = data
  }
}

export const actions = {

  findHotelData(store, id){

      return this.$axios({
        url: `/hotels?id=` + id
      }).then(({ data: res }) => {
        // this.detailData = res.data[0]
        // this.comm_score = res.data[0].scores
        // console.log(this.detailData)
        store.commit('setDetailData', res.data[0])
        return res
      })
  }

}
