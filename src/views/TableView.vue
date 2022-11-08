<template>
  <TableComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableComponent from "../components/TableComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TableComponent,
  },
});
</script>
