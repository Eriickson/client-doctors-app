import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import errorLink from "./errorLink";
import uploadLink from "./uploadLink";
// import wsLink from "./wsLink";

const link = ApolloLink.from([errorLink, uploadLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
