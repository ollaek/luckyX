import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "./FAQs.scss";
const FAQs = () => {
  return (
    <>
      <NavBar />
      <div className="FAQs">
        <div className="FAQs-header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h1 className="h1-text">FAQs</h1>
              </div>
              <div className="col-md-8">
                <h2 className="h2-text">How can we help you today?</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="FAQs-body">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                 <h3 className="h3-text">  Cashbacks</h3>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                   <h3 className="h3-text">Account</h3>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <h3 className="h3-text">General</h3>
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div id="accordion">
                      <div className="accordion-card">
                        <div className="card-head" id="headingOne">
                          <h4
                            className="mb-0 h4-text "
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <p className="item-num h4-text">1.1</p>
                            How long does it take for my Cashback to become
                            available to withdraw?
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Cashback will be made available based on the date
                            the merchant confirms the purchase as eligible for
                            Cashback, this could take from 45 till 90 days.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-head" id="headingTwo">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                           
                            aria-controls="collapseTwo"
                          >
                            <p className="item-num h4-text">1.2</p>
                            Are any purchases not eligible for Cashback?
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod Bla
                            bla bla
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-head" id="headingThree">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                          
                            aria-controls="collapseThree"
                          >
                            <p className="item-num h4-text">1.3</p>
                            Is there a limit on the Cashback I can earn?
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="crd-body">Bla bla bla</div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingFour">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                          
                            aria-controls="collapseFour"
                          >
                            <p className="item-num h4-text">1.4</p>
                            an I still earn Cashback from a merchant that has been removed from your site ?
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse "
                          aria-labelledby="headingFour"
                          data-parent="#accordion"
                        >
                           <div className="card-body">Bla bla bla</div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-head" id="headingFive">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                          
                            aria-controls="collapseFive"
                          >
                            <p className="item-num h4-text">1.5</p>
                            hy didn't my purchase qualify for Cashback?
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                           Bla bla bla
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-head" id="headingSix">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            
                            aria-controls="collapseSix"
                          >
                            <p className="item-num h4-text">1.6</p>
                            How quickly should the Cashback be reflected in my account?
                          </h4>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordion"
                        >
                          <div className="card-body">Bla bla bla</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FAQs;
