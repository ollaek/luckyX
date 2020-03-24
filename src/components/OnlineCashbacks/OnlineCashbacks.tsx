import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import CashbacksStores from "./CashbackStores";
import FilterationByCategory from "./FilterationByCategory/FilterationByCategory";
import Footer from "../shared/Footer/Footer";
import { useOnlineCashbacksState } from "./Hook";
import Loader from "../shared/Loader/Loader";

import "./OnlineCashbacks.scss";

const OnlineCashbacks = (props:any) => {
  const {
    isLoading,
    catrgories,
    getCategories,
    stores,
    totalCount,
    getStores,
    getStoresByCategoryId,
    getMoreStoresByCategoryId,
    getMoreStores
  } = useOnlineCashbacksState();

  const [filteredId, setFilteredId] = useState(props.match.params.id);
  const [page, setPage] = useState(0);
  useEffect(
    () => {
      getCategories();
      if (filteredId) {
        getStoresByCategoryId({
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
    () => {},
    // eslint-disable-next-line
    [stores]
  );

  const LoadMore = () => {
    if (filteredId) {
      getMoreStoresByCategoryId({
        categoryId: filteredId,
        pageSize: 8,
        pageIndex: page
      });
      setPage(page + 1);
      return;
    }

    getMoreStores({
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
                  setPage={(pageNumber: any) => setPage(pageNumber)}
                />
              )}
            </div>
            <div className="col-md-9">
              {stores && (
                <CashbacksStores
                  stores={stores}
                  isLoading={isLoading}
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
