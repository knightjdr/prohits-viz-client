import PropTypes from 'prop-types';
import React from 'react';

import Image from '../image/image';

import './attached.css';

const Attached = ({
  minimap,
}) => (
  <div className="panel__attached">
    <Image
      minimap={minimap}
    />
  </div>
);

Attached.defaultProps = {
  minimap: null,
};

Attached.propTypes = {
  minimap: PropTypes.string,
};

export default Attached;
