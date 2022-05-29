<template>
  <div class="login">
   <h1>Systech</h1>
  <h2>Grupo Auto Peças Beira Rio</h2>
    <div class="container">
 
    
        <div class="form">
          <form action="/action_page.php" method="post">
 

  <div class="login1">
    <label for="uname"><b>Usuario</b></label>
    <input type="text" placeholder="Nome do usuário" name="uname" required>

    <label for="psw"><b>Senha</b></label>
    <input type="password" placeholder="Digite a senha" name="psw" required>
        
    <button type="submit">Entrar</button>
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
        <!-- <div class="box3">
        <p>box3</p>
        </div> -->
    
    </div>
  
  

  <router-view/>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 90vh;
  background-color: white;
  color: rgb(30, 30, 70);
  

}
.container {
  margin-top: -20px;
  width: 100%;
  height: 80vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  margin-top: 0%;
  width: 90%;
  height: 400px;
  background: #fff;
}
.box2 {
  height: 300px;
  width: 500px;
}
.box3 {
  display: inline-block;
  height: 80px;
  width: 80px;
  border: solid 3px black;
  padding: 13vw 0vw 5vw 0vw;
  min-width:40vw;
  margin-left: 30px;
}

.form {
  color: red;
  padding: 3px;

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
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.login {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

</style>
