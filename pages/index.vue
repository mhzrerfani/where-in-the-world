<script setup>
import { useSorted } from "../composables/states";

const regions = [
  "All",
  "Asia",
  "Europe",
  "Americas",
  "Africa",
  "Oceania",
  "Antarctic",
];
const sorting = ["Custom", "Alphabet", "Population"];
</script>

<template>
  <div class="flex flex-col items-center w-full max-w-[1300px] mx-auto">
    <div class="flex w-full items-center justify-between px-5">
      <SearchInput />
      <div class="flex gap-5">
        <BaseSelect
          :options="regions"
          title="Filter by Regions"
          :storedState="useRegionsFilter"
        />
        <BaseSelect
          :options="sorting"
          title="Sorted by"
          :storedState="useSorted"
        />
      </div>
    </div>
    <CountryListContainer />
  </div>
</template>
