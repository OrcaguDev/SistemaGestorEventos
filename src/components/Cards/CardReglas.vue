<template>
  <div
    class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100"
    >
    <div class="px-6 py-6 mb-0 bg-white rounded-t">
      <div class="flex justify-between text-center">
        <h6 class="text-xl font-bold text-blueGray-700">Registro de Reglas</h6>
      </div>
    </div>
    <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
      <form @submit.prevent="storeEvento()">
        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          Información de la Regla
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label
                class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
                Nombre de la regla
              </label>
              <input
                type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="regla.nombre "   required
              />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label
                class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
              URL
              </label>
              <input
                type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="regla.url" required
              />
            </div>
          </div>

          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label
                class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
              Descripción
              </label>
              <textarea
                type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="regla.descripcion" required
              >
              </textarea>
            </div>
          </div>

        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div>
          <button
              class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
              type="submit"
          >
              Registrar Regla
          </button>
      </div>

      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            regla: {
                url: '',
                nombre: '',
                api_token: '',
                descripcion: '',
                id_area: 0
            }

        }
    },
    mounted () {
        const objetoString = localStorage.getItem('token')
        const objeto = JSON.parse(objetoString)
        const idarea = localStorage.getItem('area')
        this.regla.api_token = objeto
        this.regla.id_area = idarea
    },
    methods: {
        storeEvento () {
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/storeReglas', this.regla, auth).then(() => {
                this.$router.push('/admin/reglas/listaRegla')
            })
        }
    }
}
</script>
