import { gql } from "apollo-boost"

export default gql`
  mutation($input: SetRoutingNumberInput!) {
    setRoutingNumber(input: $input) {
      bank_name
    }
  }
`
