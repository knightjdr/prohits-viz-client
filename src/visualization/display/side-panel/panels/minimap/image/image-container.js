import PropTypes from 'prop-types';
import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Image from './image';

import calculateNewPosition from './calculate-new-position';
import { selectData, selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { updateDimensions } from '../../../../../../state/visualization/settings/dimension-actions';
import { updatePosition } from '../../../../../../state/visualization/settings/position-actions';

const ImageContainer = ({
  imgLimits,
  minimap,
  pageOutline,
  syncMinimap,
}) => {
  const dispatch = useDispatch();

  const { cellSize } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));

  const handleClick = (e) => {
    const [x, y] = calculateNewPosition(e, dimensions);
    batch(() => {
      dispatch(updateDimensions({
        scrollLeft: x * cellSize,
        scrollTop: y * cellSize,
        scrollUpdate: true,
      }));
      dispatch(updatePosition(x, y));
    });
  };

  const handleKeyPress = () => {};

  return (
    <Image
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      imgLimits={imgLimits}
      minimap={minimap}
      pageOutline={pageOutline}
      syncMinimap={syncMinimap}
    />
  );
};

ImageContainer.defaultProps = {
  imgLimits: {
    height: 'none',
    width: 'none',
  },
};

ImageContainer.propTypes = {
  imgLimits: PropTypes.shape({
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  minimap: PropTypes.shape({
    image: PropTypes.string,
    isSyncing: PropTypes.bool,
    needSyncing: PropTypes.bool,
    syncError: PropTypes.bool,
    syncedImage: PropTypes.string,
  }).isRequired,
  pageOutline: PropTypes.shape({
    height: PropTypes.string,
    left: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    width: PropTypes.string,
  }).isRequired,
  syncMinimap: PropTypes.func.isRequired,
};

export default ImageContainer;
