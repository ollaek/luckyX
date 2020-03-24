import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import { sendOTPAsync, resendOTPAsync, verifyOTPAsync } from "../../actions";
import { TAccountState } from "../../types";

const useAccountState = () => {
  const state = useSelector<TGlobalState, TAccountState>(
    ({ accountModule }) => accountModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    sendOTP: (mobileNumber: any, callback: any) =>
      sendOTPAsync(dispatch, { mobileNumber, callback }),
    resendOTP: (mobileNumber: any) =>
      resendOTPAsync(dispatch, mobileNumber),
    verifyOTP: (mobileNumber: any, otp: any, callback: any) =>
      verifyOTPAsync(dispatch, { mobileNumber, otp, callback })
  };
};

export { useAccountState };
