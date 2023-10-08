<template>
  <div class="absolute w-full h-full bg-red-500 bg-no-repeat bg-full">
    <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words  w-full mt-12 shadow-lg rounded-lg bg-gray-200 border-0"
        >
        <div class="flex flex-row min-w-0 break-words" style="justify-items: center;align-items: center;">
          <img src="../assets/img/logo_CIP.png" style="width: 100px;height: 100px;" class="m-4">
          <h1 class="text-blueGray-500 text-xl font-bold">SISTEMA GESTOR DE EVENTOS</h1>
        </div>
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Iniciar Sesión
              </h6>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form @submit.prevent="login()">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Correo
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" v-model="usuario.email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password" v-model="usuario.password"
                />
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
            <span>{{error}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  // name: 'Login'
  data(){
    return{
      info:[],
      usuario:{
        email:'orlandocastillogutierrez@gmail.com',
        password:'123456789'
      },
      error:''
    }
  },
  methods:{
    
      login(){
          const auth = {
            headers: {'Content-Type': 'application/json'} 
          }
          axios.post('http://localhost:8000/login',this.usuario,auth).then(result => { 
            if(result.data.res===true){
              localStorage.setItem( 'token', JSON.stringify(result.data.token) );
              this.$router.push('/admin');
            }else{
              // console.log("Las claves no son correctas.");
              this.error="Las claves no son correctas.";
            }
        })
      }
  }
}
</script>
