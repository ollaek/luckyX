import "../OnlineCashbacks/OnlineCashbacks.scss";

import React, { useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import Loader from "../shared/Loader/Loader";
import CashbacksStoreDetailsData from "./CashbacksStoreSetailsData";
import { useOnlineCashbacksState } from "./Hook";

const CashbacksStores = props => {
  const storeId = props.match.params.id;
  const {
    isLoading,
    getStoreDetails,
    storeDetails
  } = useOnlineCashbacksState();

  useEffect(
    () => {
      getStoreDetails(storeId);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <div>
        <Header history={props.history}/>
        <div className="sec-padding">
          <section className="container">
            {storeDetails && <CashbacksStoreDetailsData store={storeDetails} />}
          </section>
        </div>
        <Footer />
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default CashbacksStores;
