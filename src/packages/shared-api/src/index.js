import { split } from "apollo-link"
import ApolloClient from "apollo-client"
import { DEFAULT_API } from "shared-configs"
import { setContext } from "apollo-link-context"
import { createHttpLink } from "apollo-link-http"
import { Socket as PhoenixSocket } from "phoenix"
import * as AbsintheSocket from "@absinthe/socket"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link"
import queries from "./queries"
import mutations from "./mutations"
import { hasSubscription } from "@jumpn/utils-graphql"

export default {
  queries,
  mutations,
}
export * from "./resourceConfig"

export const client = (token = undefined, url = undefined) => {
  const httpLink = createHttpLink({
    uri: url || DEFAULT_API,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  })
  const authedHttpLink = authLink.concat(httpLink)
  const phoenixSocket = new PhoenixSocket(
    "wss://api.staging.hellolending.com/socket",
    {
      params: () => {
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

  return client
}
