import { gql } from "apollo-boost"

export default gql`
  mutation($input: SetBankruptcyStatusInput!) {
    setBankruptcyStatus(input: $input) {
      status
    }
  }
`
