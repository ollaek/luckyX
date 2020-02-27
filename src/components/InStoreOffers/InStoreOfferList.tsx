import React from "react";
import InStoreOffer from "./InStoreOffer/InStoreOffer";

const StoreOffers = () => {
    return (
        <>
            <div className="row">
                        <div className="col-12 col-lg-4 ">
                            <InStoreOffer />
                        </div>
                        <div className="col-12 col-lg-4 ">
                            <InStoreOffer />
                        </div>
                        <div className="col-12 col-lg-4 "> <InStoreOffer />
                        </div>
                        <div className="col-12 col-lg-4 "> <InStoreOffer />
                        </div>
                        <div className="col-12 col-lg-4 "> <InStoreOffer />
                        </div>
                        <div className="col-12 col-lg-4 "> <InStoreOffer />
                        </div>
            </div>

        </>
    );

};

export default StoreOffers;