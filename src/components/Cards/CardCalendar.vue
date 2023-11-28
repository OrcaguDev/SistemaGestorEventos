<template>
    <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
            <div class="flex flex-wrap items-center">
                <div class="relative flex-1 flex-grow w-full max-w-full">
                    <h2 class="text-xl font-semibold text-blueGray-700">
                        SISTEMA GESTOR DE EVENTOS DEL COLEGIO DE INGENIEROS
                    </h2>
                </div>
            </div>
        </div>
        <div class="flex-auto p-4">
            <div class="relative h-800-px">

                <div class="flex p-4 space-x-4">
                    <button class="rounded-sm button today" @click="hoycalendar">Hoy</button>
                    <button class="button is-rounded prev" @click="prevCalendar">
                        <span class="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </button>
                    <button class="button is-rounded next" @click="nextCalendar">
                        <span class="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </button>
                </div>
                <div>
                    <p class="mt-4 text-lg font-semibold text-center">{{ currentMonth }}</p>
                </div>

                <div>
                    <div id="calendar" style="height: 800px"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import Calendar from '@toast-ui/calendar'
import '@toast-ui/calendar/dist/toastui-calendar.min.css'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Main from '../../main.js'

const calendar = ref(null)
const currentMonth = ref('') // Variable para almacenar el mes actual

const nextCalendar = () => {
    calendar.value.next()
    updateCurrentMonth()
}

const prevCalendar = () => {
    calendar.value.prev()
    updateCurrentMonth()
}

const hoycalendar = () => {
    calendar.value.today()
    updateCurrentMonth()
}

onMounted(() => {
    // Inicializa el calendario una vez que el componente se ha montado
    calendar.value = getCalendar()
    updateCurrentMonth()
})

const getCalendar = () => {
    let valor = Main.url
    const calendar = new Calendar('#calendar', {
        defaultView: 'month',
        isReadOnly: true,
        calendars: [
            {
                id: 'cal1',
                name: 'Personal',
                backgroundColor: '#03bd9e'
            },
            {
                id: 'cal2',
                name: 'Work',
                backgroundColor: '#00a9ff'
            }
        ]
    })

    calendar.setOptions({
        template: {
            monthDayName: function (model) {
                const customDayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
                return customDayNames[model.day]
            }
        }
    })

    axios.post(`${valor}/getCalendar`).then(({ data }) => {
        const eventos = []
        data.forEach(element => {
            const fechaInicio = new Date(element.fechaInicio).toISOString()
            const fechafin = new Date(element.fechafin).toISOString()
            eventos.push({
                id: element.id_evento,
                calendarId: 'cal1',
                title: element.nombre,
                start: fechaInicio,
                end: fechafin
            })
        })
        calendar.createEvents(eventos)

        updateCurrentMonth()
    }).catch((error) => {
        console.log(error)
    })

    return calendar
}

const updateCurrentMonth = () => {
    const currentDate = new Date(calendar.value.getDate())
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]
    currentMonth.value = monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear()
}

</script>
