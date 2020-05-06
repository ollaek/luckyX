import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { TopCategoriesModel } from "../../types";
import { Card } from "react-bootstrap";

type CashbackCategoryProp = {
  category: TopCategoriesModel;
};

const CashbacksCategory = ({ category }: CashbackCategoryProp) => {
  const CashBackIndecator = (id: number) => {
    if (id === 1) {
      return "%";
    } else if (id === 2) {
      return "EGP";
    }
  };
  return (
    <div className="col-md-4 col-12">
      <Card className="card-white">
        <Card.Body>
          <div className="card-img-circle">
            <Card.Img src={category.CategoryLogo} />
          </div>
          <div className="card-right">
            <Card.Title>{category.AffiliateCategoryName}</Card.Title>
            <Card.Text as={"span"}>
              <p className="text-gray">Get up to</p>
              <p className="cashback-text">
                {" "}
                {category.CashbackValue}
                {CashBackIndecator(category.CashbackIndicatorId)} Cashback
              </p>
            </Card.Text>
            <LinkContainer
              to={`/OnlineCashbacks?id=${category.AffiliateCategoryId}`}
            >
              <button className="btn btn-primary ">Shop Now</button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CashbacksCategory;
