<template>
  <div class="container">
    <vue-horizontal-timeline :items="items" />
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
    const items = [etapa1, etapa2, etapa3, etapa4, etapa5];
    return { items };
  },
};
</script>