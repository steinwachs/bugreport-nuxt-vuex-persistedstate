<template>
  <section class="container">
    <div>
      <h1 class="title">
        A problem when using nuxt with vuex-persistedstate and nuxt generate
      </h1>
      <h2 class="subtitle">
        Using vuex-persistedstate leads to a problem <b>only when using nuxt generate</b>. This 
        does not happen when running npm run dev. 
      </h2>
      <p>
        The problem only occurs with vuex-persistedstate if there are multiple v-if statements. And only when using nuxt generate.
      </p>
      <div style="background-color: yellow; padding: 20px">
        <div>Drawer: {{ drawerValue }}</div>
        <button @click="changeVal(true)" v-if="!drawerValue">
          Make it TRUE
        </button>
        <button @click="changeVal(false)" v-if="drawerValue">
          Make it FALSE
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      drawer: this.drawerValue
    }
  },
  methods: {
    changeVal (val) {
      this.$store.dispatch('drawer/setVisible', { visible: val })
    }
  },
  computed: {
    drawerValue () {
      return this.$store.state.drawer.visible
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

