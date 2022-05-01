<template>
  <div :class="className">
    <img :class="focus ? 'drop-shadow-neon transition-all duration-1000' : 'transition-all duration-1000'" :src="`${focus ? icon+'-light.png' : icon+'.png'}`"/>
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
  computed:{
    className(){
      return `rounded-full w-${this.focus ? 52 : 44} h-${this.focus ? 52 : 44} bg-${this.bgColor} flex justify-center items-center ${this.focus && 'drop-shadow-neon'} transition-all duration-1000`   
    }
  }
})
</script>
