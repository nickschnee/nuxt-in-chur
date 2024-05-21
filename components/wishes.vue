<template>
  <div>
    <h2>Meine Wishlist</h2>

    <p>
      Darin befinden sich
      {{ number }}
    </p>

    <ul>
      <li v-for="(wish, index) in localwishlist">
        {{ wish }} <button @click="removeWish(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { localwishlist } = defineProps(["localwishlist"]);

const emits = defineEmits(["remove"]);

const removeWish = (index) => {
  emits("remove", index);
};

const number = computed(() => {

  if (localwishlist.length == 0) {
    return 'keine Wünsche';
  } else if (localwishlist.length == 1) {
    return 'ein Wunsch';
  } else {
    return localwishlist.length + ' Wünsche';
  }
  
});
</script>

<style scoped></style>
