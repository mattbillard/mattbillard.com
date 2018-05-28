<template>
  <div id="app">

    <h1>Vue</h1>

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
</style>
