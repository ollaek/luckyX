import "../CashbacksStore/CashbacksStore.scss";

import React from "react";

import { Link } from "react-router-dom";
import { InfiniteScroll } from "react-simple-infinite-scroll-patched";

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
        {/* <div className="row">
          <div className="col-md-12">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Online stores</Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>
                Men’s clothing
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div> */}
        {props.stores.length > 0 ? (
          <>
            <InfiniteScroll
              throttle={100}
              threshold={300}
              isLoading={props.isLoading}
              hasMore={(props.stores.length < props.totalCount) ? true : false}
              onLoadMore={props.LoadMore()}
            >
              <div className="row">
                {props.stores.map(store => {
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
                      <div className="card-text">
                        <p className="text-gray">Get up to</p>
                        <p className="cashback-text">
                          {store.CashbackValue}
                          {CashBackIndecator(store.CashbackIndicatorId)}{" "}
                          Cashback
                        </p>
                      </div>
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
            { props.isLoading && <div className="text-red text-center">Loading ...</div> }

          </>
        ):
      <div className="empty-results">
         <img  src={require("../../assets/img/empty-search.png")}
                  alt="Search empty results"/>
          <p className="h3-text">Sorry, we couldn’t find any offer</p>
        </div>
    

      }

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
