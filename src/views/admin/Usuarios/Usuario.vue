<template>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
            <CardUsuario />
        </div>
        <div class="w-full lg:w-6/12 px-4">
            <CardListaUsuario ref="CardListaUsuario"/>
        </div>
    </div>
</template>

<script>
import CardUsuario from "@/components/Cards/CardUsuario.vue"
import CardListaUsuario from "@/components/Cards/CardListaUsuario.vue"
export default {
    components: {
        CardUsuario,
        CardListaUsuario,
    },
}
</script>