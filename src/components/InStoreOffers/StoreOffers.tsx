import React from "react";
import StoreOffer from "./StoreOffer/StoreOffer";
import { InfiniteScroll } from "react-simple-infinite-scroll";

const StoreOffers = (props:any) => {
  console.log(props);
  return (
    <>
        <InfiniteScroll
          throttle={100}
          threshold={300}
          isLoading={<div>Loading</div>}
          hasMore={(props.Offers.length < props.TotalCount) ? true : false}
          onLoadMore={props.LoadMore()}
        >
          <div className="row">
            {props.Offers.map(offer => {
              return (
                <div className="col-12 col-lg-4 " key={offer.OfferId}>
                  <StoreOffer Offer={offer} />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
    </>
  );
};

export default StoreOffers;
