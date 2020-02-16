import authBase from "./authBase";

import { SocialUserModel, UserSignUpModel, UserSignInModel } from "../types";

const authApi = {
  extrnalSignIn: (user: SocialUserModel) =>
    authBase
      .post("account/sociallogin", {
        Email: user.Email,
        FullName: user.FullName,
        SocialId: user.SocialId
      })
      .then(res => {
        return res.data;
      }),
  SignUp: (user: UserSignUpModel) =>
    authBase
      .post("account/affiliateregister", {
        Email: user.Email,
        FullName: user.FullName,
        Password: user.Password,
        ConfirmPassword: user.ConfirmPassword
      })
      .then(res => {
        return res.data;
      }),
  SignIn: (user: UserSignInModel) =>
    authBase
      .post("account/AffiliateLogin", {
        Email: user.Email,
        Password: user.Password
      })
      .then(res => {
        return res.data;
      }),
  verifyEmail: (id: any) =>
    authBase.put("account/affiliateverifyemail", { UserId: id }).then(res => {
      return res.data;
    }),
  forgotPassword: (email: string) =>
    authBase
      .put(`account/affiliate-forgot-password?email=${email}`)
      .then(res => {
        return res.data;
      })
};

export { authApi };
