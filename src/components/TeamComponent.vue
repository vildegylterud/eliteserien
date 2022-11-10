<template>
  <v-container>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <div class="v-col-12">
        <v-img :src="`${teamLogo}`" height="80"></v-img>
        <h2>{{ teamName }}</h2>
        <h2>{{ teamId }}</h2>
      </div>
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

const participantId = "83af5c96-fe8d-4f60-a1ea-d89e01a14826";
const toDate = "2022-12-23T18:25:43.511Z";
const fromDate = "2022-08-23T18:25:43.511Z";

// eslint-disable-next-line @typescript-eslint/no-var-requires

const date: any = new Date().toISOString().substring(0, 10);

export default {
  props: ["teamName", "teamLogo", "teamId"],
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
      props: ["teamName"],
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
