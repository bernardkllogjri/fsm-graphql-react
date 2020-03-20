import { gql } from "apollo-boost"

export default gql`
  mutation($input: SaveDecisionLogicResponseInput!) {
    saveDecisionLogicResponse(input: $input) {
      token
      id
      payload {
        accountNumberConfidence
        accountNumberFound
        accountNumberInput
        amountInput
        availableBalance
        bankType
        currentBalance
        customerIdentifier
        firstNameInput
        institutionName
        accountNumberMatches
        amountVerified
        loginValid
        nameMatches
        verified
        lastNameInput
        nameConfidence
        nameFound
        routingNumberInput
        status
        totalDeposits
        totalWithdrawals
        transactionsFromDate
        transactionsToDate
      }
    }
  }
`
