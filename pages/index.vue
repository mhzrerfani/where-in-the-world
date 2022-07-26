<script setup>
const regions = ["Asia", "Europe", "Americas", "Africa", "Oceania"];
const sorting = ["Custom", "Alphabet", "Population"];
</script>

<template>
  <div class="flex flex-col items-center w-full max-w-[1200px] mx-auto">
    <div class="flex w-full items-center justify-between">
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
