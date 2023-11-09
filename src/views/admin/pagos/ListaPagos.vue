<template>
    <div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <CardListaPagos />
      </div>
    </div>
  </div>
</template>

<script>
import CardListaPagos from "@/components/Cards/CardListaPagos.vue";
export default {
  components: {
    CardListaPagos,
  },
};
</script>