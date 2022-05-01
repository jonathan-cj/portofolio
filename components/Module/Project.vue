<template>
  <section id="project" class="h-screen">
    <header class="pl-16 pt-16">
      <h1 class="text-secondary-light font-semibold text-h1 drop-shadow-neon mt-4">Projects i have worked on</h1>
    </header>

    <section class="mt-16">
      <ul class="xl:w-3/4 w-4/5 grid md:grid-cols-3 grid-cols-2 gap-x-11 gap-y-16 mx-auto">
        <li v-for="project in projects" :key="project.id" class="w-min">
          <ProjectCard :image="project.image" :name="project.name" :link="project.link" />
        </li>
      </ul>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
let id = 0;

export default defineComponent({
  setup() {
    
  },
  data() {
    return {
      projects: [
        {
          id: id++, 
          name: "Website Unit Softball",
          image: "/images/us.png",
          link: "https://unitsoftballitb.site/"
        },
        {
          id: id++, 
          name: "Website SPARTA 2020",
          image: "/images/sparta.png",
          link: "https://sparta2020.tech/#/"
        },
        {
          id: id++, 
          name: "Groofit Landing Page",
          image: "/images/groofit.png",
          link: "https://www.groo.fit/"
        },
        {
          id: id++, 
          name: "Nona Dessert & Chill Point of Sale",
          image: "../assets/images/nona_bakery.png",
        },
      ]
    }
  },
})
</script>
