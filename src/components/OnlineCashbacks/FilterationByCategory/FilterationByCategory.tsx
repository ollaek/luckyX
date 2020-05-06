import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./FilterationByCategory.scss";
import { CategoriesModel } from "../../../types";
import { slide as Menu } from "react-burger-menu";

type CategoriesProp = {
  categories: CategoriesModel[];
  selectedCategoryId: any;
  setCategoryId: any;
  setPage:any;
};

const FilterationByCategory = ({
  categories,
  selectedCategoryId,
  setCategoryId,
  setPage
}: CategoriesProp) => {
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryId ? selectedCategoryId : null
  );
  const ApplyFilter = () => {
    if (selectedCategory) {
      setPage(0);
      setCategoryId(selectedCategory);
    }
  };

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
                    key={"key"+category.AffiliateCategoryId}
                    id={category.AffiliateCategoryId.toString()}
                    onChange={() =>
                      setSelectedCategory(category.AffiliateCategoryId)
                    }
                    checked={
                      selectedCategory === category.AffiliateCategoryId
                        ? true
                        : false
                    }
                  />
                  <hr
                    key={category.AffiliateCategoryName}
                    className="hr-sm"
                  ></hr>
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
          <button
            className="btn btn-outline-primary col"
            onClick={() => {
              setPage(0);
              setSelectedCategory(null);
              setCategoryId(null);
            }}
          >
            Clear
          </button>
          <button className="btn btn-primary col" onClick={() => ApplyFilter()}>
            Apply
          </button>
        </div>
      </div>
      <div className="filteration-mob">
        <div className="filteration-mob-heading">
          <h3>Online cashback stores</h3>
          <div className={"nav-mob"}>
            <Menu right>
              <div className="filteration-header">
                <h3 className="title">Filters</h3>
              </div>
              <h4 className="filteration-text">Filter by category</h4>
              <Form>
                <div className="mb-3 w-100">
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
                          onChange={() =>
                            setSelectedCategory(category.AffiliateCategoryId)
                          }
                          checked={
                            selectedCategory === category.AffiliateCategoryId
                              ? true
                              : false
                          }
                        />
                        <hr
                          key={category.AffiliateCategoryName}
                          className="hr-sm"
                        ></hr>
                      </>
                    );
                  })}
                </div>
              </Form>
              <div className="row filteration-buttons">
                <button
                  className="btn btn-outline-primary col"
                  onClick={() => setSelectedCategory(null)}
                >
                  Clear
                </button>
                <button
                  className="btn btn-primary col"
                  onClick={() => ApplyFilter()}
                >
                  Apply
                </button>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterationByCategory;
