<template>
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 class="text-lg font-semibold" :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']">
            Tabla de Reglas
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent ">
        <thead>
          <tr>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              #
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              Regla
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              descripcion
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              url
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              estado
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(regla, index) in reglas" :key="index">
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ index + 1 }}
            </td>

            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ regla.nombre }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ regla.descripcion }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ regla.url }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              Activo
            </td>
            <td
              class="flex justify-center p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              <button @click="eliminarRegla(regla.id_regla)"
                class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                type="button">
                <i class="fas fa-trash"></i>
              </button>

              <router-link :to="'/admin/editar/editReglas/' + regla.id_regla">
                <button
                  class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                  type="button">
                  <i class="fas fa-edit"></i>
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            reglas: [],
            regla: {
                api_token: '',
                id_regla: '',
                id_area: ''
            }
        }
    },
    methods: {
        getTotal () {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.regla.api_token = objeto
            this.regla.id_area = localStorage.getItem('area')
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/reglas', this.regla, auth).then(({ data }) => {
                this.reglas = data
            }).catch((error) => {
                console.log(error)
            })
        },
        eliminarRegla (id) {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.regla.api_token = objeto
            this.regla.id_regla = id
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/eliminarRegla', this.regla, auth).then(() => {
                this.getTotal()
            })
        }
    },
    created () {
        this.getTotal()
    },

    props: {
        color: {
            default: 'light',
            validator: function (value) {
                // The value must match one of these strings
                return ['light', 'dark'].indexOf(value) !== -1
            }
        }
    }
}

</script>
