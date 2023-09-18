<template>
  <div class="container">
    <h1>Nombre del evento</h1>
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
      title: "Registro de Evento",
      content: "Lunes 18/08/2023 07:00 ",
    };
    const etapa2 = {
      title: "Inscripciones",
      content: "Lunes 18/08/2023 12:00 (x) personas",
    };
    const etapa3 = {
      title: "",
      content: "Lugar / Fecha",
    };
    const etapa4 = {
      title: "Etapa 4",
      content: "Lugar / Fecha",
    };
    const etapa5 = {
      title: "Etapa 5",
      content: "Lugar / Fecha",
    };
    const etapa6 = {
      title: "Etapa 6",
      content: "Lugar / Fecha",
    };
    const etapa7 = {
      title: "Etapa 7",
      content: "Lugar / Fecha",
    };
    const etapa8 = {
      title: "Etapa 8",
      content: "Lugar / Fecha",
    };
    const etapa9 = {
      title: "Etapa 9",
      content: "Lugar / Fecha",
    };
    const etapa10 = {
      title: "Etapa 10",
      content: "Lugar / Fecha",
    };
    const items = [etapa1, etapa2, etapa3, etapa4, etapa5, etapa6, etapa7, etapa8, etapa9, etapa10];
    return { items };
  },
};
</script>