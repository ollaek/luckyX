import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "./AboutUs.scss";
const AboutUs = ({ history }) => {
  return (
    <>
      {/* <div className="parallax-body">
      <div className="fixed-div">
      <p>
                    With partnerships with more than 500+ of your favorite
                    brands, we made sure that Lucky discounts will cover all of
                    your essentials, such as clothes, groceries, electronics,
                    home appliances, fast food chains, restaurants and much
                    more, and that you can enjoy Lucky offers both in the stores
                    and in the comfort of your home by ordering home delivery.
                  </p>
                  <p>
                    Lucky wallet will ease things for you. You will not need to
                    have cash with you, since you will simply add money to your
                    wallet and head to any of Lucky's stores and pay with your
                    wallet credit. Also, you'll get cashback on every
                    transaction.
                  </p>
                  <p>
                    In 2020, Lucky web cashback was introduced to the Egyptian
                    and international market. It is a free cashback rewards and
                    payments website that gives its users real cash for everyday
                    purchases when they shop and pay through the website, we
                    connect online stores with customers from around the world.
                    <br></br> Lucky provides thousands of ways for consumers to
                    get discounts or earn cash on their purchases by partnering
                    with more than 500 brands in Egypt & others worldwide.
                  </p>
      </div>
      <div className="fixed-img">
      <img
                      className=""
                      src={require("../../assets/img/mobile_parallax.png")}
                      alt="mobile_parallax"
                    />
        </div>
    </div>
     */}
      <div className="parallax">
        <NavBar history={history} />
        <div className="AboutUs page">
          <div className="AboutUs-row1 ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 ">
                  {/* <div className="parallax-container">
                      <div className="bgimg-1">

                      </div>
                      <div className="bgimg-2">

</div>
                  {/* <img className=" " src={require("../../assets/img/grey_circle.png")} alt="grey_circle" />
                  <img className=" mobile-parallax-img" src={require("../../assets/img/mobile_parallax.png")} alt="mobile_parallax" />
               
                  </div>  */}
                  <div className="p-relative text-center-sm">
                    <div className="parallax__layer parallax__layer--back ">
                      <img
                        className=" "
                        src={require("../../assets/img/grey_circle.png")}
                        alt="grey_circle"
                      />
                    </div>
                    {/* parallax__layer parallax__layer--base */}
                    <div className="parallax__layer parallax__layer--base ">
                      <img
                        className=""
                        src={require("../../assets/img/mobile_parallax.png")}
                        alt="mobile_parallax"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-relative ">
                  {/* parallax__layer parallax__layer--back */}
                  <div className="">
                    <h2 className="h2-text animated fadeIn ">About Lucky</h2>
                    <h4 className="h4-text  animated fadeIn delay-1s">
                      Lucky is the one application that will give you
                      <br></br>the chance to get awesome discounts, offers,
                      <br></br>and cashbacks on every transaction for FREE!
                    </h4>
                    <div className="animated fadeIn delay-2s ">
                      <p>
                        In 2020, Lucky web cashback was introduced to the
                        Egyptian and international market. 
                      </p>
                      <p>
                      It is a free cashback
                        rewards and payments website that gives its users real cash for everyday
                        purchases when they shop and pay through the website. 
                      </p>
                      <p>We
                        connect online stores with customers from around the
                        world.</p>
                      <p>
                        Lucky provides thousands of ways for consumers to get
                        discounts or earn cash on their purchases by partnering
                        with more than 500 brands in Egypt & others worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="m-auto">
                  <img
                    className="scroll-down hvr-wobble-vertical"
                    src={require("../../assets/img/svg/scroll_down.svg")}
                    alt="scroll_down"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="AboutUs-row2 ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <h2 className="h2-text animated fadeIn delay-2s">How does it work?</h2>
                  <div className="animated fadeIn delay-2s">

                 
                  <p>
                    We help you save money and cashbacks on every transaction
                    you make. Sign up now as the first step.
                  </p>
                  <p>
                    Shop till you drop, It's very easy to earn money from your
                    everyday purchases and the more you shop online, the more
                    you will save and earn in the form of cashback. Once logged
                    in, click into the search box and enter the retailer you
                    wish to shop with.The next step is to click their logo or
                    offer. You will be shown all deals available so all you need
                    to do at this point is click one of the Shop now buttons.
                  </p>
                  <p>
                    You will then be redirected over to your chosen retailer
                    after which you would complete your purchase normally.
                  </p>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <div className="parallax2 text-center">
                    <div className="parallax__layer2 parallax__layer--back2">
                      <img
                        className="w-440"
                        src={require("../../assets/img/grey_circle2.png")}
                        alt="grey_circle"
                      />
                    </div>
                    <div className="parallax__layer2 parallax__layer--base2">
                      <img
                        className=""
                        src={require("../../assets/img/DesktopHome_img.png")}
                        alt="mobile_parallax"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-12 col-md-3 m-auto">
                  <button className="btn btn-primary btn-block">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default AboutUs;
