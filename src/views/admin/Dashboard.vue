<template>
  <div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <card-page-visits />
      </div>
    </div>
  </div>
</template>
<script>
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
export default {
  name: "dashboard-page",
  components: {
    CardPageVisits,
  },
};
</script>
