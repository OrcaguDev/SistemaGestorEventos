<template>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-10/12 px-4">
        <CardEditEvento />
      </div>
    </div>
  </template>
  <script>
  import CardEditEvento from "@/components/Cards/CardEditEvento.vue";
  
  export default {
    components: {
    CardEditEvento,
  },
  };
  </script>
  