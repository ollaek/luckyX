import React from "react";
import { Link } from "react-router-dom";

import Store from "../CashbacksStore/CashbacksStore";
import { TopStoresModel } from "../../types";

type TopCashbackStoresProp = {
  stores: TopStoresModel[];
};

const TopCashbacksStores = ({ stores }: TopCashbackStoresProp) => {
  return (
    <>
    <section className="cashbackStores-section sec-padding ">
      <div className="container ">
        <div className="sub-title-div">
          <h2 className="sub-title">Top cashbacks stores</h2>
        </div>
        <div className="row">
          {stores && stores.map(store => {
            return <Store store={store} key={store.MerchantId} />;
          })}
        </div>
        <div className="seeAllStors-text">
          <Link to="/OnlineCashbacks" className="hvr-icon-forward">
            SEE ALL THE STORES
            <img
              className="hvr-icon"
              src={require("../../assets/img/svg/Right-arrow-blue.svg")}
              alt="Right-arrow"
            />
          </Link>
        </div>
      </div>
    </section>
 </>
  );
};

export default TopCashbacksStores;
