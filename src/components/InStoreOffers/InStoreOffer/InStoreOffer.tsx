import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { InStoreOfferModel } from "../../../types";

import "./InStoreOffer.scss";
type OfferProp = {
  Offer: InStoreOfferModel;
};
const InStoreOffer = ({ Offer }: OfferProp) => {
  const convertDate = date => {
    const convertedDate = date.split("T")[0];
    return convertedDate;
  };
  return (
    <>
      <div className="InstoreOffer">
        <LinkContainer to={`/InStoreOfferDetails/${Offer.OfferId}`}>
          <Card className="InstoreOffer-card">
            <Card.Header>
              <img src={Offer.MerchantLogoDb[0]} alt={Offer.MerchantName} />
              <div>
                <Card.Title>{Offer.MerchantName}</Card.Title>
                <p className="card-text">{Offer.CategoryName}</p>
              </div>
            </Card.Header>
            {/* <Card.Img src={Offer.OfferImgDb[0]} alt="" /> */}
            <Card.Body>
              <div className="discount-row">
                <div className="discount"> {Offer.OfferDiscountTypeName}</div>
                <div>
                  <i className="far fa-star mr-2"></i>{Offer.NumberOfFavorites} Favourites
                </div>
              </div>
              
              <Card.Title>{Offer.OfferTitle}</Card.Title>
              <Card.Text>Exp. {convertDate(Offer.ExpireDate)}</Card.Text>
            </Card.Body>
          </Card>
        </LinkContainer>
      </div>
    </>
  );
};

export default InStoreOffer;
