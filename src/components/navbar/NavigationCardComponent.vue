<template>
  <v-card class="bg-secondary">
    >

    <v-list-item
      class="w-100 pb-5"
      :prepend-icon="logo"
      :title="title"
      :subtitle="subtitle"
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
