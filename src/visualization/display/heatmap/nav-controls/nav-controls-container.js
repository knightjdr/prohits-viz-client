import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavControls from './nav-controls';

import calculateElementPosition from './calculate-element-position';
import calculatePlotPosition from './calculate-plot-position';
import debounce from '../../../../utils/debounce';
import selectActiveTab from '../../../../state/selector/visualization/tab-selector';
import shouldDisable from './should-disable';
import { selectData } from '../../../../state/selector/visualization/data-selector';
import { updatePosition } from '../../../../state/visualization/settings/position-actions';

const NavControlsContainer = ({
  direction,
  offsetVertical,
}) => {
  const [isVisible, setVisibility] = useState(true);

  const dispatch = useDispatch();

  const activeTab = useSelector(state => selectActiveTab(state));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));

  const length = direction === 'horizontal' ? dimensions.columns : dimensions.rows;
  const pageType = direction === 'horizontal' ? 'pageX' : 'pageY';
  const vertex = direction === 'horizontal' ? 'x' : 'y';

  useEffect(() => {
    const makeVisible = debounce(() => {
      setVisibility(true);
    }, 800);
    const onResize = () => {
      setVisibility(false);
      makeVisible();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  const calculateNewPostion = (increment) => {
    const newPosition = calculatePlotPosition(position, vertex, length, dimensions[pageType], increment);
    dispatch(updatePosition(activeTab, newPosition.x, newPosition.y));
  };

  const handlePageDown = () => {
    calculateNewPostion(dimensions[pageType]);
  };
  const handlePageEnd = () => {
    calculateNewPostion(length);
  };
  const handlePageStart = () => {
    calculateNewPostion(-length);
  };
  const handlePageUp = () => {
    calculateNewPostion(-dimensions[pageType]);
  };
  const handleRowDown = () => {
    calculateNewPostion(1);
  };
  const handleRowUp = () => {
    calculateNewPostion(-1);
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
      isVisible={isVisible}
    />
  );
};

NavControlsContainer.defaultProps = {
  direction: 'vertical',
  offsetVertical: false,
};

NavControlsContainer.propTypes = {
  direction: PropTypes.string,
  offsetVertical: PropTypes.bool,
};

export default NavControlsContainer;
