import actionCreatorFactory from 'typescript-fsa';

import { walletApi } from '../api/wallet';
import { asyncAction } from '../helpers';
import actionIds from './action-ids';

const actionCreator = actionCreatorFactory();

const getBalanceAction = actionCreator.async<any, string[], any>(actionIds.WALLET_GET_BALANCE);

const getTransactionsAction = actionCreator.async<any, string[], any>(actionIds.WALLET_GET_TRANSACTIONS);

const getMoreTransactionsAction = actionCreator.async<any, string[], any>(actionIds.WALLET_GET_MORE_TRANSACTIONS);

const getBalanceAsync = asyncAction(
    getBalanceAction,
    walletApi.getBalance
);

const getTransactionsAsync = asyncAction(
    getTransactionsAction,
    walletApi.getTransactions
);

const getMoreTransactionsAsync = asyncAction(
    getMoreTransactionsAction,
    walletApi.getTransactions
);

export {
    getBalanceAction,
    getBalanceAsync,
    getTransactionsAction,
    getTransactionsAsync,
    getMoreTransactionsAction,
    getMoreTransactionsAsync
};