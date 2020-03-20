import { gql } from "apollo-boost"

export default gql`
  mutation($input: UpdateMerchantInput!) {
    updateMerchant(input: $input) {
      firstName
      id
      account {
        email
      }
    }
  }
`
