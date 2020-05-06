import React from "react";
import "../Filteration/Filteration.scss";
import { Accordion, Form, Card } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";

import { City, Category } from "../../../types";

type FilterationProp = {
  Cities: City[];
  Categories: Category[];
  setSelectedArea: Function;
  setSelectedCategory: Function;
  setShouldFilter: Function;
  selectedArea: any;
  selectedCategory: any;
  setPage: Function;
  shouldFilter:any;
};

const Filteration = ({
  Cities,
  Categories,
  setSelectedArea,
  setSelectedCategory,
  setShouldFilter,
  selectedArea,
  selectedCategory,
  setPage,
  shouldFilter
}: FilterationProp) => {
  


  const CategoryWithSubCategory = (category: Category) => {
    return (
      <Accordion defaultActiveKey="0">
        <div key={`${category.Id.toString()}${category.Name}`}>
          <Accordion.Toggle
            as={Card.Header}
            className="panel-heading accordion-toggle"
            eventKey={`${category.Id.toString()}${category.Name}`}
          >
            <div>{category.Name}</div>
            <img
              src={require("../../../assets/img/svg/Chevron-Down.svg")}
              alt="Chevron-Down"
            />
          </Accordion.Toggle>
          <hr className="hr-sm"></hr>
          <Accordion.Collapse
            eventKey={`${category.Id.toString()}${category.Name}`}
          >
            <div>
              <Form>
                <div className="mb-3">
                  {category.SubCategories.map(subCategory => {
                    if (
                      subCategory.SubCategories &&
                      subCategory.SubCategories.length > 0
                    ) {
                      return CategoryWithSubCategory(subCategory as Category);
                    } else {
                      return CategoryWithNoSubCategory(subCategory as Category);
                    }
                  })}
                </div>
              </Form>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    );
  };

  const CategoryWithNoSubCategory = (category: Category) => {
    return (
      <div key={`${category.Id.toString()}${category.Name}`}>
        <Form.Check
          custom
          key={`${category.Id.toString()}+${category.Name}`}
          label={category.Name}
          type="radio"
          name="category"
          id={"DeskTop category" + category.Id.toString()}
          value={category.Id}
          onChange={event => {
            setSelectedCategory(event.target.value);
          }}
          checked={+selectedCategory === category.Id}
        />
        <hr className="hr-sm"></hr>
      </div>
    );
  };

  return (
    <>
      <div className="inStoreFilteration filteration">
        <h4 className="filteration-text">Filter by location</h4>
        <Accordion defaultActiveKey="0">
          {Cities &&
            Cities.map(city => {
              return (
                <div key={city.Id}>
                  <Accordion.Toggle
                    as={Card.Header}
                    className="panel-heading"
                    eventKey={city.Id.toString()}
                  >
                    <div>{city.Name}</div>
                    <img
                      src={require("../../../assets/img/svg/Chevron-Down.svg")}
                      alt="Chevron-Down"
                    />
                  </Accordion.Toggle>
                  <hr className="hr-sm"></hr>
                  <Accordion.Collapse eventKey={city.Id.toString()}>
                    <div>
                      <Form>
                        <div className="mb-3">
                          {city.Regions.map(region => {
                            return (
                              <>
                                <Form.Check
                                  key={region.Id + region.Name}
                                  custom
                                  label={region.Name}
                                  type="radio"
                                  name="area"
                                  id={"DeskTop area"+region.Id.toString()}
                                  value={region.Id}
                                  checked={+selectedArea === region.Id}
                                  onChange={(e) => {
                                    setSelectedArea(e.target.value);
                                  }}
                                />
                                <hr key={region.Name} className="hr-sm"></hr>
                              </>
                            );
                          })}
                        </div>
                      </Form>
                    </div>
                  </Accordion.Collapse>
                </div>
              );
            })}
        </Accordion>

        <h4 className="filteration-text">Filter by category</h4>
        <Accordion defaultActiveKey="0">
          {Categories &&
            Categories.map(category => {
              if (category.SubCategories && category.SubCategories.length > 0) {
                return CategoryWithSubCategory(category);
              } else {
                return CategoryWithNoSubCategory(category);
              }
            })}
        </Accordion>

        <div className="row filteration-buttons">
          <button
            className="btn btn-outline-primary col"
            onClick={() => {
              setSelectedCategory(null);
              setSelectedArea(null);
              setShouldFilter(Math.random());
            }}
          >
            Clear
          </button>
          <button
            className="btn btn-primary col"
            onClick={() => {
              setShouldFilter(Math.random());
            }}
          >
            Apply
          </button>
        </div>
      </div>
      <div className="filteration-mob">
        <div className="filteration-mob-heading">
          <h3>In-store offers</h3>
          <div className={"nav-mob"}>
            <Menu right>
              <div className="filteration-header">
                <h3 className="title">Filters</h3>
              </div>
              <div className="filteration-body">
                <h4 className="filteration-text">Filter by location</h4>
                <Accordion defaultActiveKey="0">
                  {Cities &&
                    Cities.map(city => {
                      return (
                        <div key={city.Id}>
                          <Accordion.Toggle
                            as={Card.Header}
                            className="panel-heading"
                            eventKey={city.Id.toString()}
                          >
                            <div>{city.Name}</div>
                            <img
                              src={require("../../../assets/img/svg/Chevron-Down.svg")}
                              alt="Chevron-Down"
                            />
                          </Accordion.Toggle>
                          <hr className="hr-sm"></hr>
                          <Accordion.Collapse eventKey={city.Id.toString()}>
                            <div>
                              <Form>
                                <div className="mb-3">
                                  {city.Regions.map(region => {
                                    return (
                                      <>
                                        <Form.Check
                                          key={region.Id+region.Name}
                                          custom
                                          label={region.Name}
                                          type="radio"
                                          name="area"
                                          id={region.Id.toString()}
                                          value={region.Id}
                                          checked={+selectedArea === region.Id}
                                          onChange={(e) => {
                                            setSelectedArea(e.target.value);
                                          }}
                                        />
                                        <hr
                                          key={region.Name}
                                          className="hr-sm"
                                        ></hr>
                                      </>
                                    );
                                  })}
                                </div>
                              </Form>
                            </div>
                          </Accordion.Collapse>
                        </div>
                      );
                    })}
                </Accordion>

                <h4 className="filteration-text">Filter by category</h4>
                <Accordion defaultActiveKey="0">
                  {Categories &&
                    Categories.map(category => {
                      if (
                        category.SubCategories &&
                        category.SubCategories.length > 0
                      ) {
                        return CategoryWithSubCategory(category);
                      } else {
                        return CategoryWithNoSubCategory(category);
                      }
                    })}
                </Accordion>

                <div className="row filteration-buttons">
                  <button
                    className="btn btn-outline-primary col"
                    onClick={() => {
                      setPage(0);
                      setSelectedCategory(null);
                      setSelectedArea(null);
                      setShouldFilter(Math.random());
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => {
                      setShouldFilter(Math.random());
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filteration;
