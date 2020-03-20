import { gql } from "apollo-boost"

export default gql`
  mutation($input: MerchantTokenLoginInput!) {
    loginMerchantWithToken(input: $input) {
      merchant {
        addresses {
          city
          country
          id
          latitude
          location
          longitude
          stateAbbrev
          streetName
          streetNumber
          type
          zipcode
        }
        businessDba
        businessName
        businessStartDate
        businessTypeOfEntity
        cellNumber
        federalTaxId
        firstName
        id
        industryId
        lastName
        representative {
          firstName
          handle
          id
          lastName
        }
        ssn
        status
        account {
          email
          group
          id
          status
        }
        firstName
        fundingApplications {
          application
          id
          leadId
          status
        }
        lastName
      }
      session {
        token
      }
    }
  }
`
