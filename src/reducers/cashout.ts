import { AnyAction, isType } from "typescript-fsa";

import { cashoutToBankAccountAction, cashoutToVoucherAction } from "../actions";
import { ResponseModel, TCashoutState } from "../types";

const initialState: TCashoutState = {
  isLoading: false
};

const cashoutReducer = (
  state: TCashoutState = initialState,
  action: AnyAction
): TCashoutState => {
  if (isType(action, cashoutToVoucherAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, cashoutToVoucherAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    if (response.callback) response.callback();
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, cashoutToVoucherAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, cashoutToBankAccountAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, cashoutToBankAccountAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    if (response.callback) response.callback();
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, cashoutToBankAccountAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  return state;
};

export { cashoutReducer };
