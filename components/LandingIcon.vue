<template>
  <div :class="className">
    <img :class="focus ? 'drop-shadow-neon transition-all duration-1000' : 'transition-all duration-1000'" :src="getImage()"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: String,
    bgColor: String,
    focus: Boolean,
  },
  setup(props) {
    
  },
  methods: {
    getImage() {
      return new URL(this.focus ? this.icon+'-light.png' : this.icon+'.png', import.meta.url).href
    }
  },
  computed:{
    className(){
      return `rounded-full w-${this.focus ? 52 : 44} h-${this.focus ? 52 : 44} bg-${this.bgColor} flex justify-center items-center ${this.focus && 'drop-shadow-neon'} transition-all duration-1000`   
    }
  }
})
</script>
