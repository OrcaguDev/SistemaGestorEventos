<template>
    <div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <CardPagos />
      </div>
    </div>
  </div>
</template>

<script>
import CardPagos from "@/components/Cards/CardRegPagos.vue";
export default {
  components: {
    CardPagos,
  },
};
</script>