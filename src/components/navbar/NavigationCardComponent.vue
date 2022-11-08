<template>
  <v-card class="bg-secondary border-0 ml-5" elevation="0">
    <v-list-item
      class="w-100"
      :title="title"
      :subtitle="subtitle"
      :prepend-avatar="logo"
    >
    </v-list-item>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = ref(require("@/assets/eliteserie-logo.png"));
const title = ref("Eliteserien");
const subtitle = ref("2022");
</script>

<style scoped></style>
