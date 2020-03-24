import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import Filteration from "./Filteration/Filteration";
import InStoreOfferList from "./InStoreOfferList";
import { useInStoreOffersState } from "./Hook";

import { Breadcrumb } from "react-bootstrap";
import "../InStoreOffers/Filteration/Filteration.scss";

const InStoreOffers = () => {
  const [page, setPage] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [shouldFilter, setShouldFilter] = useState(false);

  const {
    isLoading,
    Cities,
    Categories,
    getFilterationData,
    getOffers,
    getMoreOffers,
    Offers,
    TotalCount,
    getFilteredOffers,
    getMoreFilteredOffers
  } = useInStoreOffersState();
  useEffect(
    () => {
      setPage(0);
      if (shouldFilter) {
        getFilteredOffers({
          RegionIds: [selectedArea],
          CategoryIds: [selectedCategory],
          pageSize: 9,
          pageIndex: page
        });
        setPage(page + 1);
        return;
      }
      getOffers({ pageSize: 9, pageIndex: page });
      getFilterationData();
      setPage(page + 1);
    },
    // eslint-disable-next-line
    [shouldFilter]
  );

  useEffect(
    () => {},
    // eslint-disable-next-line
    [Offers]
  );

  const LoadMore = () => {
    if (shouldFilter) {
      getMoreFilteredOffers({
        RegionIds: [selectedArea],
        CategoryIds: [selectedCategory],
        pageSize: 9,
        pageIndex: page
      });
      setPage(page + 1);
      return;
    }
    getMoreOffers({ pageSize: 9, pageIndex: page });
    setPage(page + 1);
  };

  return (
    <div>
      <Header />
      <div className="sec-padding">
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              {Cities && Categories && (
                <Filteration
                  Cities={Cities}
                  Categories={Categories}
                  setSelectedArea={area => setSelectedArea(area)}
                  setSelectedCategory={category =>
                    setSelectedCategory(category)
                  }
                  setShouldFilter={val => setShouldFilter(val)}
                  selectedArea={selectedArea}
                  selectedCategory={selectedCategory}
                  setPage={(page) => setPage(page)}
                />
              )}
            </div>
            <div className="col-12 col-lg-9">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="page-title">In-store offers</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Offers found</Breadcrumb.Item>
                    {/* <Breadcrumb.Item href="#" active>
                                        Men’s clothing
              </Breadcrumb.Item> */}
                  </Breadcrumb>
                </div>
              </div>

              {Offers && (
                <InStoreOfferList
                  Offers={Offers}
                  TotalCount={TotalCount}
                  LoadMore={() => LoadMore}
                  isLoading={isLoading}
                />
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default InStoreOffers;
