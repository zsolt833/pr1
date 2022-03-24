<template>
  <NavBar msg="Welcome to Your Vue.js App"/>
  <Body/>
  <div class="fixed top-6 left-2 rotate-45 w-113 h-209 bg-green-300"></div>
  <div class="w-[115px] h-209 bg-green-300"></div>
</template>

<script>
import NavBar from './components/navbar.vue'
import Body from './components/body.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    NavBar,
    Body
  }
}
</script>

<style>

</style>
