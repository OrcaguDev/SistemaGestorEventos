<template>
  <div class="container px-4 mx-auto mt-6">
    <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
      <div class="px-6 py-6 mb-0 bg-white rounded-t">
        <div class="flex justify-between text-center">
          <h6 class="text-xl font-bold text-blueGray-700">Inscripción de colegiados</h6>
        </div>
      </div>

      <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
        <div>
          <img src="../../assets/img/EVENTOS.jpg" alt=""><br>

          <a :href="`${this.valoor}/informe/${evento.informe}`" target="_blank"
            class="px-2 py-3 ml-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none">
            DESCARGAR BROCHURE</a>
        </div>
        <br>
        <form @submit.prevent="storeInscripcion()">
          <div class="flex flex-col items-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 px-4 sm:w-6/12">

              </div>
            </div>
          </div>

          <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
            Resumen del Evento
          </h6>
          <div v-if="isVisibleeee == 1" class="flex flex-wrap">

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Nombre del Evento
                </label>

                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ evento.nombre }}
                </label>

              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Lugar
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ evento.lugar }}
                </label>
              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Fecha y hora
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ evento.fechaInicio }}
                </label>
              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Expositor
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ evento.expositor }}
                </label>
              </div>
            </div>

            <div class="w-full px-4 lg:w-6/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Descripción
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ evento.descripcion }}
                </label>
              </div>
            </div>

          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

          <div class="flex flex-wrap">

            <div class="w-full px-4 lg:w-6/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Buscar Participante por Cod. CIP
                </label>
                <input type="text" maxlength="6" placeholder="Ingrese su Cod. CIP" pattern="[0-9]{6}"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  v-model="inscripcion.cod">
              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <button @click="validarDni()"
                class="w-full px-3 py-3 mt-6 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                type="button">
                Validar
              </button>
            </div>

          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

          <div class="flex flex-wrap">

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Nombre
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ inscripcion.nombre }}
                </label>
              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Apellidos
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ inscripcion.apellido }}
                </label>
              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Telefono
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ inscripcion.celular }}
                </label>
              </div>
            </div>

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  Email
                </label>
                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  {{ inscripcion.email }}
                </label>
              </div>
            </div>

          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

          <span>{{ mensaje }}</span>
          <!-- Despues de validar los datos de los inputs de arriba, mostrar este div para concluir con la inscripcion -->
          <div v-if="isVisiblee === 1">

            <div class="w-full px-4 lg:w-3/12">
              <div class="relative w-full mb-3">
                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                  ¿Desea solicitar un certificado?
                </label>
                <input type="checkbox" v-model="inscripcion.certificacion" />
                <label class="mb-2 text-xs font-bold uppercase text-blueGray-600">
                  Si
                </label><br>
              </div>
            </div>

            <div v-if="BtnInscripcion === 1">
              <button
                class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                type="submit">
                Inscribirse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Main from '../../main.js'

