import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

import "./Profile.scss";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useAccountState } from "../Cashout/accountHook";
import { Modal } from "react-bootstrap";
import "../Cashout/CashoutErrorModal/CashoutErrorModal.scss";

const Profile = ({ history }) => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { updateProfile } = useAccountState();
  const schema = Yup.object().shape({
    name: Yup.string().required("Please enter a valid name")
  });
  const name = localStorage.getItem("Name");

  return (
    <>
      <NavBar history={history} />
      <section className="profile-section">
        <div className="profile-heading">
          <div className="container">
            <div className="row">
              <div className=" col-md-7 m-auto">
                <div className="d-flex justify-content-between">
                  <h2 className="h3-text">Profile</h2>
                  <button
                    onClick={() => setShow(true)}
                    className="btn btn-link link-red p-0 m-0"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto">
                <Formik
                  initialValues={{
                    name
                  }}
                  onSubmit={values => {
                    updateProfile(values.name).then((res: any) => {
                      if (res.payload.error) {
                        const error = res.payload.error.response.data.Errors[0].toString();
                        setError(error);
                      } else {
                        history.push("/Home");
                      }
                    });
                  }}
                  validationSchema={schema}
                >
                  {props => {
                    const {
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      errors,
                      touched
                    } = props;
                    return (
                      <Form noValidate role="form" onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01">
                          <Form.Label>My name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="My name"
                            name="name"
                            autoComplete="test"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            isInvalid={!!errors.name && touched.name}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>My email address</Form.Label>
                          <div className="verifiy-input">
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              defaultValue={localStorage.Email}
                              className="verifiy-input"
                              disabled
                            />
                            {/* <div className="verifiy-text">Verified</div> */}
                          </div>
                          <Form.Control.Feedback type="invalid">
                            Unverified
                          </Form.Control.Feedback>
                        </Form.Group>
                        <LinkContainer to="/EditPassword">
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>My password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              defaultValue="123456"
                            />
                          </Form.Group>
                        </LinkContainer>
{/* Phone number that is hide for now */}
                        {/* <Form.Group controlId="formBasicPassword0">
                          <Form.Label> Phone number</Form.Label>
                          <div className="verifiy-input">
                            <Form.Control
                              type="tel"
                              placeholder="+2 01 XXXXXXX"
                              defaultValue={localStorage.Phone}
                              disabled
                            />*/}
                            {/* <div className="unverifiy-text">Unverified</div> */}
                          {/* </div>
                        </Form.Group>  */}
                        <div className="py-3 text-center">
                          <button
                            type="submit"
                            className="col-md-6  btn btn-primary"
                            disabled={
                              values.name === localStorage.getItem("Name") ||
                              values.name === ""
                            }
                          >
                            Save Changes
                          </button>
                          <div className="error error-message text-center"> {error}</div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LOG_OUT Modal */}
      <div className="">
        <Modal
          className="cashout-error-modal profile-modal"
          centered
          animation={true}
          show={show}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="row ">
              <div className="col-12">
                <h4 className="h4-text">You are logging out</h4>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="col-md-7 col-12"
              variant="primary"
              onClick={() => {
                localStorage.clear();
                history.push("/Home");
              }}
            >
             Log out
            </Button>
            <button
              className="btn btn-link link-blue col-md-7 col-12"
           
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
