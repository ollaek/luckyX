import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../../..";
import {
  extrnalSignInAsync,
  signUpAsync,
  VerifyEmailAsync,
  SignInAsync,
  ForgotPasswordAsync
} from "../../../actions";
import {
  TUserState,
  SocialUserModel,
  UserSignUpModel,
  UserSignInModel
} from "../../../types";

const useUserState = () => {
  const state = useSelector<TGlobalState, TUserState>(
    ({ authModule }) => authModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    externalSignIn: (user: SocialUserModel) =>
      extrnalSignInAsync(dispatch, user),
    signUp: (user: UserSignUpModel) => signUpAsync(dispatch, user),
    verifyEmail: (id: any) =>
      VerifyEmailAsync(dispatch, id).then(() => {
        localStorage.removeItem("registerationValues");
      }),
    signIn: (user: UserSignInModel) =>
      SignInAsync(dispatch, user),
    forgotPassword: (email: string) => ForgotPasswordAsync(dispatch, email)
  };
};

export { useUserState };
