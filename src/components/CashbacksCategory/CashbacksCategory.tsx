import React from "react";

import { TopCategoriesModel } from "../../types";
import { Card } from 'react-bootstrap';

type CashbackCategoryProp = {
  category: TopCategoriesModel
};

const CashbacksCategory = ({ category }: CashbackCategoryProp) => {

  return (
    <div className="col-md-4 col-12">
    <Card className="card-white">
        <Card.Body>
            <div className="card-img-circle">
                <Card.Img src={category.logo} alt={category.name}/>
            </div>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>
                <p className="text-gray">Get up to</p>
                <p className="cashback-text"> {category.cashback}% Cashback</p>
            </Card.Text>
            <button className="btn btn-primary ">Shop Now</button>
        </Card.Body>
    </Card>
</div>
  
  );
};

export default CashbacksCategory;