import { gql } from "apollo-boost"

export default gql`
  query($input: FundingApplicationIdInput!) {
    get_verification_questions(input: $input) {
      set_id
      conversation_id
      questions {
        id
        question
        help_text
        type
        choices {
          choice_id
          choice
        }
      }
    }
  }
`
