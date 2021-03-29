import React, { useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Circle from './circle/circle-container';
import Text from './text/text-container';

import debounce from '../../../../utils/debounce';
import defineCircles from './define-circles';
import defineLabels from './text/define-labels';
import textLimits from './text/text-limits';
import textSize from '../../../../utils/text-size';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const CirclesContainer = () => {
  const [hoveredText, setHoveredText] = useState();
  const ref = useRef({ mouseOver: false, segmentEntered: false });

  const circles = useSelector((state) => selectDataProperty(state, 'circles', 'order'));
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const readouts = useSelector((state) => selectDataProperty(state, 'readouts', 'current'));
  const { thickness } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const formattedCircles = useMemo(
    () => defineCircles(readouts),
    [readouts],
  );

  const labels = useMemo(
    () => defineLabels(formattedCircles.segmentNames, dimensions),
    [dimensions, formattedCircles.segmentNames],
  );

  const handleMouseEnter = (e) => {
    ref.current.segmentEntered = true;
    const { attribute, segmentIndex } = e.target.dataset;
    const { circles: sortedCircles, segmentNames } = formattedCircles;
    const abundance = sortedCircles[attribute][segmentIndex];
    const position = labels[segmentIndex];
    const readout = segmentNames[segmentIndex];
    const string = `${readout}, ${attribute}: ${abundance}`;
    const width = textSize(string, 'Lato', '16px');
    const widthLimit = dimensions.svgWidth / 2;
    setHoveredText({
      x: textLimits.x(position.x, dimensions.radius, 8),
      y: textLimits.y(position.y, false, widthLimit, width),
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
    dimensions?.radius
    && thickness
      ? (
        <>
          {
            circles.map((circle, index) => (
              <Circle
                attribute={circle.attribute}
                color={circle.color}
                handleMouseEnter={debouncedMouseEnter}
                handleMouseLeave={handleMouseLeave}
                key={circle.attribute}
                max={circle.max}
                min={circle.min}
                readouts={formattedCircles.segmentNames}
                radius={dimensions.radius - (index * (thickness + space))}
                thickness={thickness}
                values={formattedCircles.circles[circle.attribute]}
              />
            ))
          }
          <Text
            hoveredText={hoveredText}
            labels={labels}
          />
        </>
      )
      : null
  );
};

export default CirclesContainer;
