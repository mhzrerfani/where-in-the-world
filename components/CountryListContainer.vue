<script setup>
const { data: countries } = await useAsyncData("countries", () =>
  $fetch(`https://restcountries.com/v3.1/all
`)
);
const search = useSearch();
</script>

<template>
  <div class="flex flex-wrap gap-10 w-full justify-evenly mt-8 px-7">
    <NuxtLink
      v-for="(country, i) in countries"
      :to="country.cca3"
      :key="i"
      class="cursor-pointer"
    >
      <CountryListItem :country="country" />
    </NuxtLink>
  </div>
</template>
