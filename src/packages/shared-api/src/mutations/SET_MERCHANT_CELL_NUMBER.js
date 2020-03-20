import { gql } from "apollo-boost"

export default gql`
  mutation($input: SetMerchantCellNumberInput!) {
    setMerchantCellNumber(input: $input) {
      id
      first_name
      cell_number
      account {
        email
      }
      funding_applications {
        application
      }
    }
  }
`
