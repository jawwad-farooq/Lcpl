<template>
  <NavBar/>
  <router-view />
  <footerSec contentLine="Created By SomeOne" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import footerSec from './components/footerSec.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    footerSec,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body {
  margin: 0px;
}
</style>
