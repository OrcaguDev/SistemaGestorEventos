<template>
    <div class="flex flex-row ">

        <div
            class="relative flex flex-col min-w-0 break-words w-full lg:w-12/12 m-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                    <h6 class="text-blueGray-700 text-xl font-bold">Registro de Usuarios</h6>
                </div>
            </div>
            <div class="flex-row px-4 lg:px-10 py-10 pt-0">
                <form @submit.prevent="storeUsuario()">
                    <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Datos del usuario
                    </h6>
                    <div class="flex flex-col">
                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Correo Electronico
                                </label>
                                <input type="text"
                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    v-model="usuario.email" />
                            </div>
                        </div>

                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Usuario
                                </label>
                                <input type="text"
                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    v-model="usuario.name" />
                            </div>
                        </div>

                        <div class="w-full px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Contraseña
                                </label>
                                <input type="password"
                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    v-model="usuario.password" />
                            </div>
                        </div>

                        <div class="w-full  px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Repita la contraseña
                                </label>
                                <input type="password"
                                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    v-model="usuario.confirmPassword" />
                            </div>
                        </div>

                        <div class="w-full  px-4">
                            <div class="relative w-full mb-3">
                                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Rol
                                </label>
                                <select name="rol" id="" v-model="usuario.rol"
                                    class=" text-blueGray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
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
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
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

        // getTotalUsuarios() {
        //     let objetoString = localStorage.getItem("token");
        //     let objeto = JSON.parse(objetoString);
        //     this.api.api_token = objeto;
        //     const auth = {
        //         headers: { 'Content-Type': 'application/json' }
        //     }
        //     axios.post('http://localhost:8000/usuario', this.api, auth).then(({ data }) => {
        //         this.reglas = data;
        //     }).catch((error) => {
        //         console.log(error);
        //     });
        // },
        // validatePasswords() {
        //     return this.password === this.confirmPassword;
        // },
        storeUsuario () {
            if (this.usuario.password == this.usuario.confirmPassword) {
                this.view_button = true
                const objetoString = localStorage.getItem('token')
                const objeto = JSON.parse(objetoString)
                this.usuario.api_token = objeto
                const auth = {
                    headers: { 'Content-Type': 'application/json' }
                }
                axios.post('http://localhost:8000/storeUsuario', this.usuario, auth).then(() => {
                    // console.log(data);
                    this.$router.push('/admin/usuarios/usuario')
                    this.$refs.CardListaUsuario.actualizarMensaje('Mensaje actualizado desde ComponenteA')
                })
                this.limpiar()
            } else {
                // this.view_button = false;
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
