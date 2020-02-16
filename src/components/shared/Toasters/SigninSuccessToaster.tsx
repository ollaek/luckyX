import React,{ useState } from "react";

import { Toast } from "react-bootstrap";

const SigninSuccessToaster = ({showToaster}:any) => {
    const [ show, setShow ] = useState(showToaster);
    return(
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>Logged In Successfully</Toast.Body>
        </Toast>
    );
};

export default SigninSuccessToaster;