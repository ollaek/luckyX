import React from "react";
import { Link } from "react-router-dom";

import { TopStoresModel } from "../../types";

type CashbackStoreProp = {
  store: TopStoresModel;
};

const CashbacksStore = ({ store }: CashbackStoreProp) => {
  const userID = localStorage.getItem("Id");
  const CashBackIndecator = (id: number) => {
    if (id === 1) {
      return "%";
    } else if (id === 2) {
      return "EGP";
    }
  };
  
  return (
    <div className="col-6  col-lg-3 cashback-card">
      <div className="cashback-card-img" >
        <img src={store.MerchantLogoDb[0]} alt={store.MerchantNameDb[0]} />
        {/* <img src={require("../../assets/img/goDaddy.png")} alt="" /> */}
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text">
          {" "}
          {store.CashbackValue}
          {CashBackIndecator(store.CashbackIndicatorId)} Cashback
        </p>
      </p>
      {userID ? (
                  <Link
                    to={`/RedirectionBanner/${store.AffiliateMerchantId}/${store.MerchantLogoDb[0]}`}
                    className="btn btn-primary btn-block"
                  >
                    Shop Now
                  </Link>
                ) : (
                  <Link to="/SignIn" className="btn btn-primary btn-block">
                    Shop Now
                  </Link>
                )}
    </div>
  );
};

export default CashbacksStore;
