export const state = () => {
    return {
        //放一个数组存储保存到草稿的数据
        draft: [],
        remake: '', // 存放评论框焦点的dom元素
        // 传给postitem需要筛选的城市
        city: ""
    }
}

export const mutations = {
    // 更改state中draft的值
    setDraft(state, data) {
        state.draft.unshift(data)
    },
    // 删除草稿
    delDraftData(state, index) {
        state.draft.splice(index, 1)
    },

    /**
     * 把remake的元素存起来
     */
    setRemake(state, data) {
        state.remake = data
    },
    //更改city的值
    setCity(state, data) {
        state.city = data
    }
}