import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';

const Caret = ({
  direction,
  sortedBy,
}) => {
  if (!sortedBy) {
    return (
      <>
        <FontAwesomeIcon icon={faCaretUp} />
        <FontAwesomeIcon icon={faCaretDown} />
      </>
    );
  } if (direction === 'descending') {
    return <FontAwesomeIcon icon={faCaretUp} />;
  }
  return <FontAwesomeIcon icon={faCaretDown} />;
};

Caret.propTypes = {
  direction: PropTypes.string.isRequired,
  sortedBy: PropTypes.bool.isRequired,
};

export default Caret;
