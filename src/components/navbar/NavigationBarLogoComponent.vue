<template>
  <v-img
    v-if="
      (!props.transparentMode && store.getters.theme === 'dark') ||
      (props.transparentMode && store.getters.theme === 'light')
    "
    src="@/assets/navbar-logo-purple.png"
    class="pointer"
    height="70"
  />
  <v-img
    v-else
    src="@/assets/navbar-logo-dark.png"
    class="pointer"
    height="70"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  transparentMode: Boolean,
});
</script>
