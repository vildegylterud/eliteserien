<template>
  <v-list-item class="w-100 mb-2" :prepend-avatar="logo"></v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = ref(require("@/assets/eliteserie-logo.png"));
const title = ref("Eliteserien");
</script>

<style scoped></style>
