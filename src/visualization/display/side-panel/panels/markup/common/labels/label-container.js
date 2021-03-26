import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Labels from './labels';

import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { clearLabels, toggleLabels } from '../../../../../../../state/visualization/scatter/label-actions';

const LabelsContainer = ({
  helpLink,
  labels,
}) => {
  const dispatch = useDispatch();

  const showAll = useSelector((state) => selectDataProperty(state, 'labels', 'showAll'));

  const handleChange = (e, name, value) => {
    const updatedLabels = {};
    labels.forEach((label) => { updatedLabels[label] = value; });
    dispatch(toggleLabels(updatedLabels));
  };

  const handleClear = () => {
    dispatch(clearLabels());
  };

  return (
    <Labels
      handleChange={handleChange}
      handleClear={handleClear}
      helpLink={helpLink}
      showAll={showAll}
    />
  );
};

LabelsContainer.defaultProps = {
  helpLink: '',
};

LabelsContainer.propTypes = {
  helpLink: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LabelsContainer;
