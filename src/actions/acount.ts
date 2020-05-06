import actionCreatorFactory from "typescript-fsa";

import { accountApi } from "../api/account";
import { asyncAction } from "../helpers";
import actionIds from "./action-ids";

const actionCreator = actionCreatorFactory();

const checkMobileAction = actionCreator.async<any, string[], any>(
  actionIds.CASHOUT_CHECK_MOBILE
);

const sendOTPAction = actionCreator.async<any, string[], any>(
  actionIds.CASHOUT_SEND_OTP
);

const resendOTPAction = actionCreator.async<any, string[], any>(
  actionIds.CASHOUT_RESEND_OTP
);

const verifyOTPAction = actionCreator.async<any, string[], any>(
  actionIds.CASHOUT_VERIFY_OTP
);

const updateProfileAction = actionCreator.async<any, string[], any>(
  actionIds.PROFILE_UPDATE
);

const changePasswordAction = actionCreator.async<any, string[], any>(
  actionIds.PROFILE_CHANGE_PASSWORD
);

const checkMobileAsync = asyncAction(checkMobileAction, accountApi.checkMobile);

const sendOTPAsync = asyncAction(sendOTPAction, accountApi.sendOTP);

const resendOTPAsync = asyncAction(resendOTPAction, accountApi.resendOTP);

const verifyOTPAsync = asyncAction(verifyOTPAction, accountApi.verifyOTP);

const updateProfileAsync = asyncAction(updateProfileAction, accountApi.UpdateProfile);

const changePasswordAsync = asyncAction(changePasswordAction, accountApi.ChangePassword);

export {
  checkMobileAction,
  checkMobileAsync,
  sendOTPAction,
  sendOTPAsync,
  resendOTPAction,
  resendOTPAsync,
  verifyOTPAction,
  verifyOTPAsync,
  updateProfileAction,
  updateProfileAsync,
  changePasswordAction,
  changePasswordAsync
};
