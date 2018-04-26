<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Skills2 msg=""/>
  </div>
</template>

<script>
import Skills2 from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    Skills2
  }
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
