import { AnyAction, isType } from 'typescript-fsa';

import { sendOTPAction, resendOTPAction, verifyOTPAction } from '../actions';
import {
  TAccountState,
  ResponseModel
} from '../types';

const initialState: TAccountState = {
    MobileNumber: false,
    OTP: false,
    Merged: false,
    isLoading: false,
    errorMSG: "",
    otpWaitingTime: 0
};

const accountReducer = (state: TAccountState = initialState, action: AnyAction): TAccountState => {
    if (isType(action, sendOTPAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, sendOTPAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        if(response.Status === 200){
            if(response.callback) response.callback();
            return {
                ...state,
                MobileNumber:true,
                isLoading:false
            };
        }else if(response.Status === 400){
            return {
                ...state,
                errorMSG: response.Errors[0],
                isLoading:false
            };
        }
    }

    if (isType(action, sendOTPAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, resendOTPAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, resendOTPAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        if(response.Status === 200){
            return {
                ...state,
                MobileNumber:true,
                isLoading:false
            };
        }else if(response.Status === 400){
            return {
                ...state,
                errorMSG: response.Errors[0],
                isLoading:false
            };
        }
    }

    if (isType(action, resendOTPAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            isLoading: false
        };
    }

    if (isType(action, verifyOTPAction.started)) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (isType(action, verifyOTPAction.done)) {
        const response = action.payload.result as unknown as ResponseModel;
        if(response.Status === 200){
            if(response.callback) response.callback();
            return {
                ...state,
                OTP:true,
                Merged: true,
                isLoading:false
            };
        }else if(response.Status === 400){
            return {
                ...state,
                errorMSG: "Please enter valid code",
                isLoading:false
            };
        }
    }

    if (isType(action, verifyOTPAction.failed)) {

        // Do error handling work if needed
        return {
            ...state,
            errorMSG: "Please enter valid code",
            isLoading:false
        };
    }

    return state;
};

export {
    accountReducer
};