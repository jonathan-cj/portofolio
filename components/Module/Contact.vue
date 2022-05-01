<template>
  <section id="contact" class="h-[50vh] bg-primary-600 pl-16">
    <header class="pt-16">
      <h1 class="text-secondary-light font-semibold text-h1 drop-shadow-neon mt-4">Contact me</h1>
    </header>

    <section>
      <ul class="">
        <li v-for="contact in contacts" :key="contact.id" class="w-fit">
          <ContactItem :contact="contact.contact" :icon="contact.icon" :link="contact.link" />
        </li>
      </ul>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

var id = 0

export default defineComponent({
  setup() {
    
  },
  data() {
    return {
      contacts: [
        {
          id: id++,
          contact: "jonathan-cj",
          link: "https://www.linkedin.com/in/jonathan-cj-09816521b/",
          icon: "/images/linkedin.png"
        },
        {
          id: id++,
          contact: "jonathan-cj",
          link: "https://github.com/jonathan-cj",
          icon: "/images/github.png"
        },
        {
          id: id++,
          contact: "jonathanjahja2401@gmail.com",
          icon: "/images/email.png"
        },
      ]
    }
  }
})
</script>

