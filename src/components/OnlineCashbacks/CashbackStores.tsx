import "../CashbacksStore/CashbacksStore.scss";

import React, { useEffect, useState } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { InfiniteScroll } from "react-simple-infinite-scroll";

import { useOnlineCashbacksState } from "./Hook";
import { TopStoresModel } from "../../types";

const CashbacksStores = (categoryId: any) => {
  const userID = localStorage.getItem("Id");
  const [items, setItems] = useState(new Array<TopStoresModel>());
  const {
    stores,
    isLoading,
    getStores,
    getStoresByCategoryid
  } = useOnlineCashbacksState();
  const [page, setPage] = useState(0);

  useEffect(
    () => {
      if (categoryId.categoryId) {
        if (stores.length > 0) {
          getStoresByCategoryid(categoryId.categoryId);
          setItems([...items, ...stores]);
        }
      } else {
        LoadMore();
      }
    },
    // eslint-disable-next-line
    []
  );

  const CashBackIndecator = (id: number) => {
    if (id === 1) {
      return "%";
    } else if (id === 2) {
      return "EGP";
    }
  };

  const LoadMore = () => {
    getStores({
      LanguageId: 0,
      Featured: false,
      FeaturedMerchantsNumber: 0,
      pageSize: 8,
      pageIndex: page
    });
    setItems([...items, ...stores]);
    setPage(page + 1);
    console.log(items);
  };

  return (
    <>
      <div className="cashbackStores">
        <div className="row">
          <div className="col-md-12">
            <h3 className="page-title px-3">Online Cashbacks stores</h3>
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
        <div className="row">
          <InfiniteScroll
            throttle={100}
            threshold={300}
            isLoading={isLoading}
            hasMore={true}
            onLoadMore={LoadMore}
          >
            {items.map(store => {
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
                      {CashBackIndecator(store.CashbackIndicatorId)} Cashback
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
                    <Link to="/SignIn" className="btn btn-primary btn-block">
                      Shop Now
                    </Link>
                  )}
                </div>
              );
            })}
          </InfiniteScroll>
          {isLoading && <div>Loading ...</div>}
          {/* {stores.map(store => {
            localStorage.setItem("StoreLogo", store.MerchantLogoDb[0]);

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
                    {CashBackIndecator(store.CashbackIndicatorId)} Cashback
                  </p>
                </p>
                {userID ? (
                  <Link
                    to={`/RedirectionBanner/${store.AffiliateMerchantId}`}
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
          })} */}
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
      </div>
    </>
  );
};

export default CashbacksStores;
