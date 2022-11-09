<template>
  <v-container class="h-screen">
    <div v-if="$apollo.loading">Loading...</div>
    <div class="table mt-4 apollo" v-else>
      <v-table class="mb-8">
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
            <td class="text-center ml-6">
              <v-icon
                v-if="team.rank === 1"
                style="color: goldenrod"
                class="mr-2"
                icon="mdi-trophy"
              ></v-icon>
              <v-icon
                v-if="team.rank >= 4 && team.rank <= 13"
                style="color: transparent"
                class="mr-2"
                icon="mdi-trophy"
              ></v-icon>
              <v-icon
                v-else-if="team.rank === 2"
                style="color: silver"
                class="mr-2"
                icon="mdi-medal"
              ></v-icon>
              <v-icon
                v-else-if="team.rank === 3"
                style="color: #cd7f32"
                class="mr-2"
                icon="mdi-medal"
              ></v-icon>
              <v-icon
                v-else-if="team.rank === 14"
                style="color: blue"
                class="mr-2 mdi-circle-medium"
                icon="mdi-circle"
              ></v-icon>
              <v-icon
                v-else-if="team.rank === 15"
                style="color: red"
                class="mr-2"
                icon="mdi-menu-down"
              ></v-icon>
              <v-icon
                v-else-if="team.rank === 16"
                style="color: red"
                class="mr-2"
                icon="mdi-menu-down"
              ></v-icon
              >{{ team.rank }}
            </td>
            <td>
              <v-card elevation="0">
                <v-list-item
                  class="text-secondary w-100 pl-12 text-decoration-underline"
                  :prepend-avatar="team.participant.images[0].url"
                  :title="team.participant.name"
                  @click="$router.push({ name: 'team' })"
                >
                </v-list-item>
              </v-card>
            </td>
            <td>{{ team.data[4].value }}</td>
            <td>{{ team.data[9].value }}</td>
            <td>{{ team.data[13].value }}</td>
            <td>{{ team.data[5].value }}</td>
            <td class="font-weight-bold">
              {{ team.data[3].value + " - " + team.data[10].value }}
            </td>
            <td class="font-weight-bold">{{ team.data[0].value }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { GET_TABLE } from "@/queries/getTable";
import { useRouter } from "vue-router";
import { getApolloContext } from "@apollo/client";

const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";
const router = useRouter();

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
<style></style>
