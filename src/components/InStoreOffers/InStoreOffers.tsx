import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import Filteration from "./Filteration/Filteration";
import InStoreOfferList from "./InStoreOfferList";
import { useInStoreOffersState } from "./Hook";

import { Breadcrumb } from "react-bootstrap";
import "../InStoreOffers/Filteration/Filteration.scss";
import Loader from "../shared/Loader/Loader";

const InStoreOffers = ({history}) => {
  const [page, setPage] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [shouldFilter, setShouldFilter] = useState(0);
 
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
      if (selectedArea || selectedCategory) {
        getFilteredOffers({
          RegionIds: [selectedArea],
          CategoryIds: [selectedCategory],
          pageSize: 9,
          pageIndex: 0
        });
        setPage(page + 1);
        return;
      }
      getOffers({ pageSize: 9, pageIndex: 0 });
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
    if (selectedCategory || selectedArea) {
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
      <Header history={history}/>
      <div className="sec-padding">
        <section className="container ">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              {Cities && Categories && (
                <Filteration
                  Cities={Cities}
                  Categories={Categories}
                  setSelectedArea={area => setSelectedArea(area)}
                  setSelectedCategory={category =>
                    setSelectedCategory(category)
                  }
                  setShouldFilter={val => setShouldFilter(val)}
                  shouldFilter={shouldFilter}
                  selectedArea={selectedArea}
                  selectedCategory={selectedCategory}
                  setPage={(page) => setPage(page)}
                />
              )}
            </div>
            <div className="col-12 col-md-8 col-lg-9 ">
              <div className="instore-sec">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="page-title ">In-store offers</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Offers found</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>

              {Offers.length > 0 ? (
                <InStoreOfferList
                  Offers={Offers}
                  TotalCount={TotalCount}
                  LoadMore={() => LoadMore}
                  isLoading={isLoading}
                />
              ):
              <div className="empty-results">
         <img  src={require("../../assets/img/empty-search.png")}
                  alt="Search empty results"/>
          <p className="h3-text">Sorry, we couldn’t find any offer</p>
        </div>}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {isLoading && !Offers && <Loader />}
    </div>
  );
};

export default InStoreOffers;
