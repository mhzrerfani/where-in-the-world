<script setup>
const route = useRoute();

const { data: countries } = await useFetch(
  `https://restcountries.com/v3.1/alpha/${route.params.country}`,
  { key: route.params.country }
);

if (!!countries && !!countries.value && countries.value.length > 0) {
  console.log(countries.value[0]);
}
</script>

<template>
  <div
    class="max-w-[1280px] px-5 flex flex-col mx-auto items-center justify-center lg:w-full"
  >
    <button
      class="flex self-start items-center gap-2 bg-white dark:bg-primary py-1 px-5 w-min dark:text-white shadow-md mt-14 rounded-sm border border-zinc-600 mb-20"
      @click="navigateTo({ path: `/` })"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6L2 16l8 10M2 16h28"
        />
      </svg>
      <span>Back</span>
    </button>
    <div v-for="country in countries" :key="country.name.common">
      <CountryDetails :country="country" />
    </div>
  </div>
</template>
