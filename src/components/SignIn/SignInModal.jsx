import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import FaceBookButton from "../shared/SocialLogin/FaceBookButton";
import { Link } from "react-router-dom";
import { useUserState } from "../shared/SocialLogin/Hook";
import { useConfigState } from "../shared/configHook";

import { Form, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import SignUpConfirmationModal from "../SignUp/SignUpConfirmationModal";
import SignUpOTPModal from "../SignUp/SignUpOTPModal";
import GoogleButton from "../shared/SocialLogin/GoogleButton";
import "../SignIn/SignInModal.scss";

const SignInModal = ({ show, setShow, history }) => {
  const { signIn, isFetching, signInError, success,errorCode } = useUserState();
  const { configs, getConfig } = useConfigState();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [mail, setMail] = useState(null);

  const { addToast } = useToasts();
  const [sub, setsub] = useState(false);
  useEffect(
    () => {
      getConfig();
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
      setsub(true);
      if (success === "Y" && sub) {
        addToast("Logged In Successfully!", {
          appearance: "success",
          autoDismiss: true,
          className: "toasterCustom"
        });
        setShow(false);
        setsub(false);
      }
    },
    // eslint-disable-next-line
    [success]
  );

  const signinValidationSchema = Yup.object().shape({
    password: Yup.string().required("Please enter a password"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email")
  });
  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      animation={false}
      className="signin-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Register and get EGP {configs && configs.SIGNUP_reward} Bonus!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="modal-img">
                  <img
                    src={require("../../assets/img/free-cash-splash-img-modal.svg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="title">Log In with</h2>
                <div className="flex-center">
                  <GoogleButton
                    history={history}
                    setShow={val => setShow(val)}
                    setEmail={email => setMail(email)}
                  />
                  <FaceBookButton
                    history={history}
                    setShow={val => setShow(val)}
                    setEmail={email => setMail(email)}
                  />
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
                    };
                    signIn(user);
                    setsub(true);
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
                      errors
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
                            isInvalid={!!errors.email && touched.email}
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
                            isInvalid={!!errors.password && touched.password}
                          />
                          <ErrorMessage name="password">
                            {msg => (
                              <div className="error error-message">{msg}</div>
                            )}
                          </ErrorMessage>
                        </Form.Group>
                        <div className="py-3">
                          <button
                            disabled={!values.email || !values.password}
                            className="btn btn-block btn-primary"
                            type="submit"
                          >
                            Log In{" "}
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
                            {signInError}
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
                <div className="form-footer">
                  <p className="link-text">
                    Are you new?{" "}
                    <Link to="/SignUp" className="link-blue">
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
      <SignUpConfirmationModal
        show={showConfirm}
        email={mail}
        setShow={val => setShowConfirm(val)}
        setShowOTP={val => setShowOTP(val)}
      />
      <SignUpOTPModal show={showOTP} setShow={val => setShowOTP(val)} email={mail} history={history}/>
    </Modal>
  );
};

export default SignInModal;
