import { Machine, interpret } from "xstate";

export const CHECKOUT_STATES = {
  TERMS: "Terms",
  EMAIL_PHONE: "EmailPhone",
  ACCOUNT_ROUTING: "AccountRouting",
  VOID_CHECK: "VoidCheck",
  IDENTITY_QUESTION: "IdentityQuestion",
  IDENTITY_VERIFICATION: "IdentityVerification",
  BANKRUPTCY: "Bankruptcy",
  CONTRACT_SIGNATURE: "ContractSignature",
  FINISHPAGE: "FinishPage",
  SUCCESSPAGE: "SuccessPage"
};

export const MACHINE_STATES = {
  IDLE: "idle",
  START: "start"
};

// This machine is completely decoupled from React
export default Machine({
  id: "checkout",
  initial: "idle",
  context: {
    fundingApplication: null,
    merchant: null,
    offer: null
  },
  states: {
    [machineStates.IDLE]: {
      on: {
        [machineStates.START]: []
      }
    }
  }
});
