<template>
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">Registro de Links de Pago</h6>
            </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form @submit.prevent="storePagos()">
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Información del Link
                </h6>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Nombre del Evento
                          </label>
                            <input type="text"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="pagos.nombre" required/>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                URL de pago
                            </label>
                            <input type="text"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="pagos.url" required/>
                        </div>
                    </div>

                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                Descripción
                            </label>
                            <textarea type="text"
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                v-model="pagos.descripcion" required>
                            </textarea>
                        </div>
                    </div>

                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <div>
                    <button
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
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
export default {
    data () {
        return {
            pagos: {
                url: '',
                nombre: '',
                api_token: '',
                descripcion: ''
            }

        }
    },
    methods: {
        storePagos () {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.pagos.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/storePagos', this.pagos, auth).then(() => {
                this.$router.push('/admin/pagos/listPagos')
            })
        }
    }
}
</script>
