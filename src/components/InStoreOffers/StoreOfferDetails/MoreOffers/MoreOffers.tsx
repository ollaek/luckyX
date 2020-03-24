import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import InStoreOffer from "../../InStoreOffer/InStoreOffer";

import "./MoreOffers.scss";
import { useInStoreOffersState } from "../../Hook";

const MoreOffers = (props: any) => {
  const { getOffersByMerchantId, RelatedOffers } = useInStoreOffersState();

  useEffect(
    () => {
      getOffersByMerchantId(props.MerchantId);
    }, 
    // eslint-disable-next-line
    [props.MerchantId]
  );
  return (
    <div className="more-offers">
      <Carousel className="">
        <Carousel.Item>
          {RelatedOffers && (
            <>
              {RelatedOffers.map(offer => {
                return (
                  <div className="col-12 col-lg-4 ">
                    <InStoreOffer Offer={offer} />
                  </div>
                );
              })}
            </>
          )}
        </Carousel.Item>
{/* 
        <Carousel.Item>
          {props.Offer && (
            <>
              <div className="col-12 col-lg-4 ">
                <InStoreOffer Offer={props.Offer} />
              </div>
              <div className="col-12 col-lg-4 ">
                <InStoreOffer Offer={props.Offer} />
              </div>
              <div className="col-12 col-lg-4 ">
                <InStoreOffer Offer={props.Offer} />
              </div>
            </>
          )}
        </Carousel.Item> */}

  
      </Carousel>
    </div>
  );
};

export default MoreOffers;
