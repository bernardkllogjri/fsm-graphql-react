import { gql } from "apollo-boost"

export default gql`
  query($input: VerifyAccountNumberInput!) {
    verifyAccountNumber(input: $input) {
      status
    }
  }
`
