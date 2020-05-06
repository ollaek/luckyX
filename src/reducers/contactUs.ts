import { AnyAction, isType } from "typescript-fsa";

import { getSubjectsAction } from "../actions";

import { TContactUsState, SubjectModel, ResponseModel } from "../types";

const initialState: TContactUsState = {
  isLoading: false,
  subjectsList: undefined
};

const contactUsReducer = (
  state: TContactUsState = initialState,
  action: AnyAction
): TContactUsState => {

  if (isType(action, getSubjectsAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getSubjectsAction.done)) {
    const response = action.payload.result as unknown as ResponseModel;
    const responseData = response.Data as SubjectModel[];

    return {
      ...state,
      subjectsList: responseData,
      isLoading: false
    };
  }

  if (isType(action, getSubjectsAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  return state;
};

export { contactUsReducer };
