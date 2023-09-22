<template>
  <div class="container px-4 mx-auto mt-6">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">Inscripción</h6>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <div class="flex flex-wrap justify-center">
            <div class="w-6/12 sm:w-4/12 px-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                alt="..." class="shadow-lg rounded max-w-full h-auto align-middle border-none" />
            </div>
          </div>

          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Resumen del Evento
          </h6>
          <div class="flex flex-wrap">



            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Nombre del Evento
                </label>

                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Nombre del Evento (variable de la bd)
                </label>

              </div>
            </div>


            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Lugar
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Lugar (variable de la bd)
                </label>
              </div>
            </div>



            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Fecha y hora
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Fecha y Hora (Variable de la bd)
                </label>
              </div>
            </div>



            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Expositor
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Expositor (Variable de la bd)
                </label>
              </div>
            </div>



            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Descripción
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Descripcion (Variable de la bd)
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
                  v-model="inscripcion.dni"
                  >
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6 w-full ease-linear transition-all duration-150"
                type="submit">
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
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"
                >
                <!-- {{ item.nombre }} -->
                </label>
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Apellidos
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  <!-- {{ item.apellido }} -->
                </label>
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Telefono
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  <!-- {{ item.telefono }} -->
                </label>
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  Codigo
                </label>
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  <!-- {{ item.codigo }} -->
                </label>
              </div>
            </div>

          </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />


          <!-- Habilitar despues de validar sus datos con el DNI -->
        <div hidden>
          <div class="flex flex-wrap">

            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Verificar si se cumple lo requerido para el evento. (Ingrese CODIGO)
                </label>
                <input type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
              </div>
            </div>

            <div class="w-full lg:w-3/12 px-4">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6 w-full ease-linear transition-all duration-150"
                type="submit">
                Validar
              </button>
            </div>

          </div>
        </div>

          <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />


          <!-- Despues de validar los datos de los inputs de arriba, mostrar este div para concluir con la inscripcion -->
          <div hidden>

            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                  ¿Desea solicitar un certificado?
                </label>
                <input
                type="checkbox"
                value=""
                />
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
export default {
  data() {
    return {
      inscripcion: {
        dni: '',
        // nombre: '',
        apellido: '',
        telefono: '',
        certificacion: false,
      },
    };
  },
  methods: {
    async validarDni() {
      const url = `https://dniruc.apisperu.com/api/v1/dni/${this.inscripcion.dni}?token=token`; //RUTA DEL API
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.inscripcion.nombre = data.nombres;
      this.inscripcion.apellido = data.apellidoPaterno + ' ' + data.apellidoMaterno;
    },
  },
};
</script>