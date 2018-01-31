
export const state = () => ({
  val1: 0,
  val2: 0
})

export const mutations = {
  inc1(state) {
    state.val1++
  },
  inc2(state) {
    state.val2++
  }
}

export const actions = {
  inc1({commit}) {
    commit('inc1')
  },
  inc2({commit}) {
    commit('inc2')
  }
}
