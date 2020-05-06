import backEndBase from "./backEndBase";

import { CashoutModel } from "../types";

const cashoutApi = {
  CashoutToVoucher: (amount: any) =>
    backEndBase
      .post(`AffiliateCashout/CashoutToVoucher`,{
        amount: +amount
      })
      .then(res => res.data),
  CashoutToBankAccount: (req: CashoutModel) =>
    backEndBase
      .post(
        `AffiliateCashout/CashoutToBankAccount`,
        {
          amount: +req.amount,
          BankAccount: req.BankAccount
        }
      )
      .then(res => res.data)
};

export { cashoutApi };
