<template>
    <div class="flex flex-wrap">
    <div class="w-full lg:w-10/12 px-4">
      <CardDetalleEvento />
    </div>
  </div>
</template>

<script>
import CardDetalleEvento from "@/components/Cards/CardDetalleEvento.vue";

export default {
  components: {
    CardDetalleEvento,
  },
};
</script>
