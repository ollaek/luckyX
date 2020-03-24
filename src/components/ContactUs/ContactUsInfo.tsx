import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./ContactUs.scss";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <section className="ContactUs-section">
                <div className="circle-center-img">
                  {/* <img
                    src={require("../../assets/img/contactUs_img.png")}
                    alt="Cashout Success"
                  /> */}
                  <img
                    src={require("../../assets/img/deactive_contactus.png")}
                    alt="Cashout Success"
                  />
                </div>
                <div className="text-center mb-2rem">
                  <h2 className="h2-text">Need support? We are here to help</h2>
                  <h4 className="h4-text">
                    Our team is available 7 days a week to assist you.
                  </h4>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="E.g. John Doe"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="+20 123456789"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      invalid
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select">
                      <option>Please choose a topic</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell us more</Form.Label>
                    <Form.Control as="textarea" placeholder="Text your message here..." rows="6" />
                  </Form.Group>
                  <div className="robot-row ">
            <Form.Check
              className=""
              custom
              label="I'm not a robot"
              type="checkbox"
              name="robot"   
              id="formHorizontalRobot"
            />

            <Button type="submit" className="col-12 col-md-3">
              Send
            </Button>
          </div>
       
                </Form>
              </section>
           
    </>
  );
};
export default ContactUs;
