import React,{ useEffect } from "react";
import "./CashoutSuccess.scss";

import { useConfigState } from "../../shared/configHook";

const CashoutSuccessLucky = () => {
  const { configs, getConfig } = useConfigState();
  useEffect(() => {
    getConfig();
  },
  // eslint-disable-next-line
  []);
  return (
    <>
      <section className="cashout-success">
        <div className="cashout-success-img">
          <img
            src={require("../../../assets/img/cashout_success_img.png")}
            alt="Cashout Success"
          />
        </div>
        <h2 className="h2-text">Cashout successful! </h2>
        <h2 className="h2-text text-normal">
          Request has been successfully submitted
        </h2>
        <div className="cashout-success-text">
          <p>
            Request is under processing and this could take up to <br></br>X
            {configs && configs.CASHOUT_amanCashoutProcessNumberDays} working days
          </p>
          <p>Don’t forget to check your email for updates</p>
        </div>
        <div className="col-md-5 m-auto">
          <button className="btn btn-block btn-primary" type="button">
            Continue shopping
          </button>
        </div>
      </section>
    </>
  );
};
export default CashoutSuccessLucky;
