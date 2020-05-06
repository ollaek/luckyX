import React from "react";
import "./Cashout.scss";
import { StepperContent, StepperContext } from "react-material-stepper";
import CashoutSuccess from "./CashoutSuccess/CashoutSuccess";
import CashoutSuccessAman from "./CashoutSuccess/CashoutSuccessAman";

export const STEP4 = "step-four";

const Step4 = () => {
  const { getData } = React.useContext(StepperContext);
  localStorage.setItem("IsJustMerged", "false");

  const data = getData(STEP4);

  return (
    <StepperContent>
      <div className="step4">
        {data.cashoutModel.BankAccount ? (
          <CashoutSuccess data={data.step4} />
        ) : (
          <CashoutSuccessAman />
        )}
        {/* <h3 className="h3-text">Bank transfer Terms & Conditions:</h3>
        <ul>
          <li>Minimum amount = EGP X (configurable)</li>
          <li>
            You can cash out by voucher or bank transfer only the funds earned
            as web cashbacks
          </li>
          <li>Request can take up to X (configurable) days for processing</li>
        </ul> */}
      </div>
    </StepperContent>
  );
};
export default Step4;
