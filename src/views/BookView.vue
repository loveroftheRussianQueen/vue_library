<template>
  <div class="book_item">
    <h1>{{ id }}</h1>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '../stores/books'

const router = useRouter()
const route = useRoute()
const store = useBookStore()

const books = computed(() => {
  return store.$state.books
})

const id = computed(() => {
  return route.params.id
})

let book = ref({})

onMounted(() => {
  store.getBooks()
  if (books.value.length) {
    book.value = books.value.find((item) => item.id == id.value)
  }
})
</script>

<style lang="scss" scoped></style>
