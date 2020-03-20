import { gql } from "apollo-boost"

export default gql`
  query {
    get_configs {
      app {
        configs
      }
      env {
        appsignal_key
        plaid_env
        callbackServerUrl
      }
    }
  }
`
