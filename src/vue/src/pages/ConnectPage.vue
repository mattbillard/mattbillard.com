<template>
  <div class="connect-page">
    <h2>Connect</h2>
    <pre>{{ connectText }}</pre>
  </div>
</template>

<script>
export default {
  name: 'ConnectPage',
  computed: {
    connectText () {
      return this.$store.state.textModule.connectText
    }
  },
  created () {
    this.$store.dispatch('getConnectText')
  }
}
</script>

<style scoped>
</style>
