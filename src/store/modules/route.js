const mutations = {
  routeList(state, value = []) {
    state.routeList = value
  }
}
const state = () => ({
  routeList: [] // 登录用户名
})
const getter = {
  code() {
    return 'code'
  }
}
export default {
  namespaced: true,
  mutations,
  state,
  getter
}
