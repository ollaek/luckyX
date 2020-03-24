import React from "react";

import { useUserState } from "./Hook";
import GoogleLogin from "react-google-login";

const GoogleButton = (history:any,onShowChange:any) => {
  const { externalSignIn } = useUserState();
  let user;
  const responseGoogle = (response: any) => {
    if (response) {
      user = {
        FullName: response.profileObj.name,
        Email: response.profileObj.email,
        SocialId: response.googleId
      };
      externalSignIn(user);
      
      if(onShowChange) onShowChange(false);
      history.push("/");
    }
  };
  return (
    <GoogleLogin
      clientId="124617470988-q7e72sam881qvuk1pbkt21s08i5m10ql.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      render={renderProps => (
        <button
          className="btn-icon mt-2 mb-2 btn btn-white btn-fb"
          onClick={renderProps.onClick}
        >
          <span className="btn-inner--icon mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.3 11H12.11V13.13H15.08C14.95 13.82 14.56 14.4 13.98 14.79C13.49 15.12 12.85 15.32 12.11 15.32C10.67 15.32 9.45998 14.35 9.01998 13.05C8.90998 12.72 8.84998 12.36 8.84998 12C8.84998 11.64 8.90998 11.28 9.01998 10.95C9.44998 9.64998 10.67 8.67998 12.11 8.67998C12.92 8.67998 13.65 8.95998 14.22 9.49998L15.8 7.91998C14.85 7.02998 13.6 6.47998 12.11 6.47998C9.94998 6.47998 8.08998 7.71998 7.17998 9.51998C6.80998 10.27 6.59998 11.11 6.59998 12C6.59998 12.89 6.80998 13.73 7.18998 14.48C8.09998 16.28 9.95998 17.52 12.12 17.52C13.61 17.52 14.86 17.03 15.77 16.18C16.81 15.22 17.41 13.81 17.41 12.13C17.4 11.73 17.37 11.36 17.3 11Z" fill="#929297" />
              <path d="M12 1.5C17.79 1.5 22.5 6.21 22.5 12C22.5 17.79 17.79 22.5 12 22.5C6.21 22.5 1.5 17.79 1.5 12C1.5 6.21 6.21 1.5 12 1.5ZM12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0Z" fill="#929297" />
            </svg>

          </span>
          <span className="btn-inner--text">Google</span>
        </button>
      )}
    />
  );
};

export default GoogleButton;
