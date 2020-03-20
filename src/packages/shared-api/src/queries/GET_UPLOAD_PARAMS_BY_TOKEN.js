import { gql } from "apollo-boost"

export default gql`
  query($input: GetUploadParamsByTokenInput!) {
    getUploadParamsByToken(input: $input) {
      first_name
      last_name
      public_key
      status
      callback_url
      callback_token
    }
  }
`
