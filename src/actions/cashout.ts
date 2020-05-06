import actionCreatorFactory from 'typescript-fsa';

import { cashoutApi } from '../api/cashout';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const cashoutToVoucherAction = actionCreator.async<any, string[], any>(actionIds.CASHOUT_TO_VOUCHER);

const cashoutToBankAccountAction = actionCreator.async<any, string[], any>(actionIds.CASHOUT_BANK_ACCOUNT);

const cashoutToVoucherAsync = asyncAction(
    cashoutToVoucherAction,
    cashoutApi.CashoutToVoucher
);

const cashoutToBankAccountAsync = asyncAction(
    cashoutToBankAccountAction,
    cashoutApi.CashoutToBankAccount
);

export {
    cashoutToBankAccountAction,
    cashoutToBankAccountAsync,
    cashoutToVoucherAction,
    cashoutToVoucherAsync
};