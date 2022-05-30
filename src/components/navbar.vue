<template>
    <div class="navbar">
        <div class="users">
        <label>Usuario: Jose Claudio</label><br>
        <label>Nivel: Gerente</label>
        </div>
    
    </div>
</template>

<script>
//import loginVue from '../views/login.vue'
//import global from './auth/global'
//import auth from './auth/auth'
export default {
    name: 'navbar',
 
     mounted () {                           
                //const email = loginVue.
     }
}
</script>

<style scoped>
.navbar {
    background-color: rgb(11, 11, 77);
    height: 90px;
    width: 100%;
    display: flex;
    
}
.users {
    text-align: left;
    
    float: left;
    margin-top: 25px;
    margin-left: 10px;
    color: white;
    height: 40px;
    width: 300px;
   
   
}

</style>