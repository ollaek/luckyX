import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Loader from "./shared/Loader/Loader";

const App = lazy(() => import("./App/App"));
const OnlineCashbacks = lazy(() => import("./OnlineCashbacks/OnlineCashbacks"));
const SignIn = lazy(() => import("./SignIn/SignIn"));
const SignUp = lazy(() => import("./SignUp/SignUp"));
const MailVerification = lazy(() => import("./MailVerification/MailVerification"));
const MailVerified = lazy(() => import("./MailVerification/MailVerified"));


const Routing = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/OnlineCashbacks" component={OnlineCashbacks} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/MailVerification" component={MailVerification}/>
      <Route path="/MailVerified" component={MailVerified}/>
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routing;
