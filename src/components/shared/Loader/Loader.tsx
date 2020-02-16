import React from 'react';

import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-layout" />
      <Spinner className="blocking-loader" animation="border" variant="warning" />
    </div>
  );
};

export default Loader;
