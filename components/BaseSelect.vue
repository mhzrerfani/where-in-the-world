<script setup>
const props = defineProps(["title", "options", "storedState"]);
const state = props.storedState();
</script>

<template>
  <div>
    <select
      class="bg-white dark:bg-primary shadow-sm flex pl-5 pr-10 dark:text-white items-center mt-5 py-5 gap-7 rounded-md"
      v-model="state"
    >
      <option disabled value="">{{ props.title }}</option>
      <option v-for="(option, i) in props.options" :key="i">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path stroke='white' fill='white' d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
</style>
