import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as apolloProvider from "./services/ApolloClient";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(vuetify)
  .use(apolloProvider.provider)
  .mount("#app");
