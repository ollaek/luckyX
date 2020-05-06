import { AnyAction, isType } from "typescript-fsa";

import {
  extrnalSignInAction,
  SignUpAction,
  VerifyEmailAction,
  SignInAction,
  ForgotPasswordAction
} from "../actions";
import { TUserState, UserModel, ResponseModel } from "../types";

const initialState: TUserState = {
  User: {} as UserModel,
  isFetching: false,
  signInError: "",
  signUpError: "",
  ForgetPasswordError: "",
  success: "",
  errorCode: null
};

const authReducer = (
  state: TUserState = initialState,
  action: AnyAction
): TUserState => {
  if (isType(action, extrnalSignInAction.started)) {
    return {
      ...state,
      isFetching: true,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      success: "",
      errorCode: null
    };
  }

  if (isType(action, extrnalSignInAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as UserModel;
    localStorage.setItem("Token", responseData.AccessToken);
    localStorage.setItem("Id", responseData.Id);
    localStorage.setItem("Email", responseData.Email);
    localStorage.setItem("Name", responseData.Name);
    localStorage.setItem("Phone", responseData.Phone);
    localStorage.setItem("IsMerged", responseData.IsMerged.toString());
    return {
      ...state,
      User: responseData,
      isFetching: false,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      success: "Y",
      errorCode: null
    };
  }

  if (isType(action, extrnalSignInAction.failed)) {
    let errorMsg;
    if (action.payload.error.response) {
      errorMsg = action.payload.error.response.data.Errors[0];
    } else {
      window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`);
    }
    return {
      ...state,
      isFetching: false,
      signInError: errorMsg,
      success: "N",
      signUpError: "",
      ForgetPasswordError: "",
      errorCode: null
    };
  }

  if (isType(action, SignUpAction.started)) {
    return {
      ...state,
      isFetching: true,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      success: "",
      errorCode: null
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
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      success: "Y",
      errorCode: null
    };
  }

  if (isType(action, SignUpAction.failed)) {
    let errorMsg;
    let errorCodeResponse;
    if (action.payload.error.response) {
      errorMsg = action.payload.error.response.data.Errors[0];
      errorCodeResponse = action.payload.error.response.data.ErrorCode;
    } else {
      window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`);
    }
    return {
      ...state,
      isFetching: false,
      signUpError: errorMsg,
      signInError: "",
      ForgetPasswordError: "",
      success: "N",
      errorCode: errorCodeResponse
    };
  }

  if (isType(action, VerifyEmailAction.started)) {
    return {
      ...state,
      isFetching: true,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      errorCode: null
    };
  }

  if (isType(action, VerifyEmailAction.done)) {
    return {
      ...state,
      isFetching: false,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      errorCode: null
    };
  }

  if (isType(action, VerifyEmailAction.failed)) {
    return {
      ...state,
      isFetching: false,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      errorCode: null
    };
  }

  if (isType(action, SignInAction.started)) {
    return {
      ...state,
      isFetching: true,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      success: "",
      errorCode: null
    };
  }

  if (isType(action, SignInAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const responseData = response.Data as UserModel;
    localStorage.setItem("Id", responseData.Id);
    localStorage.setItem("Token", responseData.AccessToken);
    localStorage.setItem("Name", responseData.Name);
    localStorage.setItem("Email", responseData.Email);
    localStorage.setItem("Phone", responseData.Phone);
    localStorage.setItem("IsMerged", responseData.IsMerged.toString());
    return {
      ...state,
      User: responseData,
      isFetching: false,
      signInError: "",
      signUpError: "",
      ForgetPasswordError: "",
      success: "Y",
      errorCode: null
    };
  }

  if (isType(action, SignInAction.failed)) {
    let errorMsg;
    if (action.payload.error.response) {
      errorMsg = action.payload.error.response.data.Errors[0];
    } else {
      window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`);
    }
    return {
      ...state,
      isFetching: false,
      signInError: errorMsg,
      signUpError: "",
      ForgetPasswordError: "",
      success: "N",
      errorCode: null
    };
  }

  if (isType(action, ForgotPasswordAction.started)) {
    return {
      ...state,
      isFetching: true,
      signUpError: "",
      ForgetPasswordError: "",
      signInError: "",
      success: "",
      errorCode: null
    };
  }

  if (isType(action, ForgotPasswordAction.done)) {
    return {
      ...state,
      isFetching: false,
      signUpError: "",
      ForgetPasswordError: "",
      signInError: "",
      success: "Y",
      errorCode: null
    };
  }

  if (isType(action, ForgotPasswordAction.failed)) {
    let errorMsg;
    if (action.payload.error.response) {
      errorMsg = action.payload.error.response.data.Errors[0];
    } else {
      window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`);
    }
    return {
      ...state,
      isFetching: false,
      ForgetPasswordError: errorMsg,
      signUpError: "",
      signInError: "",
      success: "N",
      errorCode: null
    };
  }

  return state;
};

export { authReducer };
