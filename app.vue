<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* ... */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.blur-enter-active,
.blur-leave-active {
  transition: all 0.5s ease;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}

.blur-enter-to,
.blur-leave-from {
  opacity: 1;
  filter: blur(0px);
}
</style>
