import React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { StoreDetailsModel } from '../../types';
import { Link } from 'react-router-dom';

type StoreProps = {
  store: StoreDetailsModel;
};

const CashbacksStoreDetailsData = ({ store }: StoreProps) => {
  const userID = localStorage.getItem("Id");


  const CashBackIndecator = (id: number) => {
    if (id === 1) {
      return "%";
    } else if (id === 2) {
      return "EGP";
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-10 m-auto">
        <div className="cashbackStores">
          <div className="row">
            <div className="col-md-12">
              <h3 className="page-title px-3">Online Cashbacks stores</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Online Stores</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Men’s clothing</Breadcrumb.Item>
  <Breadcrumb.Item active>{store.MerchantNameDb[0]}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="cashbackDetails-card">
                <div className=" card-basis">
                  <h4 className="filteration-text">
                    {store.MerchantNameDb[0]}
                  </h4>
                  <div className="cardImg">
                    <img
                      src={store.MerchantLogoDb[0]}
                      alt={store.MerchantNameDb[0]}
                    />
                  </div>
                </div>
                <div className="card-text card-basis">
                  <p className="text-gray">Before 3.00%</p>
                  <p className="cashback-text">
                    Up to {store.CashbackValue}
                    {CashBackIndecator(store.CashbackIndicatorId)}{" "}
                    Cashback
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="filteration-text">Cashbacks by category</h4>
              <table className="table table-striped table-sm">
                <tbody>
                  {store.AffiliateCategoryMerchants.map(categoty => {
                    return (
                      <tr>
                        <td>{categoty.AffiliateCategoryName[0]}</td>
                        <td>
                          {categoty.CashbackValue}
                          {CashBackIndecator(categoty.CashbackIndicatorId)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-12">
              <h4 className="filteration-text">Cashback terms</h4>
              <div>{store.TermsandConditions}</div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-12">
              <h4 className="filteration-text">
                About {store.MerchantNameDb[0]}
              </h4>
              <p>{store.AboutTheMerchant}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashbacksStoreDetailsData;
