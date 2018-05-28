<template>
  <div class="home-page">
    <h2>Home</h2>
    <pre>{{ homeText }}</pre>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    homeText () {
      return this.$store.state.textModule.homeText
    }
  },
  created () {
    this.$store.dispatch('getHomeText')
  }
}
</script>

<style scoped>
</style>
