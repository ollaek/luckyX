import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../InStoreOffer/InStoreOffer.scss";

const InStoreOffer = () => {
    return (
        <>
        
     <div className="InstoreOffer">
     <LinkContainer to={`/InStoreOfferDetails/12`} >
            <Card className="InstoreOffer-card">
              <Card.Header>
                <img src={require("../../../assets/img/cook-door-logo.png")} alt=""/>
                <div>
                  <Card.Title>Cook Door</Card.Title>
                  <p className="card-text">Food & Beverage</p>
                </div>
              </Card.Header>
              <Card.Img src={require("../../../assets/img/offer-cookdoor.jpg")} alt=""/>
              <Card.Body>
                <div className="dicount-row">
                  <button type="button" className="btn btn-outline-primary btn-rounded">Discount</button>
                  <div>
                    <i className="far fa-star mr-2"></i>200 Favourites
    </div>
                </div>
                <Card.Title>10% on your total invoice</Card.Title>
                <Card.Text>Exp. december 31, 2019</Card.Text>
              </Card.Body>
            </Card>
            </LinkContainer>
          </div>         
         
        </>
      );
};

export default InStoreOffer;