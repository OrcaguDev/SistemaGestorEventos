<template>
    <div class="flex flex-wrap">
        <div class="w-full px-4 lg:w-6/12">
            <div class="flex flex-row ">
                <!-- REGISTRAR USUARIO -->
                <div v-if="isVisible == 1"
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
                                            Área
                                        </label>
                                        <select name="area" id="area" v-model="usuario.area"
                                            class="w-full px-6 py-3 mb-1 mr-1 text-sm uppercase transition-all duration-150 ease-linear rounded shadow outline-none text-blueGray-600 hover:shadow-lg focus:outline-none">
                                            <option value="0" selected>Seleccione un área</option>
                                            <option value="1">Infocip</option>
                                            <option value="2">ISS</option>
                                            <option value="3">IEPI</option>
                                            <option value="4">Colegiatura</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="w-full px-4">
                                    <div class="relative w-full mb-3">
                                        <label class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                            htmlFor="grid-password">
                                            Rol
                                        </label>
                                        <select name="rol" id="rol" v-model="usuario.rol"
                                            class="w-full px-6 py-3 mb-1 mr-1 text-sm uppercase transition-all duration-150 ease-linear rounded shadow outline-none text-blueGray-600 hover:shadow-lg focus:outline-none">
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
                <!-- EDITAR USUARIO -->
                <div v-if="isVisible == 2"
                    class="relative flex flex-col w-full min-w-0 m-6 break-words border-0 rounded-lg shadow-lg lg:w-12/12 bg-blueGray-100">
                    <div class="px-6 py-6 mb-0 bg-white rounded-t">
                        <div class="flex justify-between text-center">
                            <h6 class="text-xl font-bold text-blueGray-700">Editar de Usuarios</h6>
                        </div>
                    </div>
                    <div class="flex-row px-4 py-10 pt-0 lg:px-10">
                        <form @submit.prevent="updateUsuario()">
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
                                            Rol
                                        </label>
                                        <select name="rol" id="" v-model="usuario.rol"
                                            class="w-full px-6 py-3 mb-1 mr-1 text-sm uppercase transition-all duration-150 ease-linear rounded shadow outline-none text-blueGray-600 hover:shadow-lg focus:outline-none">
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
                                class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                                type="submit">
                                Guardar
                            </button>
                            <button @click="changeState()"
                                class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-600 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
                                type="button">
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full px-4 lg:w-6/12">
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg"
                :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']">
                <div class="px-4 py-3 mb-0 border-0 rounded-t">
                    <div class="flex flex-wrap items-center">
                        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                            <h3 class="text-lg font-semibold"
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
                                <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    #
                                </th>
                                <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    USUARIO
                                </th>

                                <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    ESTADO
                                </th>

                                <th class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                                    :class="[
                                        color === 'light'
                                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                            : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]">
                                    AREA
                                </th>

                                <th class="px-6 py-3 text-xs font-semibold text-center uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
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
                                    class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                    {{ index + 1 }}
                                </td>
                                <td
                                    class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                    {{ usuario.name }}
                                </td>
                                <td
                                    class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                    {{ usuario.rol_nombre }}
                                </td>
                                <td
                                    class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                    {{ usuario.nombre }}
                                </td>
                                <td
                                    class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">

                                    <button @click="getUSuario(usuario.codigo)"
                                        class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-yellow-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
                                        type="button">
                                        <i class="fas fa-edit"></i>
                                    </button>

                                    <button @click="eliminarUsuario(usuario.codigo)"
                                        class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
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
import Swal from 'sweetalert2'
import Main from '../../../main.js'
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
                area: 0,
                api_token: '',
                codigo: ''
            },
            alert_password: '',
            isVisible: 1
        }
    },
    methods: {
        getTotal () {
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/usuarios`, this.apii, auth).then(({ data }) => {
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
            const valor = Main.url
            if (this.usuario.name === '' && this.usuario.email === '' && this.usuario.password === '' && this.usuario.area === 0 && this.usuario.rol === 0) {
                this.alert_password = 'Faltan campos por rellenar, por favor ingresa los datos correctamente.'
            } else {
                if (this.usuario.password === this.usuario.confirmPassword) {
                    this.view_button = true
                    const objetoString = localStorage.getItem('token')
                    const objeto = JSON.parse(objetoString)
                    this.usuario.api_token = objeto

                    const auth = {
                        headers: { 'Content-Type': 'application/json' }
                    }
                    axios.post(`${valor}/validateEmail`, this.usuario, auth).then((data) => {
                        if (data.data[0].cuentaEmail > 0) {
                            this.AlertSwall(
                                'Error!!',
                                'Ya existe un usuario con este email.',
                                'error')
                        } else {
                            axios.post(`${valor}/storeUsuario`, this.usuario, auth).then(() => {
                                this.getTotal()
                                this.alert_password = ''
                                this.AlertSwall(
                                    'Registrado!!',
                                    'El usuario ha sido registrado correctamente.',
                                    'success')
                                this.limpiar()
                            })
                        }
                    })
                } else {
                    // this.view_button = false;
                    this.AlertSwall(
                        'Error!!',
                        'Las contraseñas no coinciden.',
                        'error')
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
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.usuario.api_token = objeto
            this.usuario.codigo = id
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/deleteUsuario`, this.usuario, auth).then(() => {
                this.AlertSwall(
                    'Eliminado!!',
                    'El usuario ha sido eliminado correctamente.',
                    'success')
                this.getTotal()
            })
        },
        getUSuario (id) {
            const valor = Main.url
            this.isVisible = 2
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.apii.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/getUsuario/${id}`, this.apii, auth).then(({ data }) => {
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
            const valor = Main.url
            const objetoString = localStorage.getItem('token')
            const objeto = JSON.parse(objetoString)
            this.usuario.api_token = objeto
            const auth = {
                headers: { 'Content-Type': 'application/json' }
            }
            axios.post(`${valor}/updateUsuario`, this.usuario, auth).then(() => {
                this.AlertSwall(
                    'Actualizado!!',
                    'El usuario ha sido actualizado correctamente.',
                    'success')
                this.getTotal()
                this.limpiar()
            })
        },
        AlertSwall ($title, $text, $icon) {
            Swal.fire({
                title: $title,
                text: $text,
                icon: $icon
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
