import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-row1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <h3 className="footer-heading ">
                                Get free money wherever you buy!
                        </h3>
                            <p className="footer-text">
                                Online and in-store offers on food, fashion, electronics<br></br>& more in 3,000+ stores
                        </p>

                        </div>
                        <div className="col-md-5 col-12">
                            <ul className="footer-links">
                                <li>
                                    <Link to="/OnlineCashbacks">Online Cashbacks</Link >
                                </li>
                                <li><Link to="/">In-store Offers</Link ></li>
                                <li><Link to="/">Profile</Link ></li>

                            </ul>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-7 col-12">

                            <div className="footer-text">
                                Find us:  <i className="fab fa-instagram mr-2 icon-font-size"></i><i className="fab fa-facebook-square icon-font-size"></i>

                                {/* <img src={require("../../../assets/img/Alt.png")} alt="Instgram"/> */}
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <p className="footer-tex mb-3">Get the app</p>
                            <div className=" row ">
                                <div className="col-12 col-md-6">
                                    <button className="btn btn-white footer-btn">
                                        <i className="fab fa-apple apple-icon"></i>
                                        <div >
                                            <span className="font-light">Download on </span>
                                            <p>Apple Store</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-12 col-md-6">
                                    <button className="btn btn-white footer-btn">
                                        <i className="fab fa-android apple-icon"></i>
                                        <div >
                                            <span className="font-light">Download on </span>
                                            <p>Google Play</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-row2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <p>© 2020 Lucky App All rights reserved.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>Terms of Service | Privacy Policy | FAQs</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;