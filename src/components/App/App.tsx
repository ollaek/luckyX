import React, { useEffect } from "react";

import { useAppState } from "./hooks";
import Header from "../Header/Header";
import TopCashbackStores from "../TopCashbacksStores/TopCashbacksStores";
import TopCashbackCategories from "../TopCashbacksCategories/TopCashbacksCategories";
import AdsToStores from "../AdsToStores/AdsToStores";
import Footer from "../shared/Footer/Footer";
import Loader from "../shared/Loader/Loader"


const App = () => {
  const {
    isLoading,
    topStores,
    topCategories,
    getTopStores,
    getTopCategories
  } = useAppState();
  

  useEffect(
    () => {
      getTopStores();
      getTopCategories();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      <Header />
    
      <div>
        
        {isLoading ? <Loader /> : <TopCashbackStores stores={topStores} /> }
        {isLoading ? <Loader /> : <TopCashbackCategories categories={topCategories}/>}
        <AdsToStores />
      </div>
   
      <Footer />
    </div>
  );
};

export default App;
