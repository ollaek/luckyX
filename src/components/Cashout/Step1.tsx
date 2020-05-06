import React, { useState } from "react";
import { Form } from "react-bootstrap";

import "./Cashout.scss";
import {
  StepperAction,
  StepperContent,
  StepperContext
} from "react-material-stepper";
import { withFormik, Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useAccountState } from "./accountHook";
import Modal from "./CashoutErrorModal/MobileModal";
import { STEP3 } from "./Step3";

export const STEP1 = "step-one";

const Step1 = (props: any) => {
  const { sendOTP, checkMobile } = useAccountState();
  const { resolve, getData, goAt } = React.useContext(StepperContext);
  const { values, handleChange, handleBlur,  errors,
    touched } = props;
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [goNext, setGoNext] = useState(false);
  const handleShow = () => setShow(true);

  const data = getData(STEP1);

   if(localStorage.getItem("IsMerged") === "true"){
     goAt(STEP3);
   }

  const callbackResolve = () => {
    resolve(data);
  };

  const mergeAccounts = () => {
    let newTime = 0;
    sendOTP(values.mobileNumber, callbackResolve).then((res: any) => {
      if (res.payload.result) {
        newTime = res.payload.result.Data;
        data.step2 = { ...data.step2, newTime };
      } else {
        if(res.payload.error.response){
          setError(res.payload.error.response.data.Errors[0].toString());
        }else{
          window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
        }
      }
    });
    data.step2 = { ...data.step2, mobile: values.mobileNumber };
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (values.mobileNumber.match(/^(010|011|012|015)[0-9]{8}$/)) {
      checkMobile(values.mobileNumber).then((res: any) => {
        if (res.payload.result) {
          const isMobileExistInLucky = res.payload.result.Data;

          if (isMobileExistInLucky) {
            handleShow();
          } else {
            mergeAccounts();
          }
        } else {
          if(res.payload.error.response){
            setError(res.payload.error.response.data.Errors[0].toString());
          }else{
            window.location.assign(`${process.env.PUBLIC_URL}/ErrorNoConnection`)
          }
        }
      });
    } else {
      setError("This is not a valid number");
    }
  };

  return (
    <StepperContent
      onSubmit={onSubmit}
      actions={
        <React.Fragment>
          <div className="item1">
            <Link to="/Home" className="link-grey text-bold">
              <img
                className="mr-3"
                src={require("../../assets/img/svg/back-arrow.svg")}
                alt="back-arrow"
              />
              Back
            </Link>
          </div>
          <div className="item2">
            <Link to="/Home" className="link-blue">
              Cancel
            </Link>
          </div>
          <div className="item3">
            <StepperAction
             
              type="submit"
              className="btn btn-block btn-primary"
              disabled={!goNext}
            >
              Continue
            </StepperAction>
          </div>
        </React.Fragment>
      }
    >
      <>
        <div className="row">
          <div className="col-12">
            <p className="current_step-text">
              {" "}
              Cashout <span>- Step 01/03</span>
            </p>
          </div>
        </div>
        <div className="step1">
          <h4 className="h4-text">
            To cashout please enter your phone number:
          </h4>
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
                        onChange={e => {
                          handleChange(e);
                          if (e.target.value.length === 11) {
                            setGoNext(true);
                          } else {
                            setGoNext(false);
                          }
                        }}
                        onBlur={handleBlur}
                        value={values.mobileNumber}
                        isInvalid={!!errors.mobileNumber && touched.mobileNumber}
                      />
                      <Form.Control.Feedback type="invalid">
                      {error}
                    </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                </Form>
              );
            }}
          </Formik>
        </div>
      </>
      <Modal
        show={show}
        setShow={val => setShow(val)}
        mergeAccounts={() => mergeAccounts()}
      />
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
