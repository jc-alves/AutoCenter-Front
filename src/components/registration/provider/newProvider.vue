<template>
  <div id="conteiner">
    <div id="form">
      <form method="POST" @submit.prevent="newSubmit()">
        <span>
          <label for="name" class="left"
            ><b>Razão Social</b>
            <input
              type="text"
              class="left"
              placeholder="Razão social"
              name="razao"
              required
              v-model="nome"
            />
          </label>

          <label for="cnpj" class="right"
            ><b>CNPJ</b>
            <!-- <input
              type="text"
              class="right"
              placeholder="00.000.000/000-00"
              name="cnpj"
              required
              v-model="cnpj"
            /> -->
            <CNPJ required v-model="cnpj" @keydown.tab.prevent="carregarCnpj($event.target.value)" />
             
          </label>
          
        </span>
        <span>
          <label for="inscricao" class="left"
            ><b>Inscrição Estadual</b>
            <input
              type="text"
              class="left"
              placeholder="Ex 00000000"
              name="inscricao"
              required
              v-model="inscricao"

            />
            
          </label>

          <label for="cidade" class="right"
            ><b>MUNICIPIO</b>
            <input
              type="text"
              class="right"
              placeholder="Ex Sao Paulo "
              name="cidade"
              required
              v-model="municipio"
            />
          </label>
        </span>
        <span>
          <label for="email" class="left"
            ><b>UF</b>
            <input
              type="email"
              class="left"
              placeholder="funalo@fulano.com"
              name="email"
              required
              v-model="email"
            />
          </label>

          <label for="endereço" class="right"
            ><b>LOGRADOURO</b>
            <input
              type="text"
              class="right"
              placeholder="Ex. Rua faluna, 00 - centro"
              name="logradouro"
              required
              v-model="logradouto"
            />
          </label>
        </span>
        <span>
          <label for="telefone" class="left"
            ><b>Telefone</b>
            <input
              type="text"
              class="left"
              placeholder="011 2222 2222"
              name="telefone"
              required
              v-model="telefone"
            />
          </label>

          <label for="fantasia" class="right"
            ><b>Fantasia</b>
            <input
              type="text"
              class="right"
              placeholder="Nome do responsável"
              name="fantasia"
              required
              v-model="fantasia"
            />
          </label>
        </span>

        <button type="submit">Salvar</button>
        <button class="cancelbtn">Limpar dados</button>
      </form>
    </div>
  </div>
</template>

<script>
import CNPJ from '../../CNPJ.vue';
export default {
    name: "newProvider",
    components: { CNPJ },
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
body {
  font-family: Arial, Helvetica, sans-serif;
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
  margin: 8px 0;
  padding: 14px 20px;
  background-color: #f44336;
}

span {
  display: flex;
  padding: 5px;
  text-align: left;
}

.left {
  width: 200px;
  display: block;
}

.right {
  padding: 0 140px 0;
  width: 200px;
  display: block;
}
</style>