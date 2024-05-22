<template>
  <div class="">
    <h1 class="title text-red-500">Willkommen im MMP Shop</h1>

    <h2 class="my-8">Meine Shop-Wishlist</h2>

    <label for="wish"> Wunsch eingeben:</label> <br />
    <input id="wish" type="text" v-model="userWish" /> <br />

    <button
      @click="addWish"
      class="bg-buttercup-800 text-white p-4 my-2 rounded"
    >
      <i class="material-icons"> favorite </i>
      Wunsch hinzufügen
    </button>

    <wishes @remove="deleteWish" :localwishlist="wishlist"> </wishes>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

// onMounted(() => {});

definePageMeta({
  pageTransition: {
    name: "blur",
  },
});

const wishlist = ref([]);
const userWish = ref("");

const addWish = () => {
  //   $anime({ targets: ".title", translateX: 250, duration: 800 });
  $anime({
    targets: ".title",
    translateX: 250,
    direction: "alternate",
    loop: true,
    easing: "linear",
  });
  console.log(userWish.value);

  wishlist.value.push(userWish.value);

  console.log(wishlist.value);
};

const deleteWish = (index) => {
  wishlist.value.splice(index, 1);
};
</script>

<style scoped></style>
