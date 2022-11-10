<template>
  <v-container>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <v-card class="mt-3" elevation="0">
        <v-img :src="`${teamLogo}`" height="80"></v-img>
        <v-card-title class="text-center mt-1">{{ teamName }}</v-card-title>
      </v-card>
    </div>
    <div class="table">
      <v-table height="650px" fixed-header>
        <thead>
          <tr>
            <th class="text-subtitle-1 text-primary pl-8">Terminliste 2022</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="match in eventsByParticipantAndDateRange"
            :key="match.name"
          >
            <td>
              <v-card class="bg-background border-0" elevation="0">
                <v-list-item
                  class="w-100"
                  :title="match.startDate.substring(11, 16)"
                  :subtitle="match.startDate.substring(0, 10)"
                >
                </v-list-item>
              </v-card>
            </td>
            <td>
              {{
                match.participants[0].participant.name +
                " - " +
                match.participants[1].participant.name
              }}
            </td>
            <td>
              {{
                match.participants[0].results[1].value +
                " - " +
                match.participants[1].results[1].value
              }}
            </td>
            <td
              v-if="
                match.participants[0].results[1].value >
                match.participants[1].results[1].value
              "
            >
              <v-icon icon="mdi-alpha-v-circle" style="color: green"></v-icon>
            </td>
            <td
              v-if="
                match.participants[0].results[1].value <
                match.participants[1].results[1].value
              "
            >
              <v-icon icon="mdi-alpha-t-circle" style="color: red"></v-icon>
            </td>
            <td
              v-if="
                match.participants[0].results[1].value ===
                  match.participants[1].results[1].value &&
                match.status !== 'NOT_STARTED'
              "
            >
              <v-icon
                icon="mdi-alpha-u-circle"
                style="color: lightgrey"
              ></v-icon>
            </td>
            <td v-if="match.status === 'NOT_STARTED'">
              <v-icon icon="mdi-bell-ring"></v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { GET_TEAM2 } from "@/queries/getTeam";
import { ref, Ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import moment from "moment";

const route = useRoute();
const router = useRouter();
let teamName: Ref<string | string[]> = ref([]);
let teamLogo: Ref<string | string[]> = ref([]);
let teamId: Ref<string | string[]> = ref([]);

onMounted(async () => {
  console.log("Before Router Preparation", route.name);
  await router.isReady();
  console.log("After Router Preparation", route.name);
  teamName.value = route.params.id;
  teamLogo.value = route.params.id;
  teamId.value = route.params.id;
});

// date formatter not in use
export function formatDate(date: Date) {
  moment(date).format("LT");
}
//const participantId = teamId;
const toDate = "2022-12-23T18:25:43.511Z";
const fromDate = "2022-07-23T18:25:43.511Z";

export default {
  props: ["teamName", "teamLogo", "teamId"],
  apollo: {
    eventsByParticipantAndDateRange: {
      query: GET_TEAM2,
      variables: {
        participantId: "83af5c96-fe8d-4f60-a1ea-d89e01a14826",
        toDate: "2022-12-23T18:25:43.511Z",
        fromDate: "2022-08-23T18:25:43.511Z",
      },
    },
  },
  data() {
    return {
      props: ["teamName", "teamLogo", "teamId"],
      loading: "",
      participantId: teamId.value,
      toDate: toDate.valueOf(),
      fromDate: fromDate.valueOf(),
      eventsByParticipantAndDateRange: [],
    };
  },
};
</script>
