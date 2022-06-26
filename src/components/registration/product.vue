<template>
<div id="conteiner">
<div id="newclient">
      <div id="form">
          <form method="POST"  @submit.prevent="newSubmit()" id="grid-container">
            <div class="grid">
                <div> 
                  <label for="descricao"><b>DESCRIÇÃO</b>
                    <input
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    required
                    v-model="descricao"
                    />
                  </label>
                </div>

                <div> 
                  <label for="aplicacao" style="margin-right: 250px;"><b>APLICAÇÃO</b>                 
                    
                    <div class="cars">
                  
                     <input
                    type="text"
                    class="car"
                    placeholder="Aplic 1"
                    name="aplicacao1"
                    required
                    v-model="aplicacao1"
                    style="width: 80px;"
                    />  
                    <input
                    type="text"
                    class="car"
                    placeholder="Aplic 2"
                    name="aplicacao2"
                    required
                    v-model="aplicacao2"
                    style="width: 70px; margin-left: 10px;"
                    />
                    <input
                    type="text"
                    class="car"
                    placeholder="Aplic 3"
                    name="aplicacao3"
                    required
                    v-model="aplicacao3"
                    style="width: 80px; margin-left: 10px;"
                    />
                    <input
                    type="text"
                    class="car"
                    placeholder="Aplic 4"
                    name="aplicacao"
                    required
                    v-model="aplicacao4"
                    style="width: 80px; margin-left: 10px;"
                    />
                    </div>
                    
                  </label>
                </div>
                 <div> 
                  <label for="precoCompra"><b>Preço de compra</b>
                    <input
                    type="text"
                    placeholder="R$:"
                    name="precoCompra"
                    required
                    v-model="precoCompra"
                    style="width: 120px; "
                    />
                  </label>
                  
                </div>

                <div> 
                  <label for="acrescimo"><b>Acréscimo em %</b>
                    <input
                    type="text"
                    placeholder="%"
                    name="acrescimo"
                    required
                    v-model="acrescimo"
                    style="width: 80px; "
                    />
                  </label>
                </div>

                <div> 
                  <label for="precoVenda"><b>Preço de venda</b>
                    <input
                    type="text"
                    name="precoVenda"
                    required
                    v-model="precoVenda"
                    style="width: 120px; "
                    />
                  </label>
                </div>
             </div>
             <button id="action-btn" @click="mostrarFiscal()"> Mostra fiscal</button>
                <div id="fiscal">
                  <div>  
                  <label for="ncm"><b>NCM</b>
                    <input
                    type="text"
                    name="ncm"
                    required
                    v-model="ncm"
                    style="width: 200px; "
                    />
                  </label>
                 </div>

                 <div> 
                  <label for="cet"><b>CET</b>
                    <input
                    type="text"
                    name="cet"
                    required
                    v-model="cet"
                    style="width: 200px; "
                    />
                  </label>
                 </div>

                 <div>  
                  <label for="ncm"><b>NCM</b>
                    <input
                    type="text"
                    name="ncm"
                    required
                    v-model="ncm"
                    style="width: 200px; "
                    />
                  </label>
                 </div>

                 <div> 
                  <label for="cet"><b>CET</b>
                    <input
                    type="text"
                    name="cet"
                    required
                    v-model="cet"
                    style="width: 200px; "
                    />
                  </label>
                 </div>
                </div>
<br>
              <button type="submit">Salvar</button>
        <button class="cancelbtn"  @click="limpardados()">Limpar dados</button>
          </form>
      </div> 
      </div>

</div>

    
</template>

<script>

export default {
    name: "product",
    components: {  },
    data() {
      return {
        
      }
    },
    methods: {
      mostrarFiscal ()
      {
        var fiscal = document.getElementById('fiscal')
            if(fiscal.style.display === "none") {
              fiscal.style.display = "block"
            } else {
              fiscal.style.display = "none"
            }
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

.cars {
  max-width: 160px;
  min-width: 370px;
  display: flex;
  float: left;

  
}
.car {
   display: flex;
  text-align: center;
  margin-left: 50px;
  width: 80px;
  
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
 #fiscal {
  display: none;
 }
</style>