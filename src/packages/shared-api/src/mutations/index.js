import { useMutation } from "@apollo/react-hooks"

import ADD_SIGNATURE_REQUEST from "./ADD_SIGNATURE_REQUEST"
import SET_MERCHANT_CELL_NUMBER from "./SET_MERCHANT_CELL_NUMBER"
import VERIFY_BANKING_INFO from "./VERIFY_BANKING_INFO"
import SET_ROUTING_NUMBER from "./SET_ROUTING_NUMBER"
import SET_ACCOUNT_NUMBER from "./SET_ACCOUNT_NUMBER"
import MERCHANT_TOKEN_LOGIN from "./MERCHANT_TOKEN_LOGIN"
import VERIFY_CELL_NUMBER from "./VERIFY_CELL_NUMBER"
import SAVE_DECISION from "./SAVE_DECISION_LOGIC"
import SET_BANKRUPTCY from "./SET_BANKRUPTCY"
import UPDATE_MERCHANT from "./UPDATE_MERCHANT"
import SAVE_UPLOAD from "./SAVE_UPLOAD"
import SET_EMAIL from "./SET_EMAIL"
import VERIFY from "./VERIFY"
import INIT_LICENCE_UPLOAD from "./INIT_LICENCE_UPLOAD"
import SAVE_VOUCHED_INFO from "./SAVE_VOUCHED_INFO"
import REFERENCES from "./REFERENCES"

export default {
  verifyBankingInfo: (data = {}) => useMutation(VERIFY_BANKING_INFO, data),
  addSignatureRequest: () => useMutation(ADD_SIGNATURE_REQUEST),
  setRoutingNumber: (data = {}) =>
    useMutation(SET_ROUTING_NUMBER, {
      ...data,
      fetchPolicy: "no-cache",
    }),
  setAccountNumber: () => useMutation(SET_ACCOUNT_NUMBER),
  setBankruptcy: (data = {}) => useMutation(SET_BANKRUPTCY, data),
  merchantTokenLogin: () => useMutation(MERCHANT_TOKEN_LOGIN),
  saveDecision: () => useMutation(SAVE_DECISION),
  saveUpload: () => useMutation(SAVE_UPLOAD),
  verify: () => useMutation(VERIFY),
  saveUpload: () => useMutation(SAVE_UPLOAD),
  saveDecision: () => useMutation(SAVE_DECISION),
  updateMerchant: () => useMutation(UPDATE_MERCHANT),
  setEmail: (data = {}) => useMutation(SET_EMAIL, data),
  verifyCellNumber: () => useMutation(VERIFY_CELL_NUMBER),
  merchantTokenLogin: () => useMutation(MERCHANT_TOKEN_LOGIN),
  setMerchantCellNumber: (data = {}) =>
    useMutation(SET_MERCHANT_CELL_NUMBER, data),
  saveVouchedInfo: (data = {}) => useMutation(SAVE_VOUCHED_INFO, data),
  initLicenceUpload: (data = {}) => useMutation(INIT_LICENCE_UPLOAD, data),
  references: (data = {}) => useMutation(REFERENCES, data),
}

export {
  VERIFY,
  SET_EMAIL,
  SAVE_UPLOAD,
  SAVE_DECISION,
  UPDATE_MERCHANT,
  VERIFY_CELL_NUMBER,
  MERCHANT_TOKEN_LOGIN,
  SET_MERCHANT_CELL_NUMBER,
}
