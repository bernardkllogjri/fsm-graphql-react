import { gql } from "apollo-boost"

export default gql`
  query($input: FetchMerchantInput!) {
    deal_offers(input: $input) {
      status
      offers {
        dealThreadId
        requestAmount
        buyRate
        maxUpsell
        paymentPeriodType
        repaymentPeriod
        originationFeePercentage
        paymentAmount
        repaymentAmount
        commissionAmount
        sellRate
        commissionPercentage
        commissionAdjBuyRate
        funderId
        id
        insertedAt
        status
        minAmount
        disbursementAmount
        purchasedPercentage
        contractOriginationFee
        wireFee
        riskAssesmentFee
        achFee
        facilityFee
        achFee
        dailyAmount
        desiredPosition
        stipulations {
          id
          name
        }
      }
    }
  }
`
