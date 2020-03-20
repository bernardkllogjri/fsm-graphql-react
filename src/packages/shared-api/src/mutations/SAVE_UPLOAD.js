import { gql } from "apollo-boost"

export default gql`
  mutation(
    $input: SaveUploadResultsInput!
    $pdf: FilestackUploadInput!
    $thumb: FilestackUploadInput!
    $original: FilestackUploadInput!
  ) {
    saveUploadResults(
      input: $input
      pdf: $pdf
      original: $original
      thumb: $thumb
    ) {
      id
      original {
        handle
        filename
      }
    }
  }
`
