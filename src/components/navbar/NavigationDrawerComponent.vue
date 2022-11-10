<template>
  <!--Navigation bar-->
  <v-toolbar
    elevation="0"
    class="border-b-sm bg-secondary"
    border="secondary"
    elevate-on-scroll
    height="100"
    :class="{ 'bg-transparent': props.transparent }"
  >
    <NavigationCardComponent></NavigationCardComponent>
    <NavigationBarLogoComponent
      :transparentMode="transparent"
    ></NavigationBarLogoComponent>
    <v-btn class="mr-3 text-background"
      ><v-icon icon="mdi-magnify" size="30"></v-icon
    ></v-btn>
    <ThemeToggleComponent class="mr-6"></ThemeToggleComponent>
  </v-toolbar>
</template>
<script setup lang="ts">
import ThemeToggleComponent from "@/components/ThemeToggleComponent.vue";
import NavigationCardComponent from "@/components/navbar/NavigationCardComponent.vue";
import { defineProps, ref } from "vue";
import NavigationBarLogoComponent from "@/components/navbar/NavigationBarLogoComponent.vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = ref(require("@/assets/eliteserie-logo.png"));
const props = defineProps({
  transparent: Boolean,
});
</script>
