export const state = () => ({
  val3: 0
})

export const mutations = {
  inc1() {
    console.log('NO!')
  }
}

export const getters = {
  getDifferentStuff() {return 7}
}

export const actions = {
  inc1() {
    console.log('still wrong!')
  }
}
