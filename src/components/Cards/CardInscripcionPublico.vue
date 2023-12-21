<!-- eslint-disable no-unused-vars -->
<template>
    <div class="container px-4 mx-auto mt-6">
        <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
            <div class="px-6 py-6 mb-0 bg-white rounded-t">
                <div class="flex justify-between text-center">
                    <h6 class="text-xl font-bold text-blueGray-700">Inscripción</h6>
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

                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    {{ evento.nombre }}
                                </label>

                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-3/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Lugar
                                </label>
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    {{ evento.lugar }}
                                </label>
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-3/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Fecha y hora
                                </label>
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    {{ evento.fechaInicio }}
                                </label>
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-3/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Expositor
                                </label>
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    {{ evento.expositor }}
                                </label>
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-6/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Descripción
                                </label>
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    {{ evento.descripcion }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

                    <div class="flex flex-wrap">

                        <div class="w-full px-4 lg:w-3/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    DNI
                                </label>
                                <input type="text" v-model="inscripcion.dni" maxlength="8" minlength="8" pattern="[0-9]{8}"
                                    title="Ingrese un DNI válido" oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    required />
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-3/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Telefono
                                </label>
                                <input type="text" v-model="inscripcion.celular" maxlength="9" minlength="9"
                                    pattern="[0-9]{9}" title="Ingrese un número de celular válido"
                                    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    required />
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-6/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Email
                                </label>
                                <input type="email" v-model="inscripcion.email"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    required />
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-6/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Nombre
                                </label>
                                <input type="text" v-model="inscripcion.nombre"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    required />
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-6/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Apellidos
                                </label>
                                <input type="text" v-model="inscripcion.apellido"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    required />
                            </div>
                        </div>

                        <div class="w-full px-4 lg:w-3/12">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                    Certificacion
                                </label>
                                <input type="checkbox" v-model="inscripcion.certificacion"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
                            </div>
                        </div>

                    </div>

                    <span>{{ mensaje }}</span>
                    <!-- Despues de validar los datos de los inputs de arriba, mostrar este div para concluir con la inscripcion -->

                    <div class="w-full px-4 lg:w-3/12">

                    </div>
                    <div v-if="BtnInscripcion === 1">
                        <button
                            class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
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
                url_id: ''
            },
            url_id: '',
            mensaje: '',
            isVisibleeee: 1,
            valoor: Main.url,
            BtnInscripcion: 1
        }
    },
    mounted () {
        this.url_id = this.$route.params.id
        this.getEditEvento(this.url_id)
    },
    methods: {

        getEditEvento (id) {
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
            this.BtnInscripcion = 0
            const valor = Main.url
            this.inscripcion.url_id = this.$route.params.id
            const fechaInscripcion = this.evento.fechaInscripcion
            const fechaInscripcionFin = this.evento.fechaInscripcionFin
            const dni = this.inscripcion.dni
            const fechaActual = new Date()

            const fechaincripcionformateada = new Date(fechaInscripcion)

            const fechaincripcionfinformateada = new Date(fechaInscripcionFin)

            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }

            if (fechaActual >= fechaincripcionformateada && fechaActual <= fechaincripcionfinformateada) {
                // eslint-disable-next-line camelcase
                const url_combinado = `${valor}/validateInscripciones?dni=${dni}&id_evento=${this.inscripcion.url_id}`
                axios.post(url_combinado, this.inscripcion, auth).then((data) => {
                    if (data.data[0].cuentaInscripcion > 0) {
                        this.AlertSwall('Error!!', 'Ya se encuentra registrado en este evento.', 'error')
                    } else {
                        axios.post(`${valor}/storeInscripcion`, this.inscripcion).then(() => {
                            // eslint-disable-next-line no-unused-expressions
                            this.isVisibleeee === 0
                            this.AlertSwall('Registrado Correctamente!!', 'Registo completado satisfactoriamente!', 'success')
                            this.inscripcion.dni = ''
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
                this.BtnInscripcion = 1
            }
        },
        AlertSwall ($title, $text, $icon) {
            Swal.fire({
                title: $title,
                text: $text,
                icon: $icon
            })
        }
    }

}
</script>
