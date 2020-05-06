export type BalanceModel = {
  TotalBalance: number;
  TotalCashback: number;
  AffiliateTotalCashback: number;
  UserCashbackPercentage: number;
  MaximumTopupValue: number;
};

export type TransactionsModel = {
  Type: number;
  MerchantName: string;
  TransactionStatus?: number;
  TransactionDate: Date;
  ExpirationDate?: any;
  Amount: number;
};

export type TransactionsWithCountModel = {
    TotalCount: number;
    AffiliateTransactionList: TransactionsModel[];
};

export type TWalletState = {
  isLoading: boolean;
  balance: BalanceModel;
  transactions: TransactionsModel[];
  totalCount: number;
};
