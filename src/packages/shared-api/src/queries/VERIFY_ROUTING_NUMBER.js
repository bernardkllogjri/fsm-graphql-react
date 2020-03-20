import { gql } from "apollo-boost"

export default gql`
  query($input: VerifyRoutingNumberInput!) {
    verifyRoutingNumber(input: $input) {
      bank_name
    }
  }
`
