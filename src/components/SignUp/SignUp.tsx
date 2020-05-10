import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import FaceBookButton from "../shared/SocialLogin/FaceBookButton";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import Loader from "../shared/Loader/Loader";
import SignUpConfirmationModal from "./SignUpConfirmationModal";
import SignUpOTPModal from "./SignUpOTPModal";

import { useUserState } from "../shared/SocialLogin/Hook";
import { useConfigState } from "../shared/configHook";

import { Form, Spinner } from "react-bootstrap";

import GoogleButton from "../shared/SocialLogin/GoogleButton";
import "././SignUp.scss";

const SignUp = ({ history }) => {
  const {
    signUp,
    signUpError,
    signInError,
    success,
    isFetching,
    errorCode
  } = useUserState();
  const { configs, getConfig, isLoading } = useConfigState();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState("");
  var localStorageValues = localStorage.getItem("registerationValues");
  const FormInitialValues = localStorageValues
    ? JSON.parse(localStorageValues)
    : {
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
      };

  useEffect(
    () => {
      getConfig();
      // if (localStorage.getItem("signupDone")) {
      //   const obj = JSON.parse(localStorageValues);
      //   if (obj) history.push(`/MailVerification/${obj.email}`);
      // }
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (errorCode === "061") {
        setShowConfirm(true);
        return;
      }
      if (success === "YA") {
        const obj = JSON.parse(localStorageValues);
        localStorage.setItem("signupDone", "true");
        if (obj) history.push(`/MailVerification/${obj.email}`);
      }
    },
    // eslint-disable-next-line
    [success]
  );

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
      <NavBar history={history} />
      <section className="signUp-section sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="signUp-img">
                <div className="img-container">
                  <img
                    src={require("../../assets/img/signUp_img.svg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h3>
                  Register and get EGP {configs && configs.SIGNUP_reward} Bonus!
                </h3>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <h2 className="title">Register with</h2>
              <div className="flex-center">
                <GoogleButton history={history} setShow={null} setEmail={mail => setEmail(mail)}/>
                <FaceBookButton history={history} setShow={null} setEmail={mail => setEmail(mail)}/>
              </div>
              <div className="or">
                <div className="or-divider"></div>
                <p className="or-text">OR</p>
                <div className="or-divider"></div>
              </div>
              <Formik
                initialValues={FormInitialValues}
                onSubmit={values => {
                  let user = {
                    FullName: values.name,
                    Email: values.email,
                    Password: values.password,
                    ConfirmPassword: values.passwordConfirm
                  };
                  localStorage.setItem(
                    "registerationValues",
                    JSON.stringify(values)
                  );
                  setEmail(values.email);
                  signUp(user);
                }}
                validationSchema={signupValidationSchema}
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
                          isInvalid={
                            !!errors.name && touched.name ? true : false
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
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
                          isInvalid={
                            !!errors.email && touched.email ? true : false
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
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
                          isInvalid={
                            !!errors.password && touched.password ? true : false
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
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
                          isInvalid={
                            !!errors.passwordConfirm && touched.passwordConfirm
                              ? true
                              : false
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.passwordConfirm}
                        </Form.Control.Feedback>
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
                          Register{" "}
                          {isFetching && (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              variant="light"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                        <div className="error error-message text-center">
                          {" "}
                          {signUpError || ( !showConfirm || !showOTP )}
                        </div>
                        <div className="error error-message text-center">
                          {" "}
                          {signInError}
                        </div>
                        
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="form-footer">
                <p className="link-text">
                  Do you have an account?{" "}
                  <Link to="/SignIn" className="link-blue">
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
      <SignUpConfirmationModal
        show={showConfirm}
        email={email}
        setShow={val => setShowConfirm(val)}
        setShowOTP={val => setShowOTP(val)}
      />
      <SignUpOTPModal show={showOTP} setShow={val => setShowOTP(val)} email={email} history={history}/>
      <Footer />
      {isLoading && !configs && <Loader />}
    </>
  );
};

export default SignUp;
