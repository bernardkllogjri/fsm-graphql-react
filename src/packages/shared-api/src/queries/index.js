import { useLazyQuery } from "@apollo/react-hooks"

import GET_BANK_VERIFICATION_CODE from "./GET_BANK_VERIFICATION_CODE"
import VERIFY_ROUTING_NUMBER from "./VERIFY_ROUTING_NUMBER"
import VERIFY_ACCOUNT_NUMBER from "./VERIFY_ACCOUNT_NUMBER"
import GET_BACKEND_API from "./GET_BACKEND_API"
import GET_LOAN_OFFERS from "./GET_LOAN_OFFERS"
import SEARCH_BANK from "./SEARCH_BANK"
import GET_CONFIGS from "./GET_CONFIGS"
import CONTRACT_URL from "./CONTRACT_URL"
import VERIFY from "./VERIFY"
import GET_UPLOAD_PARAMS_BY_TOKEN from "./GET_UPLOAD_PARAMS_BY_TOKEN"

export default {
  // searchBank: (data = {}) => useLazyQuery(SEARCH_BANK, data),
  // verifyRoutingNumber: (data = {}) =>
  //   useLazyQuery(VERIFY_ROUTING_NUMBER, {
  //     ...data,
  //     fetchPolicy: "network-only",
  //   }),
  // verifyAccountNumber: (data = {}) => useLazyQuery(VERIFY_ACCOUNT_NUMBER, data),
  // getBankVerificationCode: (data = {}) =>
  //   useLazyQuery(GET_BANK_VERIFICATION_CODE, data),
  // getLoanOffers: (data = {}) => useLazyQuery(GET_LOAN_OFFERS, data),
  // verify: (data = {}) => useLazyQuery(VERIFY, data),
  // getBackendApi: (data = {}) => useLazyQuery(GET_BACKEND_API, data),
  // getConfigs: (data = {}) => useLazyQuery(GET_CONFIGS, data),
  // getUploadParamsByToken: (data = {}) =>
  //   useLazyQuery(GET_UPLOAD_PARAMS_BY_TOKEN, data),
  // contractUrl: (data = {}) => useLazyQuery(CONTRACT_URL, data),
}

export { GET_LOAN_OFFERS, GET_BACKEND_API, GET_CONFIGS, VERIFY }
