import { gql } from "apollo-boost"

export default gql`
  mutation($input: SetAccountNumberInput!) {
    setAccountNumber(input: $input) {
      status
    }
  }
`
