<template>
  <NuxtLink 
    :to='link' target="_blank" 
    class="flex flex-row mt-5 items-center w-fit"
  >
    <img class="lg:max-h-10 max-h-10 h-auto w-auto object-fit" :src="getImage()" />
    <p 
      class="text-primary-0 lg:text-h4 text-p1 font-normal ml-9" 
    >{{contact}}</p>
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    contact: { type: String },
    icon: { type: String },
    link: { type: String },
  },
  methods: {
    getImage() {
      return new URL(this.icon, import.meta.url).href
    }
  },
})
</script>
