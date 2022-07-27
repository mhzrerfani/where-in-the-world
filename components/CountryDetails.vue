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
  <div
    class="flex flex-col lg:flex-row lg:gap-24 mx-auto items-start lg:items-center gap-10 max-w-[1000px] mb-10"
  >
    <img
      class="aspect-4/3 w-[320px] lg:w-full max-w-[600px]"
      :src="flags.png"
      alt="Country flag"
    />
    <div class="flex flex-col">
      <div class="font-bold text-xl lg:text-3xl dark:text-white">
        {{ name.common }}
      </div>
      <div class="flex flex-col mt-5 lg:flex-row lg:gap-28 gap-7 lg:mt-8">
        <div class="flex flex-col gap-2">
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Native Name:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              name.nativeName[Object.keys(country.name.nativeName)[0]].common
            }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Population:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")
            }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white whitespace-nowrape"
              >Region:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              region
            }}</span>
          </div>
          <div class="flex gap-1 text-sm" v-if="!!subregion">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Sub Region:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              subregion
            }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Capital:
            </span>
            <span
              v-if="!!capital && capital.length > 0"
              class="dark:text-[#ebf4fb] whitespace-nowrap"
              >{{ capital[0] }}</span
            >
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Top Level Domain:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              tld[0]
            }}</span>
          </div>
          <div class="flex gap-1 text-sm" v-if="!!country.currencies">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Currencies:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              country.currencies[Object.keys(country.currencies)[0]].name
            }}</span>
          </div>
          <div class="flex gap-1 text-sm">
            <span class="font-medium dark:text-white whitespace-nowrap"
              >Languages:
            </span>
            <span class="dark:text-[#ebf4fb] whitespace-nowrap">{{
              Object.values(languages).join(", ")
            }}</span>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-2 lg:gap-5 mt-7"
      >
        <div class="tex font-semibold dark:text-white">Border Countries:</div>
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
</template>
