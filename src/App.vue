<template>
  <v-app class="pb-16" :theme="theme">
    <NavigationDrawerComponent :transparent="transparentNavBar" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCookies } from "vue3-cookies";
import { useStore } from "vuex";
import NavigationDrawerComponent from "@/components/navbar/NavigationDrawerComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    NavigationDrawerComponent,
  },

  async beforeMount() {
    const store = useStore();
    // eslint-disable-next-line no-undef
    const { cookies } = useCookies();
    if (cookies.isKey("theme")) {
      const theme = cookies.get("theme");
      await store.dispatch("setTheme", { theme });
    }
  },
  computed: {
    transparentNavBar() {
      return this.$router.currentRoute.value.name == "/";
    },
    theme() {
      const store = useStore();
      return store.getters.theme;
    },
  },

  data() {
    return {
      //
    };
  },
});
</script>
