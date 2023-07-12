<script setup>
import { ref } from 'vue'
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
  src: 'https://yandex-images.clstorage.net/qnH4t8216/1629e1erX/CHbacb30EzHhsjVJ4JWpiGPKe5on35vtaiH9YoPQjnfr_UxU9lgGtUGlhjNLiV4GkM0WBCS5To_Nd7ZO0WnivkFrg3Tw4Wot4aZkZcmlwbgjn0vvK4qTiXo8mVKuTSbqKiDVuVr4l3XopMdvXs0zJ5CUj6k1zIufgd6LurnIZ0uw5pJxIaiO6WEOyOUIXfEk64sTjptW65A-zXRzbjl26sZoSc1OaAcdGBxbfxL5BhfUBGvMeWBD211yB74B9NPXJM7OOYEw_oHtcjwt4L0puDeL40ITBvdUHr3oo06lmqLKgLmt2mxjZZzIV5PeDeKXuMgbxGWgbwP1Il_udXif5xC26hltIOIBYf582eBRQSzLa4OOZyav0DqVvJ8KrXZCKjQxLUKcO1XgGJPv8vH-z5T4Y9hx5P_zLf47Ps2AH49cmu7pdYh6wel2kOUwra0Qb0OHLudqrwwuRUzX7mnSSoLghdH61Lsx6OBrEyqdfiNA5GuM_TA3-1E6606FOPevzP5q5WFs8q3ZAtzBiL1JQCMP7-KXLrPgDkGEX8q5ZjIyiPklDpyXQcwEG0eWsY6jjHzv_GHEs0fRxtuyhZQH58wKEvmV_Bo9cYK0PZS5QdTT_wce584T9AbJ2JtCBcaKCqwZ1coUt50QeANn_u1m94RsV1CpxP_3LcYLMp1887toTroZ0eSCyVkymNmMRUFI57tj_is2_8C-mSA7PnX-vr60aTlOTNOZ4PBXj4plNiv8DBN4JfDzVxX-XyI1zG-zyJrqJSXkOsVRrizdUCF5eP_3G5IHgiN48tV8R0o1HqK2OGGZmlA7eWiM52_6RQK3sKhvXGnQj2PZumeWNQjLczCGNgW92B6djfrwPTTNuVg_HwdGAyaLnIaJBIuKWU4OKoi9OU60jxV8xAuLQnl2k7hYu5w5rGPvcaZrooXkc0uokjoloRAaRQU2TJUMFZ1cI3NTHgcqt-wyuSxXui3k',
  description: '',
  published_at: ''
})

let imageSrc = ref(null)
let image = ref(null)

const addBook = () => {
  let book1 = JSON.stringify(newBook.value)
  store.addBook(JSON.parse(book1))
  store.getBooks()
  router.push('/')
}

const uploadImage = (e) => {
  let input = e.target
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      imageSrc.value = e.target.result
    }
    image.value = input.files[0]
    reader.readAsDataURL(input.files[0])
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
