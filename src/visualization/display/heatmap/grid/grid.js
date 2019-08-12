import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Grid = ({
  clipPath,
  gridTranslation,
  page,
}) => (
  <Fragment>
    {clipPath}
    <g
      clipPath="url(#clipPath)"
      transform={gridTranslation}
    >
      {page}
    </g>
  </Fragment>
);

Grid.defaultProps = {
  page: null,
};

Grid.propTypes = {
  clipPath: PropTypes.node.isRequired,
  gridTranslation: PropTypes.string.isRequired,
  page: PropTypes.arrayOf(
    PropTypes.node,
  ),
};

export default Grid;
