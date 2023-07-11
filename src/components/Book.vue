<template>
  <div class="book_item">
    <img :src="props.src" alt="Book cover"/>
    <p>{{ props.name }}</p>
    <p>{{ props.author.name }}</p>
    <p>{{ props.author.last_name }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'price', 'author', 'src', 'description', 'published_at']);
</script>

<style lang="scss" scoped>
.book_item{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
}
</style>
