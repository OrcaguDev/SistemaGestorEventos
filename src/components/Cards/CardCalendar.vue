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
                    <button class="rounded-sm button today">Today</button>
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

                <div id="calendar" style="height: 800px"></div>

            </div>
        </div>
    </div>
</template>

<script setup>
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const calendar = ref(null);

const nextCalendar = () => {
    calendar.value.next();
};

const prevCalendar = () => {
    calendar.value.prev();
};


onMounted(() => {
    // Inicializa el calendario una vez que el componente se ha montado
    calendar.value = getCalendar();
});

const getCalendar = () => {
    const calendar = new Calendar('#calendar', {
        defaultView: 'month',
        isReadOnly: true,
        calendars: [
            {
                id: 'cal1',
                name: 'Personal',
                backgroundColor: '#03bd9e',
            },
            {
                id: 'cal2',
                name: 'Work',
                backgroundColor: '#00a9ff',
            },
        ],
    });

    calendar.setOptions({
        template: {
            monthDayName: function (model) {
                // Aquí puedes personalizar los nombres de los días de la semana
                // model.day contiene el número del día (0 para domingo, 1 para lunes, etc.)
                // model.label contiene la etiqueta del día actual
                // Puedes devolver el nombre personalizado aquí
                const customDayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
                return customDayNames[model.day];
            },

        },
    });

    axios.post('http://localhost:8000/getCalendar').then(({ data }) => {

        const eventos = []

        data.forEach(element => {

            const fechaInicio = new Date(element.fechaInicio).toISOString();
            const fechafin = new Date(element.fechafin).toISOString();

            eventos.push({
                id: element.id_evento,
                calendarId: 'cal1',
                title: element.nombre,
                start: fechaInicio,
                end: fechafin,
            })
        });
        console.log(eventos);

        calendar.createEvents(eventos)

    }).catch((error) => {
        console.log(error);
    });

    calendar.on('clickEvent', ({ event }) => {
        const el = document.getElementById('clicked-event');
        el.innerText = event.title;
    });


    return calendar



}

</script>