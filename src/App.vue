<script setup>

import { RouterView } from 'vue-router'

import boxheader from './views/boxheader.vue'
import jumbo from './views/jumbo.vue'
</script>


<template>


  <div class="container">
  <boxheader> </boxheader>
  <jumbo text_title="ร้านอาหาร 4 ภาค"></jumbo>
  
  <RouterView/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>

<style setup>
.container {
  background: rgb(188, 188, 245);
}


</style>