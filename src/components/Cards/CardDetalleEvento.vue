<template>
    <div class="container px-4 mx-auto mt-6">
        <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
            <div class="px-6 py-6 mb-0 bg-white rounded-t">
                <div class="flex justify-between text-center">
                    <h6 class="text-xl font-bold text-blueGray-700">Lista de Participantes</h6>
                    <div>
                        <button
                            class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                            type="button" @click="goBack">
                            Volver
                        </button>
                        <router-link :to="'/admin/timeLine/' + this.url_id">
                            <button
                                class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                                type="button">
                                Ver TimeLine del Evento
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="flex flex-col px-4 py-10 pt-0 lg:px-10">
                <form @submit.prevent="updateAsistencia()">
                    <div class="flex flex-row w-full px-4 lg:w-12/12 bg-blueGray-200">

                        <div class="mb-3 realtive lg:w-6/12">
                            <label class="block mt-6 mb-2 text-xs font-bold uppercase text-blueGray-600 "
                                htmlFor="grid-password">
                                Buscar Participante por DNI
                            </label>
                            <input type="text" v-model="dni" id="inputDNI" pattern="[0-9]{8}"
                                    oninput="this.value = this.value.replace(/[^0-9]/g,'')" maxlength="8" 
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                        </div>

                        <div class="relative w-5/12 pl-8 mt-6 mb-3">
                            <div class="flex px-4 lg:w-12/12">
                                <label class="block mt-6 mb-2 text-xs font-bold uppercase text-blueGray-600 "></label>
                                <button @click="updateAsistencia()"
                                    class="w-full px-3 py-3 mt-6 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                                    type="button">
                                    Asistencia
                                </button>
                            </div>
                        </div>

                    </div>
                </form>

                <div class="flex-auto px-4 py-10 pt-0 lg:px-10"></div>

                <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                    Resumen del Evento
                </h6>
                <div class="flex flex-wrap">

                    <div class="w-full px-4 lg:w-3/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Nombre del Evento
                            </label>

                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                {{ detalle.nombre }}
                            </label>

                        </div>
                    </div>

                    <div class="w-full px-4 lg:w-3/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Lugar
                            </label>
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                {{ detalle.lugar }}
                            </label>
                        </div>
                    </div>

                    <div class="w-full px-4 lg:w-3/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Fecha y hora
                            </label>
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                {{ detalle.fechaInicio }}
                            </label>
                        </div>
                    </div>

                    <div class="w-full px-4 lg:w-3/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Expositor
                            </label>
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                {{ detalle.expositor }}
                            </label>
                        </div>
                    </div>

                </div>

                <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

                <table class="items-center w-full bg-transparent ">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                #
                            </th>
                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                DNI
                            </th>
                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Nombres
                            </th>
                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Apellidos
                            </th>
                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Certificado
                            </th>

                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Tipo
                            </th>

                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Asistencia
                            </th>

                            <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                :class="[
                                    color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                ]">
                                Recibo
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(inscripcion, index) in datospaginados" :key="index">
                            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                {{ index + 1 }}
                            </td>
                            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                {{ inscripcion.dni }}
                            </td>
                            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                {{ inscripcion.nombre }}
                            </td>
                            <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                {{ inscripcion.apellido }}
                            </td>
                            <td v-if="inscripcion.certificacion == 1"
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap ">
                                Si
                            </td>
                            <td v-else
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                No
                            </td>

                            <td v-if="inscripcion.tipo == 1"
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                Colegiado
                            </td>

                            <td v-else
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                Publico
                            </td>

                            <td v-if="inscripcion.asistencia == 1"
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                Si
                            </td>

                            <td v-else
                                class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                No
                            </td>

                            <td>

                                <template v-if="inscripcion.recibo === null">
                                    <input type="text"
                                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow lg:w-9/12 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                        v-model="recibo" />
                                    <button @click="updateRecibo(inscripcion.dni)" v-if="mostrarBoton"
                                        class="w-full text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none lg:w-3/12"
                                        type="button">
                                        <span class="material-symbols-outlined">
                                            save
                                        </span>
                                    </button>
                                </template>

                                <template v-else>
                                    <label>
                                        {{ inscripcion.recibo }}
                                    </label>
                                </template>

                            </td>
                            <!-- <td v-if="inscripcion.recibo == 1" class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                Si
                            </td>
                            <td v-else class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                No
                            </td> -->

                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center justify-between py-4">
                    <nav class="flex p-4 space-x-4 border-2 border-solid">
                        <button class="px-2" v-on:click="getprev()">&lt;</button>
                        <button class="px-2" v-for="pagina in totalPaginas()" :key="pagina"
                            v-on:click="getdatapagina(pagina)">{{
                                pagina }}</button>
                        <button class="px-2" v-on:click="getnext()">&#62;</button>
                    </nav>
                    <input type="text" v-model="busqueda" @input="getdatapagina(1)"  pattern="[0-9]{8}"
                                    title="Ingrese un DNI válido" oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        class="w-6/12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        id="buscarpagos" placeholder="Buscar DNI" required />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Main from '../../main.js'
