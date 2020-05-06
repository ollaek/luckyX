import React, { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

import OfferTabs from "./OfferTabs/OfferTabs";
import OfferImagesSlider from "./OfferImagesSlider/OfferImagesSlider";
import MoreOffers from "./MoreOffers/MoreOffers";
import Banner from "./OfferBanner/OfferBanner";

import { useInStoreOffersState } from "../Hook";

import "./StoreOfferDetails.scss";

const StoreOfferDetails = (props: any) => {
  const { Offer, getOfferById } = useInStoreOffersState();
  const [show, setShow] = useState(false);
  useEffect(
    () => {
      getOfferById(props.offerId);
    },
    // eslint-disable-next-line
    []
  );
  const convertDate = date => {
    const convertedDate = date.split("T")[0];
    return convertedDate;
  };
  return (
    <>
      {Offer && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-5">
              <OfferImagesSlider offerImages={Offer.OfferImages} />
            </div>
            <div className="col-12 col-lg-7">
              <div className="row">
                <div className="col-12">
                  <div className="offer-details">
                    <div className="offer-details_header">
                      <div className="flex-center">
                        <img
                          className="mr-3 offer-details_img"
                          src={Offer.MerchantLogoDb[0]}
                          alt=""
                        />
                        <div>
                          <h4 className="h4-text mb-0">{Offer.MerchantName}</h4>
                          <p className="">{Offer.CategoryName}</p>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary" onClick={() => setShow(true)}>Get Offer</button>
                      </div>
                    </div>
                    <div className="offer-details_body">
                      <div className="discount-row">
                        <div className="discount">
                          {Offer.OfferDiscountTypeName}
                        </div>
                        <div>
                          <i className="far fa-star mr-2"></i>
                          {Offer.NumberOfFavorites} Favourites
                        </div>
                      </div>
                      <div>
                        <h3 className="h3-text">{Offer.OfferTitle}</h3>
                        <p>{Offer.Description} </p>
                        <p className="card-text text-muted">
                          Exp. {convertDate(Offer.ExpireDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <OfferTabs
                    branches={Offer.Branches}
                    terms={Offer.TermsAndConditions}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className="sub-title-div">
                <h2 className="sub-title ">More offers from CookDoor</h2>
              </div>
              <MoreOffers MerchantId={Offer.MerchantId} />
            </div>
          </div>
        </div>
      )}
      <Banner show={show} setShow={setShow}/>
    </>
  );
};
export default StoreOfferDetails;
