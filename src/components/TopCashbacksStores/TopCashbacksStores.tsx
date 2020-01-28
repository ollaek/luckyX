import React from "react";
import { Link } from "react-router-dom";

import Store from "../CashbacksStore/CashbacksStore";
import { TopStoresModel } from "../../types/app";

type TopCashbackStoresProp = {
  stores: TopStoresModel[];
};

const TopCashbacksStores = ({ stores }: TopCashbackStoresProp) => {
  return (
    <section className="cashbackStores-section sec-padding ">
      <div className="container ">
      <div className="sub-title-div">
        <h2 className="sub-title">Top cashbacks stores.</h2>
        </div>
        <div className="row">
          {/* {stores.map(store => {
            return <Store store={store} key={store.id} />;
          })} */}
        <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 5 % Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
    <div className="col-md-3 cashback-card">
      <div className="cashback-card-img">
        <img src={require("../../assets/img/goDaddy.png")} alt="" />
      </div>
      <p className="card-text">
        <p className="text-gray">Get up to</p>
        <p className="cashback-text"> 3.00% Cashback</p>
      </p>

      <button className="btn btn-primary btn-block">Shop Now</button>
    </div>
        </div>
        <div className="seeAllStors-text">
          <Link to="/">
            SEE ALL THE STORES{" "}
            <img src={require("../../assets/img/Right-arrow.png")} alt="all stores"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCashbacksStores;
