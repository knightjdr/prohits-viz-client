import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Circle from './circle-container';
import Text from '../text/text';

import debounce from '../../../../utils/debounce';
import defineLabels from './define-labels';
import sortReadouts from './sort-readouts';
import textLimits from '../text/text-limits';
import textSize from '../../../../utils/text-size';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../state/selector/general';

const CirclesContainer = ({
  radius,
  readouts,
}) => {
  const [hoveredText, setHoveredText] = useState();
  const ref = useRef({ mouseOver: false, segmentEntered: false });

  const legend = useSelector((state) => selectState(state, 'legend'));
  const thickness = useSelector((state) => selectDataProperty(state, 'dimensions', 'thickness'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { segmentOrder, showKnown, showText } = settings;

  const sortedReadouts = useMemo(
    () => sortReadouts(readouts, { byKnown: showKnown, sortBy: segmentOrder[0] }),
    [readouts, segmentOrder, showKnown],
  );

  const labels = useMemo(
    () => defineLabels(sortedReadouts.names, radius),
    [radius, sortedReadouts.names],
  );

  const handleMouseEnter = (e) => {
    ref.current.segmentEntered = true;
    const { attribute, segmentIndex } = e.target.dataset;
    const { circles, names } = sortedReadouts;
    const abundance = circles[attribute][segmentIndex];
    const position = labels[segmentIndex];
    const readout = names[segmentIndex];
    const string = `${readout}, ${attribute}: ${abundance}`;
    const width = textSize(string, 'Lato', '16px');
    setHoveredText({
      x: textLimits.x(position.x, radius, 8),
      y: textLimits.y(position.y, position.yOffset, radius, width),
      id: readout,
      string,
      width: width + 4,
    });
  };

  const debouncedMouseEnter = debounce((e) => {
    if (ref.current.mouseOver) {
      handleMouseEnter(e);
    }
  }, 100, false, () => { ref.current.mouseOver = true; });

  const handleMouseLeave = () => {
    if (ref.current.segmentEntered) {
      ref.current.segmentEntered = false;
      setHoveredText(null);
    }
    ref.current.mouseOver = false;
  };

  const space = thickness / 4;

  return (
    thickness > 0
    && (
      <>
        {
          legend.map((attribute, index) => (
            <Circle
              attribute={attribute.name}
              color={attribute.color}
              handleMouseEnter={debouncedMouseEnter}
              handleMouseLeave={handleMouseLeave}
              key={attribute.name}
              max={attribute.max}
              min={attribute.min}
              readouts={sortedReadouts.names}
              radius={radius - (index * (thickness + space))}
              thickness={thickness}
              values={sortedReadouts.circles[attribute.name]}
            />
          ))
        }
        <Text
          hoveredText={hoveredText}
          labels={labels}
          show={showText}
        />
      </>
    )
  );
};

CirclesContainer.propTypes = {
  radius: PropTypes.number.isRequired,
  readouts: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default CirclesContainer;
