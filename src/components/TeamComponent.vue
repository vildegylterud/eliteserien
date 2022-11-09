<template>
  <v-container>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
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
          <tr
            v-for="match in eventsByParticipantAndDateRange"
            :key="match.name"
          >
            <td>{{ match.participants }}</td>
            <td>{{ match.startDate }}</td>
            <td><v-icon icon="mdi-bell-ring"></v-icon></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { GET_TEAM } from "@/queries/getTeam";

const participantId = "83af5c96-fe8d-4f60-a1ea-d89e01a14826";
const toDate = "2022-12-23T18:25:43.511Z";
const fromDate = "2022-08-23T18:25:43.511Z";

const date: any = new Date().toISOString().substring(0, 10);

export default {
  apollo: {
    eventsByParticipantAndDateRange: {
      query: GET_TEAM,
      variables: {
        participantId: participantId.valueOf(),
        toDate: "2022-12-23T18:25:43.511Z",
        fromDate: "2022-08-23T18:25:43.511Z",
      },
    },
  },
  data() {
    return {
      loading: "",
      error: "",
      participantId: "83af5c96-fe8d-4f60-a1ea-d89e01a14826",
      toDate: toDate.valueOf(),
      fromDate: fromDate.valueOf(),
      eventsByParticipantAndDateRange: [],
    };
  },
};
</script>
