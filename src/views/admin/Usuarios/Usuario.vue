<template>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-row ">
                <!-- REGISTRAR USUARIO -->
                <div v-if="isVisible == 1"
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
                                            Área
                                        </label>
                                        <select name="area" id="" v-model="usuario.area"
                                            class=" text-blueGray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                                            <option value="0" selected>Seleccione un área</option>
                                            <option value="1">Infocip</option>
                                            <option value="2">ISS</option>
                                            <option value="3">IEPI</option>
                                            <option value="4">Colegiatura</option>
                                        </select>
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
                <!-- EDITAR USUARIO -->
                <div v-if="isVisible == 2"
                    class="relative flex flex-col min-w-0 break-words w-full lg:w-12/12 m-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div class="rounded-t bg-white mb-0 px-6 py-6">
                        <div class="text-center flex justify-between">
                            <h6 class="text-blueGray-700 text-xl font-bold">Editar de Usuarios</h6>
                        </div>
                    </div>
                    <div class="flex-row px-4 lg:px-10 py-10 pt-0">
                        <form @submit.prevent="updateUsuario()">
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
                            <span style="color: red; font-size: 15px;">{{ alert_password }}</span>
                            <hr class="mt-6 border-b-1 border-blueGray-300" />
                            <button
                                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="submit">
                                Guardar
                            </button>
                            <button @click="changeState()"
                                class="bg-red-600 text-white active:bg-red-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button">
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
                :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-lg"
                                :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']">
                                Tabla de Usuarios
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="block w-full overflow-x-auto">
                    <!-- Projects table -->
                    <table class="items-center w-full bg-transparent ">
                        <thead>
                            <tr>
                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    #
                                </th>
                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    USUARIO
                                </th>

                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    ESTADO
                                </th>

                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    AREA
                                </th>

                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(usuario, index) in usuarios" :key="index">
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ index + 1 }}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ usuario.name }}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ usuario.rol_nombre }}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ usuario.nombre }}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                    <button @click="getUSuario(usuario.codigo)"
                                        class="bg-yellow-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        <i class="fas fa-edit"></i>
                                    </button>

                                    <button @click="eliminarUsuario(usuario.codigo)"
                                        class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        <i class="fas fa-trash"></i>
                                    </button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            usuarios: [],
            apii: {
                api_token: ''
            },
            usuario: {
                email: '',
                name: '',
                password: '',
                confirmPassword: '',
                rol: 0,
                area:0,
                api_token: '',
                codigo: ''
            },
            alert_password: '',
            isVisible: 1
        }
    },
    methods: {
        getTotal () {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/usuarios', this.apii, auth).then(({ data }) => {
                this.usuarios = data
            }).catch(error => {
                console.log(error)
            })
        },
        actualizarMensaje (nuevoMensaje) {
            // Método para actualizar el mensaje desde ComponenteA
            this.mensaje = nuevoMensaje
        },
        storeUsuario () {
            // this.isVisible=1;
<<<<<<< HEAD
            if (this.usuario.name == '' && this.usuario.email == '' && this.usuario.password == '' && this.usuario.rol == 0) {
                this.alert_password = 'Faltan campos por rellenar, por favor ingresa los datos correctamente.'
=======
            if (this.usuario.name == '' && this.usuario.email == '' && this.usuario.password == '' && this.usuario.area == 0 && this.usuario.rol == 0) {
                this.alert_password = "Faltan campos por rellenar, por favor ingresa los datos correctamente.";
>>>>>>> b3195f1268b6dff288fa3fd723e63823d4c09515
            } else {
                if (this.usuario.password == this.usuario.confirmPassword) {
                    this.view_button = true
                    const objetoString = localStorage.getItem('token')
                    const objeto = JSON.parse(objetoString)
                    this.usuario.api_token = objeto

                    const auth = {
                        headers: { 'Content-Type': 'application/json' }
                    }
                    axios.post('http://localhost:8000/validateEmail', this.usuario, auth).then((data) => {
                        console.log(data)
                        if (data.data[0].cuentaEmail > 0) {
                            this.alert_password = 'Ya existe un usuario con este email.'
                        } else {
                            axios.post('http://localhost:8000/storeUsuario', this.usuario, auth).then(() => {
                                this.getTotal()
                                this.alert_password = ''
                                this.limpiar()
                            })
                        }
                    })
                } else {
                    // this.view_button = false;
                    this.alert_password = 'Las contraseñas no coinciden'
                }
            }
        },
        limpiar () {
            this.usuario.email = ''
            this.usuario.name = ''
            this.usuario.password = ''
            this.usuario.confirmPassword = ''
            this.usuario.rol = 0
        },
        eliminarUsuario (id) {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.usuario.api_token = objeto
            this.usuario.codigo = id
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/deleteUsuario', this.usuario, auth).then(() => {
                this.getTotal()
            })
        },
        getUSuario (id) {
            this.isVisible = 2
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`http://localhost:8000/getUsuario/${id}`, this.apii, auth).then(({ data }) => {
                this.usuario = data[0]
            }).catch(error => {
                console.log(error)
            })
        },
        changeState () {
            this.isVisible = 1
            this.limpiar()
        },
        updateUsuario () {
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.usuario.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post('http://localhost:8000/updateUsuario', this.usuario, auth).then(() => {
                // console.log(data);
                // this.$router.push('/admin/usuarios/usuario');

                this.getTotal()
                this.limpiar()
            })
        }
    },
    created () {
        this.getTotal()
    },
    props: {
        color: {
            default: 'light',
            validator: function (value) {
                return ['light', 'dark'].indexOf(value) !== -1
            }
        }
    }
}

</script>
