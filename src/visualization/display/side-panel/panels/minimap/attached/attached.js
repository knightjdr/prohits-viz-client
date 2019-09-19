import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';

import './attached.css';

const Attached = ({
  children,
}) => (
  <div className="panel__attached">
    {
      cloneElement(
        children,
        {
          imgLimits: {
            height: 'calc(100vh - 165px)',
            width: 320,
          },
        },
      )
    }
  </div>
);

Attached.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Attached;
