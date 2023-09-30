<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Editar Regla</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Información de la Regla
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Nombre de la regla
              </label>
              <input type="text" v-model="regla.nombre"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                URL
              </label>
              <input type="text" v-model="regla.url"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
          </div>


          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Descripción
              </label>
              <textarea type="text" v-model="descripcion"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              </textarea>
            </div>
          </div>

        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div class="flex">
          <button
            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit">
            Guardar
          </button>

          <button
            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit">
            Cerrar
          </button>
        </div>

      </form>
    </div>
  </div>
</template> 

<script>
import axios from 'axios';
export default {
  data() {
    return {
      regla: {
        nombre:'',
        url:'',
        descripcion:'',
        api_token:''
      },
      apii:{
        api_token:''
      },
    }
  },
  methods: {
    getEditRegla(id) {
      let objetoString = localStorage.getItem("token");
      let objeto = JSON.parse(objetoString);
      this.apii.api_token = objeto;
      const auth = {
        Headers: { 'Content-Type': 'application/json' }
      }
      axios.post(`http://localhost:8000/regla/${id}`,this.apii,auth).then(({data}) => {
        this.regla.nombre = data[0].nombre;
        this.regla.nombre = data[0].url;
        this.regla.nombre = data[0].descripcion;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>