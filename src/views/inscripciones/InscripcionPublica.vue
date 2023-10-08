<template>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-10/12 px-4">
        <CardInscripcionPublico />
      </div>
    </div>
  </template>
  <script>
  import CardInscripcionPublico from "@/components/Cards/CardInscripcionPublico.vue";

  export default {
    components: {
    CardInscripcionPublico,
},
  };
  </script>
  