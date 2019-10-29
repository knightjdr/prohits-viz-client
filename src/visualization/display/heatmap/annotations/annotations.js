import PropTypes from 'prop-types';
import React from 'react';

import Annotation from './annotation-container';

const Annotations = ({
  cellSize,
  clipPath,
  clipPathID,
  fontSize,
  handleAnnotationDeletion,
  imageDimensions,
  list,
  scalePosition,
  translation,
}) => (
  <>
    {clipPath}
    <g
      clipPath={`url(#${clipPathID})`}
      transform={translation}
    >
      {
        Object.entries(list).map(([id, annotation]) => (
          <Annotation
            cellSize={cellSize}
            handleAnnotationDeletion={handleAnnotationDeletion}
            imageDimensions={imageDimensions}
            fontSize={fontSize}
            id={id}
            key={id}
            position={annotation.position}
            scalePosition={scalePosition}
            text={annotation.text}
          />
        ))
      }
    </g>
  </>
);

Annotations.propTypes = {
  cellSize: PropTypes.number.isRequired,
  clipPath: PropTypes.node.isRequired,
  clipPathID: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleAnnotationDeletion: PropTypes.func.isRequired,
  imageDimensions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  list: PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    text: PropTypes.string,
  }).isRequired,
  scalePosition: PropTypes.func.isRequired,
  translation: PropTypes.string.isRequired,
};

export default Annotations;
