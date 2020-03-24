import React, { useState } from "react";

import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

import "./Profile.scss";
import { Form, Button } from "react-bootstrap";

const EditPassword = () => {
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
      <NavBar />
      <section className="profile-section">
        <div className="profile-heading">
          <h2 className="h3-text">New Password</h2>
        </div>
        <div className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Old password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      placeholder="Password"
                      defaultValue="123456"
                    />
                     <Form.Control.Feedback type="invalid">
                     Please enter a valid password
            </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>New password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      placeholder="Password"
                      defaultValue="123456"
                    />
                     <Form.Control.Feedback type="invalid">
                       Unverified
            </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control
                      type="password"
                      required
                      placeholder="Password"
                      defaultValue="123456"
                    />
                     <Form.Control.Feedback type="invalid">
                       Unverified
            </Form.Control.Feedback>
                  </Form.Group>
                  <div className="py-3 text-center">
                    <Button type="submit" className="col-md-6" >
                      Save Changes
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditPassword;
