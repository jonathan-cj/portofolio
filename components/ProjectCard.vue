<template>
  <NuxtLink 
    :to='link' target="_blank" 
    class="flex flex-col align-top items-center bg-primary-800 w-60 h-32 lg:w-80 lg:h-52 lg:pt-5 pt-1 transition-shadow duration-200 shadow-neon hover:shadow-neon-lg"
  >
    <img class="lg:max-h-[100px] max-h-[60px] h-auto w-auto object-fit" :src="getImage()" />
    <p 
      class="text-primary-0 lg:text-h4 text-p1 font-medium text-center mt-4 lg:mt-6 lg:mx-7 mx-1" 
    >{{name}}</p>
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    image: { type: String },
    name: { type: String },
    link: { type: String },
  },
  methods: {
    getImage() {
      return new URL(this.image, import.meta.url).href
    }
  },
})
</script>
