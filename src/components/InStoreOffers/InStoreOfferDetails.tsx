import React from "react";
import Header from "../Header/Header";
import StoreOfferDetails from "./StoreOfferDetails/StoreOfferDetails";
import Footer from "../shared/Footer/Footer";

const InStoreDetails = (props:any) => {
  const offerId = props.match.params.id;
  return (
    <div>
      <Header history={props.history}/>
      <div className="sec-padding">
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <h3 className="page-title px-3">In-store offers</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <StoreOfferDetails offerId={offerId}/>
            </div>
          </div>
        </section>
      </div>
  <Footer />
   </div>
  );
};

export default InStoreDetails;
