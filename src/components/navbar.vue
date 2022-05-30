<template>
    <div class="navbar">
        <div class="users">
            <label>Usuario: {{ nome }}</label><br>
            <label>Nivel: {{ tipo }}</label><br>
            <button @click="outSubmit" class="bt-vm">Sair</button>
        </div>

        <div class="logo">
            <p>logo</p> 
        </div>

        <div class="menu">
            <div class="dropdown">
                <button class="dropbtn">Vendas 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Cadastro 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Estoque 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Financeiro 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Ultilitários 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Configurações
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Cadastro 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Cadastro 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import { signOut } from '../components/auth/auth'
export default {
    name: 'navbar',
     data () {
        return {
            nome: '',
            tipo: ''            
          
        }
        
    },
 
     mounted () {                    
                 const user = localStorage
                 const self = this              
        fetch(localStorage)
      
        .then(() => {
            self.nome = user.nome,
            self.tipo = user.tipo           
        }).catch((error) => {
            console.error(error)
        })
           
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
.logo {
    color: white;
}
.bt-vm {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 60px;
  border-radius: 3px;
  height: 20px;
  }


.bt-vm:hover {
  opacity: 0.8;
}

.navbar {
    background-color: rgb(11, 11, 77);
    height: 110px;
    width: 100%;
    display: flex;
    
}
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 13px;  
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  font-size: 13px;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.users {
    text-align: left;
    font: monospace;
    font-size: 14px;
    float: left;
    margin-top: 25px;
    margin-left: 10px;
    color: white;
    height: 40px;
    width: 300px;   
    position: relative;
}
.menu {
    text-align: left;
    margin: 0;
    right: 180px;
    position: absolute;
    top: 70px;
    height: 20px;
    right: 0;
    width: 900px;
    color: white;
}

</style>