import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'foobar',
    paths: [
      'drawer.visible'
    ]
  })(store)
}
