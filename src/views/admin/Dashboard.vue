<template>
  <div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <CardCalendar />
      </div>
    </div>
  </div>
</template>
<script>
import CardCalendar from '@/components/Cards/CardCalendar.vue'
export default {
    components: {
        CardCalendar
    }
}
</script>
