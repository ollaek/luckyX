import React from "react";
import { Link } from "react-router-dom";


import Category from "../CashbacksCategory/CashbacksCategory";
import { TopCategoriesModel } from "../../types";

import "../TopCashbacksCategories/TopCashbacksCategories.scss";

type TopCashbackCategoriesProp = {
  categories: TopCategoriesModel[];
};

const TopCashbacksCategories = ({ categories }: TopCashbackCategoriesProp) => {
  return (
    <>
    <section className="cashbackCategories-section sec-padding ">
      <div className="container ">
        <div className="sub-title-div">
          <h2 className="sub-title">Top cashbacks categories</h2>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="row">
              {categories.map(category => {
                return <Category category={category} key={category.AffiliateCategoryId} />;
              })}
            </div>
          </div>
        </div>
        <div className="seeAllStors-text">

          <Link to="/" className="hvr-icon-forward">
            SEE ALL THE STORES
                                <img className="hvr-icon" src={require("../../assets/img/svg/Right-arrow.svg")}
              alt="Right-arrow"
            />
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};
export default TopCashbacksCategories;
