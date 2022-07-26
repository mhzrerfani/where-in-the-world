<script setup>
const props = defineProps(["country"]),
  {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = props.country;
</script>

<template>
  <div>
    <div v-if="pending">
      <BaseLoading />
    </div>
    <div v-else class="flex flex-col mx-auto items-center">
      <img class="aspect-4/3 w-[300px]" :src="flags.png" alt="Country flag" />
      <div class="flex flex-col mt-7">
        <div class="font-bold text-xl dark:text-white">
          {{ name.official }}
        </div>
        <div class="flex flex-col mt-5 gap-2">
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Native Name: </span>
            <span class="dark:text-[#ebf4fb]">{{
              name.nativeName[Object.keys(country.name.nativeName)[0]].official
            }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Population: </span>
            <span class="dark:text-[#ebf4fb]">{{
              population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")
            }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Region: </span>
            <span class="dark:text-[#ebf4fb]">{{ region }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Sub Region: </span>
            <span class="dark:text-[#ebf4fb]">{{ subregion }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Capital: </span>
            <span class="dark:text-[#ebf4fb]">{{ capital[0] }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-2 mt-7">
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Top Level Domain: </span>
            <span class="dark:text-[#ebf4fb]">{{ tld[0] }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Currencies: </span>
            <span class="dark:text-[#ebf4fb]">{{ currencies }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white">Languages: </span>
            <span class="dark:text-[#ebf4fb]">{{
              Object.values(languages).join(", ")
            }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="text-lg font-semibold dark:text-white mt-7">
            Border Countries:
          </div>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              class="w-[100px] py-1 rounded-md border border-zinc-600 dark:bg-primary bg-white justify-center shadow-sm dark:text-white"
              v-for="(border, i) in borders"
              :to="border"
              :key="i"
            >
              {{ border }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