export default {
  data() {
    return {
      evento: {
        nombre: '',
        expositor: '',
        lugar: '',
        fechaInicio: '',
        descripcion: '',
        img: '',
        informe: '',
        fechaInscripcion: '',
        fechaInscripcionFin: ''
      },
      inscripcion: {
        dni: '',
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        certificacion: false,
        habilidad: '',
        url_id: '',
        cod: ''
      },
      isVisiblee: 0,
      isVisible: 0,
      url_id: '',
      mensaje: '',
      isVisibleeee: 1,
      alert: '',
      valoor: Main.url,
      validacion: '',
      BtnInscripcion: 1
    }
  },
  mounted() {
    this.url_id = this.$route.params.id
    this.getEvento(this.url_id)
  },
  methods: {
    async validarDni() {
      const valor = Main.url;
      this.inscripcion.url_id = this.$route.params.id;
      axios.post(`${valor}/obtenerReglaEvento/${this.inscripcion.url_id}`).then((data) => {
        const url_validacion = data.data[0].url;
        axios.get(`${url_validacion}/${this.inscripcion.cod}`).then((data) => {
          const validacion = data.data.data.habilidad.var_habilitacion_estado;
          this.validacion = validacion;
          if (this.validacion === 'Habilitado') {

            axios.get(`https://app-cipcdll.com:81/obtener_persona_datos_xterceros/${this.inscripcion.cod}`).then((data) => {
              this.inscripcion.dni = data.data.data.dni;
              this.inscripcion.nombre = data.data.data.nombres;
              this.inscripcion.apellido = data.data.data.paterno + ' ' + data.data.data.materno;
              this.inscripcion.celular = data.data.data.celular;
              this.inscripcion.email = data.data.data.email;
              this.isVisiblee = 1;
            });
            this.AlertSwall('Correcto!!', 'Te encuentras habilitado para este evento.', 'success');
          } else {
            this.inscripcion.nombre = '';
            this.inscripcion.apellido = '';
            this.inscripcion.celular = '';
            this.inscripcion.email = '';
            this.AlertSwall('Error!!', 'No se encuentra habilitado para este evento.', 'error');
          }
        }).catch((error) => {
          console.log(error);
        });
      })
    },
    getEvento(id) {
      const valor = Main.url
      const auth = {
        headers: { 'Content-Type': 'application/json' }
      }
      axios.post(`${valor}/evento/${id}`, auth).then(({ data }) => {
        this.evento.nombre = data[0].nombre
        this.evento.expositor = data[0].expositor
        this.evento.lugar = data[0].lugar
        this.evento.fechaInicio = data[0].fechaInicio
        this.evento.descripcion = data[0].descripcion
        this.evento.aforo_total = data[0].aforo_total
        this.evento.butacas_reservadas = data[0].butacas_reservadas
        this.evento.fechaFin = data[0].fechaFin
        this.evento.id_regla = data[0].id_regla
        this.evento.fechaInscripcion = data[0].fechaInscripcion
        this.evento.fechaInscripcionFin = data[0].fechaInscripcionFin
        this.evento.img = data[0].img
        this.evento.informe = data[0].informe
      }).catch((error) => {
        console.log(error)
      })
    },

        storeInscripcion () {
            const valor = Main.url
            this.inscripcion.url_id = this.$route.params.id
            const fechaInscripcion = this.evento.fechaInscripcion
            const fechaInscripcionFin = this.evento.fechaInscripcionFin
            const dni = this.inscripcion.dni
            // eslint-disable-next-line camelcase
            const id_evento = this.inscripcion.url_id
            const fechaActual = new Date()
            const año = fechaActual.getFullYear()
            const mes = fechaActual.getMonth() + 1 // Ten en cuenta que los meses comienzan desde 0
            const día = fechaActual.getDate()
            const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${día < 10 ? '0' : ''}${día}`

      if (fechaFormateada >= fechaInscripcion && fechaFormateada <= fechaInscripcionFin) {
        const auth = {
          headers: { 'Content-Type': 'application/json' }
        }
        // eslint-disable-next-line camelcase
        const url_combinado = `${valor}/validateInscripciones?dni=${dni}&id_evento=${this.inscripcion.url_id}`
        axios.post(url_combinado, this.inscripcion, auth).then((data) => {
          if (data.data[0].cuentaInscripcion > 0) {
            this.AlertSwall('Error!!', 'Ya se encuentra registrado a este evento', 'error')
          } else {
            axios.post(`${valor}/storeInscripcion`, this.inscripcion, auth).then((data) => {
              this.AlertSwall('Registrado', 'Registo completado satisfactoriamente!', 'success')
              // eslint-disable-next-line no-unused-expressions
              this.isVisibleeee === 0
              this.inscripcion.cod = ''
              this.inscripcion.nombre = ''
              this.inscripcion.apellido = ''
              this.inscripcion.celular = ''
              this.inscripcion.email = ''
              this.inscripcion.certificacion = false
            this.BtnInscripcion = 1
            })
          }
        })
      } else {
        this.AlertSwall('Error!!', 'El evento ya no se encuentra disponible.', 'error')
      }
    },
    AlertSwall($title, $text, $icon) {
      Swal.fire({
        title: $title,
        text: $text,
        icon: $icon
      })
    }

    }
}
</script>
