import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import NavControls from './nav-controls';

import calculateElementPosition from './calculate-element-position';
import calculatePlotPosition from './calculate-plot-position';
import debounce from '../../../../utils/debounce';
import shouldDisable from './should-disable';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { updateDimensions } from '../../../../state/visualization/settings/dimension-actions';
import { updatePosition } from '../../../../state/visualization/settings/position-actions';

const NavControlsContainer = ({
  dimensions,
  direction,
  isResizing,
  offsetVertical,
}) => {
  const dispatch = useDispatch();
  const position = useSelector((state) => selectData(state, 'position'));
  const { cellSize } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const length = direction === 'horizontal' ? dimensions.columns : dimensions.rows;
  const pageType = direction === 'horizontal' ? 'pageX' : 'pageY';
  const vertex = direction === 'horizontal' ? 'x' : 'y';

  const calculateNewPosition = (increment) => {
    const newPosition = calculatePlotPosition(position, vertex, length, dimensions[pageType], increment);
    batch(() => {
      dispatch(updateDimensions({
        scrollLeft: newPosition.x * cellSize,
        scrollTop: newPosition.y * cellSize,
        scrollUpdate: true,
      }));
      dispatch(updatePosition(newPosition.x, newPosition.y));
    });
  };

  const handlePageDown = () => {
    calculateNewPosition(dimensions[pageType]);
  };
  const handlePageEnd = () => {
    calculateNewPosition(length);
  };
  const handlePageStart = () => {
    calculateNewPosition(-length);
  };
  const handlePageUp = () => {
    calculateNewPosition(-dimensions[pageType]);
  };
  const handleRowDown = () => {
    calculateNewPosition(1);
  };
  const handleRowUp = () => {
    calculateNewPosition(-1);
  };

  const disabled = useMemo(() => (
    shouldDisable(position, vertex, length, dimensions[pageType])
  ), [dimensions, length, pageType, position, vertex]);

  const elPosition = useMemo(() => (
    calculateElementPosition(
      direction,
      dimensions.height,
      dimensions.wrapperHeight,
      dimensions.width,
      window.innerWidth,
      offsetVertical,
    )
  ), [dimensions, direction, offsetVertical]);

  return (
    <NavControls
      disabled={disabled}
      elPosition={elPosition}
      handlePageDown={handlePageDown}
      handlePageEnd={handlePageEnd}
      handlePageStart={handlePageStart}
      handlePageUp={handlePageUp}
      handleRowDown={handleRowDown}
      handleRowUp={handleRowUp}
      isResizing={isResizing}
    />
  );
};

NavControlsContainer.defaultProps = {
  direction: 'vertical',
  offsetVertical: false,
};

NavControlsContainer.propTypes = {
  dimensions: PropTypes.shape({
    columns: PropTypes.number,
    height: PropTypes.number,
    rows: PropTypes.number,
    width: PropTypes.number,
    wrapperHeight: PropTypes.number,
  }).isRequired,
  direction: PropTypes.string,
  offsetVertical: PropTypes.bool,
  isResizing: PropTypes.bool.isRequired,
};

const ShowNavControls = ({
  show,
  ...props
}) => {
  const [isResizing, setIsResizing] = useState(true);

  const dimensions = useSelector((state) => selectData(state, 'dimensions'));

  useEffect(() => {
    const makeVisible = debounce(() => {
      setIsResizing(true);
    }, 800);
    const onResize = () => {
      setIsResizing(false);
      makeVisible();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  const showControls = show && (dimensions.height > 0) && (dimensions.width > 0);

  return (
    showControls
    && (
      <NavControlsContainer
        dimensions={dimensions}
        isResizing={isResizing}
        {...props}
      />
    )
  );
};

ShowNavControls.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowNavControls;
