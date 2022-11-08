<template>
  <!--Navigation bar-->
  <v-toolbar
    elevation="0"
    class="border-b-sm bg-secondary"
    border="secondary"
    elevate-on-scroll
    height="80"
    :class="{ 'bg-transparent': props.transparent }"
  >
    <NavigationCardComponent></NavigationCardComponent>
    <NavigationBarLogoComponent
      :transparentMode="transparent"
    ></NavigationBarLogoComponent>
    <v-btn class="mr-4"><v-icon>fas fa-search</v-icon></v-btn>
    <ThemeToggleComponent class="mr-4"></ThemeToggleComponent>
  </v-toolbar>
</template>
<script setup lang="ts">
import ThemeToggleComponent from "@/components/ThemeToggleComponent.vue";
import NavigationCardComponent from "@/components/navbar/NavigationCardComponent.vue";
import { defineProps } from "vue";
import NavigationBarLogoComponent from "@/components/navbar/NavigationBarLogoComponent.vue";

const props = defineProps({
  transparent: Boolean,
});
</script>
