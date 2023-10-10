<template>
  <div class="container px-4 mx-auto mt-6">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">Inscripción</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form @submit.prevent="storeInscripcion()">
          <div class="flex flex-col items-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:w-6/12 px-4">
                <img :src="`http://localhost:8000/img/${evento.img}`" alt="..."
                  class="shadow-lg rounded max-w-full h-auto align-middle border-none" /><br>
                <a :href="`http://localhost:8000/informe/${evento.informe}`" target="_blank"
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-2 py-3 rounded shadow ml-4 hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                  DESCARGAR BROCHURE</a>
              </div>
            </div>
          </div>


          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Resumen del Evento
          </h6>
          <div v-if="isVisibleeee == 1" class="flex flex-wrap">



            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Nombre del Evento
                </label>

                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ evento.nombre }}
                </label>

              </div>
            </div>


            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Lugar
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ evento.lugar }}
                </label>
              </div>
            </div>



            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Fecha y hora
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ evento.fechaInicio }}
                </label>
              </div>
            </div>



            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Expositor
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ evento.expositor }}
                </label>
              </div>
            </div>



            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Descripción
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ evento.descripcion }}
                </label>
              </div>
            </div>



          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

          <div class="flex flex-wrap">

            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Buscar Participante por DNI / Cod. CIP
                </label>
                <input type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  v-model="inscripcion.dni">
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <button @click="validarDni()"
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6 w-full ease-linear transition-all duration-150"
                type="button">
                Validar
              </button>
            </div>

          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

          <div class="flex flex-wrap">

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Nombre
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ inscripcion.nombre }}
                </label>
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Apellidos
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ inscripcion.apellido }}
                </label>
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Telefono
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ inscripcion.celular }}
                </label>
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Email
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  {{ inscripcion.email }}
                </label>
              </div>
            </div>

          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />


          <!-- Habilitar despues de validar sus datos con el DNI -->
          <div v-if="isVisible === 1">
            <div class="flex flex-wrap">

              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Verificar si se cumple lo requerido para el evento. (Ingrese CODIGO)
                  </label>
                  <input type="text"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    v-model="inscripcion.habilidad" />
                </div>
              </div>

              <div class="w-full lg:w-3/12 px-4">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6 w-full ease-linear transition-all duration-150"
                  type="button" @click="validarHabilidad()">
                  Validar
                </button>
              </div>

            </div>
          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

          <span>{{ mensaje }}</span>
          <!-- Despues de validar los datos de los inputs de arriba, mostrar este div para concluir con la inscripcion -->
          <div v-if="isVisiblee === 1">

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  ¿Desea solicitar un certificado?
                </label>
                <input type="checkbox" v-model="inscripcion.certificacion" />
                <label class="uppercase text-blueGray-600 text-xs font-bold mb-2">
                  Si
                </label><br>
              </div>
            </div>

            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="submit">
              Inscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
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
      },
      inscripcion: {
        dni: '44867773',
        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        certificacion: false,
        habilidad: '',
        url_id: '',
      },
      isVisiblee: 0,
      isVisible: 0,
      apii: {
        api_token: ''
      },
      url_id: '',
      mensaje: '',
      isVisibleeee: 1,
      alert: '',
    };
  },
  methods: {
    async validarDni() {
      const url = `https://app-cipcdll.com:81/obtener_persona_datos_xterceros/${this.inscripcion.dni}`; //RUTA DEL API
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      this.inscripcion.nombre = data.data.nombres;
      this.inscripcion.apellido = data.data.paterno + ' ' + data.data.materno;
      this.inscripcion.celular = data.data.celular;
      this.inscripcion.email = data.data.email;
      this.isVisible = 1;
    },
    validarHabilidad() {
      this.inscripcion.url_id = this.$route.params.id;
      axios.post(`http://localhost:8000/obtenerReglaEvento/${this.inscripcion.url_id}`).then((data) => {
        let url_first = data.data[0].url;
        axios.get(`${url_first}/${this.inscripcion.habilidad}`).then((datax) => {
          if (data.data) {
            this.isVisiblee = 1;
            this.mensaje = ""
          } else {
            this.isVisiblee = 0;
            this.mensaje = "No se encuentra habilitado."
          }
        });
      });

    },

    getEditEvento(id) {
      let objetoString = localStorage.getItem("token");
      let objeto = JSON.parse(objetoString);
      this.apii.api_token = objeto;
      const auth = {
        headers: { 'Content-Type': 'application/json' }
      }
      axios.post(`http://localhost:8000/evento/${id}`, this.apii, auth).then(({ data }) => {
        this.evento.nombre = data[0].nombre;
        this.evento.expositor = data[0].expositor;
        this.evento.lugar = data[0].lugar;
        this.evento.fechaInicio = data[0].fechaInicio;
        this.evento.descripcion = data[0].descripcion;
        this.evento.aforo_total = data[0].aforo_total;
        this.evento.butacas_reservadas = data[0].butacas_reservadas;
        this.evento.fechaFin = data[0].fechaFin;
        this.evento.id_regla = data[0].id_regla;
        this.evento.fechaInscripcion = data[0].fechaInscripcion;
        this.evento.img = data[0].img;
        this.evento.informe = data[0].informe;

      }).catch((error) => {
        console.log(error);
      });
    },
    storeInscripcion() {
      this.inscripcion.url_id = this.$route.params.id;
      // console.log(this.inscripcion.url_id);
      let objetoString = localStorage.getItem("token");
      let objeto = JSON.parse(objetoString);
      this.inscripcion.api_token = objeto;
      let dni = this.inscripcion.dni;
      let id_evento = this.inscripcion.url_id;
      // console.log(dni);
      // console.log(id_evento);
      // console.log(this.inscripcion);
      const auth = {
        headers: { 'Content-Type': 'application/json' }
      }
      let url_combinado = `http://localhost:8000/validateInscripciones/?dni=${dni}&id_evento=${id_evento}`;
      // console.log(url_combinado);
      axios.post(url_combinado, this.inscripcion, auth).then((data) => {
        // console.log(data.data[0]);
        if(data.data[0].cuentaInscripcion>0){
          this.alert ="Ya se encuentra registrado en este evento.";
          window.alert(this.alert);
        }else{
          axios.post('http://localhost:8000/storeInscripcion', this.inscripcion, auth).then(() => {
              // console.log(data);
              this.isVisibleeee == 0;
              window.alert("Registo completado satisfactoriamente!");
            });
          }
      })
    }


  },
  mounted() {
    this.url_id = this.$route.params.id;
    this.getEditEvento(this.url_id);
  },

};
</script>