import React from "react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <>
      <div className="no_transactions">
                  <img
                    src={require("../../assets/img/wallet_img.png")}
                    alt="wallet"
                  />
                  <h3 className="h3-text">
                    You haven’t made any transaction yet
                  </h3>
                  <Link to="/OnlineCashbacks" className="btn btn-primary col-sm-6 col-12">
                    Go Shopping
                  </Link>
                </div>
    </>
  );
};

export default EmptyState;
