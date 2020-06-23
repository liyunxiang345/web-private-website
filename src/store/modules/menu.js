//  单一状态树
const state = {
    TIPSHOW: false
};

// getters 暴露出去的获取 state 的计算属性
const getters = {
    getTipShow: state => {
        return state.TIPSHOW;
    }
};

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
    setTipShow: (state, data) => {
        state.TIPSHOW = data;
    }
};

// actions 暴露到外部的方法 不直接变更状态
const actions = {
    setTipShow: ({ commit }, data) => {
        commit("setTipShow", data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
