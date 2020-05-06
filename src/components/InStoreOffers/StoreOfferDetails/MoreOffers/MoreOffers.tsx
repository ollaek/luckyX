import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import InStoreOffer from "../../InStoreOffer/InStoreOffer";
import _ from "lodash";

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
  const OffersArray = _.chunk(RelatedOffers, 3);

  return (
    <>
      <div className="more-offers d-none d-lg-block">
        <Carousel className="">
          {RelatedOffers &&
            OffersArray.map(listItems => {
              return (
                <Carousel.Item>
                  {listItems.map(offer => {
                    return (
                      <div className="col-12 col-lg-4 ">
                        <InStoreOffer Offer={offer} />
                      </div>
                    );
                  })}
                </Carousel.Item>
              );
            })}
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
      {/* More Offers in MOBILE */}
      <div className="more-offers d-block d-lg-none">
        <Carousel className="">
          {RelatedOffers &&
            RelatedOffers.map(offer => {
              return (
                <Carousel.Item>
                  <div className="col-12 col-lg-4 ">
                    <InStoreOffer Offer={offer} />
                  </div>
                </Carousel.Item>
              );
            })}
          
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
    </>
  );
};

export default MoreOffers;
