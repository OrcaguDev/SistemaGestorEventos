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

// views for edit
import editEvent from '@/views/admin/editar/EditEvento.vue'
import editReglas from '@/views/admin/editar/EditRegla.vue'

// views for Reglas

import RegistrarReglas from '@/views/admin/reglas/RegistrarRegla.vue'
import ListaRegla from '@/views/admin/reglas/ListaRegla.vue'

// views for Inscripcion

import Inscripcion from '@/views/inscripciones/Inscripcion.vue'
import InscripcionPublica from '@/views/inscripciones/InscripcionPublica.vue'
import QR from '@/views/inscripciones/QR.vue'
import detalleEvento from '@/views/admin/DetalleEvento.vue'
import timeLine from '@/views/admin/TimeLine.vue'

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
                    if (localStorage.getItem('rol') === 'ADMINISTRADOR') {
                        next()
                    } else {
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
                path: '/admin/timeLine',
                component: timeLine,
                meta: { requiresAuth: true }

            },
            {
                path: '/admin/usuarios/usuario',
                component: Usuarios,
                meta: { requiresAuth: true },
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('rol') === 'ADMINISTRADOR') {
                        next()
                    } else {
                        next('/admin/dashboard')
                    }
                }

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
    {
        path: '/inscripciones/QR/:id',
        component: QR

    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (to.meta.requiresAuth && !token) {
        // Redirige a la página de inicio de sesión si la ruta requiere autenticación y no hay token
        next('/')
    } else {
        // Continúa la navegación
        next()
    }
})

export default router
