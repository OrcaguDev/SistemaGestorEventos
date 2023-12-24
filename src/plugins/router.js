import { createRouter, createWebHistory } from 'vue-router'

// layouts

import Admin from '@/layouts/Admin.vue'

import Dashboard from '@/views/admin/Dashboard.vue'
import Usuarios from '@/views/admin/Usuarios/Usuario.vue'
import ListarEvento from '@/views/admin/Tables.vue'
import Reporte from '@/views/admin/Reporte.vue'
import Evento from '@/views/admin/Evento.vue'
// views for Auth layout

import Login from '@/views/Login.vue'
// views for pagos
import regPagos from '@/views/admin/pagos/RegistroPagos.vue'
import listPagos from '@/views/admin/pagos/ListaPagos.vue'

// Actualizar datos
import Contrasenia from '@/views/admin/Contrasenia.vue'

// views for edit
import editEvent from '@/views/admin/editar/EditEvento.vue'
import editReglas from '@/views/admin/editar/EditRegla.vue'

// views for Reglas

import RegistrarReglas from '@/views/admin/reglas/RegistrarRegla.vue'
import ListaRegla from '@/views/admin/reglas/ListaRegla.vue'

// views for Inscripcion

import Inscripcion from '@/views/inscripciones/Inscripcion.vue'
import InscripcionPublica from '@/views/inscripciones/InscripcionPublica.vue'
import detalleEvento from '@/views/admin/DetalleEvento.vue'
import timeLine from '@/views/admin/TimeLine.vue'

import axios from 'axios'
import Main from '../main.js'

import Swal from 'sweetalert2'

const Alertlogin = ($title, $text, $icon) => {
    Swal.fire({
        title: $title,
        text: $text,
        icon: $icon
    })
}

const userRoles = [

    // { id: 1, name: 'Administrador' },
    // { id: 2, name: 'Editor' }

]
const getuserrol = () => {
    return parseInt(localStorage.getItem('rol'))
}

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/admin',
        redirect: '/admin/dashboard',
        component: Admin,
        children: [
            {
                path: '/admin/dashboard',
                component: Dashboard,
                meta: { requiresAuth: true }
            },
            {
                path: '/admin/listarEvento',
                component: ListarEvento,
                meta: { requiresAuth: true }
            },
            {
                path: '/admin/reporte',
                component: Reporte,
                meta: { requiresAuth: true },
                beforeEnter: (to, from, next) => {
                    const userRol = getuserrol()
                    if (userRoles[0].id === userRol) {
                        next()
                    } else {
                        Alertlogin(
                            'Error!!',
                            'No tienes permisos para acceder a esta ruta',
                            'error'
                        )
                        next('/admin/dashboard')
                    }
                }

            },
            {
                path: '/admin/pagos/regPagos',
                component: regPagos,
                meta: { requiresAuth: true }
            },
            {
                path: '/admin/pagos/listPagos',
                component: listPagos,
                meta: { requiresAuth: true }
            },
            {
                path: '/admin/evento',
                component: Evento,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/reglas/registrarReglas',
                component: RegistrarReglas,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/reglas/listaRegla',
                component: ListaRegla,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/editar/editEvento/:id',
                component: editEvent,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/editar/editReglas/:id',
                component: editReglas,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/detalleEvento/:id',
                component: detalleEvento,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/timeLine/:id',
                name: 'timeLine',
                component: timeLine,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/usuarios/usuario',
                component: Usuarios,
                meta: { requiresAuth: true },
                beforeEnter: (to, from, next) => {
                    const userRol = getuserrol()
                    if (userRoles[0].id === userRol) {
                        next()
                    } else {
                        Alertlogin(
                            'Error!!',
                            'No tienes permisos para acceder a esta ruta',
                            'error'
                        )
                        next('/admin/dashboard')
                    }
                }

            },
            {
                path: '/admin/Contrasenia',
                component: Contrasenia
            }
        ]
    },
    {
        path: '/inscripciones/inscripcion/:id',
        component: Inscripcion

    },
    {
        path: '/inscripciones/inscripcionPublica/:id',
        component: InscripcionPublica

    },

    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem('token')
    const objeto = JSON.parse(token)
    const valor = Main.url
    const apitoken = {
        api_token: objeto
    }
    const auth = {
        headers: { 'Content-Type': 'application/json' }
    }

    if (to.meta.requiresAuth && !token) {
        // Redirige a la página de inicio de sesión si la ruta requiere autenticación y no hay token
        next('/')
    } else {
        await axios.post(`${valor}/getRoles`, apitoken, auth)
            .then(response => {
                // Almacenar la respuesta en la variable roles
                response.data.forEach(element => {
                    userRoles.push({
                        id: element.rol_id,
                        name: element.rol_nombre
                    })
                })
            })
            // eslint-disable-next-line n/handle-callback-err
            .catch(error => {
                console.log('No logueado - Roles')
            })

        // Continúa la navegación
        next()
    }
})

export default router
