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

                <div id="calendar" style="height: 800px"></div>

            </div>
        </div>
    </div>
</template>

<script setup>
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
    // Inicializa el calendario una vez que el componente se ha montado
    getCalendar();

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
                console.log(data);

                calendar.createEvents([
                    {
                        id: data.id,
                        title: data.nombre,
                    }
                ])

                // console.log(data);
            }).catch((error) => {
                console.log(error);
            });


    return calendar



}

</script>