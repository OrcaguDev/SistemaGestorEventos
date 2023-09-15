import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'


// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import ListarEvento from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";
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
import Pruebas from "@/views/inscripciones/Pruebas.vue";

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
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/listarEvento",
        component: ListarEvento,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/evento",
        component: Evento,
      },
      {
        path: "/admin/reglas/registrarReglas",
        component: RegistrarReglas,
      },
      {
        path: "/admin/reglas/listaRegla",
        component: ListaRegla,
      },
      {
        path: "/admin/editar/editEvento",
        component: editEvent,
      },
      {
        path: "/admin/editar/editReglas",
        component: editReglas,
      }
    ],
  },
  
  {
    path: "/inscripciones/inscripcion",
    component: Inscripcion,
  },
  {
    path: "/inscripciones/pruebas",
    component: Pruebas,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
