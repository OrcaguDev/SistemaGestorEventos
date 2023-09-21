<template>
    <div class="container px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">Lista de Participantes</h6>
                    <router-link to="/admin/timeLine">
                        <button
                            class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button">
                            <p>Ver TimeLine del Evento</p>
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">

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

                </div>

                <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

                <table class="items-center w-full bg-transparent ">
                    <thead>
                        <tr>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                #
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                DNI
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Nombres
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Apellidos
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Certificado
                            </th>
                            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
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
                        <tr>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                1
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                78495612
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                Juan Alberto
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                Gómez Perez
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                Si
                            </td>
                            <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-center">
                                <button
                                    class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>


                    </tbody>

                </table>

            </div>
        </div>
    </div>
</template>


<script>
// import axios from 'axios';
export default {
    data() {
        return {
            //    reglas:[],
            //     Eliminar: false,
            //     apii:{
            //       api_token:''
            //     }
        }
    },
    methods: {
        // getTotal(){
        //   let objetoString = localStorage.getItem("token");
        //   let objeto = JSON.parse(objetoString);
        //   this.apii.api_token=objeto;
        //   const auth = {
        //   headers: {'Content-Type': 'application/json'} 
        //   }
        //   axios.post('http://localhost:8000/reglas',this.apii,auth).then(({data}) => {
        //     this.reglas = data;
        //   }).catch((error) => {
        //     console.log(error);
        //   });

        // }
    },
    // created(){
    //     this.getTotal();
    // },


    props: {
        color: {
            default: "light",
            validator: function (value) {
                // The value must match one of these strings
                return ["light", "dark"].indexOf(value) !== -1;
            },
        },
    },
};

</script>