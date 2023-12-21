<template>
    <div
        class="relative flex flex-col w-full lg:w-6/12 min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <div class="px-6 py-6 mb-0 bg-white rounded-t">
            <div class="flex text-center">
                <h6 class="text-xl font-bold text-blueGray-700">Actualizacion de datos</h6>
            </div>
        </div>
        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form @submit.prevent="updatePass()">
                <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                    Información de la cuenta
                </h6>
                <div class="flex flex-wrap">
                    <div class="w-full px-4 ">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Correo Electronico
                            </label>
                            <input type="email"
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                v-model="email" required />
                        </div>
                    </div>
                    <div class="w-full px-4 ">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Contraseña
                            </label>
                            <input type="password" id="password"
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                v-model="password" required />
                        </div>
                    </div>

                    <div class="w-full px-4 ">
                        <div class="relative w-full mb-3">
                            <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600" htmlFor="grid-password">
                                Repita la contraseña
                            </label>
                            <input type="password"
                                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                v-model="password2" required />
                        </div>
                    </div>

                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <div>
                    <button
                        class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="submit">
                        Actualizar datos
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>


<script>
import Main from '../../main.js'
import Swal from 'sweetalert2'
import axios, { AxiosHeaders } from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',
            password2: '',
            valor: Main.url
        }
    },

    methods: {

        updatePass() {
            if (this.password === this.password2) {
                console.log(this.email)
                console.log(this.password)
                const auth = {
                headers: { 'Content-Type': 'application/json' }
                }
                axios.post(`${this.valor}/updatePass?email=${this.email}&password=${this.password}`)
                this.AlertSwall('Editado!!', 'Ha sido editado correctamente!', 'success')
                this.email= ''
                this.password= ''
                this.password2= ''
            } else {
                this.AlertSwall('Error de credenciales', 'Contraseña erronea', 'error')
                .then(() => {
                        // Establecer el foco en el campo de contraseña después de cerrar la alerta
                        this.focusPasswordInput();
                    });
            }
        },
        AlertSwall ($title, $text, $icon) {
            return Swal.fire({
                title: $title,
                text: $text,
                icon: $icon
            })
        },
        focusPasswordInput() {
            // Obtener la referencia al elemento del campo de contraseña
            var passwordInput = document.getElementById("password");

            // Establecer el foco en el campo de contraseña
            if (passwordInput) {
                passwordInput.focus();
            }
        }
    }
}
</script>