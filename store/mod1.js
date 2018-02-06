export const state = () => ({
  val1:0,
  val2:0
})

export const mutations = {
  inc1(state) {
    state.val1 += 2
  }
}
