import React,{ useEffect } from "react";

import { useUserState } from "./Hook";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";


const FaceBookButton = ({ history, setShow, setEmail }) => {
  const { externalSignIn, success } = useUserState();
  
  useEffect(
    () => {
      if (success === "Y") {
        if(!setShow) history.push("/Home");
      }
    },
    // eslint-disable-next-line
    [success]
  );

  let user;
  const responseFacebook = async response => {
    if (response) {
      user = {
        FullName: response.name,
        Email: response.email,
        SocialId: response.id
      };
      setEmail(user.Email);
      localStorage.setItem("socialLoginData", JSON.stringify(user));
      externalSignIn(user);
    }
  };

  return (
    <FacebookLogin
      appId="1151722291642438"
      fields="name,email"
      callback={responseFacebook}
      render={renderProps => (
        <button
          className="btn-icon mt-2 mb-2 btn btn-white btn-fb"
          onClick={renderProps.onClick}
        >
          <span className="btn-inner--icon mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.12 5.54999H13.45C11.57 5.54999 10.35 6.79999 10.35 8.72999V10.19H8.66002C8.51002 10.19 8.40002 10.31 8.40002 10.45V12.57C8.40002 12.72 8.52002 12.83 8.66002 12.83H10.34V18.19C10.34 18.34 10.46 18.45 10.6 18.45H12.8C12.95 18.45 13.06 18.33 13.06 18.19V12.83H15.03C15.18 12.83 15.29 12.71 15.29 12.57V10.45C15.29 10.38 15.26 10.31 15.21 10.26C15.16 10.21 15.09 10.18 15.02 10.18H13.05V8.93999C13.05 8.33999 13.19 8.03999 13.97 8.03999H15.1C15.24 8.03999 15.36 7.91999 15.36 7.77999V5.80999C15.38 5.66999 15.26 5.54999 15.12 5.54999Z"
                fill="#929297"
              />
              <path
                d="M12 1.5C17.79 1.5 22.5 6.21 22.5 12C22.5 17.79 17.79 22.5 12 22.5C6.21 22.5 1.5 17.79 1.5 12C1.5 6.21 6.21 1.5 12 1.5ZM12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0Z"
                fill="#929297"
              />
            </svg>
          </span>
          <span className="btn-inner--text">facebook</span>
        </button>
      )}
    />
  );
};

export default FaceBookButton;
