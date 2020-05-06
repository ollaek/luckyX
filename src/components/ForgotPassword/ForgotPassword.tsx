import React, { useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useUserState } from "../shared/SocialLogin/Hook";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import { Form, Col } from "react-bootstrap";

import "../ForgotPassword/ForgotPassword.scss";
const ForgotPassword = ({history}) => {
  const { forgotPassword, success, ForgetPasswordError } = useUserState();
  const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email")
  });

   useEffect(
     () => {
       if (success === "Y") {
         var mail = localStorage.getItem("resetPasswordMail");
         if (mail) history.push(`/ResetPasswordVerification/${mail}`);
       }
     },
     // eslint-disable-next-line
     [success]
   );
  return (
    <>
      <NavBar history={history} />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <section className="mailVerification">
              <div className="mailVerification-img">
                <img src={require("../../assets/img/key.png")} alt="" />
              </div>
              <h1 className="mailVerification-title">Forgot your password?</h1>
              <div className="mb-5">
                <Formik
                  initialValues={{
                    email: ""
                  }}
                  onSubmit={values => {
                    localStorage.setItem("resetPasswordMail", values.email);
                    forgotPassword(values.email);
                  }}
                  validationSchema={forgotPasswordValidationSchema}
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
                        <Form.Group className="row" controlId="formEmail">
                          <Col className="col-lg-7 col-md-7 col-12 mb-3 mb-md-0 pr-md-0">
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
                          </Col>
                          <Col className="col-lg-5 col-md-5 col-12">
                              <button
                                className="btn btn-block btn-primary"
                                type="submit"
                              >
                                Email me
                              </button>
                              <div className="error error-message text-center">{ForgetPasswordError}</div>
                          </Col>
                        </Form.Group>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              <div className="mailVerification-text">
                <p>
                  Locked out? We’ll send you instructions to reset your password{" "}
                  <br></br>and get you back on track.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
