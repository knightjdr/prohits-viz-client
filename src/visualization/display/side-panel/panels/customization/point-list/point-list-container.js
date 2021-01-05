import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import PointList from './point-list';

import sort from '../../../../../../utils/sort';
import {
  deleteAllPoints,
  deletePoint,
  updatePoint,
} from '../../../../../../state/visualization/scatter/customization-actions';

const PointListContainer = ({
  customization,
}) => {
  const dispatch = useDispatch();

  const labelOrder = useMemo(
    () => {
      const order = Object.keys(customization);
      order.sort(sort.character);
      return order;
    },
    [customization],
  );

  const handleColorChange = (newColor, label) => {
    const parameters = {
      ...customization[label],
      color: newColor,
    };
    dispatch(updatePoint(label, parameters));
  };

  const handleDelete = (e) => {
    const { dataset } = e.currentTarget;
    const { label } = dataset;
    dispatch(deletePoint(label));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllPoints());
  };

  const handleRadiusChange = (e) => {
    const { dataset, value } = e.target;
    const { label } = dataset;
    const parameters = {
      ...customization[label],
      radius: value,
    };
    dispatch(updatePoint(label, parameters));
  };

  return (
    <PointList
      customization={customization}
      handleColorChange={handleColorChange}
      handleDelete={handleDelete}
      handleDeleteAll={handleDeleteAll}
      handleRadiusChange={handleRadiusChange}
      labelOrder={labelOrder}
    />
  );
};

PointListContainer.propTypes = {
  customization: PropTypes.shape({}).isRequired,
};

export default PointListContainer;
