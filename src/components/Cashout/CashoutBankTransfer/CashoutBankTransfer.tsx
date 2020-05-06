import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

import { useWalletState } from "../../Wallet/Hook";
import { useConfigState } from "../../shared/configHook";

import "../Cashout.scss";
import Loader from "../../shared/Loader/Loader";

const CashoutBankTransfer = ({ cashoutModel, setCashoutModel }) => {
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
        <Form>
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
      <div>
        <Form role="form" noValidate>
          <Form.Group controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              type="text"
              placeholder="John"
              value={cashoutModel.BankAccount.FullName}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    FullName: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bankName">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="E.g. HSBC"
              value={cashoutModel.BankAccount.BankName}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    BankName: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="accountHolderAddress">
            <Form.Label>Account Holder Address</Form.Label>
            <Form.Control
              name="accountHolderAddress"
              type="text"
              placeholder="E.g. 306 Corniche el Nil"
              value={cashoutModel.BankAccount.AccountHolderAddress}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    AccountHolderAddress: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="branchName">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control
              name="branchName"
              type="text"
              placeholder="E.g. HSCB Bank Egypt S.A.E."
              value={cashoutModel.BankAccount.BranchName}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    BranchName: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bankAddress">
            <Form.Label>Bank Address</Form.Label>
            <Form.Control
              name="bankAddress"
              type="text"
              placeholder="E.g. 987665"
              value={cashoutModel.BankAccount.BranchAddress}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    BranchAddress: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="accountNumber">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              name="accountNumber"
              type="number"
              placeholder="E.g. 0938373636353"
              value={cashoutModel.BankAccount.AccountNumber}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    AccountNumber: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="SWIFTCode">
            <Form.Label>SWIFT Code</Form.Label>
            <Form.Control
              name="SWIFTCode"
              type="number"
              placeholder="E.g. 987665"
              value={cashoutModel.BankAccount.SwiftCode}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    SwiftCode: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="IBAN">
            <Form.Label>IBAN</Form.Label>
            <Form.Control
              name="IBAN"
              type="number"
              placeholder="E.g. 0938373636353"
              value={cashoutModel.BankAccount.IBAN}
              onChange={e =>
                setCashoutModel({
                  ...cashoutModel,
                  BankAccount: {
                    ...cashoutModel.BankAccount,
                    IBAN: e.target.value
                  }
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid details
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};
export default CashoutBankTransfer;
