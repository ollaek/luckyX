import React, { useState } from "react";

import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

import "./Profile.scss";
import { Form, Button } from "react-bootstrap";

const Profile = () => {
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
          <h2 className="h3-text">Profile</h2>
        </div>
        <div className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="validationCustom01">
                    <Form.Label>My Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="My Name"
                      defaultValue="John"
                    
                    />
                    
                    <Form.Control.Feedback type="invalid">Please enter a valid name</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>My email address</Form.Label>
                    <div className="verifiy-input">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      defaultValue="John@gmail.com"
                      className="verifiy-input"
                    />
                    <div className="verifiy-text">Verified</div>
                    </div>
                       <Form.Control.Feedback type="invalid">
                       Unverified
            </Form.Control.Feedback>
                     
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>My password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      defaultValue="123456"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label> Phone number</Form.Label>
                 <div className="verifiy-input">
                 <Form.Control type="tel" placeholder="+2 01 XXXXXXX"    />
                    <div className="unverifiy-text">Unverified</div>
                 </div>
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

export default Profile;
