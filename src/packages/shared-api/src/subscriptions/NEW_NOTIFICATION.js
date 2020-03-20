import { gql } from "apollo-boost"

export default gql`
  subscription {
    newNotification {
      origin
      header
      type
      payload
    }
  }
`
