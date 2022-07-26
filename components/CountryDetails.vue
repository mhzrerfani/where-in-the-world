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
    <div
      v-else
      class="flex flex-col lg:flex-row lg:gap-24 mx-auto items-start lg:items-center gap-7"
    >
      <img
        class="aspect-4/3 w-[300px] lg:w-full max-w-[400px]"
        :src="flags.png"
        alt="Country flag"
      />
      <div class="flex flex-col">
        <div class="font-bold text-xl lg:text-2xl dark:text-white">
          {{ name.common }}
        </div>
        <div class="flex flex-col mt-5 lg:flex-row lg:gap-28 gap-7 lg:mt-5">
          <div class="flex flex-col gap-2">
            <div class="flex gap-1 text-sm">
              <span class="font-medium dark:text-white whitespace-nowrap"
                >Native Name:
              </span>
              <span class="dark:text-[#ebf4fb]">{{
                name.nativeName[Object.keys(country.name.nativeName)[0]].common
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

          <div class="flex flex-col gap-2">
            <div class="flex gap-1 text-sm">
              <span class="font-medium dark:text-white"
                >Top Level Domain:
              </span>
              <span class="dark:text-[#ebf4fb]">{{ tld[0] }}</span>
            </div>
            <div class="flex gap-1 text-sm">
              <span class="font-medium dark:text-white">Currencies: </span>
              <span class="dark:text-[#ebf4fb]">{{
                country.currencies[Object.keys(country.currencies)[0]].name
              }}</span>
            </div>
            <div class="flex gap-1 text-sm">
              <span class="font-medium dark:text-white">Languages: </span>
              <span class="dark:text-[#ebf4fb]">{{
                Object.values(languages).join(", ")
              }}</span>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-2 lg:gap-5 mt-7"
        >
          <div class="text-lg font-semibold dark:text-white">
            Border Countries:
          </div>
          <div class="flex flex-wrap gap-2">
            <div v-if="!borders" class="text-white">
              They don't have any neighbours! All alone!
            </div>
            <NuxtLink
              class="w-[100px] py-1 rounded-sm border border-zinc-600 dark:bg-primary bg-white text-center justify-center shadow-sm dark:text-white"
              v-for="border in borders"
              :to="border"
              :key="border"
            >
              {{ border }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
