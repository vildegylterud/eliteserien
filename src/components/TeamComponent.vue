<template>
  <v-container>
    <div class="table mt-5">
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left"></th>
            <th class="text-left"></th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ "10.11.2022" }}</td>
            <td>{{ "Vålerenga IF" + "\n" + "Molde FK" }}</td>
            <td>{{ "won" }}</td>
            <td>
              <v-icon>mdi-bell-ring</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RoundIconComponent from "@/components/RoundIconComponent.vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = ref(require("@/assets/eliteserie-logo.png"));
</script>
