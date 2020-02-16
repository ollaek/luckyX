import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./FilterationByCategory.scss";
import { Link } from "react-router-dom";
import { CategoriesModel } from "../../../types";
import { useOnlineCashbacksState } from "../Hook";

type CategoriesProp = {
  categories: CategoriesModel[];
  selectedCategoryId: any;
};

const FilterationByCategory = ({categories, selectedCategoryId}:CategoriesProp) => {
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryId ? selectedCategoryId : null);
  const { getStoresByCategoryid } = useOnlineCashbacksState();
  const ApplyFilter = () => {
    if(selectedCategory) getStoresByCategoryid(selectedCategory);
  }

  return (
    <>
      <div className="filteration">
        <h4 className="filteration-text">Filter by category</h4>
        <Form>
          <div className="mb-3">
            {categories.map(category => {
              return (
                <>
                  <Form.Check
                    custom
                    label={category.AffiliateCategoryName}
                    type="radio"
                    name="globe"
                    key={category.AffiliateCategoryId}
                    id={category.AffiliateCategoryId.toString()}
                    onChange={() => setSelectedCategory(category.AffiliateCategoryId)}
                    checked={(selectedCategory === category.AffiliateCategoryId) ? true : false }
                  />
                  <hr className="hr-sm"></hr>
                </>
              );
            })}
            {/* <Form.Check
              custom
              label="Women’s clothing"
              type="radio"
              name="globe"
              id="formHorizontalRadios1"
            />
            <hr className="hr-sm"></hr>
            <Form.Check
              custom
              label="Men’s clothing"
              type="radio"
              name="globe"
              id="formHorizontalRadios2"
              checked
            />
            <hr className="hr-sm"></hr>
            <Form.Check
              custom
              label="Travel & Holidays"
              type="radio"
              name="globe"
              id="formHorizontalRadios3"
            /> */}
          </div>
        </Form>
        <div className="row filteration-buttons">
          <button className="btn btn-outline-primary col" onClick={() => setSelectedCategory(null)}>Clear</button>
          <button className="btn btn-primary col" onClick={() => ApplyFilter()}>Apply</button>
        </div>
      </div>

      <div className="filteration-mob">
        <div className="filteration-mob-heading">
          <h3>Online cashback stores</h3>
          <Link to="/">
            <img
              src={require("../../../assets/img/svg/filter.svg")}
              className="img-fluid"
              alt="Filter"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default FilterationByCategory;
