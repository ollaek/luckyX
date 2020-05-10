import { useDispatch, useSelector } from "react-redux";


import { TGlobalState } from "../..";
import {
  sendOTPAsync,
  resendOTPAsync,
  verifyOTPAsync,
  checkMobileAsync,
  updateProfileAsync,
  changePasswordAsync,
  ResendOTPByEmailAsync
} from "../../actions";
import { TAccountState } from "../../types";

const useAccountState = () => {

  const state = useSelector<TGlobalState, TAccountState>(
    ({ accountModule }) => accountModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    checkMobile: (mobileNumber: any) =>
      checkMobileAsync(dispatch, mobileNumber),
    sendOTP: (mobileNumber: any, callback: any) =>
      sendOTPAsync(dispatch, { mobileNumber, callback }),
    resendOTP: (mobileNumber: any) => resendOTPAsync(dispatch, mobileNumber),
    verifyOTP: (mobileNumber: any, otp: any) =>
      verifyOTPAsync(dispatch, { mobileNumber, otp }),
    updateProfile: (name: any) => updateProfileAsync(dispatch, name),
    changePassword: (req: any) => changePasswordAsync(dispatch, req),
    resendOTPByEmail: (email: any) => ResendOTPByEmailAsync(dispatch,email)
  };
};

export { useAccountState };
