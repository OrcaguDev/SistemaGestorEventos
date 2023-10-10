<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Registro de Eventos</h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="storeEvento()" enctype="multipart/form-data">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Información del Evento
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Nombre del Evento
              </label>
              <input type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.nombre" />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Expositor
              </label>
              <input type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.expositor" />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Lugar
              </label>
              <input type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.lugar" />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Fecha y hora
              </label>
              <input type="datetime-local"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.fechaInicio" />
            </div>
          </div>

          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Descripción
              </label>
              <textarea type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.descripcion">
              </textarea>
            </div>
          </div>

        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Acerca del Evento
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Fecha y hora de apertura de la Inscripción
              </label>
              <input type="datetime-local"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.fechaInscripcion" />
            </div>
          </div>

          <div class="w-full lg:w-9/12 px-4 ">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Reglas para el evento
              </label>

              <select v-model="evento.id_regla" @change="reglaChange()" class=" text-blueGray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                <option value="0" selected>Seleccione una regla</option>
                <option v-for="(regla, index) in reglas" :key="index" :value="regla.id_regla">
                  {{ regla.nombre }}
                </option>                
              </select>


            </div>
          </div>

          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Imagen
              </label>
              <span class="block text-blueGray-600 text-xs font-bold mb-2">
                (Ingresar imagen de extensión .jpg/.png , de tamaño 800x800)</span>
              <input type="file" ref="fileInput" @change="handleFileUpload"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                accept="image/png, image/jpeg" required/>

            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Informe
              </label>
              <span class="block text-blueGray-600 text-xs font-bold mb-2">
                (Ingresar brochure e informa del evento )</span>
              <input type="file"  ref="fileInput2" @change="handleFileUploadPdf"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                accept="application/pdf, application/docx" required/>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Aforo Total
              </label>
              <input type="number"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.aforo_total" />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Butacas Reservadas
              </label>
              <input type="number"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.butacas_reservadas" />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Fecha y Hora de Fin
              </label>
              <input type="datetime-local"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="evento.fechaFin" />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div>
          <button
            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit">
            Crear Evento
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
      evento: {
        nombre: 'EVENTO 1',
        expositor: 'EXPOSITOR 1',
        lugar: 'LUGAR 1',
        fechaInscripcion: '2022-01-01 00:00:00',
        fechaInicio: '2022-01-01 00:00:00',
        descripcion: 'DESCRIPCION 1',
        aforo_total: 1,
        butacas_reservadas: 1,
        fechaFin: '2022-01-01 00:00:00',
        api_token: '',
        id_regla: 1
      },
      reglas:[],
      apii:{
        api_token:''
      },
      selectedFile: null,
      selectedFilePdf: null
    }
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    handleFileUploadPdf(event) {
      this.selectedFilePdf = event.target.files[0];
    },
    storeEvento() {
      // console.log(this.selectedFile,this.selectedFilePdf)
      let objetoString = localStorage.getItem("token");
      let objeto = JSON.parse(objetoString);
      this.evento.api_token = objeto;
      console.log(this.evento.api_token);
      const auth = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("filepdf", this.selectedFilePdf);
      formData.append("nombre", this.evento.nombre);
      formData.append("expositor", this.evento.expositor);
      formData.append("lugar", this.evento.lugar);
      formData.append("fechaInscripcion", this.evento.fechaInscripcion);
      formData.append("fechaInicio", this.evento.fechaInicio);
      formData.append("descripcion", this.evento.descripcion);
      formData.append("aforo_total", this.evento.aforo_total);
      formData.append("butacas_reservadas", this.evento.butacas_reservadas);
      formData.append("fechaFin", this.evento.fechaFin);
      formData.append("id_regla", this.evento.id_regla);
      formData.append("api_token", this.evento.api_token);
      
      axios.post('http://localhost:8000/storeEvento', formData, auth).then(() => {
        this.$router.push('/admin/listarEvento');
      });
    },
    reglaChange(){
     
      // console.log(this.evento.id_regla);
    },
    getReglas(){
      let objetoString = localStorage.getItem("token");
      let objeto = JSON.parse(objetoString);
      this.apii.api_token=objeto;
      const auth = {
        headers: {'Content-Type': 'application/json'} 
      }
      axios.post('http://localhost:8000/reglas',this.apii,auth).then(({data}) => {
          this.reglas = data;
      }).catch((error) => {
          console.log(error);
      });
    }
  },
  created(){
    this.getReglas();
  }
}
</script>