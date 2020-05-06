import { AnyAction, isType } from "typescript-fsa";

import { getConfigAction } from "../actions";

import { TConfigState } from "../types";

const initialState: TConfigState = {
  isLoading: false,
  configs: undefined
};

const configReducer = (
  state: TConfigState = initialState,
  action: AnyAction
): TConfigState => {
  if (isType(action, getConfigAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getConfigAction.done)) {
    const response = action.payload.result;

    return {
      ...state,
      configs: response,
      isLoading: false
    };
  }

  if (isType(action, getConfigAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  return state;
};

export { configReducer };
