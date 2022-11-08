<template>
  <TeamComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeamComponent from "@/components/TeamComponent.vue";

export default defineComponent({
  name: "TeamView",
  components: {
    TeamComponent,
  },
});
</script>
