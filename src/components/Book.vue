<template>
  <div class="book_item">
    <div id="overlay"></div>
    <span class="book_item__buttons">
      <img src="../assets/icons/edit.svg" alt="Edit icon" @click="$emit('edit')" />
      <img src="../assets/icons/delete.svg" alt="Delete icon" @click="$emit('delete')" />
    </span>
    <img class="book_item__cover" :src="props.src" alt="Book cover" />
    <p class="book_item__price">{{ props.price }} ₽</p>
    <p class="book_item__title">{{ props.title }}</p>
    <p class="book_item__author">{{ props.author.name }} {{ props.author.last_name }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['id', 'title', 'price', 'author', 'src', 'description', 'published_at'])
const emits = defineEmits(['delete', 'edit'])
</script>

<style lang="scss" scoped>
.book_item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  transition: ease-in 0.3s;

  &:hover {
    cursor: pointer;

    .book_item__buttons {
      display: inline;
    }

    #overlay {
      display: block;
    }
  }

  #overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 300px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    transition: all 1s;
  }

  &__buttons {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    img {
      width: 24px;
      height: 24px;
      transition: ease-in-out 1s;
    }
  }

  &__cover {
    width: 200px;
    height: 300px;
    border-radius: 5px;
    transition: ease-in 0.3s;
  }

  &__price {
    font-size: 22px;
    font-weight: 500;
    font-weight: 500;
    color: #ca4545;
  }

  &__title {
    font-size: 20px;
    font-family: 'Playfair Display', serif;
    color: #000;
  }

  &__author {
    font-size: 16px;
    font-weight: 300;
    color: #969191;
  }
}
</style>
