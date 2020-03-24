import React from "react";
import { Tabs, Tab, Accordion, Card } from "react-bootstrap";
import "./OfferTabs.scss";

const OfferTabs = (props: any) => {
  return (
    <div className="tabs">
      <Tabs defaultActiveKey="Terms" id="uncontrolled-tab-example">
        <Tab eventKey="Terms" title="Terms">
          <div className="no-data">{props.terms[0]}</div>
        </Tab>
        <Tab eventKey="Branches" title={`Branches (${props.branches.length})`}>
          <div className="branches">
            <Accordion defaultActiveKey="0">
              {props.branches &&
                props.branches.map(branch => {
                  return (
                    <div key={branch.Id}>
                      <Accordion.Toggle
                        as={Card.Header}
                        className="panel-heading accordion-toggle"
                        eventKey={branch.Id}
                      >
                        <div> {branch.Name} </div>
                        <img
                          src={require("../../../../assets/img/svg/Chevron-Down.svg")}
                          alt="Chevron-Down"
                        />
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={branch.Id}>
                        <div className="card-body">{branch.Address}</div>
                      </Accordion.Collapse>
                    </div>
                  );
                })}
            </Accordion>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default OfferTabs;
