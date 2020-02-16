import actionCreatorFactory from 'typescript-fsa';

import { authApi } from '../api/auth';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';
import { SocialUserModel, UserSignUpModel, UserSignInModel } from '../types'

const actionCreator = actionCreatorFactory();

const extrnalSignInAction = actionCreator.async<SocialUserModel, string[], any>(actionIds.AUTH_EXTERNAL_SIGNIN);

const SignUpAction = actionCreator.async<UserSignUpModel, string[], any>(actionIds.AUTH_SIGNUP);

const VerifyEmailAction = actionCreator.async<any,string[],any>(actionIds.AUTH_VERIFY_EMAIL);

const SignInAction = actionCreator.async<UserSignInModel,string[],any>(actionIds.AUTH_SIGNIN);

const ForgotPasswordAction = actionCreator.async<string, string[], any>(actionIds.AUTH_FORGOT_PASSWORD);

const extrnalSignInAsync = asyncAction(
    extrnalSignInAction,
    authApi.extrnalSignIn
);

const SignInAsync = asyncAction(
    SignInAction,
    authApi.SignIn
);

const signUpAsync = asyncAction(
    SignUpAction,
    authApi.SignUp
);

const VerifyEmailAsync = asyncAction(
    VerifyEmailAction,
    authApi.verifyEmail
);

const ForgotPasswordAsync = asyncAction(
    ForgotPasswordAction,
    authApi.forgotPassword
);
export {
    extrnalSignInAction,
    extrnalSignInAsync,
    SignUpAction,
    signUpAsync,
    VerifyEmailAction,
    VerifyEmailAsync,
    SignInAction,
    SignInAsync,
    ForgotPasswordAction,
    ForgotPasswordAsync
};