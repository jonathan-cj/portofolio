<template>
  <div :class="className">
    <img :src="`${icon}`"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: String,
    bgColor: String
  },  
  setup(props) {
    
  },
  computed:{
    className(){
      return `rounded-full w-44 h-44 bg-${this.bgColor} flex justify-center items-center`   
    }
  }
})
</script>

