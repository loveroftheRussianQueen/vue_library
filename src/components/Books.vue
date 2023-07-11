<template>
  <div>
    <h1>Books</h1>
    <div class="container">
        <Book v-for="book in books" :name="book.name" :author="book.author" :src="book.src" :key="book.id"/>
    </div>
    <button @click="addBook">add book</button>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, onUpdated } from 'vue'
import { useBookStore } from '../stores/books'

import Book from './Book.vue';

const store = useBookStore()

const addBook = () => {
    const date = new Date('2020-05-22');
  store.addBook({
    name: 'Book1',
    price: 300,
    author: { name: 'John', second_name: 'Paul', last_name: 'Smith' },
    src: 'https://imgur.com/WFBmelM',
    description: 'No description',
    published_at: date.toString(),
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

.container{
    display: flex;
}
</style>
