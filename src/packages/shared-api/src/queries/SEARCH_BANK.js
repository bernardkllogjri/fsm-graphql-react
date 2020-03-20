import { gql } from "apollo-boost"

export default gql`
  query($input: GetBanksByNameInput!) {
    getBanksByName(input: $input) {
      bank_name
      routing_numbers
      content_service_id
    }
  }
`
