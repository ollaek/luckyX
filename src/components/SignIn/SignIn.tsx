import React, { useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import FaceBookButton from "../shared/SocialLogin/FaceBookButton";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import Loader from "../shared/Loader/Loader";
import GoogleButton from "../shared/SocialLogin/GoogleButton";

import { useUserState } from "../shared/SocialLogin/Hook";
import { useConfigState } from "../shared/configHook";

import { Form, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import "../SignUp/SignUp.scss";

const SignIn = ({ history }) => {
  const { signIn, isFetching, signInError, success } = useUserState();
  const { configs, getConfig, isLoading } = useConfigState();

  const { addToast } = useToasts();

  const signinValidationSchema = Yup.object().shape({
    password: Yup.string().required("Please enter a password"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email")
  });
  useEffect(
    () => {
      getConfig();
    },
    // eslint-disable-next-line
    []
  );
  useEffect(
    () => {
      const val = success;
      if (val === "Y") {
        addToast("Logged In Successfully!", {
          appearance: "success",
          autoDismiss: true,
          className: "toasterCustom"
        });
        history.push("/Home");
      }
    },
    // eslint-disable-next-line
    [success]
  );
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
              <h2 className="title">Log In with</h2>
              <div className="flex-center">
                <GoogleButton history={history} setShow={null} />
                <FaceBookButton history={history} setShow={null} />
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
                }}
                validationSchema={signinValidationSchema}
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
      { isLoading && !configs && <Loader /> }
    </>
  );
};

export default SignIn;
