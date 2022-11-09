<template>
  <v-container class="h-screen">
    <div v-if="$apollo.loading">Loading...</div>
    <div class="table mt-4 apollo" v-else>
      <v-table>
        <thead>
          <tr>
            <th class="font-weight-light">
              <v-list-item
                ><v-img src="@/assets/eliteserie-logo.png" height="35"></v-img
              ></v-list-item>
            </th>
            <th class="text-left font-weight-light pl-16">Klubb</th>
            <th class="text-left font-weight-light">SK</th>
            <th class="text-left font-weight-light">V</th>
            <th class="text-left font-weight-light">U</th>
            <th class="text-left font-weight-light">T</th>
            <th class="text-left">Mål</th>
            <th class="text-left">Poeng</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="team in tournamentStage.standings[0].participants"
            :key="team.rank"
          >
            <td class="text-center">
              <v-icon class="mr-2" icon="mdi-menu-up"></v-icon>{{ team.rank }}
            </td>
            <td>
              <v-card elevation="0">
                <v-list-item
                  class="text-primary w-100 pl-12 text-decoration-underline"
                  :title="team.participant.name"
                >
                </v-list-item>
              </v-card>
            </td>
            <td>{{ team.data[0].value }}</td>
            <td>{{ team.data[1].value }}</td>
            <td>{{ team.data[2].value }}</td>
            <td>{{ team.data[3].value }}</td>
            <td class="font-weight-bold">{{ team.data[4].value }}</td>
            <td class="font-weight-bold">{{ team.data[5].value }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { GET_TABLE } from "@/queries/getTable";

const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";

export default {
  apollo: {
    tournamentStage: {
      query: GET_TABLE,
      variables: {
        tournamentStageId: tournamentStageId.valueOf(),
      },
    },
  },
  data() {
    return {
      loading: "",
      error: "",
      tournamentStageId: "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83",
      tournamentStage: [],
    };
  },
};
</script>
