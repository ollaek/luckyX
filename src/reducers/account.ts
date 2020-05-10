import { AnyAction, isType } from "typescript-fsa";

import {
  sendOTPAction,
  resendOTPAction,
  verifyOTPAction,
  checkMobileAction,
  updateProfileAction,
  changePasswordAction,
  ResendOTPByEmailAction
} from "../actions";
import { TAccountState, ResponseModel, UserModel } from "../types";

const initialState: TAccountState = {
  MobileNumber: false,
  OTP: false,
  Merged: false,
  isLoading: false,
  errorMSG: "",
  otpWaitingTime: 0,
  isMobileExistInLucky: false,
  isMobileMerged: false,
  success: ""
};

const accountReducer = (
  state: TAccountState = initialState,
  action: AnyAction
): TAccountState => {
  if (isType(action, checkMobileAction.started)) {
    return {
      ...state,
      errorMSG:"",
      isLoading: true
    };
  }

  if (isType(action, checkMobileAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;

    return {
      ...state,
      errorMSG:"",
      isMobileExistInLucky: response.Data ? true : false,
      isLoading: false
    };
  }

  if (isType(action, checkMobileAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isMobileMerged: true,
      isLoading: false
    };
  }
  if (isType(action, sendOTPAction.started)) {
    return {
      ...state,
      errorMSG:"",
      isLoading: true
    };
  }

  if (isType(action, sendOTPAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    if (response.Status === 200) {
      if (response.callback) response.callback();
      return {
        ...state,
        errorMSG:"",
        MobileNumber: true,
        isLoading: false
      };
    } else if (response.Status === 400) {
      return {
        ...state,
        errorMSG: response.Errors[0],
        isLoading: false
      };
    }
  }

  if (isType(action, sendOTPAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      errorMSG:"",
      isLoading: false
    };
  }

  if (isType(action, resendOTPAction.started)) {
    return {
      ...state,
      errorMSG:"",
      isLoading: true
    };
  }

  if (isType(action, resendOTPAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    if (response.Status === 200) {
      return {
        ...state,
        errorMSG:"",
        MobileNumber: true,
        isLoading: false
      };
    } else if (response.Status === 400) {
      return {
        ...state,
        errorMSG: response.Errors[0],
        isLoading: false
      };
    }
  }

  if (isType(action, resendOTPAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      errorMSG:"",
      isLoading: false
    };
  }

  if (isType(action, verifyOTPAction.started)) {
    debugger;
    return {
      ...state,
      errorMSG:"",
      isLoading: true,
      success:""
    };
  }

  if (isType(action, verifyOTPAction.done)) {
    debugger;
    const response = (action.payload.result as unknown) as ResponseModel;
    if (response.callback) response.callback();

    return {
      ...state,
      OTP: true,
      Merged: true,
      errorMSG: "",
      isLoading: false,
      success:"Y"
    };
  }

  if (isType(action, verifyOTPAction.failed)) {
    const error = action.payload.error.response.data.Errors[0];

    // Do error handling work if needed
    return {
      ...state,
      errorMSG: error,
      isLoading: false,
      success:"N"
    };
  }

  if (isType(action, updateProfileAction.started)) {
    return {
      ...state,
      errorMSG:"",
      isLoading: true
    };
  }

  if (isType(action, updateProfileAction.done)) {
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
      errorMSG:"",
      isLoading: false
    };
  }

  if (isType(action, updateProfileAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, changePasswordAction.started)) {
    return {
      ...state,
      errorMSG:"",
      isLoading: true
    };
  }

  if (isType(action, changePasswordAction.done)) {
    return {
      ...state,
      errorMSG:"",
      isLoading: false
    };
  }

  if (isType(action, changePasswordAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, ResendOTPByEmailAction.started)) {
    return {
      ...state,
      isLoading: true,
      errorMSG: "",
      success: "",
      otpWaitingTime: 0
    };
  }

  if (isType(action, ResendOTPByEmailAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    return {
      ...state,
      otpWaitingTime: +response.Data,
      isLoading: false,
      errorMSG: "",
      success: "Y"
    };
  }

  if (isType(action, ResendOTPByEmailAction.failed)) {
    let errorMsg;
    if (action.payload.error.response.data.Errors) {
      errorMsg = action.payload.error.response.data.Errors[0];
    }
    return {
      ...state,
      errorMSG: errorMsg,
      isLoading: false,
      success: "N"
    };
  }
  return state;
};

export { accountReducer };
