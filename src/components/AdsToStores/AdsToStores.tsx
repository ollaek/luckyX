import React from "react";
import { Link } from "react-router-dom";

import "./AdsToStores.scss";
const AdsToStores = () => {
    return (
        <section className="adsToStores-section" >
            <div className="container">
                <div className="row align-items-center">
                    {/* col-12 col-md-10 offset-md-1 */}
                    <div className="col-12 col-md-4">
                        <img className="d-none d-md-block" src={require("../../assets/img/mockup.png")} alt="mockup" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="heading-text">
                            Get up to 15% Cashback
                        at stores you love
                        </h2>
                        <div className="seeAllStors-text">
                            <Link to="/OnlineCashbacks" className="hvr-icon-forward justify-content-start">
                                SEE ALL THE STORES
                                <img className="hvr-icon" src={require("../../assets/img/svg/Right-arrow-blue.svg")}
                                    alt="Right-arrow"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdsToStores;