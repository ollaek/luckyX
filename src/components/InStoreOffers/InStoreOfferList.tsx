import React from "react";
import InStoreOffer from "./InStoreOffer/InStoreOffer";
import { InfiniteScroll } from "react-simple-infinite-scroll-patched";

const StoreOffers = (props:any) => {
    return (
        <>
            <InfiniteScroll
              throttle={100}
              threshold={300}
              isLoading={props.isLoading}
              hasMore={(props.Offers.length < props.TotalCount) ? true : false}
              onLoadMore={props.LoadMore()}
            >
              <div className="row">
                {props.Offers.map(offer => {
                  return (
                    <div className="col-12 col-lg-4 " key={offer.OfferId}>
                      <InStoreOffer Offer={offer} />
                    </div>
                  );
                })}
              </div>
            </InfiniteScroll>
            { props.isLoading && <div className="text-red">Loading ...</div> }
        </>
      );

};

export default StoreOffers;