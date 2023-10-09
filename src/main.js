import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";


// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Usuarios from "@/views/admin/Usuarios/Usuario.vue";
import ListarEvento from "@/views/admin/Tables.vue";
import Reporte from "@/views/admin/Reporte.vue";
import Evento from "@/views/admin/Evento.vue";
// views for Auth layout

import Login from "@/views/Login.vue";

// views for edit
import editEvent from "@/views/admin/editar/EditEvento.vue";
import editReglas from "@/views/admin/editar/EditRegla.vue";

//views for Reglas

import RegistrarReglas from "@/views/admin/reglas/RegistrarRegla.vue";
import ListaRegla from "@/views/admin/reglas/ListaRegla.vue";

//views for Inscripcion

import Inscripcion from "@/views/inscripciones/Inscripcion.vue";
import InscripcionPublica from "@/views/inscripciones/InscripcionPublica.vue";
import detalleEvento from "@/views/admin/DetalleEvento.vue";
import timeLine from "@/views/admin/TimeLine.vue";

// routes

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: "/admin/listarEvento",
        component: ListarEvento,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/reporte",
        component: Reporte,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/evento",
        component: Evento,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/reglas/registrarReglas",
        component: RegistrarReglas,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/reglas/listaRegla",
        component: ListaRegla,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/editar/editEvento/:id",
        component: editEvent,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/editar/editReglas/:id",
        component: editReglas,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/detalleEvento/:id",
        component: detalleEvento,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/timeLine",
        component: timeLine,
        meta: { requiresAuth: true }

      },
      {
        path: "/admin/usuarios/usuario",
        component: Usuarios,
        meta: { requiresAuth: true }

      }      
    ],
  },
   
  {
    path: "/inscripciones/inscripcion/:id",
    component: Inscripcion,
    
  },
  {
    path: "/inscripciones/inscripcionPublica/:id",
    component: InscripcionPublica,
    
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App).use(router).mount("#app");

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');


  if (to.meta.requiresAuth && !token) {
    // Redirige a la página de inicio de sesión si la ruta requiere autenticación y no hay token
    next('/');
  } else {
    // Continúa la navegación
    next();
  }
});

