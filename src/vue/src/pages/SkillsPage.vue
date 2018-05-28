<template>
  <div class="skills-page">
    <h2>Skills</h2>
    <pre>{{ skillsText }}</pre>
  </div>
</template>

<script>
export default {
  name: 'SkillsPage',
  computed: {
    skillsText () {
      return this.$store.state.textModule.skillsText
    }
  },
  created () {
    this.$store.dispatch('getSkillsText')
  }
}
</script>

<style scoped>
</style>
