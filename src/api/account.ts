import authBase from "./authBase";

import {} from "../types";

const accountApi = {
  checkMobile: (mobileNumber: any) =>
    authBase
      .get(`account/affiliate-check-user?phoneNumber=${mobileNumber}`)
      .then(res => res.data),
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
  resendOTPByEmail: (email: any) =>
    authBase
      .put(
        `account/affiliate-Resend-Mobile-Verification-SMS-By-Email?email=${email}`
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
      }),
  UpdateProfile: (name: any) =>
    authBase
      .put("account/affiliate-update-profile", {
        Id: localStorage.getItem("Id"),
        FullName: name
      })
      .then(res => res.data),
  ChangePassword: (req: any) =>
    authBase
      .put("account/affiliate-change-password", {
        OldPassword: req.oldPassword,
        NewPassword: req.newPassword,
        ConfirmPassword: req.confirmPassword
      })
      .then(res => res.data)
};

export { accountApi };
