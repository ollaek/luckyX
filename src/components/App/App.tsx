import React, {
  useEffect,
  useState,
} from 'react';

import { LanguageId as langId, TopStoresCount } from '../../helpers';
import AdsToStores from '../AdsToStores/AdsToStores';
import Header from '../Header/Header';
import Footer from '../shared/Footer/Footer';
import Loader from '../shared/Loader/Loader';
import SignInModal from '../SignIn/SignInModal';
import TopCashbackCategories
  from '../TopCashbacksCategories/TopCashbacksCategories';
import TopCashbackStores from '../TopCashbacksStores/TopCashbacksStores';
import { useAppState } from './hooks';

const App = ({ history }) => {
  const {
    isLoading,
    topStores,
    topCategories,
    getTopStores,
    getTopCategories
  } = useAppState();
  const stores = topStores.AffiliateMerchantsList;

  const [show, setShow] = useState(false);
  const token = localStorage.getItem("Token");
  
  useEffect(
    () => {
      if (!token) {
        setTimeout(() => {
          setShow(true);
        }, 1000);
      }

      getTopStores({
        LanguageId: langId,
        Featured: true,
        FeaturedMerchantsNumber: TopStoresCount,
        pageSize: 8,
        pageIndex: 0
      });
      getTopCategories();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <Header />
      <SignInModal history={history} show={show} onShowChange={() => setShow} />
      <div>
        {isLoading ? <Loader /> : <TopCashbackStores stores={stores} />}
        {isLoading ? (
          <Loader />
        ) : (
            <TopCashbackCategories categories={topCategories} />
          )}
        <AdsToStores />
      </div>

      <Footer />
    </div>
  );
};

export default App;
