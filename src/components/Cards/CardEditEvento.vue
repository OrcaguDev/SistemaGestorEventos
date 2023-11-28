<template>
  <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
    <div class="px-6 py-6 mb-0 bg-white rounded-t">
      <div class="flex justify-between text-center">
        <h6 class="text-xl font-bold text-blueGray-700">Edita el Evento</h6>
      </div>
    </div>
    <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
      <form>
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
                v-model="evento.nombre" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Expositor
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.expositor" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Lugar
              </label>
              <input type="text"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.lugar" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Fecha y hora Inicial
              </label>
              <input type="datetime-local"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.fechaInicio" />
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
                v-model="evento.descripcion">
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

              <select v-model="evento.id_regla" @change="reglaChange()"
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

              <select v-model="evento.id_pagos" @change="reglaChange()"
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
              <input type="file"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                accept="image/png, image/jpeg" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-12/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Informe
              </label>
              <span class="block mb-2 text-xs font-bold text-blueGray-600">
                (Ingresar brochure e informa del evento )</span>
              <input type="file"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                accept="application/pdf, application/docx" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Aforo Total
              </label>
              <input type="number"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.aforo_total" />
            </div>
          </div>
          <div class="w-full px-4 lg:w-4/12">
            <div class="relative w-full mb-3">
              <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                Butacas Reservadas
              </label>
              <input type="number"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                v-model="evento.butacas_reservadas" />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div class="flex">
          <button
            class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="button">
            Guardar
          </button>
          <button
            class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
            type="button" @click="goBack">
            Cancelar
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
                fechaInicio: '',
                descripcion: '',
                aforo_total: '',
                butacas_reservadas: '',
                fechaFin: '',
                fechaInscripcion: '',
                id_regla: 0,
                id_pagos: 0,
                api_token: ''
            },
            reglas: [],
            pagos: [],
            apii: {
                api_token: ''
            },
            url_id: ''
            // evento:{}
        }
    },
    methods: {
        goBack () {
            window.history.back()
        },
        storeEvento () {
            let valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.evento.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/storeEvento`, this.evento, auth).then(() => {
                this.AlertSwall('Registrado!!', 'El evento se Registro Correctamente', 'success')
                this.$router.push('/admin/tables')
            })
        },
        getEditEvento (id) {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/evento/${id}`, this.apii, auth).then(({ data }) => {
                this.evento.nombre = data[0].nombre
                this.evento.expositor = data[0].expositor
                this.evento.lugar = data[0].lugar
                this.evento.fechaInicio = data[0].fechaInicio
                this.evento.descripcion = data[0].descripcion
                this.evento.aforo_total = data[0].aforo_total
                this.evento.butacas_reservadas = data[0].butacas_reservadas
                this.evento.fechaFin = data[0].fechaFin
                this.evento.id_regla = data[0].id_regla
                this.evento.id_pagos = data[0].id_pagos
                this.evento.fechaInscripcion = data[0].fechaInscripcion
            }).catch((error) => {
                console.log(error)
            })
        },
        getPagos () {
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
    mounted () {
        this.url_id = this.$route.params.id
        this.getEditEvento(this.url_id)
    }

}
</script>
