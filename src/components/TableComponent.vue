<template>
  <v-container class="h-screen">
    <div class="table mt-4">
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
          <tr v-for="team in teams" :key="team.id">
            <td class="text-center">
              <v-icon class="mr-2" icon="mdi-menu-up"></v-icon>{{ team.rank }}
            </td>
            <td @click="$router.push({ name: 'team' })">
              <v-card elevation="0">
                <v-list-item
                  class="text-primary w-100 pl-12 text-decoration-underline"
                  :title="team.team_name"
                  :prepend-avatar="team.logo"
                >
                </v-list-item>
              </v-card>
            </td>
            <td>{{ team.S }}</td>
            <td>{{ team.V }}</td>
            <td>{{ team.U }}</td>
            <td>{{ team.T }}</td>
            <td class="font-weight-bold">{{ team.goals }}</td>
            <td class="font-weight-bold">{{ team.P }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import gql from "graphql-tag";
import { GET_TABLE } from "@/queries/getTable";
import { Team } from "@/queries/schema";
import json from "@/queries/table.json";
import { useQuery } from "@apollo/client";
import { ref } from "vue";

const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = ref(require("@/assets/molde-logo.png"));

export default {
  data() {
    return {
      myJson: json,
      loading: "",
      error: "",
      data: [],
      tournamentStageId: "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83",
      table: [],
      teams: [
        {
          logo: logo,
          team_name: "Molde",
          rank: 1,
          S: 29,
          V: 24,
          U: 3,
          T: 2,
          goals: "69 - 24",
          P: 75,
        },
        {
          logo: logo,
          team_name: "Molde",
          rank: 1,
          S: 29,
          V: 24,
          U: 3,
          T: 2,
          goals: "69 - 24",
          P: 75,
        },
        {
          logo: logo,
          team_name: "Molde",
          rank: 1,
          S: 29,
          V: 24,
          U: 3,
          T: 2,
          goals: "69 - 24",
          P: 75,
        },
        {
          logo: logo,
          team_name: "Molde",
          rank: 1,
          S: 29,
          V: 24,
          U: 3,
          T: 2,
          goals: "69 - 24",
          P: 75,
        },
        {
          logo: logo,
          team_name: "Molde",
          rank: 1,
          S: 29,
          V: 24,
          U: 3,
          T: 2,
          goals: "69 - 24",
          P: 75,
        },
      ],
    };
  },
  /**
   apollo: {
    data: {
      query: GET_TABLE,
      variables: {
        tournamentStageId: tournamentStageId.valueOf(),
      },
    },
    deep: false,
  },*/
};
</script>
