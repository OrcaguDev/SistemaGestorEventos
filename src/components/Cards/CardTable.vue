<template>
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex justify-between flex-grow w-full max-w-full px-4">
          <h3 class="text-lg font-semibold" :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']">
            Tabla de Eventos
          </h3>
          <input type="text" v-model="busqueda" @input="getdatapagina(1)"
                        class="w-6/12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        id="buscarpagos" placeholder="Buscar eventos" required />
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
              TITULO
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              EXPOSITOR
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              LUGAR
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">
              FECHA Y HORA
            </th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">AFORO TOTAL</th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">BUTACAS RESERVADAS</th>
            <th
              class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">AFORO DISPONIBLE</th>
            <th
              class="px-6 py-3 text-xs font-semibold text-center uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in datospaginados" :key="index">
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ index + 1 }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ item.nombre }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ item.expositor }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ item.lugar }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ item.fechaInicio }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ item.aforo_total }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ item.butacas_reservadas }}
            </td>
            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {{ (item.aforo_total - item.butacas_reservadas) - item.cantidad_inscripciones }}
            </td>
            <td
              class="flex justify-center p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">

              <!-- Boton de detalle -->
              <router-link :to="'/admin/detalleEvento/' + item.id_evento">
                <button
                  class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                  type="button">
                  <i class="fas fa-list"></i>
                </button>
              </router-link>

              <!-- Boton de eliminar -->
              <button @click="eliminarEvento(item.id_evento)"
                class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                type="button">
                <i class="fas fa-trash"></i>
              </button>

              <!-- Boton de editar -->
              <router-link :to="'/admin/editar/editEvento/' + item.id_evento">
                <button
                  class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                  type="button">
                  <i class="fas fa-edit"></i>
                </button>
              </router-link>

              <!-- Boton de inscripcion -->
              <router-link :to="'/inscripciones/inscripcion/' + item.id_evento" target="_blank">
                <button
                  class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-emerald-500 active:bg-red-600 hover:shadow-md focus:outline-none"
                  type="button">
                  <i class="fas fa-id-card"></i>
                </button>
              </router-link>

              <!-- Boton de inscripcion del Publico -->
              <router-link :to="'/inscripciones/inscripcionPublica/' + item.id_evento" target="_blank">
                <button
                  class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-black rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                  type="button">
                  <i class="fas fa-globe"></i>
                </button>
              </router-link>

            </td>
          </tr>
        </tbody>
      </table>
      <nav class="flex p-4 space-x-4 border-2 border-solid">
                <button class="px-2" v-on:click="getprev()">&lt;</button>
                <button class="px-2" v-for="pagina in totalPaginas()" :key="pagina" v-on:click="getdatapagina(pagina)">{{
                    pagina }}</button>
                <button class="px-2" v-on:click="getnext()">&#62;</button>
            </nav>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Main from '../../main.js'
export default {
    data () {
        return {
            eventos: [],
            page: 1,
            ElementforPage: 5,
            datospaginados: [],
            busqueda: '',
            evento: {
                api_token: '',
                id_evento: '',
                id_area: ''
            }
        }
    },
    props: {
        color: {
            default: 'light',
            validator: function (value) {
                // The value must match one of these strings
                return ['light', 'dark'].indexOf(value) !== -1
            }
        }
    },
    methods: {

        // Funcion de obtener Eventos
        getTotal () {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.evento.api_token = objeto
            this.evento.id_area = localStorage.getItem('area')
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            return axios.post(`${valor}/eventos`, this.evento, auth).then(({ data }) => {
                this.eventos = data
            }).catch((error) => {
                console.log(error)
            })
        },

        // Funcion de eliminar Evento
        eliminarEvento (id) {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.evento.api_token = objeto
            this.evento.id_evento = id
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/deleteEvento`, this.evento, auth).then(() => {
                this.AlertSwall(
                    'Evento Eliminado',
                    'Evento Eliminado Correctamente',
                    'success')
                this.getTotal()
            })
        },
        AlertSwall ($title, $text, $icon) {
            Swal.fire({
                title: $title,
                text: $text,
                icon: $icon
            })
        },
        totalPaginas() {
            return Math.ceil(this.eventos.length / this.ElementforPage)
        },
        getdatapagina(pagina) {
            this.page = pagina
            const ini = (pagina * this.ElementforPage) - this.ElementforPage
            const fin = (pagina * this.ElementforPage)
            this.datospaginados = this.eventos
                .filter(eventos => eventos.nombre.toLowerCase().includes(this.busqueda.toLowerCase()))
                .slice(ini, fin)
        },
        getprev() {
            if (this.page > 1) {
                this.page--
            }
            this.getdatapagina(this.page)
        },
        getnext() {
            if (this.page < this.totalPaginas()) {
                this.page++
            }
            this.getdatapagina(this.page)
        }
    },
    mounted() {
        this.getTotal().then(() => {
            this.getdatapagina(1)
        })
    }
}
</script>
