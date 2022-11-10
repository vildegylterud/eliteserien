<template>
  <v-btn
    class="text-yellow-darken-2"
    v-if="currentTheme === 'dark'"
    @click="toggleTheme"
    prepend-icon="mdi-white-balance-sunny"
    variant="outlined"
    height="38"
  >
  </v-btn>

  <v-btn
    class=""
    variant="outlined"
    v-else
    @click="toggleTheme"
    prepend-icon="mdi-moon-waxing-crescent"
    height="38"
  >
  </v-btn>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const currentTheme = ref("light");

const toggleTheme = () => {
  store.dispatch("toggleTheme");
  currentTheme.value = store.getters.theme;
};
</script>
