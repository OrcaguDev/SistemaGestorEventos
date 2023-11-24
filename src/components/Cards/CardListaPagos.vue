<template>
    <div class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg"
        :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
        <div class="px-4 py-3 mb-0 border-0 rounded-t">
            <div class="flex flex-wrap items-center">
                <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                    <h3 class="text-lg font-semibold" :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']">
                        Lista de URL - PAGOS
                    </h3>
                </div>
            </div>
        </div>
        <div class="block w-full overflow-x-auto">
            <!-- Projects table -->
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
                            Evento
                        </th>
                        <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                            :class="[
                                color === 'light'
                                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                            ]">
                            descripcion
                        </th>
                        <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                            :class="[
                                color === 'light'
                                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                            ]">
                            link de pago
                        </th>
                        <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                            :class="[
                                color === 'light'
                                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                            ]">
                            estado
                        </th>
                        <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
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
                    <tr v-for="(pago, index) in pagos" :key="index">
                        <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {{ index + 1 }}
                        </td>

                        <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {{ pago.nombre }}
                        </td>
                        <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {{ pago.descripcion }}
                        </td>
                        <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {{ pago.url }}
                        </td>
                        <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            Activo
                        </td>
                        <td
                            class="flex p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap justify-left">
                            <button @click="eliminarPago(pago.id_pagos)"
                                class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                                type="button">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            pagos: [],
            pago: {
                api_token: '',
                id_pagos: '',
                id_area: ''
            }
        }
    },
    methods: {
        getTotal () {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.pago.api_token = objeto
            this.pago.id_area = localStorage.getItem('area')
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/getPagos', this.pago, auth).then(({ data }) => {
                this.pagos = data
            }).catch((error) => {
                console.log(error)
            })
        },
        eliminarPago (id) {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.pago.api_token = objeto
            this.pago.id_pagos = id
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/deletePago', this.pago, auth).then(() => {
                this.getTotal()
            })
        }
    },
    created () {
        this.getTotal()
    },
    props: {
        color: {
            default: 'light',
            validator: function (value) {
                // The value must match one of these strings
                return ['light', 'dark'].indexOf(value) !== -1
            }
        }
    }
}
</script>
