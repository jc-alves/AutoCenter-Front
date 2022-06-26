<template>
  <div id="conteiner">
    <div id="newprovider">
    <div id="form">
      <form method="POST" @submit.prevent="newSubmit()" id="grid-container">
        <div class="grid">
          <div> 
          <label for="name"><b>Razão Social</b>
            <input
              type="text"
              class="left"
              placeholder="Razão social"
              name="razao"
              required
              v-model="nome"
            />
          </label>
          </div>
          <div>
          <label for="cnpj"><b>CNPJ</b>
             <input
              type="text"
              class="right"
              placeholder="00.000.000/000-00"
              name="cnpj"
              required
              v-model="cnpj">
            
            <CNPJ required v-model="cnpj" @keydown.tab.prevent="carregarCnpj($event.target.value)" />
             
          </label>
          </div>
          <div>
          <label for="inscricao"><b>Inscrição Estadual</b>
            <input
              type="text"
              class="left"
              placeholder="Ex 00000000"
              name="inscricao"
              required
              v-model="inscricao"

            />
            
          </label>
          </div>
          <div>
          <label for="cidade"><b>MUNICIPIO</b>
            <input
              type="text"
              class="right"
              placeholder="Ex Sao Paulo "
              name="cidade"
              required
              v-model="municipio"
            />
          </label>
          </div>
          <div>
          <label for="email"><b>UF</b>
            <input
              type="email"
              placeholder="funalo@fulano.com"
              name="email"
              required
              v-model="email"
            />
          </label>
          </div>
          <div>
          <label for="endereço"><b>LOGRADOURO</b>
            <input
              type="text"
              class="right"
              placeholder="Ex. Rua faluna, 00 - centro"
              name="logradouro"
              required
              v-model="logradouto"
            />
          </label>
          </div>
          <div>
          <label for="telefone"><b>Telefone</b>
            <input
              type="text"
              class="left"
              placeholder="011 2222 2222"
              name="telefone"
              required
              v-model="telefone"
            />
          </label>
          </div>
          <div>
          <label for="fantasia"><b>Fantasia</b>
            <input
              type="text"
              class="right"
              placeholder="Nome do responsável"
              name="fantasia"
              required
              v-model="fantasia"
            />
          </label>
          </div>
           
        </div>
          

          
        

        <button type="submit">Salvar</button>
        <button class="cancelbtn">Limpar dados</button>
      </form>
    </div>
    </div>

    
  </div>
</template>

<script>
 //import CNPJ from '../../CNPJ.vue';
export default {
    name: "newProvider",
    components: {  },
    data () {
      return {
        inscricao: '',
        status: '',
        ultima_atualizao: '',
        cnpj: '',
        tipo: '',
        porte: '',
        nome: '',
        fantasia: '',
        abertura: '',
        logradouto: '',
        numero: '',
        complemento: '',
        cep: '',
        bairro: '',
        municipio: '',
        uf: '',
        email: '',
        telefone: '',
        situacao: '',
        listaEmpresa: []
      }
},
methods: {
  
 carregarCnpj () 
    
    {   
        console.log('Seja bem vindo José ' + this.cnpj )
    
    },
},

};
  
</script>

<style scoped>
#conteiner {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    border: solid #fff 1px;
    background-color: #F8F8FF;    
}

#newprovider {
  margin-top: 120px;
  width: 99%;
}

#form {

  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: block;
  min-width: 370px;  
  
  }
body {
  font-family: Arial;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 300px;
  padding: 15px 10px;
  margin: 8px 0;
  display: flex;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  margin-left: auto;
  border: none;
  cursor: pointer;
  width: 150px;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  margin: 8px 10px;
  padding: 14px 20px;
  background-color: #f44336;

}


 .grid {  
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-gap: 1px;
            max-width: 1200px;
            margin: 0 auto;
            width: 90%;
        }
   .grid div {   
            
            max-width: 500px;
            font-family: Arial;
            font-size: 1.6rem;
            padding: 1px;
        }       
</style>