import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';


import Category from "../CashbacksCategory/CashbacksCategory";
import { TopCategoriesModel } from "../../types";

type TopCashbackCategoriesProp = {
  categories: TopCategoriesModel[];
};

const TopCashbacksCategories = ({ categories }: TopCashbackCategoriesProp) => {
  return (
    <section className="cashbackCategories-section sec-padding ">
      <div className="container ">
        <div className="sub-title-div">
          <h2 className="sub-title">Top cashbacks categories.</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="row">
              {/* {categories.map(category => {
                return <Category category={category} key={category.id} />;
              })} */}
              <div className="col-md-4 col-12">
                <Card className="card-white">
                  <Card.Body>
                    <div className="card-img-circle">
                      <Card.Img src={require("../../assets/img/category_img1.png")} alt="" />
                    </div>
                    <Card.Title>Women's clothing</Card.Title>
                    <Card.Text>
                      <p className="text-gray">Get up to</p>
                      <p className="cashback-text"> 10% Cashback</p>
                    </Card.Text>
                    <button className="btn btn-primary ">Shop Now</button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card className="card-white">
                  <Card.Body>
                    <div className="card-img-circle">
                      <Card.Img src={require("../../assets/img/category_img1.png")} alt="" />
                    </div>
                    <Card.Title>Women's clothing</Card.Title>
                    <Card.Text>
                      <p className="text-gray">Get up to</p>
                      <p className="cashback-text"> 10% Cashback</p>
                    </Card.Text>
                    <button className="btn btn-primary ">Shop Now</button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 col-12">
                <Card className="card-white">
                  <Card.Body>
                    <div className="card-img-circle">
                      <Card.Img src={require("../../assets/img/category_img1.png")} alt="" />
                    </div>
                    <Card.Title>Women's clothing</Card.Title>
                    <Card.Text>
                      <p className="text-gray">Get up to</p>
                      <p className="cashback-text"> 10% Cashback</p>
                    </Card.Text>
                    <button className="btn btn-primary ">Shop Now</button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="seeAllStors-text">

          <Link to="/">
            SEE ALL THE CATEGORIES{" "}
            <img
              src={require("../../assets/img/Right-arrow.png")}
              alt="all categories"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default TopCashbacksCategories;
