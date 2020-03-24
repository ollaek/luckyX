import React from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

import "./PrivacyPolicy.scss";
const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="privacyPolicy">
        <div className="privacyPolicy-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="h1-text">Privacy Policy</h1>
                <h3 className="h3-text">
                  At Lucky.com, we collect and manage user<br></br> data
                  according to the following Privacy Policy.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="privacyPolicy-body">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="privacyPolicy-body-item">
                  <p className="item-num h4-text">1.</p>
                  <h4 className="h4-text">Data Collected</h4>
                  <div className="item-text">
                    <p>
                      We collect information you provide directly to us. For
                      example, we collect information when you create an
                      account, subscribe, participate in any interactive
                      features of our services, fill out a form, request
                      customer support or otherwise communicate with us. The
                      types of information we may collect include your name,
                      email address, postal address, credit card information and
                      other contact or identifying information you choose to
                      provide.
                    </p>

                    <p>
                      We collect anonymous data from every visitor of the
                      Website to monitor traffic and fix bugs. For example, we
                      collect information like web requests, the data sent in
                      response to such requests, the Internet Protocol address,
                      the browser type, the browser language, and a timestamp
                      for the request.
                    </p>
                    <p>
                      We also use various technologies to collect information,
                      and this may include sending cookies to your computer.
                      Cookies are small data files stored on your hard drive or
                      in your device memory that helps us to improve our
                      services and your experience, see which areas and features
                      of our services are popular and count visits. We may also
                      collect information using web beacons (also known as
                      "tracking pixels"). Web beacons are electronic images that
                      may be used in our services or emails and to track count
                      visits or understand usage and campaign effectiveness.
                    </p>
                  </div>
                </div>
                <div className="privacyPolicy-body-item">
                  <p className="item-num h4-text">2.</p>
                  <h4 className="h4-text">Use of the Data</h4>
                  <div className="item-text">
                    <p>
                      We only use your personal information to provide you with
                      Lucky’s services or to communicate with you about the
                      services provided by Lucky. We employ industry standard
                      techniques to protect against unauthorized access of data
                      about you that we store, including personal information.
                      We do not share personal information you have provided to
                      us without your consent, unless:
                    </p>
                    <ul>
                      <li>
                        Doing so is appropriate to carry out your own request.
                      </li>
                      <li>
                        We believe it's needed to enforce our legal agreements
                        or that is legally required.
                      </li>
                      <li>
                        We believe it's needed to detect, prevent or address
                        fraud, security or technical issues.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="privacyPolicy-body-item">
                  <p className="item-num h4-text">3.</p>
                  <h4 className="h4-text">Sharing of Data</h4>
                  <div className="item-text">
                    <p>
                      We don't share your personal information with third
                      parties. Aggregated, anonymized data is periodically
                      transmitted to external services to help us improve the
                      Website and service.
                    </p>
                    <p>
                      We may allow third parties to provide analytics services.
                      These third parties may use cookies, web beacons and other
                      technologies to collect information about your use of the
                      services and other websites, including your IP address,
                      web browser, pages viewed, time spent on pages, links
                      clicked and conversion information.
                    </p>
                    <p>
                      We also use social buttons provided by services like
                      Twitter, Google+, LinkedIn and Facebook. Your use of these
                      third party services is entirely optional.<br></br>We are
                      not responsible for the privacy policies and/or practices
                      of these third party services, and you are responsible for
                      reading and understanding those third party services'
                      privacy policies.
                    </p>
                  </div>
                </div>
                <div className="privacyPolicy-body-item">
                  <p className="item-num h4-text">4.</p>
                  <h4 className="h4-text">
                    {" "}
                    Opt-Out, Communication Preferences
                  </h4>
                  <div className="item-text">
                    <p>
                      You may modify your communication preferences and/or
                      opt-out from specific communications at any time. Please
                      specify and adjust your preferences.
                    </p>
                  </div>
                </div>
                <div className="privacyPolicy-body-item">
                  <p className="item-num h4-text">5.</p>
                  <h4 className="h4-text"> Security</h4>
                  <div className="item-text">
                    <p>
                      We take reasonable steps to protect personally
                      identifiable information from loss, misuse, and
                      unauthorized access, disclosure, alteration, or
                      destruction.
                      <br></br>
                      But, you should keep in mind that no Internet transmission
                      is ever completely secure or error-free. In particular,
                      email sent to or from the Sites may not be secure.
                    </p>
                  </div>
                </div>
                <div className="privacyPolicy-body-item">
                  <p className="item-num h4-text">6.</p>
                  <h4 className="h4-text"> Changes to the Privacy Policy</h4>
                  <div className="item-text">
                    <p>
                      We may amend this Privacy Policy from time to time. Use of
                      information we collect now is subject to the Privacy
                      Policy in effect at the time such information is used. If
                      we make major changes in the way we collect or use
                      information, we will notify you by posting an announcement
                      on Lucky.com or sending you an email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PrivacyPolicy;
