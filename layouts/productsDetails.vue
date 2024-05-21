<template>
  <header></header>

  <main class="height w-full md:w-2/3 lg:w-1/2 mx-auto mt-4 p-4 rounded-xl">
    <slot> </slot>
  </main>


    <footer class="bg-buttercup-200 p-4 mt-4">
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
    </footer>

</template>

<style scoped> 

.height {
  min-height: 90vh;
}

footer {
  /* position: fixed; */
  bottom: 0;
}
</style>