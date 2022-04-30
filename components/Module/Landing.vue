<template>
  <section id="landing" class="h-screen flex items-center justify-between px-36 lg:px-48">
    <article class="text-primary-0 select-none">
      <h2 class="text-h2">Hi, my name is</h2>
      <h1 class="text-secondary-light font-semibold text-h1 drop-shadow-neon mt-4">
        Jonathan C J
      </h1>
      <p class="mt-5">and i'm a <span class="text-secondary-light font-semibold text-h3 drop-shadow-neon ml-2">student</span></p>
    </article>

    <figure class="grid grid-flow-row-dense grid-cols-2 grid-rows-2 auto-cols-min">
      <div class="relative h-56">
        <LandingIcon class="absolute -bottom-14" :icon='"../assets/images/code.png"' :bgColor='"primary-600"' />
      </div>
      <div class="relative w-48">
        <LandingIcon class="absolute right-0 top-5" :icon='"../assets/images/student.png"' :bgColor='"primary-800"' />
      </div>
      <div class="relative col-span-2">
        <LandingIcon class="absolute right-10 bottom-0" :icon='"../assets/images/game.png"' :bgColor='"primary-500"' />
      </div>
    </figure>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>


