<template>
  <div v-if="product" class="container mx-auto p-6">
    <h1 class="text-2xl mb-8">Produktdetails</h1>
    <div class="bg-white rounded-lg shadow-md flex items-center p-4">
      <img
        class="w-1/3 h-64 object-cover rounded-md"
        :src="product.image"
        alt=""
      />
      <div class="ml-6">
        <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>
        <p class="text-xl text-gray-700">CHF {{ product.price }}</p>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Produkt konnte nicht gefunden werden.</p>
    <NuxtLink to="/products"> Zurück zur Startseite</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products-details",
});

const route = useRoute();
console.log(route.params.id);

const {
  data: product,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "fetch", // name der Funktion, unique
  () => $fetch(`https://fakestoreapi.com/products/${route.params.id}`)
);

// const {data:product } = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`);

console.log(product.value);

if (error.value || !product.value) {
  // fatal forces the app to show the error page
  throw createError({
    statusCode: 404,
    message: "Product not found",
    fatal: true,
  });
}

useHead({
  title: `${product.value.title} - MMP Shop`,
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style scoped></style>
