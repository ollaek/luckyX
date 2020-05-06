import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import CashbacksStores from "./CashbackStores";
import FilterationByCategory from "./FilterationByCategory/FilterationByCategory";
import Footer from "../shared/Footer/Footer";
import { useOnlineCashbacksState } from "./Hook";
import Loader from "../shared/Loader/Loader";
import { useLocation } from "react-router-dom";

import "./OnlineCashbacks.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const OnlineCashbacks = (props:any) => {

  let query = useQuery();

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

  const [filteredId, setFilteredId] = useState( (query.get("id")) ? +query.get("id") : null);
  const searchTerm = query.get("searchTerm");
  const [page, setPage] = useState(0);
  useEffect(
    () => {
      
      getCategories();
      if (filteredId) {
        getStoresByCategoryId({
          categoryId: filteredId,
          pageSize: 8,
          pageIndex: 0,
          SearchKey: searchTerm ? searchTerm : null
        });
        setPage(page + 1);
        return;
      }

      getStores({
        LanguageId: 1,
        Featured: false,
        FeaturedMerchantsNumber: 0,
        pageSize: 8,
        pageIndex: 0,
        SearchKey: searchTerm ? searchTerm : null
      });
      setPage(page + 1);
    },
    // eslint-disable-next-line
    [filteredId, searchTerm]
  );

  useEffect(
    () => {},
    // eslint-disable-next-line
    [stores]
  );

  useEffect(
    () => {
    },
    // eslint-disable-next-line
    [searchTerm]
  );

  const LoadMore = () => {
    if (filteredId) {
      getMoreStoresByCategoryId({
        categoryId: filteredId,
        pageSize: 8,
        pageIndex: page,
        SearchKey: searchTerm ? searchTerm : null
      });
      setPage(page + 1);
      return;
    }

    getMoreStores({
      LanguageId: 1,
      Featured: false,
      FeaturedMerchantsNumber: 0,
      pageSize: 8,
      pageIndex: page,
      SearchKey: searchTerm ? searchTerm : null
    });

    setPage(page + 1);
  };

  return (
    <div>
      <Header history={props.history}/>

      <div className="sec-padding">
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              {catrgories && (
                <FilterationByCategory
                  categories={catrgories}
                  selectedCategoryId={filteredId}
                  setCategoryId={(id: any) => setFilteredId(id)}
                  setPage={(pageNumber: any) => setPage(pageNumber)}
                />
              )}
            </div>
            <div className="col-12 col-md-8 col-lg-9 ">
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
      {isLoading && page < 1 && <Loader />}
    </div>
  );
};

export default OnlineCashbacks;
