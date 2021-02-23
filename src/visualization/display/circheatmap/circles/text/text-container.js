import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Text from './text';

import getLabelsToShow from './get-labels-to-show';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';

const TextContainer = ({
  hoveredText,
  labels,
}) => {
  const selectedLabels = useSelector((state) => selectDataProperty(state, 'labels', 'status'));
  const searchStatus = useSelector((state) => selectData(state, 'searchStatus'));

  const labelsToShow = useMemo(
    () => getLabelsToShow(labels, searchStatus.labels, selectedLabels),
    [labels, searchStatus.labels, selectedLabels],
  );

  return (
    <Text
      hoveredText={hoveredText}
      labels={labelsToShow}
    />
  );
};

TextContainer.defaultProps = {
  hoveredText: null,
  labels: [],
};

TextContainer.propTypes = {
  hoveredText: PropTypes.shape({
    id: PropTypes.string,
    string: PropTypes.string,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      string: PropTypes.string,
      width: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ),
};

export default TextContainer;
