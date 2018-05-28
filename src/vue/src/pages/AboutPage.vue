<template>
  <div class="about-page">
    <h2>About</h2>
    <pre>{{ aboutText }}</pre>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  computed: {
    aboutText () {
      return this.$store.state.textModule.aboutText
    }
  },
  created () {
    this.$store.dispatch('getAboutText')
  }
}
</script>

<style scoped>
</style>
