<template>
  <v-container class="h-screen overflow-visible bg-background">
    <div v-if="$apollo.loading">Loading...</div>
    <div class="table mt-4 apollo mb-16" v-else>
      <v-table height="650px" class="mb-8">
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
            class="hoverRow"
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
                  class="text-secondary-dimmed w-100 pl-12 text-decoration-underline"
                  :prepend-avatar="team.participant.images[0].url"
                  :title="team.participant.name"
                  @click.prevent="
                    $router.push({
                      name: 'team',
                      params: {
                        teamName: team.participant.name.valueOf(),
                        teamLogo: team.participant.images[0].url.valueOf(),
                        teamId: team.participant.id.valueOf(),
                      },
                    })
                  "
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
      tournamentStageId: "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83",
      tournamentStage: [],
    };
  },
};
</script>
<style></style>
