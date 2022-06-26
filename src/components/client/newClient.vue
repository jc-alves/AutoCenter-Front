<template>
<div id="conteiner">
    <div id="newclient">
      <div id="form">
          <form method="POST"  @submit.prevent="newSubmit()" id="grid-container">
            <div class="grid">
                <div> 
                  <label for="name"><b>CPF</b>
                    <input
                    type="text"
                    placeholder="EX: 000.000.000-00"
                    name="cpf"
                    required
                    v-model="cpf"
                    />
                  </label>
                </div>
                <div> 
                  <label for="nome"><b>NOME</b>
                    <input
                    type="text"
                    placeholder="Nome"
                    name="Nome"
                    required
                    v-model="nome"
                    />
                  </label>
                </div>
                <div> 
                  <label for="sobrenome"><b>SOBRENOME</b>
                    <input
                    type="text"
                    placeholder="Sobrenome"
                    name="sobrenome"
                    required
                    v-model="sobrenome"
                    />
                  </label>
                </div>

                 <div> 
                  <label for="email"><b>Email</b>
                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    v-model="email"
                    />
                  </label>
                </div> 
                
                <div> 
                  <label for="endereco"><b>Endereço</b>
                    <input
                    type="text"
                    placeholder="Rua"
                    name="endereco"
                    required
                    v-model="endereco"
                    />
                  </label>
                </div>
                <div> 
                  <label for="numero"><b>Número</b>
                    <input
                    type="text"
                    placeholder="Nº"
                    name="numero"
                    required
                    v-model="numero"
                    style="width: 120px;"
                    />
                  </label>
                </div>
                <div> 
                  <label for="bairro"><b>Bairro</b>
                    <input
                    type="text"
                    placeholder="bairro"
                    name="Bairro / destrito"
                    required
                    v-model="bairro"
                    />
                  </label>
                </div>
                <div> 
                  <label for="bairro"><b>Cidade</b>
                    <input
                    type="text"
                    placeholder="cidade"
                    name="cidade"
                    required
                    v-model="cidade"
                    />
                  </label>
                </div>

                <div>
                <label><b>UF</b>
                  <select name="UF" id="UF" type="text" style="width: 120px;">
                    <option value="Ac">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                    </select>
                  </label>
                </div>

                <div> 
                  <label for="cep"><b>CEP</b>
                    <input
                    type="text"
                    placeholder="EX 00.000-000"
                    name="cep"
                    required
                    v-model="cep"
                    />
                  </label>
                </div>

 
             </div>
              <button type="submit">Salvar</button>
        <button class="cancelbtn"  @click="limpardados()">Limpar dados</button>
          </form>
      </div>    
    </div>

</div>

</template>

<script>
//import userVue from '../user.vue'

export default {
     name: 'newClient',
        components: {  },
        data() {
          return {
            cpf: '',
            nome: '',
            sobrenome: '',
            email: '',
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',
            uf: '',
            cep: '',
            }
        },  
        methods: {
          
          limpardados ()
          { 
            
            this.cpf = '',
            this.nome = '',
            this.sobrenome = '',
            this.email = '',
            this.endereco = '',
            this.numero = '',
            this.bairro = '',
            this.cidade = '',
            this.cep = ''
            
          }
        }
}

</script>

<style scoped>
#conteiner {
    height: 100%;
    width: 100%;
    min-height: 500px;
    margin: 0 auto;
    border: solid #fff 1px;
    background-color: #F8F8FF;    
}

#newclient {
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

option[type="text"],
select[type="text"],
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