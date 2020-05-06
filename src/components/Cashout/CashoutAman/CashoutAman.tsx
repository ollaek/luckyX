import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

import { useWalletState } from "../../Wallet/Hook";
import { useConfigState } from "../../shared/configHook";

import "../Cashout.scss";
import Loader from "../../shared/Loader/Loader";

const CashoutAman = ({ cashoutModel, setCashoutModel }) => {
  const { getBalance, balance, isLoading } = useWalletState();
  const { getConfig, configs } = useConfigState();
  useEffect(
    () => {
      if (!configs) {
        getConfig();
      }
    }, // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
      if (configs && !balance) {
        getBalance();
      }
    }, // eslint-disable-next-line
    [configs]
  );

  return (
    <div>
      <div className="text-center">
        <Form noValidate role="form">
          <p className="text-muted">PLEASE FILL THE FORM TO CASH OUT</p>
          <h4 className="h4-text">How much do you want to cashout?</h4>
          <Form.Group controlId="formGridZip">
            <Form.Control
              type=""
              className="cashout-amount"
              placeholder="EGP 0.00"
              value={cashoutModel.amount}
              onChange={e =>
                setCashoutModel({ ...cashoutModel, amount: e.target.value })
              }
            />
            <Form.Text className="text-muted text-bold ">
              CURRENT WALLET BALANCE: EGP {balance && balance.TotalBalance}
            </Form.Text>
          </Form.Group>
          <p className="text-muted">
            You can cashout EGP{" "}
            {configs && configs.CASHOUT_totalMonthlyCashoutAmount} each month by
            bank transfer or Aman
          </p>
        </Form>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};
export default CashoutAman;
