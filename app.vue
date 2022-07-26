<script setup>
let dark = useDark();
</script>

<template>
  <div
    id="app"
    class="min-h-screen"
    :class="dark ? 'dark bg-secondary' : 'light bg-lightGray'"
  >
    <TheHeader />
    <NuxtPage />
  </div>
</template>
