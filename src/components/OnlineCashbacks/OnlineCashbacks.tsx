import React, { useEffect } from "react";

import Header from "../Header/Header";
import CashbacksStores from "./CashbackStores";
import FilterationByCategory from "./FilterationByCategory/FilterationByCategory";

import Footer from "../shared/Footer/Footer";

import "./OnlineCashbacks.scss";
import { useOnlineCashbacksState } from "./Hook";
import Loader from "../shared/Loader/Loader";

const OnlineCashbacks = props => {
  const categoryId = props.match.params.id;
  const { isLoading, catrgories, getCategories } = useOnlineCashbacksState();

  useEffect(
    () => {
      getCategories();
    },
    //
    []
  );

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
                  selectedCategoryId={categoryId}
                />
              )}
            </div>
            <div className="col-md-9">
              <CashbacksStores categoryId={categoryId ? categoryId : null} />
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
