import { useDispatch, useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications';

import { TGlobalState } from "../../..";
import { extrnalSignInAsync, signUpAsync, VerifyEmailAsync, SignInAsync, ForgotPasswordAsync } from "../../../actions";
import { TUserState, SocialUserModel, UserSignUpModel, UserSignInModel } from "../../../types";

const useUserState = () => {
  const { addToast } = useToasts();
  const state = useSelector<TGlobalState, TUserState>(
    ({ userModule }) => userModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    externalSignIn: (user: SocialUserModel) =>
      extrnalSignInAsync(dispatch, user).then(()=>{addToast('Logged In Successfully', { appearance: 'success' ,autoDismiss: false  })}),
    signUp: (user: UserSignUpModel) => signUpAsync(dispatch, user),
    verifyEmail: (id: any) => VerifyEmailAsync(dispatch, id),
    signIn: (user: UserSignInModel) => SignInAsync(dispatch, user).then(()=>{addToast('Logged In Successfully', { appearance: 'success',autoDismiss: true  })}),
    forgotPassword: (email: string) => ForgotPasswordAsync(dispatch,email)
  };
};

export { useUserState };
