<template>
  <div id="app">

    <router-link :to="{ path: 'about'}">about</router-link>
    <router-link :to="{ path: 'connect'}">connect</router-link>
    <router-link :to="{ path: 'home'}">home</router-link>
    <router-link :to="{ path: 'skills'}">skills</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
