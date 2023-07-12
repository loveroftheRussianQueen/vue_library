<script setup>
import { onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBookStore } from '../stores/books'

const store = useBookStore()
const router = useRouter()

let newBook = ref({
  title: '',
  price: 0,
  author: {
    name: '',
    second_name: '',
    last_name: ''
  },
  src: '../src/assets/img/cover1.jpg',
  description: '',
  published_at: ''
})

let imageSrc = ref(null);
let image = ref(null)

const addBook = () => {
  let book1 = JSON.stringify(newBook.value)
  store.addBook(JSON.parse(book1))
  store.getBooks()
  router.push('/')
}

const uploadImage = (e) =>{
  let input = e.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          imageSrc.value = e.target.result;
        }
        image.value=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
      }
</script>

<template>
  <div class="modal">
    <form>
      <input type="text" placeholder="What is your book's name?" v-model="newBook.title" />
      <input type="number" placeholder="What is your book's price?" v-model="newBook.price" />
      <input
        type="date"
        placeholder="When was your book published?"
        v-model="newBook.published_at"
      />
      <input type="text" placeholder="Add a description" v-model="newBook.description" />
      <label>Who is the author?</label>
      <input type="text" placeholder="First name" v-model="newBook.author.name" />
      <input type="text" placeholder="Second name" v-model="newBook.author.second_name" />
      <input type="text" placeholder="Last name" v-model="newBook.author.last_name" />
      <input type="file" placeholder="Add an image" @change="uploadImage" />
      <button @click.prevent="addBook">Add a book</button>
    </form>
    <img :src="imageSrc.value" alt="Preview" v-if="imageSrc !== null"/>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  form {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 500px;
    gap: 20px;
    background-color: #dfd5d5;
    border-radius: 10px;
    padding: 20px;

    input {
      width: 70%;
      padding: 12px 20px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }

    button {
      cursor: pointer;
      padding: 10px 15px;
      border-radius: 10px;
      border: 1px solid rgb(236, 233, 233);
      color: #000;
      font-size: 16px;
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    font-size: 16px;
    color: #000;
    right: 15px;
    top: 15px;
    transition: 0.3s ease-out;

    &:hover {
      color: #4e4c4c;
    }
  }
}
</style>
