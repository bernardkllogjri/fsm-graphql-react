import { gql } from "apollo-boost"

export default gql`
  query($input: GetBankVerificationCodeInput!) {
    getBankVerificationCode(input: $input) {
      code
    }
  }
`
