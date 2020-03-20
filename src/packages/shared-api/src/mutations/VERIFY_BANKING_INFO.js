import { gql } from "apollo-boost"

export default gql`
  mutation($input: VerifyBankingInfoInput!) {
    verifyBankingInfo(input: $input) {
      status
    }
  }
`
