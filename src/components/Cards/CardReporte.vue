<template>
    <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
            <div class="flex flex-wrap items-center">
                <div class="relative justify-end flex-1 flex-grow w-full max-w-full space-y-8">
                    <h2 class="text-xl font-semibold text-blueGray-700">
                        Reportes de Eventos por Areas
                    </h2>
                    <div class="flex items-center justify-end space-x-4 text-left">
                        <!-- Agregar un componente de entrada de fecha -->
                        <div class="flex mt-1 space-x-4">
                            <input type="date" v-model="fechaInicio" class="block w-full rounded-md shadow-sm form-input">
                            <input type="date" v-model="fechaFin" class="block w-full rounded-md shadow-sm form-input">
                        </div>

                        <div class="flex items-center justify-center space-x-2">
                            <!-- Agregar un botón para actualizar los datos -->
                            <button @click="actualizarDatos"
                                class="px-4 py-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-800 hover:shadow-lg focus:outline-none">
                                Actualizar Datos
                            </button>
                            <button @click="ObtenerDatos"
                                class="px-4 py-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-800 hover:shadow-lg focus:outline-none">
                                Reset
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="flex-auto p-4">
            <div class="relative h-350-px">
                <canvas id="bar-chart"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js'
import Main from '../../main.js'
import axios from 'axios'
export default {
    data () {
        return {
            totalISS: 0,
            totalIEPI: 0,
            totalCOLEGIATURA: 0,
            totalINFOCIP: 0,
            // constancias
            totalconstanciasISS: 0,
            totalconstanciasIEPI: 0,
            totalconstanciasCOLEGIATURA: 0,
            totalconstanciasINFOCIP: 0,

            // Datos Por Fechas
            fechaInicio: '',
            fechaFin: ''
        }
    },
    created () {
        this.ObtenerDatos()
    },
    methods: {
        async getContadorISS () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getInscripcionesISS`, auth).then(({ data }) => {
                this.totalISS = data[0].ISS
            }).catch((error) => {
                console.log(error)
            })
        },
        async getContadorIEPI () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getInscripcionesIEPI`, auth).then(({ data }) => {
                this.totalIEPI = data[0].IEPI
            }).catch((error) => {
                console.log(error)
            })
        },
        async getContadorCOLEGIATURA () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getInscripcionesCOLEGIATURA`, auth).then(({ data }) => {
                this.totalCOLEGIATURA = data[0].COLEGIATURA
            }).catch((error) => {
                console.log(error)
            })
        },
        async getContadorINFOCIP () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getInscripcionesINFOCIP`, auth).then(({ data }) => {
                this.totalINFOCIP = data[0].INFOCIP
            }).catch((error) => {
                console.log(error)
            })
        },
        async getconstanciasINFOCIP () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getConstanciasINFOCIP`, auth).then(({ data }) => {
                this.totalconstanciasINFOCIP = data[0].INFOCIP
            }).catch((error) => {
                console.log(error)
            })
        },
        async getconstanciasISS () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getConstanciasISS`, auth).then(({ data }) => {
                this.totalconstanciasISS = data[0].ISS
            }).catch((error) => {
                console.log(error)
            })
        },
        async getconstanciasIEPI () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getConstanciasIEPI`, auth).then(({ data }) => {
                this.getconstanciasIEPI = data[0].IEPI
            }).catch((error) => {
                console.log(error)
            })
        },
        async getconstanciasCOLEGIATURA () {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            await axios.post(`${valor}/getConstanciasCOLEGIATURA`, auth).then(({ data }) => {
                this.totalconstanciasCOLEGIATURA = data[0].COLEGIATURA
            }).catch((error) => {
                console.log(error)
            })
        },
        async ObtenerDatos () {
            try {
                await Promise.all([
                    this.getContadorISS(),
                    this.getContadorIEPI(),
                    this.getContadorCOLEGIATURA(),
                    this.getContadorINFOCIP(),
                    this.getconstanciasINFOCIP(),
                    this.getconstanciasISS(),
                    this.getconstanciasIEPI(),
                    this.getconstanciasCOLEGIATURA()

                ])
                this.BarrasReporte()
            } catch (error) {
                console.error('Error en mounted:', error)
            }
        },

        async actualizarDatos () {
            if (this.fechaInicio === '' || this.fechaFin === '') {
                alert('Debe ingresar las fechas')
            } else {
                try {
                    try {
                        this.totalINFOCIP = await this.obtenerEventostotales('1')
                        this.totalISS = await this.obtenerEventostotales('2')
                        this.totalIEPI = await this.obtenerEventostotales('3')
                        this.totalCOLEGIATURA = await this.obtenerEventostotales('4')

                        this.totalconstanciasCOLEGIATURA = await this.obtenerconstanciastotales('4')
                        this.totalconstanciasIEPI = await this.obtenerconstanciastotales('3')
                        this.totalconstanciasINFOCIP = await this.obtenerconstanciastotales('1')
                        this.totalconstanciasISS = await this.obtenerconstanciastotales('2')

                        console.log(this.totalconstanciasCOLEGIATURA)
                        console.log(this.totalconstanciasIEPI)
                        console.log(this.totalconstanciasINFOCIP)
                        console.log(this.totalconstanciasISS)

                        console.log('Actualizado')
                        this.BarrasReporte()
                    } catch (error) {
                        console.error('Error al actualizar datos:', error)
                    }
                } catch (error) {
                    console.error('Error en mounted:', error)
                }
            }
        },
        async obtenerconstanciastotales ($area) {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            // Hacer la llamada a la API
            const response = await axios.post(`${valor}/getConstanciasTotal`, {
                fechaInicio: this.fechaInicio,
                fechaFin: this.fechaFin,
                area: $area
            }, auth)

            // Devolver los datos
            return response.data[0].Constancias
        },
        async obtenerEventostotales ($area) {
            const valor = Main.url
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            // Hacer la llamada a la API
            const response = await axios.post(`${valor}/getEventosTotales`, {
                fechaInicio: this.fechaInicio,
                fechaFin: this.fechaFin,
                area: $area
            }, auth)

            // Devolver los datos
            return response.data[0].EventosTotales
        },
        BarrasReporte () {
            this.$nextTick(function () {
                if (window.myBar) {
                    window.myBar.destroy()
                }
                const config = {
                    type: 'bar',
                    data: {
                        labels: [
                            'INFOCIP',
                            'ISS',
                            'IEPI',
                            'COLEGIATURA'
                        ],
                        datasets: [
                            {
                                label: 'Eventos',
                                backgroundColor: '#E54C2B',
                                borderColor: '#E54C2B',
                                data: [this.totalINFOCIP, this.totalISS, this.totalIEPI, this.totalCOLEGIATURA],
                                fill: false,
                                barThickness: 8
                            },
                            {
                                label: 'Constancias',
                                fill: false,
                                backgroundColor: '#202020',
                                borderColor: '#202020',
                                data: [this.totalconstanciasINFOCIP, this.totalconstanciasISS, this.totalconstanciasIEPI, this.totalconstanciasCOLEGIATURA],
                                barThickness: 8
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        title: {
                            display: false,
                            text: 'Orders Chart'
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        legend: {
                            labels: {
                                fontColor: 'rgba(0,0,0,.4)'
                            },
                            align: 'end',
                            position: 'bottom'
                        },
                        scales: {
                            xAxes: [
                                {
                                    display: false,
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Month'
                                    },
                                    gridLines: {
                                        borderDash: [2],
                                        borderDashOffset: [2],
                                        color: 'rgba(33, 37, 41, 0.3)',
                                        zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                        zeroLineBorderDash: [2],
                                        zeroLineBorderDashOffset: [2]
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    display: true,
                                    scaleLabel: {
                                        display: false,
                                        labelString: 'Value'
                                    },
                                    gridLines: {
                                        borderDash: [2],
                                        drawBorder: false,
                                        borderDashOffset: [2],
                                        color: 'rgba(33, 37, 41, 0.2)',
                                        zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                        zeroLineBorderDash: [2],
                                        zeroLineBorderDashOffset: [2]
                                    }
                                }
                            ]
                        }
                    }
                }
                const ctx = document.getElementById('bar-chart').getContext('2d')
                window.myBar = new Chart(ctx, config)
            })
        }
    }

}

</script>
