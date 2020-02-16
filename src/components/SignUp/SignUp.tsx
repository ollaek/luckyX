import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import FaceBookButton from "../shared/SocialLogin/FaceBookButton";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import { useUserState } from "../shared/SocialLogin/Hook";

import { Form } from "react-bootstrap";

import GoogleButton from "../shared/SocialLogin/GoogleButton";
import "././SignUp.scss";

const SignUp = ({ history }) => {
  const { signUp } = useUserState();
  const signupValidationSchema = Yup.object().shape({
    name: Yup.string()
      .max(40, "Please enter no more than 40 characters")
      .required("Please enter your first name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: Yup.string()
      .required("Please enter a password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please enter password that consist of at least 8 characters, number, special character, capital and small letters"
      ),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirm is required")
  });

  return (
    <>
      <NavBar />
      <section className="signUp-section sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="signUp-img">
                <div className="img-container">
                  <img
                    src={require("../../assets/img/signUp_img.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h3>Register and get EGP 50,00 Bonus!</h3>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <h2 className="title">Register with</h2>
              <div className="flex-center">
                <GoogleButton history={history} onShowChange={null}/>
                <FaceBookButton history={history} onShowChange={null}/>
              </div>
              <div className="or">
                <div className="or-divider"></div>
                <p className="or-text">OR</p>
                <div className="or-divider"></div>
              </div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  passwordConfirm: ""
                }}
                onSubmit={values => {
                  let user = {
                    FullName: values.name,
                    Email: values.email,
                    Password: values.password,
                    ConfirmPassword: values.passwordConfirm
                  };
                  signUp(user);
                  history.push(`/MailVerification/${values.email}`);
                }}
                validationSchema={signupValidationSchema}
              >
                {props => {
                  const {
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit
                  } = props;
                  return (
                    <Form onSubmit={handleSubmit} role="form" noValidate>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="E.g. John"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <ErrorMessage name="name">
                          {msg => (
                            <div className="error error-message">{msg}</div>
                          )}
                        </ErrorMessage>
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="E.g. john@mail.com"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
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
                        />
                        <ErrorMessage name="password">
                          {msg => (
                            <div className="error error-message">{msg}</div>
                          )}
                        </ErrorMessage>
                      </Form.Group>
                      <Form.Group controlId="formRepeatPassword">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="passwordConfirm"
                          placeholder="E.g. JG67%&"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.passwordConfirm}
                        />
                        <ErrorMessage name="passwordConfirm">
                          {msg => (
                            <div className="error error-message">{msg}</div>
                          )}
                        </ErrorMessage>
                      </Form.Group>
                      <div className="py-3">
                        <button
                          disabled={
                            !values.email ||
                            !values.name ||
                            !values.password ||
                            !values.passwordConfirm
                          }
                          className="btn btn-block btn-primary"
                          type="submit"
                        >
                          Register
                        </button>
                        {/* <Link  to="/MailVerification">
                      Register
                      </Link> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="form-footer">
                <p className="link-text">
                  Do you have an account?{" "}
                  <Link to="/SignIn" className="link-red">
                    {" "}
                    Log In
                  </Link>
                </p>
                <p className="text-muted">
                  By joining I agree to Lucky Terms & Conditions and Privacy
                  Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
