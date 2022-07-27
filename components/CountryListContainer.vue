<script setup>
import { useRegionsFilter, useSearch, useSorted } from "../composables/states";
import { useState, watch, onMounted } from "#imports";

const { data: countries } = await useAsyncData("countries", () =>
  $fetch(`https://restcountries.com/v3.1/all`)
);
const filteredRegion = useRegionsFilter(),
  search = useSearch(),
  sorted = useSorted();
const allCountries = await JSON.parse(await JSON.stringify(countries.value));
const filteredCountries = useState("filteredCountries", () => countries.value);

watch(search, async () => {
  sorted.value = "Custom";

  filteredCountries.value = allCountries
    .filter((country) => {
      return search.value
        ? country.name.common.toLowerCase().includes(search.value.toLowerCase())
        : true;
    })
    .filter((country) => {
      return filteredRegion.value === "All"
        ? true
        : filteredRegion.value
        ? country.region == filteredRegion.value
        : true;
    });
});

watch(filteredRegion, async () => {
  sorted.value = "Custom";

  filteredCountries.value = allCountries
    .filter((country) => {
      return filteredRegion.value == "All"
        ? true
        : country.region == filteredRegion.value;
    })
    .filter((country) => {
      return search.value
        ? country.name.common.toLowerCase().includes(search.value.toLowerCase())
        : true;
    });
});

watch(sorted, async () => {
  filteredCountries.value = await JSON.parse(
    await JSON.stringify(filteredCountries.value)
  ).sort((a, b) => {
    return sorted.value == "Population"
      ? b.population - a.population
      : sorted.value == "Alphabet"
      ? a.name.common.localeCompare(b.name.common)
      : true;
  });
});

onMounted(() => {
  filteredCountries.value = countries;
  sorted.value = "Custom";
  filteredRegion.value = "All";
  search.value = "";
});
</script>

<template>
  <div class="flex flex-wrap gap-5 w-full justify-center mt-8 px-5">
    <NuxtLink
      v-for="country in filteredCountries"
      :to="country.cca3"
      :key="country.cca3"
      class="cursor-pointer"
    >
      <CountryListItem :country="country" />
    </NuxtLink>
  </div>
</template>
