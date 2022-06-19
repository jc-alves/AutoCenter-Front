<template>
<div id="conteiner">
<h1>Novo Cliente</h1>
    <div id="form">
        <form>
        <user-vue />
        
        </form>

    </div>
</div>

</template>

<script>
import userVue from '../user.vue'

export default {
     name: 'newClient',
        components: { userVue }
   
}
</script>

<style scoped>
#conteiner {
  margin-top: 0;
  width: 50%;
  height: 400px;
  display: block;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
input[type="text"],
input[type="password"],
input[type="email"] {
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

</style>