<template>
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
    <div class="px-6 py-6 mb-0 bg-white rounded-t">
      <div class="flex justify-between text-center">
        <h6 class="text-xl font-bold text-blueGray-700">Registro de Eventos</h6>
      </div>
    </div>
    <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
      <form @submit.prevent="storeEvento()" enctype="multipart/form-data">
        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          Información del Evento
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Nombre del Evento
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.nombre" required />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Expositor
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.expositor" required />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Lugar
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.lugar" required />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Fecha y hora Inicial
              </label>
              <input type="datetime-local"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.fechaInicio" required />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Fecha y hora Final
              </label>
              <input type="datetime-local"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.fechaFin" required />
            </div>
          </div>

          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Descripción
              </label>
              <textarea type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.descripcion" required>
              </textarea>
            </div>
          </div>

        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
          Acerca del Evento
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Fecha y hora de apertura de la Inscripción
              </label>
              <input type="datetime-local"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.fechaInscripcion" required />
            </div>
          </div>

          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Fecha y hora del cierre de la Inscripción
              </label>
              <input type="datetime-local"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.fechaInscripcionFin" required />
            </div>
          </div>

          <div class="w-full px-4 lg:w-4/12 ">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Reglas para el evento
              </label>

              <select v-model="evento.id_regla"
                class="w-full px-6 py-3 mb-1 mr-1 text-sm uppercase transition-all duration-150 ease-linear rounded shadow outline-none text-blueGray-600 hover:shadow-lg focus:outline-none"
                required>
                <option value="0" selected>Seleccione una regla</option>
                <option v-for="(regla, index) in reglas" :key="index" :value="regla.id_regla">
                  {{ regla.nombre }}
                </option>
              </select>
            </div>
          </div>

          <div class="w-full px-4 lg:w-4/12 ">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Link de pago
              </label>

              <select v-model="evento.id_pagos"
                class="w-full px-6 py-3 mb-1 mr-1 text-sm uppercase transition-all duration-150 ease-linear rounded shadow outline-none text-blueGray-600 hover:shadow-lg focus:outline-none"
                required>
                <option value="0" selected>Seleccione un link </option>
                <option v-for="(pago, index) in pagos" :key="index" :value="pago.id_pagos">
                  {{ pago.nombre }}
                </option>
              </select>
            </div>
          </div>

          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Imagen
              </label>
              <span class="block mb-2 text-xs font-bold text-blueGray-600">
                (Ingresar imagen de extensión .jpg/.png , de tamaño 800x800)</span>
              <input type="file" ref="fileInput" @change="handleFileUpload"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                accept="image/png, image/jpeg" required />
            </div>
          </div>

          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Informe
              </label>
              <span class="block mb-2 text-xs font-bold text-blueGray-600">
                (Ingresar brochure e informa del evento )</span>
              <input type="file" ref="fileInput2" @change="handleFileUploadPdf"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                accept="application/pdf, application/docx" required />
            </div>
          </div>

          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Aforo Total
              </label>
              <input type="number"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.aforo_total" required />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Butacas Reservadas
              </label>
              <input type="number"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.butacas_reservadas" required />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Cod. Tesoreria
              </label>
              <input type="number"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.cod_tesoreria" required />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div v-if = "BtnRegistro === 1">
          <button
            class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="submit">
            Crear Evento
          </button>
        </div>
      </form>
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
            evento: {
                nombre: '',
                expositor: '',
                lugar: '',
                fechaInscripcion: '',
                fechaInscripcionFin: '',
                fechaInicio: '',
                descripcion: '',
                aforo_total: '',
                butacas_reservadas: '',
                fechaFin: '',
                api_token: '',
                id_regla: 0,
                id_pagos: 0,
                id_area: 0,
                cod_tesoreria: ''
            },
            reglas: [],
            BtnRegistro: 1,
            pagos: [],
            apii: {
                api_token: ''
            },
            selectedFile: null,
            selectedFilePdf: null
        }
    },
    mounted () {
        this.evento.id_area = localStorage.getItem('area')
    },
    methods: {
        handleFileUpload (event) {
            this.selectedFile = event.target.files[0]
        },
        handleFileUploadPdf (event) {
            this.selectedFilePdf = event.target.files[0]
        },
        storeEvento () {
            this.BtnRegistro = 0
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.evento.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
            const formData = new FormData()
            formData.append('file', this.selectedFile)
            formData.append('filepdf', this.selectedFilePdf)
            formData.append('nombre', this.evento.nombre)
            formData.append('expositor', this.evento.expositor)
            formData.append('lugar', this.evento.lugar)
            formData.append('fechaInscripcion', this.evento.fechaInscripcion)
            formData.append('fechaInscripcionFin', this.evento.fechaInscripcionFin)
            formData.append('fechaInicio', this.evento.fechaInicio)
            formData.append('descripcion', this.evento.descripcion)
            formData.append('aforo_total', this.evento.aforo_total)
            formData.append('butacas_reservadas', this.evento.butacas_reservadas)
            formData.append('fechaFin', this.evento.fechaFin)
            formData.append('id_regla', this.evento.id_regla)
            formData.append('id_pagos', this.evento.id_pagos)
            formData.append('api_token', this.evento.api_token)
            formData.append('id_area', this.evento.id_area)
            formData.append('cod_tesoreria', this.evento.cod_tesoreria)

            axios.post(`${valor}/storeEvento`, formData, auth).then(() => {
                this.AlertSwall(
                    'Evento Creado',
                    'El evento se ha creado correctamente',
                    'success'
                )
                this.$router.push('/admin/listarEvento')
            })
        },
        getReglas () {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/reglas`, this.apii, auth).then(({ data }) => {
                this.reglas = data
            }).catch((error) => {
                console.log(error)
            })
        },
        getPagos () {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/getPagos`, this.apii, auth).then(({ data }) => {
                this.pagos = data
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
    created () {
        this.getReglas()
        this.getPagos()
    }
}
</script>
