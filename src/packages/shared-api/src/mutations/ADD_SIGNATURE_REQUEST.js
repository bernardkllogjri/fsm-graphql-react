import { gql } from "apollo-boost"

export default gql`
  mutation($input: AddSignatureRequestInput!) {
    addSignatureRequest(input: $input) {
      id
    }
  }
`
