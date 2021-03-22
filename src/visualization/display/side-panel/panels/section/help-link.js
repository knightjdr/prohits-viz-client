import PropTypes from 'prop-types';
import React from 'react';
import { faQuestion } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from '../../../../../components/link/text/link';

const HelpLink = ({
  route,
}) => (
  <Link
    to={route}
    visited={false}
  >
    <FontAwesomeIcon icon={faQuestion} />
  </Link>
);

HelpLink.propTypes = {
  route: PropTypes.string.isRequired,
};

export default HelpLink;
