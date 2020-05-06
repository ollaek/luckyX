import React from "react";
import { Modal } from "react-bootstrap";
import "./OfferBanner.scss";

const OfferBanner = (props: any) => {

  const handleClose = () => props.setShow(false);
  return (
    <>
      <div className="">
        <Modal
          className="cashout-error-modal"
          size="lg"
          show={props.show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <div className="row justify-content-center">
              <div className="col-5 text-center">
                <img
                  className=" "
                  src={require("../../../../assets/img/desktop-instore-banner.png")}
                  alt="desktop-instore-banner"
                />
              </div>
              <div className="col-lg-7">
                <div>
              
                  <p className="text-gray"> Unlimited offers!</p>
                  <h3 className="h3-text">
                  Download Lucky App to enjoy in-store and delivery discounts!
              </h3>
                
                </div>
                <div className="QRcode-row"> 
                <div >
                <img    src={require("../../../../assets/img/table-tent.png")}
                  alt="desktop-instore-banner"/>
                </div>
                  <div >
                  <p className="text-muted">AT YOUR FAVOURITE SHOPS</p>
                  <p>Scan the QR code and get<br></br> instant discounts!</p>
                  </div>
                </div>
                <div className="buttons-row">
                  <p className="text-gray mb-3">Get the app</p>
              <div className=" row ">
                <div className="col-12 col-lg-6">
                  <button className="btn btn-white footer-btn">
                    <img
                      src={require("../../../../assets/img/svg/apple.svg")}
                      alt="Apple Store"
                    />
                    <div>
                      <span className="font-light">Download on </span>
                      <p>Apple Store</p>
                    </div>
                  </button>
                </div>
                <div className="col-12 col-lg-6">
                  <button className="btn btn-white footer-btn">
                    <img
                      src={require("../../../../assets/img/svg/android.svg")}
                      alt="Google Play"
                    />
                    <div>
                      <span className="font-light">Download on </span>
                      <p>Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default OfferBanner;
