<template>
    <div class="flex flex-row ">

        <div
            class="relative flex flex-col w-full min-w-0 m-6 break-words border-0 rounded-lg shadow-lg lg:w-12/12 bg-blueGray-100">
            <div class="px-6 py-6 mb-0 bg-white rounded-t">
                <div class="flex justify-between text-center">
                    <h6 class="text-xl font-bold text-blueGray-700">Registro de Usuarios</h6>
                </div>
            </div>
            <div class="flex-row px-4 py-10 pt-0 lg:px-10">
                <form @submit.prevent="storeUsuario()">
                    <h6 class="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                        Datos del usuario
                    </h6>
                    <div class="flex flex-col">
                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    Correo Electronico
                                </label>
                                <input type="text"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    v-model="usuario.email" />
                            </div>
                        </div>

                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    Usuario
                                </label>
                                <input type="text"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    v-model="usuario.name" />
                            </div>
                        </div>

                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    Contraseña
                                </label>
                                <input type="password"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    v-model="usuario.password" />
                            </div>
                        </div>

                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    Repita la contraseña
                                </label>
                                <input type="password"
                                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                    v-model="usuario.confirmPassword" />
                            </div>
                        </div>

                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                    htmlFor="grid-password">
                                    Rol
                                </label>
                                <select name="rol" id="" v-model="usuario.rol"
                                    class="w-full px-6 py-3 mb-1 mr-1 text-sm uppercase transition-all duration-150 ease-linear rounded shadow outline-none  text-blueGray-600 hover:shadow-lg focus:outline-none">
                                    <option value="0" selected>Seleccione un rol</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Editor</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <span style="color: red;">{{ alert_password }}</span>
                    <hr class="mt-6 border-b-1 border-blueGray-300" />
                    <button
                        class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="submit">
                        Registrar
                    </button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            usuario: {
                email: 'pedrocastillo@gmail.com',
                name: 'pedro castillo',
                password: '12345678',
                confirmPassword: '12345678',
                rol: 1,
                api_token: ''
            },
            alert_password: ''
            // view_button: true,
            // usuarios: [],
        }
    },
    methods: {
        storeUsuario () {
            if (this.usuario.password === this.usuario.confirmPassword) {
                this.view_button = true
                const objetoString = localStorage.getItem('token')
                const objeto = JSON.parse(objetoString)
                this.usuario.api_token = objeto
                const auth = {
                    headers: { 'Content-Type': 'application/json' }
                }
                axios.post('http://localhost:8000/storeUsuario', this.usuario, auth).then(() => {
                    this.$router.push('/admin/usuarios/usuario')
                    this.$refs.CardListaUsuario.actualizarMensaje('Mensaje actualizado desde ComponenteA')
                })
                this.limpiar()
            } else {
                this.alert_password = 'Las contraseñas no coinciden'
            }
        },
        limpiar () {
            this.usuario.email = ''
            this.usuario.name = ''
            this.usuario.password = ''
            this.usuario.confirmPassword = ''
            this.usuario.rol = 0
        }
    }

}

</script>
