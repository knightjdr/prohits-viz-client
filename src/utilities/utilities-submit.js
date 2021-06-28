import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/buttons/rectangular/button';

const UtilitiesSubmit = ({
  handleSubmit,
  utility,
}) => (
  <div className="utility__submit">
    {
      utility
      && (
        <Button
          kind="success"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )
    }
  </div>
);

UtilitiesSubmit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  utility: PropTypes.string.isRequired,
};

export default UtilitiesSubmit;
