import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/pro-solid-svg-icons';

import Link from '../../components/link/text/link';

const FooterLink = ({
  isPrevious,
  route,
  text,
}) => (
  route
    ? (
      <Link
        className={isPrevious ? 'left' : 'right'}
        href={route}
        outline={false}
        visited={false}
      >
        { isPrevious && <FontAwesomeIcon icon={faArrowAltCircleRight} rotation={180} /> }
        { isPrevious ? 'Previous: ' : 'Next: '}
        {text}
        { !isPrevious && <FontAwesomeIcon icon={faArrowAltCircleRight} /> }
      </Link>
    )
    : null
);

FooterLink.defaultProps = {
  isPrevious: false,
  route: undefined,
  text: undefined,
};

FooterLink.propTypes = {
  isPrevious: PropTypes.bool,
  route: PropTypes.string,
  text: PropTypes.string,
};

export default FooterLink;
