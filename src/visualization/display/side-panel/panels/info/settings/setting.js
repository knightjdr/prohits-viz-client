import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import convertCamel from '../../../../../../utils/convert-camel';

const Setting = ({
  field,
  value,
}) => (
  <Fragment>
    <div>
      {convertCamel(field)}
    </div>
    <div>
      {value}
    </div>
  </Fragment>
);

Setting.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Setting;
