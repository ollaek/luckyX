import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import CashbacksStores from "./CashbackStores";
import FilterationByCategory from "./FilterationByCategory/FilterationByCategory";

import Footer from "../shared/Footer/Footer";

import "./OnlineCashbacks.scss";
import { useOnlineCashbacksState } from "./Hook";
import Loader from "../shared/Loader/Loader";
import { TopStoresModel } from "../../types";

const OnlineCashbacks = props => {
  const {
    isLoading,
    catrgories,
    getCategories,
    stores,
    getStores,
    getStoresByCategoryid
  } = useOnlineCashbacksState();
  const [filteredId, setFilteredId] = useState(props.match.params.id);
  const [items, setItems] = useState(new Array<TopStoresModel>());
  const [shouldReset, setShouldReset] = useState(false);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(
    () => {
      getCategories();
      if (filteredId) {
        getStoresByCategoryid({
          categoryId: filteredId,
          pageSize: 8,
          pageIndex: page
        });
        setPage(page + 1);
        return;
      }

      getStores({
        LanguageId: 0,
        Featured: false,
        FeaturedMerchantsNumber: 0,
        pageSize: 8,
        pageIndex: page
      });
      setPage(page + 1);
    },
    // eslint-disable-next-line
    [filteredId]
  );

  useEffect(
    () => {
      if (shouldReset) {
        setItems(new Array<TopStoresModel>());
        setShouldReset(false);
      }
      if (stores && stores.AffiliateMerchantsList.length > 0) {
        setItems([...items, ...stores.AffiliateMerchantsList]);
        setTotalCount(stores.TotalCount);
      }
    },
    // eslint-disable-next-line
    [stores]
  );

  const LoadMore = () => {
    debugger;
    if (filteredId) {
      getStoresByCategoryid({
        categoryId: filteredId,
        pageSize: 8,
        pageIndex: page
      });
      setPage(page + 1);
      return;
    }

    getStores({
      LanguageId: 0,
      Featured: false,
      FeaturedMerchantsNumber: 0,
      pageSize: 8,
      pageIndex: page
    });

    setPage(page + 1);
  };

  return (
    <div>
      <Header />

      <div className="sec-padding">
        <section className="container">
          <div className="row">
            <div className="col-md-3">
              {catrgories && (
                <FilterationByCategory
                  categories={catrgories}
                  selectedCategoryId={filteredId}
                  setCategoryId={(id: any) => setFilteredId(id)}
                  setShouldReset={(val :any) => setShouldReset(val)}
                />
              )}
            </div>
            <div className="col-md-9">
              {stores && (
                <CashbacksStores
                  stores={stores}
                  isLoading={isLoading}
                  items={items}
                  totalCount={totalCount}
                  LoadMore={() => LoadMore}
                />
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      {isLoading && <Loader />}
    </div>
  );
};

export default OnlineCashbacks;
