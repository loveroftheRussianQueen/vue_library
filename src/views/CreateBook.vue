<template>
  <div class="about">
    <NewBook/>
  </div>
</template>

<script setup>
import NewBook from '../components/NewBook.vue'
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


