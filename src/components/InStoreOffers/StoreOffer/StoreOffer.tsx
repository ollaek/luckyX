import React from "react";
import "../StoreOffer/StoreOffer.scss";
import { Card } from "react-bootstrap";
import "../StoreOffer/StoreOffer.scss";

import { InStoreOfferModel } from "../../../types";

type OfferProp = {
  Offer: InStoreOfferModel;
};

const StoreOffer = ({ Offer }: OfferProp) => {
  const convertDate = date => {
    const convertedDate = date.split("T")[0];
    return convertedDate;
  };
  return (
    <>
      <div className="InstoreOffer">
        <Card className="InstoreOffer-card">
          <Card.Header>
            <img src={Offer.MerchantLogoDb[0]} alt={Offer.MerchantName} />
            <div>
              <Card.Title>{Offer.MerchantName}</Card.Title>
              <p className="card-text">{Offer.CategoryName}</p>
            </div>
          </Card.Header>
          <Card.Img src={Offer.OfferImgDb[0]} alt="" />
          <Card.Body>
            <div className="dicount-row">
              <button
                type="button"
                className="btn btn-outline-primary btn-rounded"
              >
                {Offer.OfferDiscountTypeName}
              </button>
              <div>
                <i className="far fa-star mr-2"></i>
                {Offer.NumberOfFavorites} Favourites
              </div>
            </div>
            <Card.Title>{Offer.OfferTitle}</Card.Title>
            <Card.Text>Exp. {convertDate(Offer.ExpireDate)}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default StoreOffer;
