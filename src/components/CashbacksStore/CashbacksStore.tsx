import React from "react";

import { TopStoresModel } from "../../types";

type CashbackStoreProp = {
  store: TopStoresModel;
};

const CashbacksStore = ({ store }: CashbackStoreProp) => {
  return (
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={store.logo} alt={store.name} />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> {store.cashback}% Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
  );
};

export default CashbacksStore;
