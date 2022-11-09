<template>
  <v-container>
    <div>
      <v-card class="bg-background border-0 justify-center mt-8" elevation="0">
        <v-list-item class="w-100 justify-center" :prepend-avatar="logo">
          <v-list-item-title class="text-h5 mb-1">
            {{ team }}
          </v-list-item-title>
        </v-list-item>
      </v-card>
    </div>
    <div class="table">
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-subtitle-1">
              <v-list-item
                ><v-img src="@/assets/eliteserie-logo.png" height="35"></v-img
              ></v-list-item>
            </th>
            <th class="text-left"></th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ time }}</td>
            <td>{{ participants }}</td>
            <td><v-icon icon="mdi-bell-ring"></v-icon></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MatchResultIcon from "@/components/MatchResultIcon.vue";

//  "participantId": "83af5c96-fe8d-4f60-a1ea-d89e01a14826"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = ref(require("@/assets/molde-logo.png"));
const time = ref("10.11.2022");
const participants = ref("Vålerenga IF - " + "\n" + "Molde FK");
const result = ref("");

const team = ref("Molde FK");
</script>
