import { gql } from "apollo-boost"

export default gql`
  mutation(
    $personal_ref: PersonalReferenceInput!
    $business_ref_primary: BusinessReferenceInput!
    $business_ref_secondary: BusinessReferenceInput!
  ) {
    addReferences(
      personal_ref: $personal_ref
      business_ref_primary: $business_ref_primary
      business_ref_secondary: $business_ref_secondary
    ) {
      email
    }
  }
`
