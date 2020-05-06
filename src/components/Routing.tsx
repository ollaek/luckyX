import React, * as react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import httpService from "../api/Interseptor"; 

import Loader from "./shared/Loader/Loader";

const App = react.lazy(() => import("./App/App"));
const OnlineCashbacks = react.lazy(() => import("./OnlineCashbacks/OnlineCashbacks"));
const SignIn = react.lazy(() => import("./SignIn/SignIn"));
const SignUp = react.lazy(() => import("./SignUp/SignUp"));
const Profile = react.lazy(() => import("./Profile/Profile"));
const EditPassword = react.lazy(() => import("./Profile/EditPassword"));
const ContactUs = react.lazy(() => import("./ContactUs/ContactUs"));
const PrivacyPolicy = react.lazy(() => import("./PrivacyPolicy/PrivacyPolicy"));
const FAQs = react.lazy(() => import("./FAQs/FAQs"));
const AboutUs = react.lazy(() => import("./AboutUs/AboutUs"));
const Wallet = react.lazy(() => import("./Wallet/Wallet"));
const Error404 = react.lazy(() => import("./ErrorPages/Error404"));
const ErrorNoConnection = react.lazy(() => import("./ErrorPages/ErrorNoConnection"));

const Cashout = react.lazy(() => import("./Cashout/Cashout"));
const CashoutErrorModal = react.lazy(() =>
  import("./Cashout/CashoutErrorModal/CashoutErrorModal")
);
const MailVerification = react.lazy(() =>
  import("./MailVerification/MailVerification")
);
const ForgotPassword = react.lazy(() => import("./ForgotPassword/ForgotPassword"));
const MailVerified = react.lazy(() => import("./MailVerification/MailVerified"));
const ResetPasswordVerification = react.lazy(() =>
  import("./ForgotPassword/ResetPasswordVerification")
);
const CashbackStoreDetails = react.lazy(() =>
  import("./OnlineCashbacks/CashbackStoreDetails")
);
const InStoreOffers = react.lazy(() => import("./InStoreOffers/InStoreOffers"));
const InStoreOfferDetails = react.lazy(() =>
  import("./InStoreOffers/InStoreOfferDetails")
);
const RedirectionBanner = react.lazy(() =>
  import("./OnlineCashbacks/RedirectionBanner")
);

const OfferBanner = react.lazy(() =>
  import("./InStoreOffers/StoreOfferDetails/OfferBanner/OfferBanner")
);

httpService.setupInterceptors();

const Routing = () => (
  <Router>
    <react.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/Home" component={App} />
        <Route path="/OnlineCashbacks" component={OnlineCashbacks} />
        <UnProtectedRoute path="/SignIn" component={SignIn} />
        <UnProtectedRoute path="/SignUp" component={SignUp} />
        <UnProtectedRoute path="/MailVerification/:email" component={MailVerification} />
        <UnProtectedRoute path="/MailVerified/:id" component={MailVerified} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <ProtectedRoute path="/Wallet" component={Wallet}/>
        <Route path="/Cashout" component={Cashout} />
        <ProtectedRoute path="/Profile" component={Profile} />
        <Route path="/EditPassword" component={EditPassword} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Error404" component={Error404} />
        <Route path="/ErrorNoConnection" component={ErrorNoConnection} />
        <Route path="/CashoutErrorModal" component={CashoutErrorModal} />
        <Route path="/OfferBanner" component={OfferBanner} />


        <Route
          path="/ResetPasswordVerification/:email"
          component={ResetPasswordVerification}
        />

        <Route path="/InStoreOffers" component={InStoreOffers} />
        <Route
          path="/InStoreOfferDetails/:id"
          component={InStoreOfferDetails}
        />
        <Route
          path="/CashbackStoreDetails/:id"
          component={CashbackStoreDetails}
        />
        <Route
          path="/RedirectionBanner/:storeId"
          component={RedirectionBanner}
        />
        <Redirect to="/Home" />
      </Switch>
    </react.Suspense>
  </Router>
);

const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return localStorage.getItem("Token") ? <Comp {...props} /> : <Redirect to="/SignIn" />;
      }}
    />
  );
};

const UnProtectedRoute = ({ component: Comp, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return !localStorage.getItem("Token") ? <Comp {...props} /> : <Redirect to="/Home" />;
      }}
    />
  );
};

export default Routing;
