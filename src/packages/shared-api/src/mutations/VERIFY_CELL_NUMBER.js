import { gql } from "apollo-boost"

export default gql`
  mutation($input: VerifyCellNumberInput!) {
    verifyCellNumber(input: $input) {
      status
    }
  }
`
