import actionCreatorFactory from 'typescript-fsa';

import { accountApi } from '../api/account';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const sendOTPAction = actionCreator.async<any, string[], any>(actionIds.CASHOUT_SEND_OTP);

const resendOTPAction = actionCreator.async<any, string[], any>(actionIds.CASHOUT_RESEND_OTP);

const verifyOTPAction = actionCreator.async<any, string[], any>(actionIds.CASHOUT_VERIFY_OTP);


const sendOTPAsync = asyncAction(
    sendOTPAction,
    accountApi.sendOTP
);

const resendOTPAsync = asyncAction(
    resendOTPAction,
    accountApi.resendOTP
);

const verifyOTPAsync = asyncAction(
    verifyOTPAction,
    accountApi.verifyOTP
);
export {
   sendOTPAction,
   sendOTPAsync,
   resendOTPAction,
   resendOTPAsync,
   verifyOTPAction,
   verifyOTPAsync
}