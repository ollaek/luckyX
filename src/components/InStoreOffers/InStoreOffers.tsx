import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../shared/Footer/Footer";
import Filteration from "./Filteration/Filteration";
import StoreOffers from "./StoreOffers";
import { useOnlineCashbacksState } from "./Hook";

import { Breadcrumb } from "react-bootstrap";
import "../InStoreOffers/Filteration/Filteration.scss";

const InStoreOffers = () => {
  const [page, setPage] = useState(0);
  const {
    Areas,
    getAreas,
    getOffers,
    getMoreOffers,
    Offers,
    TotalCount
  } = useOnlineCashbacksState();
  useEffect(
    () => {
      debugger;
      getOffers({ pageSize: 9, pageIndex: page });
      getAreas();
      setPage(page + 1);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      debugger;
    },
    // eslint-disable-next-line
    [Offers]
  );

  const LoadMore = () => {
    alert('hi2');
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
              {Areas && <Filteration Areas={Areas} />}
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
                  <StoreOffers Offers={Offers} TotalCount={TotalCount} LoadMore={() => LoadMore}/>
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
