<template>
    <div class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <div class="px-6 py-6 mb-0 bg-white rounded-t">
            <div class="flex justify-between text-center">
                <h6 class="text-xl font-bold text-blueGray-700">Registro de Links de Pago</h6>
            </div>
        </div>
        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form @submit.prevent="storePagos()">
                <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                    Información del Link
                </h6>
                <div class="flex flex-wrap">
                    <div class="w-full px-4 lg:w-6/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Nombre del Evento
                            </label>
                            <input type="text"
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                v-model="pagos.nombre" required/>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-6/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                URL de pago
                            </label>
                            <input type="text"
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                v-model="pagos.url" required/>
                        </div>
                    </div>

                    <div class="w-full px-4 lg:w-12/12">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Descripción
                            </label>
                            <textarea type="text"
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                v-model="pagos.descripcion" required>
                            </textarea>
                        </div>
                    </div>

                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <div>
                    <button
                        class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="submit">
                        Registrar Link
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data () {
        return {
            pagos: {
                url: '',
                nombre: '',
                api_token: '',
                descripcion: '',
                id_area: 0
            }

        }
    },
    mounted () {
        const objetoString = localStorage.getItem('token')
        const objeto = JSON.parse(objetoString)
        const idarea = localStorage.getItem('area')
        this.pagos.api_token = objeto
        this.pagos.id_area = idarea
    },
    methods: {
        storePagos () {
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/storePagos', this.pagos, auth).then(() => {
                this.AlertSwall(
                    'Link de Pago Registrado',
                    'Link de Pago Registrado Correctamente',
                    'success')
                this.$router.push('/admin/pagos/listPagos')
            })
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
