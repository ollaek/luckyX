import React, { useState } from "react";
import "../Filteration/Filteration.scss";
import { Accordion, Form, Card } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";

import { AreaModel } from "../../../types";

type FilterationProp = {
  Areas: AreaModel[];
};

const Filteration = ({ Areas }: FilterationProp) => {
  const [selectedAreas, setSelectedAreas] = useState([]);

  const onAreaSelect = (id, checked) => {
    if (checked && !selectedAreas.includes(id)) {
      setSelectedAreas([...selectedAreas, id]);
      return;
    }

    setSelectedAreas(selectedAreas.filter(area => area !== id));
  };

  return (
    <>
      <div className="inStoreFilteration filteration">
        <h4 className="filteration-text">Filter by location</h4>
        <Accordion defaultActiveKey="0">
          {Areas.map(area => {
            return (
              <div key={area.Id}>
                <Accordion.Toggle
                  as={Card.Header}
                  className="panel-heading"
                  eventKey={area.Id.toString()}
                >
                  <div>{area.Name}</div>
                  <img
                    src={require("../../../assets/img/svg/Chevron-Down.svg")}
                    alt="Chevron-Down"
                  />
                </Accordion.Toggle>
                <hr className="hr-sm"></hr>
                <Accordion.Collapse eventKey={area.Id.toString()}>
                  <div>
                    <Form>
                      <div className="mb-3">
                        {area.Regions.map(region => {
                          return (
                            <>
                              <Form.Check
                                key={region.Id}
                                custom
                                label={region.Name}
                                type="checkbox"
                                name="globe"
                                id={region.Id.toString()}
                                onChange={event => {
                                  onAreaSelect(region.Id, event.target.checked);
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
          })}{" "}
        </Accordion>
        <h4 className="filteration-text">Filter by category</h4>
        <Accordion defaultActiveKey="0">
          <div>
            <Accordion.Toggle
              as={Card.Header}
              className="panel-heading accordion-toggle"
              eventKey="0"
            >
              <div>Gifts & Accesories</div>
              <img
                src={require("../../../assets/img/svg/Chevron-Down.svg")}
                alt="Chevron-Down"
              />
            </Accordion.Toggle>
            <hr className="hr-sm"></hr>
            <Accordion.Collapse eventKey="0">
              <div>
                <Form>
                  <div className="mb-3">
                    <Form.Check
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
                    />
                    <hr className="hr-sm"></hr>
                    <Form.Check
                      custom
                      label="Travel & Holidays"
                      type="radio"
                      name="globe"
                      id="formHorizontalRadios3"
                    />
                  </div>
                </Form>
              </div>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle
              as={Card.Header}
              data-toggle="collapse"
              className="panel-heading"
              eventKey="1"
            >
              <div>Food & Beverages</div>
              <img
                src={require("../../../assets/img/svg/Chevron-Down.svg")}
                alt="Chevron-Down"
              />
            </Accordion.Toggle>
            <hr className="hr-sm"></hr>
            <Accordion.Collapse eventKey="1">
              <div>
                <Form>
                  <div className="mb-3">
                    <Form.Check
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
                    />
                    <hr className="hr-sm"></hr>
                    <Form.Check
                      custom
                      label="Travel & Holidays"
                      type="radio"
                      name="globe"
                      id="formHorizontalRadios3"
                    />
                  </div>
                </Form>
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
        <div className="row filteration-buttons">
          <button className="btn btn-outline-primary col">Clear</button>
          <button className="btn btn-primary col">Apply</button>
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
                  <div>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="panel-heading"
                      eventKey="0"
                    >
                      <div>Cairo</div>
                      <img
                        src={require("../../../assets/img/svg/Chevron-Down.svg")}
                        alt="Chevron-Down"
                      />
                    </Accordion.Toggle>
                    <hr className="hr-sm"></hr>
                    <Accordion.Collapse eventKey="0">
                      <div>
                        <Form>
                          <div className="mb-3">
                            <Form.Check
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
                            />
                            <hr className="hr-sm"></hr>
                            <Form.Check
                              custom
                              label="Travel & Holidays"
                              type="radio"
                              name="globe"
                              id="formHorizontalRadios3"
                            />
                            <hr className="hr-sm"></hr>
                          </div>
                        </Form>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
                <h4 className="filteration-text">Filter by category</h4>
                <Accordion defaultActiveKey="0">
                  <div>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="panel-heading accordion-toggle"
                      eventKey="0"
                    >
                      <div>Gifts & Accesories</div>
                      <img
                        src={require("../../../assets/img/svg/Chevron-Down.svg")}
                        alt="Chevron-Down"
                      />
                    </Accordion.Toggle>
                    <hr className="hr-sm"></hr>
                    <Accordion.Collapse eventKey="0">
                      <div>
                        <Form>
                          <div className="mb-3">
                            <Form.Check
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
                            />
                            <hr className="hr-sm"></hr>
                            <Form.Check
                              custom
                              label="Travel & Holidays"
                              type="radio"
                              name="globe"
                              id="formHorizontalRadios3"
                            />
                          </div>
                        </Form>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div>
                    <Accordion.Toggle
                      as={Card.Header}
                      data-toggle="collapse"
                      className="panel-heading"
                      eventKey="1"
                    >
                      <div>Food & Beverages</div>
                      <img
                        src={require("../../../assets/img/svg/Chevron-Down.svg")}
                        alt="Chevron-Down"
                      />
                    </Accordion.Toggle>
                    <hr className="hr-sm"></hr>
                    <Accordion.Collapse eventKey="1">
                      <div>
                        <Form>
                          <div className="mb-3">
                            <Form.Check
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
                            />
                          </div>
                        </Form>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
                <div className="row filteration-buttons">
                  <button className="btn btn-outline-primary col">Clear</button>
                  <button className="btn btn-primary col">Apply</button>
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
