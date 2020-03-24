import authBase from "./authBase";

import {} from "../types";

const accountApi = {
  sendOTP: (req: any) =>
    authBase
      .put(
        `account/affiliate-lucky-wallet-merge?phoneNumber=${req.mobileNumber}`
      )
      .then(res => {
        res.data.callback = req.callback;
        return res.data;
      }),
  resendOTP: (mobileNumber: any) =>
    authBase
      .put(
        `account/affiliate-Resend-Mobile-Verification-SMS?phoneNumber=${mobileNumber}`
      )
      .then(res => res.data),
  verifyOTP: (req: any) =>
    authBase
      .put("account/affiliate-Validate-Mobile-Verification-Otp", {
        Phone: req.mobileNumber,
        Otp: req.otp
      })
      .then(res => {
        res.data.callback = req.callback;
        return res.data;
      })
};

export { accountApi };
