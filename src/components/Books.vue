<template>
  <header>
    <h1>Vue Library</h1>
    <button @click="addBook" class="btn_add">Add Book</button>
  </header>
  <div class="container">
    <Book
      v-for="book in books"
      :id="book.id"
      :title="book.title"
      :author="book.author"
      :src="book.src"
      :price="book.price"
      :key="book.id"
      @delete="deleteBook(book)"
      @edit="editBook(book.id)"
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBookStore } from '../stores/books'

import Book from './Book.vue'

const store = useBookStore()
const router = useRouter()

const addBook = () => {
  router.push('/books/create')
}

const editBook = (id) => {
  router.push(`/book/${id}/edit`)
}

const deleteBook = async (book) => {
  await store.deleteBook(book)
  store.getBooks()
}

const navigateToBook = (id) => {
  router.push(`/book/${id}/show`)
}

const books = computed(() => {
  return store.$state.books
})

onMounted(() => {
  store.getBooks()
})
</script>

<style lang="scss" scoped>
header {
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(238, 232, 225);
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
}

.btn_add {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid rgb(180, 173, 173);
  color: #000;
  font-size: 16px;
}
</style>
