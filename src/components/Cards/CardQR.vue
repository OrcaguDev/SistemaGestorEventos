<template>
    <div class="container px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">Entrada para el evento</h6>
                </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div class="flex flex-col items-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-6/12 sm:w-6/12 px-4">
                            <vue-qrcode ref="qrcode" :value="hello" :options="options"></vue-qrcode>
                            <div class="container"> <button
                                    v-on:click="getinput(InputData, hexCode, hexCode2, InputData2, InputData3, selectedImage, this.$refs.qrcode.$el)"></button>
                            </div>
                        </div>
                    </div>
                </div>

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Resumen del Evento
                </h6>
                <div class="flex flex-wrap">



                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Nombre del Evento
                            </label>

                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.nombre }} -->
                            </label>

                        </div>
                    </div>


                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Lugar
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.lugar }} -->
                            </label>
                        </div>
                    </div>



                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Fecha y hora
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.fechaInicio }} -->
                            </label>
                        </div>
                    </div>



                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Expositor
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.expositor }} -->
                            </label>
                        </div>
                    </div>



                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Descripción
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.descripcion }} -->
                            </label>
                        </div>
                    </div>
                </div>

                <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Detalles del Participante
                </h6>
                <div class="flex flex-wrap">



                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Nombres
                            </label>

                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ data.data }} -->
                            </label>

                        </div>
                    </div>


                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Apellidos
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.lugar }} -->
                            </label>
                        </div>
                    </div>



                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Telefono
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.fechaInicio }} -->
                            </label>
                        </div>
                    </div>



                    <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                DNI
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.expositor }} -->
                            </label>
                        </div>
                    </div>



                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 font-bold mb-2" htmlFor="grid-password">
                                Constancia
                            </label>
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                <!-- {{ evento.descripcion }} -->
                            </label>
                        </div>
                    </div>
                </div>


                </div>
                <hr class="mt-6 mb-4 border-b-1 border-blueGray-300" />

            </div>
        </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
import axios from 'axios'
export default {
    data(){
        return{
            inscripcion: {
                dni: '',
                nombre: '',
                apellido:'',
                celular:'',
                email:'',
                certificacion:'',
            }
        };  
    },
    components: { VueQrcode },
    props: ['InputData', 'hexCode', 'hexCode2', 'InputData2', 'InputData3', 'selectedImage'],
    data() {
        return {
            hello: "aqui va el dni",
            options: {
                maskPattern: 7,
                scale: 18,
                color: {
                    dark: '#000000',
                    light: '#ffffff',
                },
                margin: 0
            }
        }
    },
    methods: {
        getinput(InputData, hexCode, hexCode2, InputData2, InputData3, selectedImage, canvas) {
            try {
                if (!InputData) throw new Error("InputData is not defined")
                const context = canvas.getContext('2d');
                const image = new Image();
                image.src = selectedImage;
                image.crossorigin = 'anonymous';
                image.onload = () => {
                    const coverage = 0.2;
                    const width = Math.round(canvas.width * coverage);
                    const x = (canvas.width - width) / 2;
                    console.log(canvas.width)
                    this.drawImage(context, image, x, x, width, width);
                };
                this.hello = InputData
                this.options.maskPattern = InputData2
                this.options.scale = InputData3
                this.options.color.dark = hexCode
                this.options.color.light = hexCode2
            } catch (error) {
                console.log(error)
            }
        },
        drawImage(context, image, x, y, width, height, radius = 8) {
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 2;
            context.shadowBlur = 4;
            context.shadowColor = '#00000040';
            context.lineWidth = 8;
            context.beginPath();
            context.moveTo(x + radius, y);
            context.arcTo(x + width, y, x + width, y + height, radius);
            context.arcTo(x + width, y + height, x, y + height, radius);
            context.arcTo(x, y + height, x, y, radius);
            context.arcTo(x, y, x + width, y, radius);
            context.closePath();
            context.strokeStyle = '#fff';
            context.stroke();
            context.clip();
            context.fillStyle = '#fff';
            context.fillRect(x, x, width, height);
            context.drawImage(image, x, x, width, height);
        },
    }
}
</script>