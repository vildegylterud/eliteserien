<template>
  <v-container>
    <div class="table mt-5">
      <v-table fixed-header>
        <thead>
          <tr>
            <th>
              <TableCardComponent></TableCardComponent>
            </th>
            <th class="font-weight-bold text-secondary">Eliteserien 2022</th>
            <th class="text-left font-weight-light">S</th>
            <th class="text-left font-weight-light">V</th>
            <th class="text-left font-weight-light">U</th>
            <th class="text-left font-weight-light">T</th>
            <th class="text-left">Mål</th>
            <th class="text-left">Poeng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teams" :key="team.id">
            <td>{{ team.rank }}</td>
            <td class="text-primary" @click="$router.push({ name: 'team' })">
              {{ team.team_name }}
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
import TableCardComponent from "@/components/TableCardComponent.vue";
import { GET_TABLE } from "@/queries/getTable";
import { Team } from "@/queries/schema";
import json from "@/queries/table.json";
import { useQuery } from "@apollo/client";

const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";

export default {
  components: { TableCardComponent },
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
