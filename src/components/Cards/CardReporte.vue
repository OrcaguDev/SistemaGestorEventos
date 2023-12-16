<template>
    <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
            <div class="flex flex-wrap items-center">
                <div class="relative flex-1 flex-grow w-full max-w-full">
                    <h2 class="text-xl font-semibold text-blueGray-700">
                        Reportes de Eventos por Areas
                    </h2>
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
            totalconstanciasINFOCIP: 0
        }
    },
    async mounted () {
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
                console.log(data[0].INFOCIP)
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
                console.log(data[0].ISS)
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
                console.log(data[0].IEPI)
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
                console.log(data[0].COLEGIATURA)
            }).catch((error) => {
                console.log(error)
            })
        },

        BarrasReporte () {
            const iepi = this.totalIEPI
            console.log(iepi)
            this.$nextTick(function () {
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
