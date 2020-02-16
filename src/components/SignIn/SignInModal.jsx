import React from "react";

import { Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import FaceBookButton from "../shared/SocialLogin/FaceBookButton";
import { Link } from "react-router-dom";
import { useUserState } from "../shared/SocialLogin/Hook";

import { Form } from "react-bootstrap";

import GoogleButton from "../shared/SocialLogin/GoogleButton";
import "../SignIn/SignInModal.scss";

const SignInModal = ({show , onShowChange, history}) => {
  console.log(onShowChange);
  console.log(show);
  const { signIn } = useUserState();
  const signinValidationSchema = Yup.object().shape({
    password: Yup.string()
    .required("Please enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Please enter password that consist of at least 8 characters, number, special character, capital and small letters"
    ),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email")
  });
    return (
        <Modal  size="lg" show={show} onHide={onShowChange(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Register and get EGP 50 Bonus!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="modal-img">
              <img
                    src={require("../../assets/img/signUp_img.png")}
                    className="img-fluid"
                    alt=""
                  />
              </div>
              {/* <div className="signUp-img">
                <div className="img-container">
                  
                </div>
              </div> */}
            </div>
            <div className="col-md-6"> 
              <h2 className="title">Log In with</h2>
              <div className="flex-center">
                <GoogleButton history={history} onShowChange={onShowChange}/>
                <FaceBookButton history={history} onShowChange={onShowChange}/>
              </div>
              <div className="or">
                <div className="or-divider"></div>
                <p className="or-text">OR</p>
                <div className="or-divider"></div>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: ""
                }}
                onSubmit={values => {
                  // handle submit
                  let user = {
                    Email: values.email,
                    Password: values.password
                  }
                  signIn(user);
                  onShowChange(false);
                }}
                validationSchema={signinValidationSchema}
              >
                {props => {
                  const {
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    touched,
                    errors,
                    
                  } = props;
                  return (
                    <Form role="form" onSubmit={handleSubmit} noValidate>
                      <Form.Group controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                           name="email"
                           type="email"
                           placeholder="E.g. john@mail.com"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                           isValid={touched.email && !errors.email}
                        />
                         <ErrorMessage name="email">
                          {msg => (
                            <div className="error error-message">{msg}</div>
                          )}
                        </ErrorMessage>
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="E.g. JG67%&"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          isValid={touched.password && !errors.password}
                        />
                        <ErrorMessage name="password">
                          {msg => (
                            <div className="error error-message">{msg}</div>
                          )}
                        </ErrorMessage>
                      </Form.Group>
                      <div className="py-3">
                          <button disabled={!values.email || !values.password}
                            className="btn btn-block btn-primary"
                            type="submit"
                          >
                            Log In
                          </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="form-footer">
                <p className="link-text">
                  Are you new?{" "}
                  <Link to="/SignUp" className="link-red">
                    {" "}
                    Register
                  </Link>
                </p>
                <p className="link-text">
                  <Link to="/ForgotPassword" className="link-grey">
                    {" "}
                    Forgot your password?
                  </Link>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
   
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={onShowChange}>
            Close
          </Button>
          <Button variant="primary" onClick={onShowChange}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    );

};

export default SignInModal;