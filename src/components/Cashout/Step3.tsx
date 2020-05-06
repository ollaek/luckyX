import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CashoutBankTransfer from "./CashoutBankTransfer/CashoutBankTransfer";
import CashoutAman from "./CashoutAman/CashoutAman";
import {
  StepperAction,
  StepperContent,
  StepperContext
} from "react-material-stepper";
import "./Cashout.scss";
import { STEP2 } from "./Step2";
import { useCashoutState } from "./cashoutHook";
export const STEP3 = "step-three";

const Step3 = () => {
  const cashoutObj = {
    amount: "",
    BankAccount: {
      FullName: "",
      BankName: "",
      AccountHolderAddress: "",
      BranchName: "",
      BranchAddress: "",
      SwiftCode: "",
      IBAN: ""
    }
  };
  const [cashoutModel, setCashoutModel] = useState(cashoutObj);
  const [selectedTab, setSelectedTab] = useState(1); // 1 for bank, 2 for aman
  const [error, setError] = useState("");
  const { cashoutToBankAccount, cashoutToVoucher } = useCashoutState();
  const { resolve, getData, goAt } = React.useContext(StepperContext);

  const data = getData(STEP3);

  const callbackResolve = () => {
    data.step4 = cashoutModel;
    resolve(data);
  };

  const validateModel = () => {
    if (cashoutModel.amount !== "") {
      if (selectedTab === 2) return true;

      if (selectedTab === 1) {
        const bankArray = Object.values(cashoutModel.BankAccount);

        if (bankArray.includes("")) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validateModel();
     if (isValid) {
       if (selectedTab === 1) {
    
         cashoutToBankAccount(cashoutModel).then((res:any) => {
           if(res.payload.result){
             if(res.payload.result.Data.Success){
               callbackResolve();
               data.step4 = cashoutModel;
             }else{
              if(res.payload.error.response){
                setError(res.payload.error.response.data.Errors[0].toString());
              }else{
                window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
              }
             }
           }else{
            if(res.payload.error.response){
              setError(res.payload.error.response.data.Errors[0].toString());
            }else{
              window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
            }
           }
         });
       } else if (selectedTab === 2) {
         //voucher (aman)
         cashoutToVoucher(cashoutModel.amount).then((res: any) => {
           if(res.payload.result){
             if(res.payload.result.Data.Success){
               callbackResolve();
               data.step4 = cashoutModel;
             }else{
              if(res.payload.error.response){
                setError(res.payload.error.response.data.Errors[0].toString());
              }else{
                window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
              }
             }
           }else{
            if(res.payload.error.response){
              setError(res.payload.error.response.data.Errors[0].toString());
            }else{
              window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
            }
           }
         });
       }
     } else {
      setError("please enter valid details");
     }
  };

  const back = () => goAt(STEP2);

  return (
    <StepperContent
      onSubmit={onSubmit}
      actions={
        <React.Fragment>
          {localStorage.getItem("IsMerged") === "false" && (
            <>
              <div className="item1">
                <StepperAction
                  className="link-grey text-bold btn-link"
                  type="button"
                  onClick={back}
                >
                  <img
                    className="mr-3"
                    src={require("../../assets/img/svg/back-arrow.svg")}
                    alt="back-arrow"
                  />
                  Back
                </StepperAction>
              </div>
              <div className="item2">
                <Link to="/Home" className="link-blue">
                  Cancel
                </Link>
              </div>
            </>
          )}
          <div className="item3 ml-auto">
            <StepperAction type="submit" className="btn btn-block btn-primary">
              Continue
            </StepperAction>
          </div>
        </React.Fragment>
      }
    >
      <>
        {localStorage.getItem("IsJustMerged") === "true" && (
           <div className="row">
           <div className="col-12">
             <p className="current_step-text">   Cashout <span >- Step 03/03</span></p>
           </div>
              </div>
        )}
        <div className="step3">
          <div className="step3-header flex-center">
            <div>
              <div className="img-bg mr-3">
                <img
                  src={require("../../assets/img/phone-payment-banner.png")}
                  alt="Phone"
                />
              </div>
            </div>
            <div>
              <p className="text-gray">Use the money in your wallet </p>
              <h3 className="h3-text">
                Pay with Lucky App and get free money!
              </h3>
              <div className="d-flex align-items-center">
                <p>Download the app</p>
                <Link to="/SignIn">
                  <img
                    src={require("../../assets/img/svg/apple-black.svg")}
                    alt="Apple Store"
                  />
                </Link>
                <Link to="/SignIn">
                  <img
                    src={require("../../assets/img/svg/android-black.svg")}
                    alt="Google Play"
                  />
                </Link>
              </div>
            </div>
          </div>
          <h4 className="h4-text">Select cashout method</h4>
          <div className="tabs">
            <Tabs
              id="cashoutMethod"
              activeKey={selectedTab}
              onSelect={k => setSelectedTab(k)}
            >
              <Tab
                eventKey="1"
                title="Bank transfer"
                onClick={() => setSelectedTab(1)}
              >
                <CashoutBankTransfer
                  cashoutModel={cashoutModel}
                  setCashoutModel={model => setCashoutModel(model)}
                />
              </Tab>
              <Tab eventKey="2" title="Aman" onClick={() => setSelectedTab(2)}>
                <CashoutAman
                  cashoutModel={cashoutModel}
                  setCashoutModel={model => setCashoutModel(model)}
                />
              </Tab>
            </Tabs>
            
            <div className="error error-message">{error}</div>
            {/* <form></form> */}
          </div>
        </div>
      </>
    </StepperContent>
  );
};
export default Step3;
