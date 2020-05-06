import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import { Formik } from "formik";
import * as Yup from "yup";
import { zendeskApi } from "../../api/zendesk";
import { useContactUsState } from "./Hooks";
import "./ContactUs.scss";
import Loader from "../shared/Loader/Loader";

const ContactUsSuccess = () => {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
const {isLoading , subjectsList , getSubjects} = useContactUsState();
  useEffect(
    () => {
      getSubjects();
    },
    // eslint-disable-next-line
    []
  );

  const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    number: Yup.string()
      .required("Please enter your number")
      .matches(
        /^(010|011|012|015)[0-9]{8}$/,
        "Please enter valid mobile number"
      ),
    subject: Yup.string().required("Please selecet a subject"),
    body: Yup.string().required("Please enter your msg")
  });

  const renderImage = () => {
    if (sent) {
      return (
        <>
          <div className="circle-center-img">
            <div className="success-img">
              <img
                src={require("../../assets/img/contactUs_success.png")}
                alt="Cashout Success"
              />
              <img
                className="tick_img animated  bounceIn"
                src={require("../../assets/img/tick.png")}
                alt="Tick"
              />
            </div>
          </div>
          <div className="text-center mb-2rem">
            <h2 className="h2-text">Your message was sent successfully</h2>
            <h4 className="h4-text">
              Contact us again if you need any other assistance.
            </h4>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="circle-center-img">
            <img
              src={require("../../assets/img/deactive_contactus.png")}
              alt="Cashout Success"
            />
          </div>
          <div className="text-center mb-2rem">
            <h2 className="h2-text">Need support? We are here to help</h2>
            <h4 className="h4-text">
              Our team is available 7 days a week to assist you.
            </h4>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <section className="ContactUs-section">
        {renderImage()}
        <Formik
          initialValues={{
            name: "",
            number: "",
            subject: "",
            body: ""
          }}
          onSubmit={(values, { resetForm }) => {
            zendeskApi
              .Request({
                name: values.name,
                number: values.number,
                subject: values.subject,
                body: values.body
              })
              .then((res: any) => {
                if (res.status === 201) {
                  setSent(true);
                  resetForm();
                } else {
                  setError("Something wrong happened please try again");
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
              isSubmitting,
              errors,
              touched
            } = props;
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Full Name</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="E.g. John Doe"
                    name="name"
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
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="0123456789"
                    required
                    name="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                    isInvalid={!!errors.number && touched.number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    as="select"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    isInvalid={!!errors.subject && touched.subject}
                  >
                    <option value="">Please choose a topic</option>
                    {subjectsList && (
                      subjectsList.map((subject) => {
                        return (
                          <option value={subject.Subject} key={subject.SubjectId}>
                          {subject.Subject}
                        </option>
                        );
                      })
                    )}
                    {/* <option value="I can't access my account">
                      I can't access my account
                    </option>
                    <option value="How does this service work ?">
                      How does this service work ?
                    </option>
                    <option value="What does web cashback mean ?">
                      What does web cashback mean ?
                    </option>
                    <option value="I have an issue with my payment">
                      I have an issue with my payment
                    </option>
                    <option value="How can I change my password ?">
                      How can I change my password ?
                    </option>
                    <option value="How can I track my cashback ?">
                      How can I track my cashback ?
                    </option>
                    <option value="How can I track my cashout ?">
                      How can I track my cashout ?
                    </option>
                    <option value="I have a suggestion">
                      I have a suggestion
                    </option>
                    <option value="How can I change my Email ?">
                      How can I change my Email ?
                    </option> */}
                  </Form.Control>

                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Tell us more</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Text your message here..."
                    rows="6"
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                    isInvalid={!!errors.body && touched.body}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.body}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="robot-row ">
                  {/* <Form.Check
                    className=""
                    custom
                    label="I'm not a robot"
                    type="radio"
                    name="robot"
                    id="formHorizontalRobot"
                  /> */}
                  <div className="error error-message"> {error}</div>
                  <button
                    type="submit"
                    className="btn btn-primary col-12 col-md-3"
                    disabled={isSubmitting}
                  >
                    Send
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
      {isLoading && <Loader />}
    </>
  );
};
export default ContactUsSuccess;
