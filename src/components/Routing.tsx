import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Loader from "./shared/Loader/Loader";

const App = lazy(() => import("./App/App"));
const OnlineCashbacks = lazy(() => import("./OnlineCashbacks/OnlineCashbacks"));
const SignIn = lazy(() => import("./SignIn/SignIn"));
const SignUp = lazy(() => import("./SignUp/SignUp"));
const Profile = lazy(() => import("./Profile/Profile"));
const EditPassword = lazy(() => import("./Profile/EditPassword"));
const ContactUs = lazy(() => import("./ContactUs/ContactUs"));  
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy/PrivacyPolicy"));   
const FAQs = lazy(() => import("./FAQs/FAQs"));   

const Cashout = lazy(() => import("./Cashout/Cashout"));
const CashoutErrorModal= lazy(() => import("./Cashout/CashoutErrorModal/CashoutErrorModal"));
const MailVerification = lazy(() =>
  import("./MailVerification/MailVerification")
);
const ForgotPassword = lazy(() => import("./ForgotPassword/ForgotPassword"));
const MailVerified = lazy(() => import("./MailVerification/MailVerified"));
const ResetPasswordVerification = lazy(() =>
  import("./ForgotPassword/ResetPasswordVerification")
);
const CashbackStoreDetails = lazy(() =>
  import("./OnlineCashbacks/CashbackStoreDetails")
);
const InStoreOffers = lazy(() => import("./InStoreOffers/InStoreOffers"));
const InStoreOfferDetails = lazy(() =>
  import("./InStoreOffers/InStoreOfferDetails")
);
const RedirectionBanner = lazy(() =>
  import("./OnlineCashbacks/RedirectionBanner")
);

const Routing = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/OnlineCashbacks/:id?" component={OnlineCashbacks} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/MailVerification/:email" component={MailVerification} />
        <Route path="/MailVerified/:id" component={MailVerified} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/Wallet" component={Cashout} />
        <Route path="/Profile" component={Profile} />
        <Route path="/EditPassword" component={EditPassword} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/FAQs" component={FAQs} />

        <Route path="/CashoutErrorModal" component={CashoutErrorModal} />

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
        <Route path="/RedirectionBanner/:storeId" component={RedirectionBanner} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default Routing;
