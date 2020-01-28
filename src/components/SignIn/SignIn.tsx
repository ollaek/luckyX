import React from "react";
import { Link } from "react-router-dom";

import FaceBookButton from "../shared/SocialLogin/FaceBookButton";
import GoogleButton from "../shared/SocialLogin/GoogleButton";

const SignIn = () => {
    return (
        <div>
            <FaceBookButton />
            <GoogleButton />
            <Link to="/registration">registration</Link>
        </div>
    );
};

export default SignIn;