import Swal from 'sweetalert2'


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
                recibo: null,
                tipo: '',
                api_token: ''
            },
            apii: {
                api_token: ''
            },
            url_id: '',
            inscripciones: [],
            dni: '',
            mostrarBoton: true,
            page: 1,
            busqueda: '',
            ElementforPage: 10,
            datospaginados: []
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
        goBack() {
            window.history.back()
        },

        getEditEvento(id) {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            return axios.post(`${valor}/evento/${id}`, this.apii, auth).then(({ data }) => {
                this.detalle.nombre = data[0].nombre
                this.detalle.expositor = data[0].expositor
                this.detalle.lugar = data[0].lugar
                this.detalle.fechaInicio = data[0].fechaInicio
                this.detalle.descripcion = data[0].descripcion
                this.detalle.aforo_total = data[0].aforo_total
                this.detalle.butacas_reservadas = data[0].butacas_reservadas
                this.detalle.fechaFin = data[0].fechaFin
                this.detalle.id_regla = data[0].id_regla
                this.detalle.fechaInscripcion = data[0].fechaInscripcion
            }).catch((error) => {
                console.log(error)
            })
        },
        getInscripcionesTotal(id) {
            const prueba = this.$route.params.id
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            return axios.post(`${valor}/getInscripcionesTotal/${prueba}`, this.apii, auth).then(({ data }) => {
                this.inscripciones = data
                // eslint-disable-next-line no-unused-expressions
            }).catch((error) => {
                console.log(error)
            })
        },
        updateAsistencia() {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const dni = this.dni
            // eslint-disable-next-line camelcase
            const id_evento = this.url_id
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            // eslint-disable-next-line camelcase
            const url_concatenado = `${valor}/updateAsistencia?dni=${dni}&id_evento=${id_evento}`
            return axios.post(url_concatenado, this.apii, auth).then(() => {
                this.getInscripcionesTotal(this.url_id)
                this.dni = ''
                this.AlertSwall('Asistencia', 'Se registro la asistencia correctamente!', 'success')
                    setTimeout(function() {
                    location.reload();
                    }, 1000);
                
            }).catch((error) => {
                console.log(error)
            })
        },
        updateRecibo(dni) {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const recibo = this.recibo
            // eslint-disable-next-line camelcase
            const id_evento = this.url_id

            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            // eslint-disable-next-line camelcase
            const url_concatenado = `${valor}/updateRecibo?recibo=${recibo}&id_evento=${id_evento}&dni=${dni}`
            return axios.post(url_concatenado, this.apii, auth).then(() => {
                this.getInscripcionesTotal(this.url_id)
                this.mostrarBoton = false
                this.AlertSwall('Recibo', 'Se registro el recibo correctamente!', 'success')
                setTimeout(function() {
                    location.reload();
                    }, 1000);
            }).catch((error) => {
                console.log(error)
            })
        },
        AlertSwall($title, $text, $icon) {
            Swal.fire({
            title: $title,
            text: $text,
            icon: $icon
        })
        },

        totalPaginas() {
            return Math.ceil(this.inscripciones.length / this.ElementforPage)
        },
        getdatapagina(pagina) {
            this.page = pagina
            const ini = (pagina * this.ElementforPage) - this.ElementforPage
            const fin = (pagina * this.ElementforPage)
            this.datospaginados = this.inscripciones
                .filter(inscripcion => inscripcion.dni.toString().toLowerCase().includes(this.busqueda.toLowerCase()))
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
    created() {
        this.url_id = this.$route.params.id
        this.getEditEvento(this.url_id)
        this.getInscripcionesTotal(this.url_id)
    },
    mounted() {
        this.getInscripcionesTotal().then(() => {
            this.getdatapagina(1)
        })
    }
}

</script>
