import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../../../../components/loading/page/loading';

const Warning = ({
  numberOfResults,
}) => (
  numberOfResults === 0
  && (
    <Loading
      error
      message="There are no enriched terms"
    />
  )
);

Warning.propTypes = {
  numberOfResults: PropTypes.number.isRequired,
};

export default Warning;
