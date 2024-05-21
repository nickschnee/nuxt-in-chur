<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Willkommen in meinem Shop!</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md p-4"
      >
        <NuxtLink :to="`/products/${product.id}`">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-fit rounded-md mb-4"
          />
          <p class="font-semibold text-lg truncate">{{ product.title }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAsyncData } from "#app";

const name = ref("Nick");

const {
  data: products,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "fetchShop", // name der Funktion, unique
  () => $fetch("https://fakestoreapi.com/products")
);

console.log(products.value);
</script>

<style scoped>
/* No additional styles needed since we're using TailwindCSS */
</style>
