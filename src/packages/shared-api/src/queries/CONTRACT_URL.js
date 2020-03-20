import { gql } from "apollo-boost"

export default gql`
  query($input: FundingApplicationIdInput!) {
    ContractUrl(input: $input) {
      url
    }
  }
`
