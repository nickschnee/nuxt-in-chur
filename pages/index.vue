<template>
  <div class="">

    <h1 class="">Willkommen im MMP Shop</h1>

    <h2 class="my-8"> Meine Shop-Wishlist</h2>

    <label for="wish"> Wunsch eingeben:</label> <br>
    <input id="wish" type="text" v-model="userWish"> <br>

    <button @click="addWish" class="bg-buttercup-800 text-white p-4 my-2 rounded">Wunsch hinzufügen</button>

    <wishes @remove="deleteWish" :localwishlist="wishlist"> </wishes>

  </div>
</template>

<script setup>

const wishlist = ref([]);
const userWish = ref("");

const addWish = () => {

    console.log(userWish.value);

    wishlist.value.push(userWish.value);

    console.log(wishlist.value);

}

const deleteWish = (index) => {

    wishlist.value.splice(index, 1);

}



</script>

<style scoped>

</style>
