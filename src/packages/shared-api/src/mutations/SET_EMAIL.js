import { gql } from "apollo-boost"

export default gql`
  mutation($input: SetEmailInput!) {
    setEmail(input: $input) {
      id
      cell_number
      account {
        email
      }
    }
  }
`
