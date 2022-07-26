<script setup>
const { data: countries } = await useAsyncData("countries", () =>
  $fetch(`https://restcountries.com/v3.1/all
`)
);
const filteredRegion = useRegionsFilter(),
  search = useSearch(),
  sorted = useSorted();
const allCountries = await JSON.parse(await JSON.stringify(countries.value));
const filteredCountries = useState("filteredCountries", () => countries.value);

const searchHandler = () => {
    sorted.value = "Custom";
    filteredCountries.value = allCountries
      .filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(search.value.toLowerCase());
      })
      .filter((country) => {
        return filteredRegion.value
          ? country.region == filteredRegion.value
          : true;
      });
  },
  regionFilterHandler = () => {
    sorted.value = "Custom";
    filteredCountries.value = allCountries
      .filter((country) => {
        return country.region == filteredRegion.value;
      })
      .filter((country) => {
        return search.value
          ? country.name.common
              .toLowerCase()
              .includes(search.value.toLowerCase())
          : true;
      });
  },
  sortingHandler = async () => {
    filteredCountries.value = await JSON.parse(
      await JSON.stringify(filteredCountries.value)
    ).sort((a, b) => {
      return sorted.value == "Population"
        ? b.population - a.population
        : a.name.common.localeCompare(b.name.common);
    });
  };

watch(search, searchHandler);

watch(filteredRegion, regionFilterHandler);

watch(sorted, sortingHandler);

onMounted(() => {
  filteredCountries.value = countries;
});
</script>

<template>
  <div class="flex flex-wrap gap-5 w-full justify-between mt-8 px-5">
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
