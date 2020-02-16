import React,{useState} from 'react';

import '../OnlineCashbacks/OnlineCashbacks.scss';
import { AffeliateID, AffeliateName } from "../../helpers/shared/configs";

const RedirectionBanner = props => {
  const storeId = props.match.params.storeId;
  //const storeLogo = props.match.params.storeLogo;
  const userID = localStorage.getItem("Id");
  const [timeLeft, setTimeLeft] = useState(4);

  setInterval(()=>{
    setTimeLeft(timeLeft - 1);
  },1000)

 if(timeLeft === 0){
  window.location.assign(`https://go.arabclicks.com/aff_c?offer_id=${storeId}&aff_id=${AffeliateID}&source=${AffeliateName}&aff_sub=${userID}`);
 }

  return (
    <>
      <div className="sec-padding">
        <section className="container">
          <div className="row">
            <div className="col-lg-5 col-md-7 m-auto">
              <div className="redirection-card">
                <div className="cardImg m-auto">
                  <img
                    src={require("../../assets/img/goDaddy.png")}
                    alt="goDaddy"
                  />
                </div>
                <div className="my-4">
                  <img className="loading-animate"
                    src={require("../../assets/img/svg/loading.svg")}
                    alt="loading "
                  />
                </div>
                <h4 className="text-gray mb-3">You are seconds away from</h4>
                <h3 className="cashback-text mb-3">3.00% Cashback</h3>
                <h4 className="text-gray text-bold mb-3">Shopping cart must be empty</h4>
                <hr></hr>
                <p >
                  If not redirected within {timeLeft} seconds,
                  <br></br>
                  {/* eslint-disable-next-line */}
                  <a href="#" className="link-red">click here to redirect</a>
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
