export type BankAccountModel = {
  FullName: string;
  BankName: string;
  AccountHolderAddress: string;
  BranchName: string;
  BranchAddress: string;
  SwiftCode: string;
  IBAN: string;
};

export type CashoutModel = {
  amount: any;
  BankAccount?: BankAccountModel;
};

export type TCashoutState = {
    isLoading: boolean
};
