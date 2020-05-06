import backEndBase from "./backEndBase";


const walletApi = {
    getBalance: () =>
    backEndBase
      .get(`Wallet/affilaite-Get-wallet-TotalBalance`)
      .then(res => res.data),
  getTransactions: (req:any) =>
    backEndBase
      .get(`AffiliateTransaction/get-affiliate-and-lucky-transactions?pageSize=${req.pageSize}&pageIndex=${req.pageIndex   }`)
      .then(res => res.data),
};

export { walletApi };
