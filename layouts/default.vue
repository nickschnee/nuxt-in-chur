<template>
  <div class="">
    <header class="bg-buttercup-200 p-4">
      <nav>
        <ul class="flex justify-around">
          <li><NuxtLink to="/"> Home </NuxtLink></li>
          <li><NuxtLink to="/products"> Products </NuxtLink></li>
          <li>
            <NuxtLink to="/products/exampleproduct">
              Products Detailseite
            </NuxtLink>
          </li>
          <li><NuxtLink to="/about"> About </NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="w-full md:w-2/3 lg:w-1/2 mx-auto bg-buttercup-200 mt-4 p-4 rounded-xl">
      <slot></slot>
    </main>
    <footer>
      <p>Diese Seite wurde erstellt von Nick Schneeberger</p>
    </footer>
  </div>
</template>

<style scoped>

</style>
