import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

import "./Profile.scss";
import { Form } from "react-bootstrap";

import { useAccountState } from "../Cashout/accountHook";

const EditPassword = ({ history }) => {
  const { changePassword } = useAccountState();
  const [error, setError] = useState("");

  //const [validated, setValidated] = useState(false);
  const schema = Yup.object().shape({
    oldPassword: Yup.string()
      .required("Please enter your old password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please enter password that consist of at least 8 characters, number, special character, capital and small letters"
      ),
    newPassword: Yup.string()
      .required("Please enter new password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please enter password that consist of at least 8 characters, number, special character, capital and small letters"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Password confirm is required")
  });
  // const handleSubmit = event => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };
  return (
    <>
      <NavBar history={history}/>
      <section className="profile-section">
        {/* <div className="profile-heading">
          <h2 className="h3-text">New Password</h2>
        </div> */}
        <div className="profile-heading">
          <div className="container">
            <div className="row">
              <div className=" col-md-7 m-auto">
                <h2 className="h3-text text-center" >New Password</h2>
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
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                  }}
                  onSubmit={values => {
                    // handle submit
                    changePassword({
                      oldPassword: values.oldPassword,
                      newPassword: values.newPassword,
                      confirmPassword: values.confirmPassword
                    }).then((res: any) => {
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
                        <Form.Group controlId="formBasicPassword0">
                          <Form.Label>Old password</Form.Label>
                          <Form.Control
                            type="password"
                            required
                            placeholder="Old Password"
                            name="oldPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.oldPassword}
                            isInvalid={!!errors.oldPassword && touched.oldPassword}
                          />
                          <ErrorMessage name="oldPassword">
                            {msg => (
                              <div className="error error-message">{msg}</div>
                            )}
                          </ErrorMessage>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword1">
                          <Form.Label>New password</Form.Label>
                          <Form.Control
                            type="password"
                            required
                            placeholder="New Password"
                            name="newPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newPassword}
                            isInvalid={!!errors.newPassword && touched.newPassword}
                          />
                          <ErrorMessage name="newPassword">
                            {msg => (
                              <div className="error error-message">{msg}</div>
                            )}
                          </ErrorMessage>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                          <Form.Label>Confirm new password</Form.Label>
                          <Form.Control
                            type="password"
                            required
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                          />
                          <ErrorMessage name="confirmPassword">
                            {msg => (
                              <div className="error error-message">{msg}</div>
                            )}
                          </ErrorMessage>
                        </Form.Group>
                        <div className="py-3 text-center">
                       
                          <button
                            type="submit"
                            className="col-md-6 btn btn-primary"
                            disabled={
                              values.confirmPassword === "" ||
                              values.newPassword === "" ||
                              values.oldPassword === ""
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
      <Footer />
    </>
  );
};

export default EditPassword;
