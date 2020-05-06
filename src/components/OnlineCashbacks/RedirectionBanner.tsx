import React, { useState, useEffect } from "react";

import "../OnlineCashbacks/OnlineCashbacks.scss";
import { useConfigState } from "../shared/configHook";

const RedirectionBanner = props => {
  const { configs, getConfig } = useConfigState();

  const storeId = props.match.params.storeId;
  const storeLogo = localStorage.getItem("StoreLogo");
  const storeCashback = localStorage.getItem("StoreCashback");
  const userID = localStorage.getItem("Id");
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(
    () => {
      getConfig();
    },
    // eslint-disable-next-line
    []
  );

  if (configs) {
    if (timeLeft > 0) {
      setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      window.location.assign(
        `${configs.AffeliateBaseUrl}?offer_id=${storeId}&aff_id=${configs.AffeliateID}&source=${configs.AffeliateName}&aff_sub=${userID}`
      );
    }
  }
  return (
    <>
      <div className="sec-padding">
        <section className="container">
          <div className="row">
            <div className="col-lg-5 col-md-7 m-auto">
              <div className="redirection-card">
                <div className="cardImg m-auto justify-content-center">
                  <img src={storeLogo} alt="goDaddy" />
                </div>
                <div className="my-4">
                  <img
                    className="loading-animate"
                    src={require("../../assets/img/svg/loading.svg")}
                    alt="loading "
                  />
                </div>
                <h4 className="text-gray mb-3">You are seconds away from</h4>
                <h3 className="cashback-text mb-3">{storeCashback} Cashback</h3>
                <h4 className="text-gray text-bold mb-3">
                  Shopping cart must be empty
                </h4>
                <hr></hr>
                <p>
                  If not redirected within {timeLeft} seconds,
                  <br></br>
                  {/* eslint-disable-next-line */}
                  {configs && (
                    <a
                      href={`${configs.AffeliateBaseUrl}?offer_id=${storeId}&aff_id=${configs.AffeliateID}&source=${configs.AffeliateName}&aff_sub=${userID}`}
                      className="link-blue"
                    >
                      click here to redirect
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RedirectionBanner;
