<template>
<div id="navbar">
        <div class="users">
       
             <div class="dropdown"><br>
             
                <button class="btninicias"><p>{{ inciais }}</p>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
<pre>
Nome: {{ nome }}
Matricula: xxxxx
Função: {{ tipo }}
</pre>
    <router-link class="link" to="/sales">Alterar Senha</router-link>
    <router-link class="link" to="/sales">Menssagens</router-link>
    <router-link class="link" to="/sales">Logs de acesso</router-link>
    <button class="btnuser" @click="outSubmit" >Sair</button>                
                                    
                </div>
            </div>               
           
        </div>



        <div class="menu">
            <div class="dropdown">
                <button class="dropbtn">Vendas 
                </button>
                <div class="dropdown-content">
                    <router-link class="link" to="/sales">Realizar Venda</router-link>
                    <router-link class="link" to="/estimate">Orçamentos</router-link>
                </div>
            </div>
           
            <div class="dropdown">
                <button class="dropbtn">Cadastro 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <li><a href="#">Fornecedores</a>
                        <ul>
                            <li><router-link class="link" to="/newprovider">Novo fornecedor</router-link></li>
                            <li><a href="#">Localizar</a></li>
                            <li><a href="#">Extrato</a></li>
                        </ul>
                    </li>    
                    <li><a href="#">Clientes</a>
                        <ul>
                            <li><router-link class="link" to="/newclient">Novo cliente</router-link></li>
                            <li><a href="#">Localizar cliente</a></li>
                            <li><a href="#">Extrato cliente</a></li>
                        </ul>
                    </li>                                                                    
                </div>   
            </div>







            <div class="dropdown">
                <button class="dropbtn">Estoque 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <router-link class="link" to="/product">Novo produto</router-link>
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
                <button class="dropbtn">Serviços 
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

<script >
import { signOut } from '../components/auth/auth'
export default {
    name: 'navbar',
     data () {
        return {
            nome: '',
            tipo: '',
            nome1: '',
            nome2: '',
            inciais: ''           
          
        }
        
    },
 
     mounted () {                    
                 const user = localStorage
                 const self = this              
        fetch(localStorage)
      
        .then(() => {
            self.nome = user.nome,
            self.tipo = user.tipo,
            self.nome1 = user.nome.split(" ")[0]
            self.nome2 = user.nome.split(" ")[1]
            self.inciais = this.nome1[0] + this.nome2[0] 

            // self.iniciais = user.nome[0] + " " + user.nome[1]             
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

<style scoped >

.btnuser {
    border: 0;
    background-color: #F8F8FF;
    font-size: 16px;
    height: 30px;
    width: 60px;
    text-align: left;
}
.bt-vm {
  background-color: #04AA6D;
  color: white;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  width: 60px;
  border-radius: 2px;
  
  }
 
.bt-vm:hover {
  opacity: 0.8;
}

#navbar {
    background-color: rgb(11, 11, 77);
    height: 110px;
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 1;
    
}
.dropdown {
  float: left;
  overflow: hidden;
}
.dropnav {
    float: left;
    display: none ;
    overflow:visible;
  
}

.dropdown .dropbtn {
  font-size: 1.4rem;  
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  margin-left: 15px;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: white;
  color: black;
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

.dropdown-bt{
  color: black;
   
  
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
    font-size: 1.6rem;
    float: right;
    margin-left: 10px;
    color: white;
    height: 40px;
    width: 300px;   
    position: relative;
    
}
pre {
    font-size: 18px;
    color: #000;
    background-color: #F8F8FF;
    width: 350px;
    margin-left: 15px;
}
.menu {
    text-align: center;
    margin: 0;
    position: absolute;
    top: 75px;
    height: 30px;
    max-height:max-content;
    width: 90%;
    max-width: 600px;
    color: white;
}

ul {
    
margin: 0;
padding: 0;
list-style: none;
width: 150px;
}
ul li {
position: relative;
}
li ul {
position: absolute;
left: 150px;
top: 0;
display: none;
}
ul li a {
   
   text-decoration: none;
   color: #E2144A;
   background-color: #f9f9f9;
   
   
}
li:hover ul { display: block; }
.btninicias {
    text-transform: uppercase; 
    width: 350px;
     background-color: white;
    color: black;
      font-size: 18px;  
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  font-family: inherit;
  text-align:left
}

</style>