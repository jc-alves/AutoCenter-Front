<template>
  <div class="home">
    <navbar></navbar>
    <pages></pages>
   

  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '../components/navbar.vue';
import Pages from '../components/pages.vue'

export default {
  name: 'Home',
  components: {
    Navbar, Pages    
  },
 
}
</script>

<style scoped>


</style>
