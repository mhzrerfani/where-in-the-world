<script setup>
const route = useState(() => useRoute().params.country);

const { data: countries, refresh } = await useLazyAsyncData("country", () =>
  $fetch(`https://restcountries.com/v3.1/alpha/${route.value}`)
);

onUnmounted(() => {
  refresh();
});
</script>

<template>
  <div>
    <button
      class="flex items-center gap-2 bg-white dark:bg-primary py-1 px-5 w-min dark:text-white shadow-md mt-14 rounded-sm border border-zinc-600 mb-20"
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
    <div v-for="(country, i) in countries" :key="i">
      <CountryDetails :country="country" />
    </div>
  </div>
</template>
