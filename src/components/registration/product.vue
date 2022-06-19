<template>
   
        
        <form id="form">
        
          <div id="codigos">
            <span>
              <Code />
            </span>
        
          </div>

          <div id="products">
            <span>
              <Products />
            </span>
          </div>

          <div id="fiscal">
            <Fiscal />
          </div>

        </form>

    
</template>

<script>
import Products from '../products.vue';
import Code from '../code.vue';
import Fiscal from '../fiscal.vue';
export default {
    name: "product",
    components: { Products, Code, Fiscal }
}
</script>

<style>
#conteiner {
  margin-top: 0;
  width: 900px;
  height: 900px;
  margin: 0 auto;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: black;
}

#form {
     display: block;
     background-color: aqua;
     width: 100%;
     height: 100%;
     position: relative;
}    
 #codigos {
        width: 450px;
        height: 450px;
        background-color: blue;
        text-align: center;
        min-width: 20vw;
        max-width: 0;
        float: left;
    }

#products {
        width: 35%;
        display: inline-block;
        background-color: red;
        font-size: 18px;
        text-align: center;
        min-width:20vw;
    }

#fiscal {
        width: 30%;
        background-color: green;
        display: inline-block;
        margin-right: 0vw;
        font-size: 18px;
        text-align: center;
        min-width: 20vw;
         margin-right: 0vw;
    }


body {
  font-family: Arial, Helvetica, sans-serif;
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="number"],
select
 {
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

label {
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