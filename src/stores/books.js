import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import api from '../api/db'

export const useBookStore = defineStore('bookStore', {
  state: () => {
    return {
      books: []
    }
  },
  actions: {
    addBook(book) {
      return api.saveBook(book)
    },
    setBooks(books) {
      this.$state.books = books
    },
    async getBooks() {
      let books = await api.getBooks()
      this.$state.books = books
    },
    deleteBook(book) {
      return api.deleteBook(book)
    }
  }
})
