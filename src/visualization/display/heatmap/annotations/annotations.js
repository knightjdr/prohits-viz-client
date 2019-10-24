import PropTypes from 'prop-types';
import React from 'react';

import Annotation from './annotation-container';

const Annotations = ({
  cellSize,
  clipPath,
  clipPathID,
  fontSize,
  handleAnnotationDeletion,
  height,
  list,
  show,
  translation,
  width,
}) => (
  show
    ? (
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
                height={height}
                fontSize={fontSize}
                id={id}
                key={id}
                position={annotation.position}
                text={annotation.text}
                width={width}
              />
            ))
          }
        </g>
      </>
    )
    : null
);

Annotations.propTypes = {
  cellSize: PropTypes.number.isRequired,
  clipPath: PropTypes.node.isRequired,
  clipPathID: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleAnnotationDeletion: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  list: PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    text: PropTypes.string,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  translation: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Annotations;
