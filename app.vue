<script setup>
let dark = useDark();
</script>

<template>
  <div id="app" :class="dark ? 'dark bg-secondary' : 'light bg-lightGray'">
    <TheHeader />
    <NuxtPage />
  </div>
</template>
