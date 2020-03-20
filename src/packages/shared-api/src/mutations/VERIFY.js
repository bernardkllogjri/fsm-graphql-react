import { gql } from "apollo-boost"

export default gql`
  mutation($input: VerifyMerchantInput!) {
    verify_merchant(input: $input) {
      status
      application
    }
  }
`
