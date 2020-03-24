import { AnyAction, isType } from "typescript-fsa";

import { extrnalSignInAction, SignUpAction, VerifyEmailAction, SignInAction, ForgotPasswordAction } from "../actions";
import { TUserState, UserModel, ResponseModel } from "../types";

const initialState: TUserState = {
  User: {} as UserModel,
  isFetching: false,
  Error: ""
};

const authReducer = (
  state: TUserState = initialState,
  action: AnyAction
): TUserState => {

  if (isType(action, extrnalSignInAction.started)) {
    return {
      ...state,
      isFetching: true,
      Error: ""
    };
  }

  if (isType(action, extrnalSignInAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as UserModel;
    localStorage.setItem("Token", responseData.AccessToken);
    localStorage.setItem("Id", responseData.Id);
    localStorage.setItem("Email", responseData.Email);
    localStorage.setItem("Name", responseData.Name);
    localStorage.setItem("IsMerged", responseData.IsMerged.toString());
    return {
      ...state,
      User: responseData,
      isFetching: false,
      Error: ""
    };
  }

  if (isType(action, extrnalSignInAction.failed)) {
    
    return {
      ...state,
      isFetching: false,
      Error: "Somethimg wrong Happened !!!"
    };
  }

  if (isType(action, SignUpAction.started)) {
    return {
      ...state,
      isFetching: true,
      Error: ""
    };
  }

  if (isType(action, SignUpAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as UserModel;
    localStorage.setItem("Id", responseData.Id);
    return {
      ...state,
      User: responseData,
      isFetching: false,
      Error: ""
    };
  }

  if (isType(action, SignUpAction.failed)) {
    
    return {
      ...state,
      isFetching: false,
      Error: "Somethimg wrong Happened !!!"
    };
  }

  if (isType(action, VerifyEmailAction.started)) {
    return {
      ...state,
      isFetching: true,
      Error: ""
    };
  }

  if (isType(action, VerifyEmailAction.done)) {
    return {
      ...state,
      isFetching: false,
      Error: ""
    };
  }

  if (isType(action, VerifyEmailAction.failed)) {
    
    return {
      ...state,
      isFetching: false,
      Error: "Somethimg wrong Happened !!!"
    };
  }

  if (isType(action, SignInAction.started)) {
    return {
      ...state,
      isFetching: true,
      Error: ""
    };
  }

  if (isType(action, SignInAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as UserModel;
    localStorage.setItem("Id", responseData.Id);
    localStorage.setItem("Token", responseData.AccessToken);
    localStorage.setItem("Name", responseData.Name);
    localStorage.setItem("Email", responseData.Email);
    localStorage.setItem("IsMerged", responseData.IsMerged.toString());
    return {
      ...state,
      User: responseData,
      isFetching: false,
      Error: ""
    };
  }

  if (isType(action, SignInAction.failed)) {
    
    return {
      ...state,
      isFetching: false,
      Error: "Somethimg wrong Happened !!!"
    };
  }

  if (isType(action, ForgotPasswordAction.started)) {
    return {
      ...state,
      isFetching: true,
      Error: ""
    };
  }

  if (isType(action, ForgotPasswordAction.done)) {
    return {
      ...state,
      isFetching: false,
      Error: ""
    };
  }

  if (isType(action, ForgotPasswordAction.failed)) {
    
    return {
      ...state,
      isFetching: false,
      Error: "Somethimg wrong Happened !!!"
    };
  }

  return state;
};

export { authReducer };
