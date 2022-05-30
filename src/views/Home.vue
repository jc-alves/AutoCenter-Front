<template>
  <div class="home">
    <navbar></navbar>
   <button @click="outSubmit" class="bt-vm">Sair</button>
    <p>teste: {{ user }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { signOut } from '../components/auth/auth'
import Navbar from '../components/navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar    
  },
  methods: {
    async outSubmit () {
      await signOut();
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>

.bt-vm {
height: 25px;
width: 60px;  
border-color:#f61f0e;
background:linear-gradient(to bottom, #fca8a1 5%, #f61f0e 100%);
box-shadow:inset 0px 1px 0px 0px #fff4f3;
color:#fff;
text-shadow:0px 1px 0px #528009; 
}



.bt-vm:hover {
background:linear-gradient(to bottom, #f61f0e 5%, #fca8a1 100%);
}

</style>
