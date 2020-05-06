import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import { cashoutToBankAccountAsync, cashoutToVoucherAsync } from "../../actions";
import { TCashoutState, CashoutModel } from "../../types";

const useCashoutState = () => {

  const state = useSelector<TGlobalState, TCashoutState>(
    ({ cashoutModule }) => cashoutModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    cashoutToVoucher: (amount: any) =>
      cashoutToVoucherAsync(dispatch, amount),
    cashoutToBankAccount: (req: CashoutModel) => 
      cashoutToBankAccountAsync(dispatch, req)
    };
};

export { useCashoutState };
