import { AnyAction, isType } from "typescript-fsa";

import { getTransactionsAction, getBalanceAction, getMoreTransactionsAction } from "../actions";
import { ResponseModel, TWalletState, TransactionsModel, BalanceModel, TransactionsWithCountModel } from "../types";

const initialState: TWalletState = {
  isLoading: false,
  transactions: undefined,
  balance: undefined,
  totalCount: undefined
};

const walletReducer = (
  state: TWalletState = initialState,
  action: AnyAction
): TWalletState => {
  if (isType(action, getBalanceAction.started)) {
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getBalanceAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    return {
      ...state,
      balance: response.Data as BalanceModel,
      isLoading: false
    };
  }

  if (isType(action, getBalanceAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getTransactionsAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getTransactionsAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const transactionsWithCount = response.Data as TransactionsWithCountModel;
    return {
      ...state,
      transactions: transactionsWithCount.AffiliateTransactionList as unknown as TransactionsModel[],
      totalCount: transactionsWithCount.TotalCount,
      isLoading: false
    };
  }

  if (isType(action, getTransactionsAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  if (isType(action, getMoreTransactionsAction.started)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (isType(action, getMoreTransactionsAction.done)) {
    const response = (action.payload.result as unknown) as ResponseModel;
    const transactionsWithCount = response.Data as TransactionsWithCountModel;

    return {
      ...state,
      transactions: [...state.transactions, ...transactionsWithCount.AffiliateTransactionList] as unknown as TransactionsModel[],
      totalCount: transactionsWithCount.TotalCount,
      isLoading: false
    };
  }

  if (isType(action, getMoreTransactionsAction.failed)) {
    // Do error handling work if needed
    return {
      ...state,
      isLoading: false
    };
  }

  return state;
};

export { walletReducer };
