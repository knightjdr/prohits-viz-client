import PropTypes from 'prop-types';
import React from 'react';

import './rsq.css';

const RSQ = ({
  rsq,
}) => (
  <div>
    <p>
      Perform R
      <sup>2</sup>
      {' '}
      analysis on a selection of points. All points will be used by default if none are selected.
    </p>
    {
      rsq
      && (
        <div className="analysis__options-rsq-result">
          <code>
            R
            <sup>2</sup>
            {' '}
            =
            {' '}
            {rsq}
          </code>
        </div>
      )
    }
  </div>
);

RSQ.defaultProps = {
  rsq: null,
};

RSQ.propTypes = {
  rsq: PropTypes.number,
};

export default RSQ;
