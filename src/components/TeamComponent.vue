<template>
  <v-container>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <v-card class="mt-8" elevation="0">
        <v-img :src="`${teamLogo}`" height="90"></v-img>
        <v-card-title class="text-center mt-2">{{ teamName }}</v-card-title>
      </v-card>
    </div>
    <div class="table">
      <v-table fixed-header>
        <thead>
          <tr>
            <th></th>
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
            <td>{{ match.startDate }}</td>
            <td>
              {{
                match.participants[0].participant.name +
                " - " +
                match.participants[1].participant.name
              }}
            </td>
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
import { ref, Ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

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

//const participantId = teamId;
const toDate = "2022-12-23T18:25:43.511Z";
const fromDate = "2022-08-23T18:25:43.511Z";

export default {
  props: ["teamName", "teamLogo", "teamId"],
  apollo: {
    eventsByParticipantAndDateRange: {
      query: GET_TEAM,
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
