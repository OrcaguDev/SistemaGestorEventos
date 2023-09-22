<template>
  <div class="flex flex-wrap" style="flex-direction: column-reverse;">
    <button class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
      style="width: 80px;" @click="goBack"
    >
    Atras
  </button>
    <div class="w-full lg:w-10/12 px-4">
      <vue-horizontal-timeline :items="items" />
    </div>
  </div>
</template>

<script>
import { VueHorizontalTimeline } from "vue-horizontal-timeline";
export default {
  components: {
    VueHorizontalTimeline,
  },
  data() {
    const etapa1 = {
      title: "(DD/MMM/YYYY)",
      content: "Fecha del Registro",
    };
    const etapa2 = {
      title: "(DD/MMM/YYYY)",
      content: "Cantidad Registrados",
    };
    const etapa3 = {
      title: "(DD/MMM/YYYY)",
      content: "Cantidad de Certificados",
    };
    const etapa4 = {
      title: "(DD/MMM/YYYY)",
      content: "Cantidad de Asistentes",
    };
    const etapa5 = {
      title: "(DD/MMM/YYYY)",
      content: "Final del Evento",
    };
    const etapa6 = {
      title: "(DD/MMM/YYYY)",
      content: "Fecha de Certificados",
    };
    const etapa7 = {
      title: "(DD/MMM/YYYY)",
      content: "Fecha de Certificados",
    };
    const items = [etapa1, etapa2, etapa3, etapa4, etapa5, etapa6, etapa7];
    return { items };
  },

  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>