<template>
  <section id="landing" class="h-screen flex items-center justify-between px-36 lg:px-48">
    <article class="text-primary-0 select-none">
      <h2 class="text-h2">Hi, my name is</h2>
      <h1 class="text-secondary-light font-semibold text-h1 drop-shadow-neon mt-4">
        Jonathan C J
      </h1>
      <p class="mt-5 relative">and i'm a 
        <transition name="slide-down" mode="out-in">
          <span v-if="role=='student'" class="text-secondary-light font-semibold text-h3 drop-shadow-neon ml-2 absolute bottom-0">student</span>
          <span v-else-if="role=='programmer'" class="text-secondary-light font-semibold text-h3 drop-shadow-neon ml-2 absolute bottom-0">programmer</span>
          <span v-else-if="role=='gamer'" class="text-secondary-light font-semibold text-h3 drop-shadow-neon ml-2 absolute bottom-0">gamer</span>
        </transition>
      </p>
    </article>

    <figure class="grid grid-flow-row-dense grid-cols-2 grid-rows-2 auto-cols-min">
      <div class="relative h-56 w-52">
        <LandingIcon class="absolute -bottom-14" :icon='"../images/code"' :bgColor='"primary-600"' :focus="role=='programmer'" />
      </div>
      <div class="relative w-48">
        <LandingIcon class="absolute right-0 top-5" :icon='"../images/student"' :bgColor='"primary-800"' :focus="role=='student'" />
      </div>
      <div class="relative col-span-2">
        <LandingIcon class="absolute right-20 bottom-0" :icon='"../images/game"' :bgColor='"primary-500"' :focus="role=='gamer'" />
      </div>
    </figure>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
  data() {
    return {
      role: "student",
      show: true,
    }
  },
  methods: {
    changeText() {
      var roles = ["student", "programmer", "gamer"];
      var idx = 0;
      
      setInterval(() => {
        this.role = roles[idx];
        idx = (idx+1) % roles.length
      }, 3000);
    }
  },
  mounted() {
    this.changeText();
  }
})
</script>
<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease-out;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
