<template>
  <div class="flex flex-wrap" style="flex-direction: column-reverse;">
    <button
      class="px-4 py-2 mt-4 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
      style="width: 80px;" @click="goBack">
      Atras
    </button>
    <div class="w-full px-4 lg:w-10/12">
      <vue-horizontal-timeline :items="items" />
    </div>
  </div>
</template>

<script>
import { VueHorizontalTimeline } from 'vue-horizontal-timeline'
import axios from 'axios'
import Main from '../../main.js'

export default {
    components: {
        VueHorizontalTimeline
    },
    data () {
        const etapa1 = {
            title: 'No existe Fecha de Registro',
            content: 'Fecha del Registro'
        }
        const etapa2 = {
            title: 'No existe Cantidad Registrados',
            content: 'Cantidad Registrados'
        }
        const etapa3 = {
            title: 'No existe Cantidad de Asistentes',
            content: 'Cantidad de Asistentes'
        }
        const etapa4 = {
            title: 'No existe Cantidad de Certificados',
            content: 'Cantidad de Certificados'
        }
        const etapa5 = {
            title: 'No existe Fecha de Finalizacion',
            content: 'Final del Evento'
        }
        const items = [etapa1, etapa2, etapa3, etapa4, etapa5]
        return {
            items,
            timeline: [],
            apii: {
                id_timeline: '',
                api_token: ''
            },
            url_data: ''
        }
    },

    methods: {
        goBack () {
            window.history.back()
        },
        formatDate (dateString) {
            const options = { day: '2-digit', month: 'short', year: 'numeric' }
            const formattedDate = new Date(dateString).toLocaleDateString(undefined, options)
            return formattedDate
        },
        gettimeline () {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/getTimeline`, this.apii, auth).then(({ data }) => {
                this.timeline = data

                this.items[0].title = this.formatDate(this.timeline[0].Fecharegistro)
                this.items[1].title = this.timeline[0].cantidadregistrados_total
                this.items[2].title = this.timeline[0].cantidadregistrados_asistencia_1
                this.items[3].title = this.timeline[0].cantidadregistrados_certificado_1
                this.items[4].title = this.formatDate(this.timeline[0].Fechafin)
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    mounted () {
        this.apii.id_timeline = this.$route.params.id
        this.gettimeline()
    }
}
</script>
