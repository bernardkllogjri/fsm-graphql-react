import { gql } from "apollo-boost"

export default gql`
  mutation($input: SaveVouchedInfoInput!) {
    saveVouchedInfo(input: $input) {
      status
    }
  }
`
