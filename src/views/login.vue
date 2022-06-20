<template>
  <div id="login">
   
    <div class="container">
    <h1>Systech</h1>
  <h3>Grupo Auto Peças Beira Rio</h3>
    
        <div class="form">
          <form  method="POST" @submit.prevent="handleSubmit()"> 
            <div class="login1">
                <label for="uname"><b>Usuario</b></label>
                <input type="text" placeholder="email" name="email" required v-model="email">
                <label for="psw"><b>Senha</b></label>
                <input type="password" placeholder="Digite a senha" name="password" required v-model="password">
        
                <button type="submit"><b>Entrar</b></button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Me relembre
                </label>
            </div>

                <div class="login1" style="background-color:#f1f1f1">

                    <span class="psw">Esqueceu a <a href="#">senha?</a></span>
                </div>
           </form>
          
        </div>
              
        </div>
    
    </div>
  
  

  <router-view/>
</template>

<script>
import global from '../components/auth/global'
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      email: 'jose@alves',
      password: '123456',
      user: ''   
     
    }
  },
     


  methods: {
    async handleSubmit() {
         try {
             const response = await axios.post(global.userCredential, {
              email: this.email,
              password: this.password,                  
              })
              localStorage.setItem('toke', response.data.toke)             
              localStorage.setItem('nome', response.data.nome)
               localStorage.setItem('tipo', response.data.tipo)                           
              this.$router.push('/home')              
         } catch {
             alert('Erro ao autenticar!')
         }
          

          
       }
  }    

}
</script>

<style scoped>


#login {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  color: rgb(30, 30, 70);
  justify-content: center;
  align-items: center;

}
.container {
  width: 98%;
  height: 80%;
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  justify-content: center;
  align-items: center;
}


.form {
  margin: 100px auto;
  color: red;
  padding: 30px;
  width: 90%;
  height: 90%;
  max-width: 800px;
  min-width: 80%;
  min-height: 300px;
  

}
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 90%;
  font-size: 30px;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}


label {
  font-size: 18px;
}
span.psw {
  float: right;
  padding-top: 16px;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  margin: 8px 0;
  padding: 14px 20px;
  background-color: #f44336;
}

label {
  display: flex;
  padding: 5px;
  text-align: left;
}

.left {
  width: 200px;
  display: block;
}

</style>
