<template>
  <div>
    <a
      class="block text-blueGray-500"
      href="#"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="flex items-center">
        <span
          class="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200"
        >
          <img
            alt="..."
            class="w-full align-middle border-none rounded-full shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <button
        @click="logout()"
        type="button"
        class="w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Cerrar Sesión
      </button>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'

import image from '@/assets/img/logo_1.jpg'

export default {
    data () {
        return {
            dropdownPopoverShow: false,
            image
        }
    },
    methods: {
        toggleDropdown: function (event) {
            event.preventDefault()
            if (this.dropdownPopoverShow) {
                this.dropdownPopoverShow = false
            } else {
                this.dropdownPopoverShow = true
                createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
                    placement: 'bottom-start'
                })
            }
        },
        logout () {
            localStorage.clear()
            this.$router.push('/auth/login')
        }
    }

}
</script>
