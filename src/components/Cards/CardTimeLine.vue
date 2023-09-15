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
    const example1 = {
      title: "Etapa 1",
      content: "Lugar / Fecha",
    };
    const example2 = {
      title: "Etapa 2",
      content: "Lugar / Fecha",
    };
    const example3 = {
      title: "Etapa 3",
      content: "Lugar / Fecha",
    };
    const example4 = {
      title: "Etapa 4",
      content: "Lugar / Fecha",
    };
    const example5 = {
      title: "Etapa 5",
      content: "Lugar / Fecha",
    };
    const example6 = {
      title: "Etapa 6",
      content: "Lugar / Fecha",
    };
    const example7 = {
      title: "Etapa 7",
      content: "Lugar / Fecha",
    };
    const example8 = {
      title: "Etapa 8",
      content: "Lugar / Fecha",
    };
    const example9 = {
      title: "Etapa 9",
      content: "Lugar / Fecha",
    };
    const example10 = {
      title: "Etapa 10",
      content: "Lugar / Fecha",
    };
    const items = [example1, example2, example3, example4, example5, example6, example7, example8, example9, example10];
    return { items };
  },
};
</script>