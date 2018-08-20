export const state = () => ({
  visible: true
})

export const mutations = {
  setVisible (state, visible) {
    state.visible = visible
  }
}

export const actions = {
  setVisible (context, { visible }) {
    context.commit('setVisible', visible)
  }
}

export const getters = {
  isVIsible: (state) => () => { return state.visible }
}
