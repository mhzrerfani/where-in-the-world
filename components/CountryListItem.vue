<script setup>
const props = defineProps(["country"]),
  { name, population, capital, flags, region } = props.country;
</script>

<template>
  <div
    class="flex flex-col bg-white w-[280px] h-[340px] shadow-md dark:bg-primary dark:text-white"
  >
    <img
      :src="flags.png"
      class="aspect-4/3 w-full h-[180px] object-cover"
      alt="flag"
    />
    <div class="flex flex-col pl-5">
      <div class="font-semibold mt-5 mb-3 text-lg">{{ name.common }}</div>
      <div class="flex flex-col gap-1">
        <div class="flex gap-1 text-sm">
          <span class="font-medium">Population: </span>
          <span class="dark:text-[#ebf4fb]">
            {{ population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </span>
        </div>
        <div class="flex gap-1 text-sm">
          <span class="font-medium">Region: </span>
          <span class="dark:text-[#ebf4fb]">{{ region }}</span>
        </div>
        <div class="flex gap-1 text-sm">
          <span class="font-medium">Capital: </span>
          <span class="dark:text-[#ebf4fb]">{{ capital }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
