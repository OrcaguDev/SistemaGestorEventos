<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-10/12 px-4">
      <CardRegEvento />
    </div>
  </div>
</template>
<script>
import CardRegEvento from '@/components/Cards/CardRegEvento.vue'

export default {
    components: {
        CardRegEvento
    }
}
</script>
