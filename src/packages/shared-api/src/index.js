import {from, split } from "apollo-link"
import ApolloClient from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { Socket as PhoenixSocket } from "phoenix"
import * as AbsintheSocket from "@absinthe/socket"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link"
import queries from "./queries"
import mutations from "./mutations"
import { hasSubscription } from "@jumpn/utils-graphql"
import middlewares from "./middlewares"


const authedHttpLink = from([
  middlewares.fetchUrl,
  middlewares.auth,
  createHttpLink({
    uri: localStorage.getItem('url'),
  })
])


const phoenixSocket = new PhoenixSocket(
  "wss://api.staging.hellolending.com/socket",
  {
    params: () => {
      const token = localStorage.getItem('token');
      if (token) {
        return { Authorization: `Bearer ${token}` }
      } else {
        return {}
      }
    },
  },
)
const absintheSocket = AbsintheSocket.create(phoenixSocket)
const websocketLink = createAbsintheSocketLink(absintheSocket)
const link = split(
  operation => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink,
)
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache,
})

export { client };
export default {
  queries,
  mutations,
}
export * from "./resourceConfig"