import React, { useEffect, useState } from "react";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import Transactions from "./Transactions";

import { useWalletState } from "./Hook";
import { useConfigState } from "../shared/configHook";

import "./Wallet.scss";
import Loader from "../shared/Loader/Loader";
import { LinkContainer } from "react-router-bootstrap";

const Wallet = ({ history }) => {
  const {
    balance,
    getBalance,
    transactions,
    totalCount,
    getTransactions,
    getMoreTransactions,
    isLoading
  } = useWalletState();
  const { configs, getConfig } = useConfigState();
  useEffect(
    () => {
      if(!configs) getConfig();
    },
    // eslint-disable-next-line
    []
  );
  const [page, setPage] = useState(0);

  useEffect(
    () => {
      getBalance();
      getTransactions({
        pageSize: 10,
        pageIndex: 0
      });
      setPage(page + 1);
    },
    // eslint-disable-next-line
    []
  );

  const LoadMore = () => {
    getMoreTransactions({ pageSize: 10, pageIndex: page });
    setPage(page + 1);
  };
  return (
    <>
      <NavBar history={history} />
      <section className="wallet-section">
        {balance && <WalletSection balance={balance} configs={configs}/>}
        <div className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-auto">
                <div className="wallet-body">
                  {transactions && (
                    <Transactions
                      transactions={transactions}
                      TotalCount={totalCount}
                      LoadMore={() => LoadMore}
                      isLoading={isLoading}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && !transactions && <Loader />}
      <Footer />
    </>
  );
};

const WalletSection = props => {
  
  return (
    <div className="wallet-heading">
      <div className="wallet-cash_ballance">
        <div className="wallet-row justify-content-between">
          <p className="text-bold ">Cash Balance </p>
          <LinkContainer to="/Cashout">
            <button className="btn btn-primary">
              <img
                src={require("../../assets/img/svg/cashout_icon.svg")}
                alt="Cashout Icon"
              />
              Request Cashout
            </button>
          </LinkContainer>
        </div>
        <div className="wallet-row">
          <img src={require("../../assets/img/svg/wallet.svg")} alt="wallet" />
          <h2 className="h2-text">EGP {props.balance.TotalBalance}</h2>
        </div>
        <p>Including EGP {props.balance.TotalCashback} Cashbacks</p>
        <p className="text-muted">
          To cashout you must earn at least of EGP{" "}
          {props.configs && props.configs.WALLET_minimumBalanceToCashOut}
        </p>
      </div>
    </div>
  );
};

export default Wallet;
