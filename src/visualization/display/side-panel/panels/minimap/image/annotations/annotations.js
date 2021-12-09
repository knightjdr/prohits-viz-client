import PropTypes from 'prop-types';
import React from 'react';

import Annotation from './annotation';

const Annotations = ({
  annotations,
}) => (
  <>
    {
      annotations.show
        ? (
            Object.entries(annotations.list).map(([id, annotation]) => (
            <Annotation
              color={annotations.color}
              position={annotation.position}
              key={id}
              text={annotation.text}
            />
            ))
          )
        : null
    }
  </>
);

Annotations.propTypes = {
  annotations: PropTypes.shape({
    color: PropTypes.string.isRequired,
    list: PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      text: PropTypes.string,
    }).isRequired,
    show: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Annotations;
