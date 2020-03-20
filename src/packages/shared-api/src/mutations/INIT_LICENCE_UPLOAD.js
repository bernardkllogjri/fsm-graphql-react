import { gql } from "apollo-boost"

export default gql`
  mutation($input: InitLicenceUploadInput!) {
    initLicenceUpload(input: $input) {
      status
      url
    }
  }
`
