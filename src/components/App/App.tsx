import React, { useEffect, useState } from "react";

import AdsToStores from "../AdsToStores/AdsToStores";
import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import Loader from "../shared/Loader/Loader";
import SignInModal from "../SignIn/SignInModal";
import TopCashbackCategories from "../TopCashbacksCategories/TopCashbacksCategories";
import TopCashbackStores from "../TopCashbacksStores/TopCashbacksStores";
import { useAppState } from "./hooks";
import { useConfigState } from "../shared/configHook";

const App = ({ history }) => {
  const { configs, getConfig } = useConfigState();
  const {
    isLoading,
    topStores,
    topCategories,
    getTopStores,
    getTopCategories
  } = useAppState();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("Token");

  useEffect(
    () => {
      if (!token) {
        setTimeout(() => {
          setShow(true);
        }, 1000);
      }
      getConfig();
    },
    // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
     
      if (configs) {
        getTopStores({
          LanguageId: configs.LanguageId,
          Featured: true,
          FeaturedMerchantsNumber: configs.FeaturedMerchantsNumber,
          pageSize: 8,
          pageIndex: 0
        });
        getTopCategories();
      }
    },
    // eslint-disable-next-line
    [configs]
  );
  return (
    <div>
      <Header history={history} />
      <SignInModal history={history} show={show} setShow={val => setShow(val)} />
      <div>
        {topStores && (
          <TopCashbackStores stores={topStores.AffiliateMerchantsList} />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <TopCashbackCategories categories={topCategories} />
        )}
        <AdsToStores />
      </div>
      {isLoading && <Loader />}
      <Footer />
    </div>
  );
};

export default App;
