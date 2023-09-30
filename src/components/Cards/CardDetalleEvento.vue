<template>
    <div class="container px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">Lista de Participantes</h6>
                    <div>
                        <button
                            class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="goBack">
                            Volver
                        </button>
                        <router-link to="/admin/timeLine">
                            <button
                                class="bg-indigo-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button">
                                Ver TimeLine del Evento
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="flex flex-col px-4 lg:px-10 py-10 pt-0">

                <div class="w-full lg:w-12/12 px-4 flex flex-row bg-blueGray-200">
                    <div class="realtive lg:w-6/12 mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-6 "
                            htmlFor="grid-password">
                            Buscar Participante por DNI
                        </label>
                        <input type="text"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">


                        <div class=" lg:w-3/12 px-4 flex">
                            <button
                                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-6 w-full ease-linear transition-all duration-150"
                                type="button">
                                Asistencia
                            </button>
                        </div>
                    </div>
                </div>



                <div class="flex-auto px-4 lg:px-10 py-10 pt-0"></div>

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
                                {{ detalle.nombre }}
                            </label>

                        </div>
                    </div>

                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Lugar
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                {{ detalle.lugar }}
                            </label>
                        </div>
                    </div>

                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Fecha y hora
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                {{ detalle.fechaInicio }}
                            </label>
                        </div>
                    </div>

                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Expositor
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                {{ detalle.expositor }}
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
                                Asistencia
                            </th>

                            <!-- <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Acciones
                            </th> -->
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(inscripcion, index) in inscripciones" :key="index">
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {{ index+1 }}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {{ inscripcion.dni}}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {{ inscripcion.nombre}}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {{ inscripcion.apellido}}
                            </td>
                            <td v-if="inscripcion.certificacion==1" class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                Si
                            </td>
                            <td v-else class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                No
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                No
                            </td>
                            <!-- <td
                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-center">
                                <button
                                    class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button">
                                    <i class="fas fa-trash"></i>
                                </button>

                                <button
                                    class="bg-emerald-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button">
                                    <i class="fas fa-check"></i>
                                </button>

                            </td> -->
                        </tr>


                    </tbody>

                </table>

            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            detalle: {
                nombre: '',
                expositor: '',
                lugar: '',
                fechaInicio: '',
                descripcion: '',
                aforo_total: '',
                butacas_reservadas: '',
                fechaFin: '',
                fechaInscripcion: '',
                id_regla: '',
                api_token: ''
            },
            apii: {
                api_token: ''
            },
            url_id: '',
            inscripciones:[],
        }
    },
    methods: {
        goBack() {
            window.history.back();
        },

        getEditEvento(id) {
            let objetoString = localStorage.getItem("token");
            let objeto = JSON.parse(objetoString);
            this.apii.api_token = objeto;
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`http://localhost:8000/evento/${id}`, this.apii, auth).then(({ data }) => {
                this.detalle.nombre = data[0].nombre;
                this.detalle.expositor = data[0].expositor;
                this.detalle.lugar = data[0].lugar;
                this.detalle.fechaInicio = data[0].fechaInicio;
                this.detalle.descripcion = data[0].descripcion;
                this.detalle.aforo_total = data[0].aforo_total;
                this.detalle.butacas_reservadas = data[0].butacas_reservadas;
                this.detalle.fechaFin = data[0].fechaFin;
                this.detalle.id_regla = data[0].id_regla;
                this.detalle.fechaInscripcion = data[0].fechaInscripcion;

            }).catch((error) => {
                console.log(error);
            });
        },
        getInscripcionesTotal(id) {
            let objetoString = localStorage.getItem("token");
            let objeto = JSON.parse(objetoString);
            this.apii.api_token = objeto;
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`http://localhost:8000/getInscripcionesTotal/${id}`, this.apii, auth).then(({ data }) => {
                this.inscripciones = data;
            }).catch((error) => {
                console.log(error);
            });
        },
        
        props: {
            color: {
                default: "light",
                validator: function (value) {
                    // The value must match one of these strings
                    return ["light", "dark"].indexOf(value) !== -1;
                },
            },
        },
    },
    created() {
            this.url_id = this.$route.params.id;
            this.getEditEvento(this.url_id);
            this.getInscripcionesTotal(this.url_id);
        },
}

</script>