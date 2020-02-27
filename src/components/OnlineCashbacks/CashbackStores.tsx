import "../CashbacksStore/CashbacksStore.scss";

import React from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { InfiniteScroll } from "react-simple-infinite-scroll";

const CashbacksStores = (props: any) => {
  const userID = localStorage.getItem("Id");

  const CashBackIndecator = (id: number) => {
    if (id === 1) {
      return "%";
    } else if (id === 2) {
      return "EGP";
    }
  };

  return (
    <>
      <div className="cashbackStores">
        <div className="row">
          <div className="col-md-12">
            <h3 className="page-title">Online Cashbacks stores</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Online stores</Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>
                Men’s clothing
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {props.stores && (
          <>
            <InfiniteScroll
              throttle={100}
              threshold={300}
              isLoading={props.isLoading}
              hasMore={(props.items.length < props.totalCount && props.totalCount !== 0) ? true : false}
              onLoadMore={props.LoadMore()}
            >
              <div className="row">
                {props.items.map(store => {
                  return (
                    <div
                      className="col-6 col-lg-4 cashback-card"
                      key={store.MerchantId}
                    >
                      <Link to={`/CashbackStoreDetails/${store.MerchantId}`}>
                        <div className="cashback-card-img">
                          <img
                            src={store.MerchantLogoDb[0]}
                            alt={store.MerchantNameDb[0]}
                          />
                        </div>
                      </Link>
                      <p className="card-text">
                        <p className="text-gray">Get up to</p>
                        <p className="cashback-text">
                          {store.CashbackValue}
                          {CashBackIndecator(store.CashbackIndicatorId)}{" "}
                          Cashback
                        </p>
                      </p>
                      {userID ? (
                        <Link
                          to={`/RedirectionBanner/${store.AffiliateMerchantId}`}
                          onClick={() => {
                            localStorage.setItem(
                              "StoreLogo",
                              store.MerchantLogoDb[0]
                            );
                          }}
                          className="btn btn-primary btn-block"
                        >
                          Shop Now
                        </Link>
                      ) : (
                        <Link
                          to="/SignIn"
                          className="btn btn-primary btn-block"
                        >
                          Shop Now
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </InfiniteScroll>
            {props.isLoading && <div>Loading ...</div>}
          </>
        )}

        {/* <div className="col-6 col-lg-4 cashback-card">
            <Link to="/CashbackStoreDetails">
              <div className="cashback-card-img">
                <img src={require("../../assets/img/goDaddy.png")} alt="" />
              </div>
            </Link>
            <p className="card-text">
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">3.00% Cashback</p>
            </p>
            <button className="btn btn-primary btn-block">Shop Now</button>
          </div>
          <div className="col-6  col-lg-4 cashback-card">
            <div className="cashback-card-img">
              <img src={require("../../assets/img/goDaddy.png")} alt="" />
            </div>
            <p className="card-text">
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">3.00% Cashback</p>
            </p>
            <button className="btn btn-primary btn-block">Shop Now</button>
          </div>
          <div className="col-6  col-lg-4 cashback-card">
            <div className="cashback-card-img">
              <img src={require("../../assets/img/goDaddy.png")} alt="" />
            </div>
            <p className="card-text">
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">3.00% Cashback</p>
            </p>
            <button className="btn btn-primary btn-block">Shop Now</button>
          </div>
          <div className="col-6  col-lg-4 cashback-card">
            <div className="cashback-card-img">
              <img src={require("../../assets/img/goDaddy.png")} alt="" />
            </div>
            <p className="card-text">
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">3.00% Cashback</p>
            </p>
            <button className="btn btn-primary btn-block">Shop Now</button>
          </div>
          <div className="col-6  col-lg-4 cashback-card">
            <div className="cashback-card-img">
              <img src={require("../../assets/img/category_img1.png")} alt="" />
            </div>
            <p className="card-text">
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">3.00% Cashback</p>
            </p>
            <button className="btn btn-primary btn-block">Shop Now</button>
          </div>
          <div className="col-6  col-lg-4 cashback-card">
            <div className="cashback-card-img">
              <img src={require("../../assets/img/goDaddy.png")} alt="" />
            </div>
            <p className="card-text">
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">3.00% Cashback</p>
            </p>
            <button className="btn btn-primary btn-block">Shop Now</button>
          </div>
          
             */}
      </div>
    </>
  );
};

export default CashbacksStores;
