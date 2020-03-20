export const resourcesHandler = {
  "mutations.verifyBankingInfo": {
    shouldRenderError: false,
  },
  "mutations.references": {
    shouldRenderError: false,
  },
  "mutations.addSignatureRequest": {
    shouldRenderError: false,
  },
  "mutations.setRoutingNumber": {
    shouldRenderError: false,
  },
  "mutations.setAccountNumber": {
    shouldRenderError: false,
  },
  "mutations.setBankruptcy": {
    shouldRenderError: false,
  },
  "mutations.merchantTokenLogin": {
    shouldRenderError: false,
  },
  "mutations.saveDecision": {
    shouldRenderError: false,
  },
  "mutations.saveUpload": {
    shouldRenderError: false,
  },
  "mutations.verify": {
    shouldRenderError: false,
  },
  "mutations.updateMerchant": {
    shouldRenderError: false,
  },
  "mutations.setMerchantCellNumber": {
    shouldRenderError: true,
    errorTitle: "Phone Verification Error",
  },
  "mutations.verifyCellNumber": {
    shouldRenderError: true,
    errorTitle: "Wrong Code",
    errorProps: { okText: "Try Again" },
  },
  "mutations.setEmail": {
    shouldRenderError: true,
    errorTitle: "Email Verification Error",
  },
  "queries.searchBank": {
    shouldRenderError: false,
  },
  "queries.verifyRoutingNumber": {
    shouldRenderError: false,
  },
  "queries.verifyAccountNumber": {
    shouldRenderError: false,
  },
  "queries.getBankVerificationCode": {
    shouldRenderError: false,
  },
  "queries.getLoanOffers": {
    shouldRenderError: false,
  },
  "queries.verify": {
    shouldRenderError: false,
  },
  "queries.getBackendApi": {
    shouldRenderError: false,
  },
  "queries.getConfigs": {
    shouldRenderError: false,
  },
  "queries.contractUrl": {
    shouldRenderError: true,
  },
}
