<template>
  <div>
    <h1>Vue EBooks</h1>
    <div class="container">
      <Book
        v-for="book in books"
        :title="book.title"
        :author="book.author"
        :src="book.src"
        :price="book.price"
        :key="book.id"
        v-on:delete="deleteBook(book)"
      />
    </div>
    <button @click="addBook">add book</button>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, onUpdated } from 'vue'
import { useBookStore } from '../stores/books'

import Book from './Book.vue'

const store = useBookStore()

const addBook = () => {
  const date = new Date('2020-05-22')
  store.addBook({
    title: 'Book1',
    price: 300,
    author: { name: 'John', second_name: 'Paul', last_name: 'Smith' },
    src: '../src/assets/img/cover1.jpg',
    description: 'No description',
    published_at: date.toString()
  })
  store.getBooks()
}

const deleteBook = async (book) => {
  await store.deleteBook(book)
  store.getBooks()
}

const books = computed(() => {
  return store.$state.books
})

onMounted(() => {
  store.getBooks()
  console.log(store.$state.books)
})

onUpdated(() => {
  console.log(store.$state.books)
})
</script>

<style lang="scss" scoped>
h1 {
  color: #000;
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
}
</style>
