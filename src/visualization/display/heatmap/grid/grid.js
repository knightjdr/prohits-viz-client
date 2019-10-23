import PropTypes from 'prop-types';
import React from 'react';

const Grid = ({
  clipPath,
  clipPathID,
  page,
  translation,
}) => (
  <>
    {clipPath}
    <g
      clipPath={`url(#${clipPathID})`}
      transform={translation}
    >
      {page}
    </g>
  </>
);

Grid.defaultProps = {
  page: null,
};

Grid.propTypes = {
  clipPath: PropTypes.node.isRequired,
  clipPathID: PropTypes.string.isRequired,
  page: PropTypes.arrayOf(
    PropTypes.node,
  ),
  translation: PropTypes.string.isRequired,
};

export default Grid;
