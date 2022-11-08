<template>
  <v-container>
    <div class="table">
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">Rank</th>
            <th class="text-left">Team</th>
            <th class="text-left">S</th>
            <th class="text-left">V</th>
            <th class="text-left">U</th>
            <th class="text-left">T</th>
            <th class="text-left">Mål</th>
            <th class="text-left">P</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in table" :key="team.name">
            <td>{{ team.rank }}</td>
            <td class="text-primary" @click="$router.push({ name: 'team' })">
              {{ team.team_name }}
            </td>
            <td>{{ team.S }}</td>
            <td>{{ team.V }}</td>
            <td>{{ team.U }}</td>
            <td>{{ team.T }}</td>
            <td>{{ team.goals }}</td>
            <td>{{ team.P }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";

export default {
  data() {
    return {
      table: [
        {
          team_name: "Sandefjord Fotball",
          rank: 159,
          S: 6,
          V: 10,
          U: 5,
          T: 10,
          goals: 10,
          P: 89,
        },
        {
          team_name: "Sandefjord Fotball",
          rank: 159,
          S: 6,
          V: 10,
          U: 5,
          T: 10,
          goals: 10,
          P: 89,
        },
        {
          team_name: "Sandefjord Fotball",
          rank: 159,
          S: 6,
          V: 10,
          U: 5,
          T: 10,
          goals: 10,
          P: 89,
        },
      ],

      // Initialize your apollo data
      //fetchTable: [],
      //tournamentStageId: "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83",
    };
  },

  /**
   // Apollo-specific options
   apollo: {
    // Query with parameters
    fetchTable() {
      // This is called once when the component is created
      // It must return the option object
      return {
        // gql query
        query: gql`query table($tournamentStageId: ID!) {
          tournamentStage(id: $tournamentStageId) {
            name
            standings(type: LEAGUE_TABLE) {
              participants {
                participant {
                  name
                }
                rank
                data {
                  code
                  value
                }
              }
            }
          }`,
        // Static parameters
        variables: {
          tournamentStageId: "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83",
        },
      };
    },
  },
};


   const getTable = () => {
  const { data } = useQuery(GET_TABLE, {
    variables: {
      tournamentStageId: tournamentStageId,
    },
  });
  return {
    data,
  };
};*/
};
</script>
