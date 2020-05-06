import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "./FAQs.scss";
const FAQs = ({ history }) => {
  return (
    <>
      <NavBar history={history} />
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
                    <h3 className="h3-text"> Cashbacks</h3>
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
                  {/* CASHBACKS tab */}
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
                            The list of excluded items or categories varies by
                            merchant. Please visit the store's detail page for
                            the merchant you are interested in for details on
                            exclusions and limitations.
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
                          <div className="card-body">
                            There is never a limit on Cashback earnings. Please
                            note that our site is intended for personal
                            (non-commercial) use only and violations of this
                            policy may result in sanctions against your account
                            and/or forfeited Cashback.
                          </div>
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
                            Can I still earn Cashback from a merchant that has
                            been removed from your site ?
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse "
                          aria-labelledby="headingFour"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Merchants are always being added and removed from
                            our site. If a merchant you shopped at prior is no
                            longer displayed, then that means we are no longer
                            offering Cashback for purchases for that merchant.
                            However you will always find an alternative in our
                            website for other similar merchants offering the
                            same product categories.
                          </div>
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
                            Why didn't my purchase qualify for Cashback?
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Please refer to the specific merchant page, as some
                            merchants have exclusions or restrictions on
                            Cashback. If that is not the case please note that
                            modifying the order in any way, including
                            returning/exchanging/price-adjusting any part of the
                            order may result in forfeited Cashback. Lastly,
                            completing your purchase in-store or via telephone
                            generally results in forfeited Cashback. If your
                            purchase does not meet any of these criteria please
                            contact our customer support via the 'contact us'
                            button in our website.
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
                            How quickly should the Cashback be reflected in my
                            account?
                          </h4>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Your cashback will be displayed after you have made
                            your purchase as pending within maximum 24 hours.
                            However you will be available to cash out your
                            cashback earned from 45 to 90 days from your
                            purchase date depending on when will the merchant
                            approve your cashback. If you are facing delays in
                            having the cashback reflected in your account please
                            contact our customer support team through the
                            'Contact us' button.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingSeven">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSeven"
                            aria-controls="collapseSeven"
                          >
                            <p className="item-num h4-text">1.7</p>
                            How quickly should the Cashback be reflected in my
                            account?
                          </h4>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse"
                          aria-labelledby="headingSeven"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Your cashback will be displayed after you have made
                            your purchase as pending within maximum 24 hours.
                            However you will be available to cash out your
                            cashback earned from 45 to 90 days from your
                            purchase date depending on when will the merchant
                            approve your cashback. If you are facing delays in
                            having the cashback reflected in your account please
                            contact our customer support team through the
                            'Contact us' button.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ACCOUNT tab */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div id="accordion2">
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
                            How do I change my email address?
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            To change any "locked" fields, including email
                            address,please visit the profile tab in the website
                            and follow the steps to edit the information you
                            want.
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
                            How do I unsubscribe from your emails?
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            You can unsubscribe from our promotional newsletters
                            by clicking the "unsubscribe" link located at the
                            bottom of any Lucky newsletter.{" "}
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
                            How can i change my password?
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            <p>
                              If you know your password and are able to access
                              your account, please visit the My Profile page to
                              change your password.
                            </p>
                            <p>
                              If you are not able to access your account, please
                              click the "Forgot password?" link on the sign-in
                              page and a reset link will be sent to your email
                              address.
                            </p>
                          </div>
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
                            How do i join Lucky?
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse "
                          aria-labelledby="headingFour"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            Earning cashback with us and enjoying the best deals
                            is very simple. Just register through our website
                            using your email for FREE and we will right away be
                            part of our community. You will also receive a
                            welcome cashback bonus of X$.
                          </div>
                        </div>
                      </div>
                      {/* <div className="accordion-card">
                        <div className="card-head" id="headingFive">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                          
                            aria-controls="collapseFive"
                          >
                            <p className="item-num h4-text">1.5</p>
                            Can I deactivate my account?
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
Bla bla bla                          </div>
                        </div>
                      </div>
                    */}
                    </div>
                  </div>
                  {/* GENERAL tab */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div id="accordion3">
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
                            What withdrawal options do you support?
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            We offer three ways whereby you can redeem your
                            cash:<br></br>
                            <br></br>
                            1). On your Lucky wallet to be used on all our
                            merchants network whereby you can earn more
                            cashback.
                            <br></br>
                            2). Bank Transfer- however only cash out of a
                            minimum of X and a maximum of Y will be allowed per
                            transaction in addition to a monthly overall cap on
                            the amount of cash that can be cashed out via bank
                            transfers.
                            <br></br>
                            3). Amman Kiosks- cashout through this method will
                            require a minimum value of X and a maximum value of
                            Y.
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
                            How long does it take to receive my funds once I
                            submit the withdrawal request?
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            If you choose your cashback method to be Lucky
                            wallet then you will be able to use your funds
                            immediately. If you choose the Bank Transfer or the
                            Amman Kiosks option it may take up to 3 business
                            days processing time. In some cases, our
                            compliance/security team may require additional time
                            or information to process the request. Should you
                            receive an email from our support team regarding
                            your account or purchase, please promptly reply to
                            avoid any unnecessary delays in processing your
                            payout request.
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
                            What if I want to return or cancel an order?
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            You can cancel or return your order directly from
                            the merchant at any time within the grace period
                            however please note that the cashback pending at
                            your account will later be erased once the merchant
                            confirms that your purchase was not completed.
                          </div>
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
                            Can i use Lucky website to make purchases from
                            merchants outside my country?
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse "
                          aria-labelledby="headingFour"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            Yes, you definitely can as long as the merchant has
                            shipping to your country.
                          </div>
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
                            Why should i use Lucky web Cashback offers?
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            We make every penny you pay count! We will provide
                            you with offers on every category of product, be it
                            small or large. Everything you add to your cart, we
                            make it our priority that you get the best deal
                            which will make you money from your purchases.
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
                            What are the steps i need to take if i want to
                            withdraw my money through Amman?
                          </h4>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            Amman as a cashout method will only be available in
                            Egypt. Below are the steps you will need to follow
                            to get your cashback<br></br>
                            <br></br>
                            1).Choose Aman as your CashOut method.<br></br>
                            2).Enter your full name and mobile number.<br></br>
                            3). You will receive a verification code on your
                            mobile to complete your confirmation.<br></br>
                            4).Your request will later take up to 2 business
                            days and you shall receive confirmation once your
                            cashback is ready be cashed out through any of Amman
                            outlets.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingSeven">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSeven"
                            aria-controls="collapseSeven"
                          >
                            <p className="item-num h4-text">1.7</p>
                            What if Lucky doesn't have the store i want?
                          </h4>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse"
                          aria-labelledby="headingSeven"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            We always welcome new suggestions by our valued
                            customers. Please feel free to send us your
                            preference on our website through the 'Contact Us'
                            button on our website and we will surely do our best
                            to add it.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingEight">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseEight"
                            aria-controls="collapseEight"
                          >
                            <p className="item-num h4-text">1.8</p>
                            Will my transactions be secure if i use the links
                            provided by Lucky?
                          </h4>
                        </div>
                        <div
                          id="collapseEight"
                          className="collapse"
                          aria-labelledby="headingEight"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            We only partner with trusted merchants with high
                            levels of security and that are using Secure Socket
                            Layer (SSL) internet connections to protect your
                            transactions.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingNine">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseNine"
                            aria-controls="collapseNine"
                          >
                            <p className="item-num h4-text">1.9</p>
                            What is Lucky's privacy policy?
                          </h4>
                        </div>
                        <div
                          id="collapseNine"
                          className="collapse"
                          aria-labelledby="headingNine"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            Please visit the privacy policy section at the
                            bottom of our website to know our privacy policy or
                            click here.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingTen">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTen"
                            aria-controls="collapseTen"
                          >
                            <p className="item-num h4-text">1.10</p>
                            Will Lucky sell any information about me or my
                            purchasing behavior?
                          </h4>
                        </div>
                        <div
                          id="collapseTen"
                          className="collapse"
                          aria-labelledby="headingTen"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            You are safe with us. Lucky will not sell any
                            information about the users nor their purchasing
                            behaviors.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingEleven">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseEleven"
                            aria-controls="collapseEleven"
                          >
                            <p className="item-num h4-text">1.11</p>
                            Are Lucky web and Lucky app related?{" "}
                          </h4>
                        </div>
                        <div
                          id="collapseEleven"
                          className="collapse"
                          aria-labelledby="headingEleven"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Yes, they are related as Lucky app offers discounts
                            and Lucky website offers cashback on all online
                            purchases through the merchants provided.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingTwelve">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwelve"
                            aria-controls="collapseTwelve"
                          >
                            <p className="item-num h4-text">1.12</p>
                            Do I get charged before using Lucky?
                          </h4>
                        </div>
                        <div
                          id="collapseTwelve"
                          className="collapse"
                          aria-labelledby="headingTwelve"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            You don't get charged in any way before or after
                            using Lucky.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingThirteen">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThirteen"
                            aria-controls="collapseThirteen"
                          >
                            <p className="item-num h4-text">1.13</p>
                            Can I use Lucky website if I am outside of Egypt?
                          </h4>
                        </div>
                        <div
                          id="collapseThirteen"
                          className="collapse"
                          aria-labelledby="headingThirteen"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Yes, you can enjoy all cashbacks through Lucky
                            website
                          </div>
                        </div>
                      </div>

                      <div className="accordion-card">
                        <div className="card-head" id="headingFourteen">
                          <h4
                            className="mb-0 h4-text collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFourteen"
                            aria-controls="collapseFourteen"
                          >
                            <p className="item-num h4-text">1.14</p>
                            How to get the latest offers and discounts?
                          </h4>
                        </div>
                        <div
                          id="collapseFourteen"
                          className="collapse"
                          aria-labelledby="headingFourteen"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            You can subscribe to Lucky's newsletter to get all
                            new offers and discounts offered through Lucky
                          </div>
                        </div>
                      </div>
                    </div>
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
