import React, { useState } from "react";
import { Form } from "react-bootstrap";

import "./Cashout.scss";
import {
  StepperAction,
  StepperContent,
  StepperContext
} from "react-material-stepper";
import { withFormik, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useAccountState } from "./Hook";
import Modal from "./CashoutErrorModal/MobileModal";

export const STEP1 = "step-one";

const Step1 = (props: any) => {
  const { sendOTP } = useAccountState();
  const { resolve, getData, updateStep } = React.useContext(StepperContext);
  const { values, handleChange, handleBlur } = props;
  const [ error, setError ] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const data = getData(STEP1);
  

  const callbackResolve = () => {
    resolve(data);
  }
  
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (values.mobileNumber.match(/^(010|011|012|015)[0-9]{8}$/)) {
      sendOTP(values.mobileNumber, callbackResolve);
      data.step1(values.mobileNumber);
      data.step2 = { mobile: values.mobileNumber };
    } else {
      handleShow();
      setError("This is not a valid number");
    }
  };

  

  const toggle = (step: string) => () => {
    updateStep(STEP1, {
      data: {
        ...data,
        [step]: !data[step]
      }
    });
  };

  return (
    <StepperContent
      onSubmit={onSubmit}
      actions={
        <React.Fragment>
          <div className="py-3 col-md-4">
            <Link to="/">Back</Link>
            <Link to="/">Cancel</Link>
            <StepperAction
              align="right"
              type="submit"
              className="btn btn-block btn-primary"
            >
              Continue
            </StepperAction>
          </div>
        </React.Fragment>
      }
    >
      <div className="step1">
        <h4 className="h4-text">To cashout please enter your phone number:</h4>
        <Formik
          initialValues={{
            mobileNumber: ""
          }}
          onSubmit={values => {}}
          validationSchema={schema}
        >
          {() => {
            return (
              <Form role="form" noValidate>
                <Form.Row>
                  <Form.Group className="col-2" controlId="formGridState">
                    <Form.Control as="select">
                      <option>+2</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="col-10" controlId="formGridZip">
                    <Form.Control
                      type="tel"
                      placeholder="01 XXXXXXX"
                      name="mobileNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNumber}
                    />
                    {/* <Form.Control.Feedback type="invalid">
                      {error}
                    </Form.Control.Feedback> */}
                    <div style={{color: "#FF585F"}} >{error}</div>
                  </Form.Group>
                </Form.Row>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Modal show={show} setShow={val => setShow(val)}/>
    </StepperContent>
  );
};
let schema = yup.object().shape({
  mobileNumber: yup
    .string()
    .required("Please enter a Mobile Number")
    .matches(/^(010|011|012|015)[0-9]{7}$/, "This is not a valid Number")
});
const Step1HOC = withFormik({
  mapPropsToValues: () => ({ mobileNumber: "" }),
  validationSchema: schema,
  handleSubmit: (values, actions) => {
    // submission
  }
})(Step1);
export default Step1HOC;
