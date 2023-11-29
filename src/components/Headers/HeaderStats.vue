<template>
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="REGLAS"
              :statTitle="totalReglas"
              statPercentColor="text-emerald-500"
              statDescripiron="Del último año"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="EVENTOS"
              :statTitle="totalEventos"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Desde la última semana"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="Usuarios"
              :statTitle="totalusuarios"

              statPercent="1.10"
              statPercentColor="text-emerald-500"
              statDescripiron="Desde ayer"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from '@/components/Cards/CardStats.vue'
import axios from 'axios'
import Main from '../../main.js'

export default {
    components: {
        CardStats
    },
    data () {
        return {
            // constancias: 0,
            totalEventos: 0,
            totalusuarios: 0,
            totalReglas: 0,
            apii: {
                api_token: ''
            }
        }
    },
    created () {
        this.getEventos()
        this.getUsersTotal()
        this.getReglas()
    },
    methods: {
        getUsersTotal () {
            let valor = Main.url;
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/getUsers`, this.apii, auth).then(({ data }) => {
                this.totalusuarios = data[0].total
            }).catch((error) => {
                console.log(error)
            })
        },

        getReglas () {
            let valor = Main.url;
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/getReglas`, this.apii, auth).then(({ data }) => {
                this.totalReglas = data[0].total
            }).catch((error) => {
                console.log(error)
            })
        },

        getEventos () {
            let valor = Main.url;
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/getEventos`, this.apii, auth).then(({ data }) => {
                this.totalEventos = data[0].total
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
