import { useDispatch, useSelector } from "react-redux";

import { TGlobalState } from "../..";
import {
  getBalanceAsync,
  getTransactionsAsync,
  getMoreTransactionsAsync
} from "../../actions";
import { TWalletState } from "../../types";

const useWalletState = () => {
  const state = useSelector<TGlobalState, TWalletState>(
    ({ walletModule }) => walletModule
  );
  const dispatch = useDispatch();
  return {
    ...state,
    getBalance: () => getBalanceAsync(dispatch),
    getTransactions: (req: any) => getTransactionsAsync(dispatch, req),
    getMoreTransactions: (req: any) => getMoreTransactionsAsync(dispatch, req)
  };
};

export { useWalletState };
