export const state = () => ({
  val1:0
})

export const mutations = {
  inc1(state) {
    state.val1 += 2
  }
}

export const actions = {
  inc1() {
    console.log = 'wrong!'
  }
}

export const getters = {
  getSomeStuff() {return 5}
}
