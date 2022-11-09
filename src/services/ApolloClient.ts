import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { API_URL } from "./urls";
import { createApolloProvider } from "@vue/apollo-option";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: API_URL,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const client = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
});

export const provider = createApolloProvider({
  defaultClient: client,
});
