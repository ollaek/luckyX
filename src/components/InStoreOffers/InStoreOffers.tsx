import React from "react";
import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import Filteration from "./Filteration/Filteration";
import { Breadcrumb } from "react-bootstrap";

const InStoreOffers = () => {
    return <div>
        <Header />
        <div className="sec-padding">
            <section className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <Filteration />
                    </div>
                    <div className="col-md-4 col-lg-9">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="page-title px-3">Online Cashbacks stores</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#">Online stores</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#" active>
                                        Men’s clothing
              </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-lg-4 InstoreOffer-card">
                                Hagaaaaaaaaaaar
                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
};

export default InStoreOffers;