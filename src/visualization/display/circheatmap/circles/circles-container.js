import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Circle from './circle-container';
import Text from './text';

import debounce from '../../../../utils/debounce';
import defineLabels from './define-labels';
import sortReadouts from './sort-readouts';
import textLimits from './text-limits';
import textSize from '../../../../utils/text-size';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const CirclesContainer = ({
  radius,
  readouts,
}) => {
  const [hoveredText, setHoveredText] = useState();
  const ref = useRef({ mouseOver: false, segmentEntered: false });

  const circles = useSelector((state) => selectDataProperty(state, 'circles', 'order'));
  const thickness = useSelector((state) => selectDataProperty(state, 'dimensions', 'thickness'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { showKnown } = settings;

  const sortedReadouts = useMemo(
    () => sortReadouts(readouts, { byKnown: showKnown, sortBy: circles[0].name }),
    [readouts, circles, showKnown],
  );

  const labels = useMemo(
    () => defineLabels(sortedReadouts.names, radius),
    [radius, sortedReadouts.names],
  );

  const handleMouseEnter = (e) => {
    ref.current.segmentEntered = true;
    const { attribute, segmentIndex } = e.target.dataset;
    const { circles: sortedCircles, names } = sortedReadouts;
    const abundance = sortedCircles[attribute][segmentIndex];
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
          circles.map((circle, index) => (
            <Circle
              attribute={circle.name}
              color={circle.color}
              handleMouseEnter={debouncedMouseEnter}
              handleMouseLeave={handleMouseLeave}
              key={circle.name}
              max={circle.max}
              min={circle.min}
              readouts={sortedReadouts.names}
              radius={radius - (index * (thickness + space))}
              thickness={thickness}
              values={sortedReadouts.circles[circle.name]}
            />
          ))
        }
        <Text
          hoveredText={hoveredText}
          labels={labels}
          show={false}
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
