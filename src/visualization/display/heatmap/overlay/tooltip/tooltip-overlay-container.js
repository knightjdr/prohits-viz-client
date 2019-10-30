import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TooltipOverlay from './tooltip-overlay';

import createTooltipProperties, { defaultTooltipState } from './create-tooltip-properties';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../../state/selector/general';

const TooltipOverlayContainer = ({
  gridRef,
}) => {
  const [tooltip, setTooltip] = useState(defaultTooltipState);

  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const pagePosition = useSelector(state => selectData(state, 'position'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const { cellSize } = settings;
  const moveOptions = {
    cellSize,
    columnOrder,
    pagePosition,
    ref: gridRef,
    rowDB,
    rowOrder,
  };

  useEffect(() => {
    const mouseLeave = () => {
      setTooltip(defaultTooltipState);
    };

    const mouseOver = (e) => {
      const position = createTooltipProperties(e, moveOptions);
      setTooltip(position);
    };

    gridRef.addEventListener('mouseleave', mouseLeave);
    gridRef.addEventListener('mousemove', mouseOver);
    return () => {
      gridRef.removeEventListener('mouseleave', mouseLeave);
      gridRef.removeEventListener('mousemove', mouseOver);
    };
  }, [gridRef, moveOptions]);

  return (
    <TooltipOverlay
      tooltip={tooltip}
    />
  );
};

TooltipOverlayContainer.defaultProps = {
  gridRef: {
    addEventListener: () => {},
    removeEventListener: () => {},
  },
};

TooltipOverlayContainer.propTypes = {
  gridRef: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
  }),
};

const ShowContainer = ({
  show,
  ...props
}) => (
  show
  && <TooltipOverlayContainer {...props} />
);

export default ShowContainer;
