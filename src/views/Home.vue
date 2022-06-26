<template>
  <div id="home">
    <div id="navbar">
    <navbar></navbar>
    </div>
    
    <div id="pages">
    <pages></pages>
    </div>
    
   

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
#home {
  width: 100%;
}

#navbar {
  position: fixed;
  width: 100%;
  z-index: 1;

}
 #pages {
  width: 90%;
  margin: 0 auto; 

 }





</style>
