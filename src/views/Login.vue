<template>
  <div class="absolute w-full h-full bg-red-500 bg-no-repeat bg-full">
    <div class="container h-full px-4 mx-auto">
    <div class="flex items-center content-center justify-center h-full">
      <div class="w-full px-4 lg:w-4/12">
        <div
          class="relative flex flex-col w-full min-w-0 mt-12 break-words bg-gray-200 border-0 rounded-lg shadow-lg"
        >
        <div class="flex flex-row min-w-0 break-words" style="justify-items: center;align-items: center;">
          <img src="../assets/img/logo_CIP.png" style="width: 100px;height: 100px;" class="m-4">
          <h1 class="text-xl font-bold text-blueGray-500">SISTEMA GESTOR DE EVENTOS</h1>
        </div>
          <div class="px-6 py-6 mb-0 rounded-t">
            <div class="mb-3 text-center">
              <h6 class="text-sm font-bold text-blueGray-500">
                Iniciar Sesión
              </h6>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form @submit.prevent="login()">
              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Correo
                </label>
                <input
                  type="email"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="Email" v-model="usuario.email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="Password" v-model="usuario.password"
                />
              </div>
              <div class="mt-6 text-center">
                <button
                  class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
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
import axios from 'axios'
export default {
    // name: 'Login'
    data () {
        return {
            info: [],
            usuario: {
                email: 'orlandocastillogutierrez@gmail.com',
                password: '123456789'
            },
            error: ''
        }
    },
    methods: {

        login () {
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/login', this.usuario, auth).then(result => {
                if (result.data.res === true) {
                    localStorage.setItem('token', JSON.stringify(result.data.token))
                    localStorage.setItem('rol', JSON.stringify(result.data.rol))
                    localStorage.setItem('area', JSON.stringify(result.data.area))
                    this.$router.push('/admin')
                } else {
                    // console.log("Las claves no son correctas.");
                    this.error = 'Las claves no son correctas.'
                }
            })
        }
    }
}
</script>
