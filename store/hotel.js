export const state = ()=>{
  return {
    // detailData
    // 当前页面数据
    detailData: {
      hotelbrand: {},
      city: {}
    }
  }
}


export const mutations = {

  setDetailData(state, data){
    state.detailData = data
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
