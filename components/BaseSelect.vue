<script setup>
const props = defineProps(["title", "options", "storedState"]);
const state = props.storedState();
</script>

<template>
  <div>
    <select
      class="bg-white dark:bg-primary shadow-sm flex px-5 dark:text-white items-center mt-5 py-5 gap-7 rounded-md"
      v-model="state"
    >
      <option disabled value="">{{ props.title }}</option>
      <option v-for="(option, i) in props.options" :key="i">
        {{ option }}
      </option>
    </select>
  </div>
</template>
