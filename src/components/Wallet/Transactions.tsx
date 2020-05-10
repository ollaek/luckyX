import React from "react";
import { InfiniteScroll } from "react-simple-infinite-scroll-patched";
import EmptyState from "./EmptyState";

const Transactions = props => {
  const convertDate = date => {
    const convertedDate = date.split("T")[0];
    return convertedDate;
  };

  const renderType = type => {
    if (type === 4 || type === 5 || type === 12 || type === 1 || type === 9) {
      return (
        <div className="img-div">
          <img
            src={require("../../assets/img/svg/cashback_icon.svg")}
            alt="Cashback"
          />
          <p>Cashback</p>
        </div>
      );
    } else if (type === 2) {
      return (
        <div className="img-div">
          <img
            src={require("../../assets/img/svg/cashback_icon.svg")}
            alt="Cashback"
          />
          <p>Topup</p>
        </div>
      );
    } else if (type === 3) {
      return (
        <div className="img-div">
          <img
            src={require("../../assets/img/svg/cashback_icon.svg")}
            alt="Cashback"
          />
          <p>Referral</p>
        </div>
      );
    } else if (type === 6) {
      return (
        <div className="img-div">
          <img
            src={require("../../assets/img/svg/refund_icon.svg")}
            alt="Refund"
          />
          <p>Refund</p>
        </div>
      );
    } else if (type === 13) {
      return (
        <div className="img-div">
          <img
            src={require("../../assets/img/svg/cashout_icon.svg")}
            alt="Cashout"
          />
          <p>Cashout</p>
        </div>
      );
    } else if (type === 7) {
      return (
        <div className="img-div">
          <img
            src={require("../../assets/img/svg/payment_icon.svg")}
            alt="Payment"
          />
          <p>Payment</p>
        </div>
      );
    }
  };

  const renderStatus = status => {
    if (status === 1) {
      return <p className="text-muted">Pending</p>;
    } else if (status === 2) {
      return <p className="text-muted">Approved</p>;
    } else if (status === 3) {
      return <p className="text-muted">Rejected</p>;
    } else if (status === 4) {
      return <p className="text-muted">Transferred</p>;
    }
  };

  const renderAmount = (type, status, amount) => {
    if (type === 4 || type === 5 || type === 12 || type === 1) {
      return (
        <div className="text-right">
          <p className="text-green">EGP {amount}</p>
          {renderStatus(status)}
        </div>
      );
    } else if (type === 6) {
      return (
        <div className="text-right">
          <p className="text-green">EGP {amount}</p>
        </div>
      );
    } else {
      return (
        <div className="text-right">
          <p className="text-muted">- EGP {amount}</p>
        </div>
      );
    }
  };
  return (
    <>
      <div className="transactions">
        {props.transactions.length > 0 && (
          <div className="transactions-header">
            <p className="text-bold">Transactions</p>
          </div>
        )}
        <div className="transactions-body">
         
            {props.transactions.length > 0 ? (
              props.transactions.map(transaction => {
                return (
                  <>
                  <InfiniteScroll
                  throttle={100}
                  threshold={300}
                  isLoading={props.isLoading}
                  hasMore={
                    props.transactions.length < props.TotalCount ? true : false
                  }
                  onLoadMore={props.LoadMore()}
                >
                  <div className="transaction-row" key={transaction.Id}>
                    <div className="flex-div">
                      {renderType(transaction.Type)}
                      <div>
                        <p>{transaction.MerchantName}</p>
                        <p className="text-muted">
                          {convertDate(transaction.TransactionDate)}
                        </p>
                      </div>
                    </div>
                    {renderAmount(
                      transaction.Type,
                      transaction.TransactionStatus,
                      transaction.Amount
                    )}
                  </div>
                  </InfiniteScroll>
                 {props.transactions.length > 0 && props.isLoading && <div className="text-red text-center">Loading ...</div> }
                      </>
                );
              })
            ) : (
              <EmptyState />
            )}
            {/* <div className="transaction-row">
              <div className="flex-div">
                <div className="img-div">
                  <img
                    src={require("../../assets/img/svg/cashback_icon.svg")}
                    alt="Cashback"
                  />
                  <p>Cashback</p>
                </div>
                <div>
                  <p>7/24perfumes</p>
                  <p className="text-muted">09/12/2019</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green">EGP 2.50</p>
                <p className="text-muted">Exp. 20-12-2019</p>
              </div>
            </div>
            <div className="transaction-row">
              <div className="flex-div">
                <div className="img-div">
                  <img
                    src={require("../../assets/img/svg/cashout_icon.svg")}
                    alt="Cashout"
                  />
                  <p>Cashout</p>
                </div>
                <div>
                  <p>7/24perfumes</p>
                  <p className="text-muted">09/12/2019</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-muted">- EGP 2.50</p>
              </div>
            </div>
            <div className="transaction-row">
              <div className="flex-div">
                <div className="img-div">
                  <img
                    src={require("../../assets/img/svg/payment_icon.svg")}
                    alt="Payment"
                  />
                  <p>Payment</p>
                </div>
                <div>
                  <p>7/24perfumes</p>
                  <p className="text-muted">09/12/2019</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-muted">- EGP 2.50</p>
              </div>
            </div>

            <div className="transaction-row">
              <div className="flex-div">
                <div className="img-div">
                  <img
                    src={require("../../assets/img/svg/refund_icon.svg")}
                    alt="Refund"
                  />
                  <p>Refund</p>
                </div>
                <div>
                  <p>7/24perfumes</p>
                  <p className="text-muted">09/12/2019</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green">EGP 2.50</p>
              </div>
            </div>*/}
         
        </div>
      </div>
    </>
  );
};

export default Transactions;
