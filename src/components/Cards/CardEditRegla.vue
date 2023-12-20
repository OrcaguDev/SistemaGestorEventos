<template>
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
    <div class="px-6 py-6 mb-0 bg-white rounded-t">
      <div class="flex justify-between text-center">
        <h6 class="text-xl font-bold text-blueGray-700">Editar Regla</h6>
      </div>
    </div>
    <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
      <form @submit.prevent="">
        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          Información de la Regla
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Nombre de la regla
              </label>
              <input type="text" v-model="regla.nombre"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                URL
              </label>
              <input type="text" v-model="regla.url"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
            </div>
          </div>

          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Descripción
              </label>
              <textarea type="text" v-model="regla.descripcion"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
              </textarea>
            </div>
          </div>

        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div class="flex">
          <button
            class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="button" @click="updateRegla()">
            Guardar
          </button>

          <button
            class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="button" @click="goBack">
            Cerrar
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script lang="js">
import axios from 'axios'
import Swal from 'sweetalert2'
import Main from '../../main.js'

export default {
    data () {
        return {
            regla: {
                nombre: '',
                url: '',
                descripcion: '',
                api_token: '',
                codigo: ''
            },
            apii: {
                api_token: ''
            },
            url_id: ''
        }
    },
    methods: {
        goBack () {
            window.history.back()
        },
        getEditRegla (id) {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                Headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/regla/${id}`, this.apii, auth).then(({ data }) => {
                this.regla.nombre = data[0].nombre
                this.regla.url = data[0].url
                this.regla.descripcion = data[0].descripcion
            }).catch((error) => {
                console.log(error)
            })
        },
        updateRegla () {
            const valor = Main.url
            const objeroString = localStorage.getItem('token')
            const objeto = JSON.parse(objeroString)
            this.regla.api_token = objeto
            this.regla.codigo = this.url_id

            const auth = {
                Headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/actualizarRegla?nombre=${this.regla.nombre}&descripcion=${this.regla.descripcion}&url=${this.regla.url}&id=${this.regla.codigo}`, this.regla, auth).then(() => {
                this.AlertSwall('Editado!!', 'Ha sido editado correctamente!', 'success')
                this.goBack()
            }).catch((error) => {
                console.log(error)
            })
        },
        AlertSwall ($title, $text, $icon) {
            Swal.fire({
                title: $title,
                text: $text,
                icon: $icon
            })
        }
    },
    mounted () {
        this.url_id = this.$route.params.id
        this.getEditRegla(this.url_id)
    }
}
</script>
