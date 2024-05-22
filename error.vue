<template>
    <div class="text-red-500 text-center">

        <h1> Dang!</h1>
        <p> This is an error!</p>
        <p> {{ error.statusCode }}</p>
        <p> {{ error.message }}</p>

        <img class="mx-auto" src="~/assets/images/cat.jpg" alt="">

        <button @click="handleClearError" class="btn my-7"> Go Home ... </button>
    </div>
</template>

<script setup>
const error = useError();

const handleClearError = () => clearError({redirect: '/'})

</script>

<style scoped>

</style>