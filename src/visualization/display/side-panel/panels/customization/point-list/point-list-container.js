import React from 'react';
import { useDispatch } from 'react-redux';

import PointList from './point-list';

// import sort from '../../../../../../utils/sort';
import {
  // deleteAllPoints,
  deletePoint,
  // updatePoint,
} from '../../../../../../state/visualization/scatter/customization-actions';
// import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';

const PointListContainer = () => {
  const dispatch = useDispatch();

  /* const customization = useSelector((state) => selectDataProperty(state, 'customization', 'points'));

  const labelOrder = useMemo(
    () => {
      const order = Object.keys(customization);
      order.sort(sort.character);
      return order;
    },
    [customization],
  ); */

  const handleColorChange = (/* newColor, label */) => {
    /* const parameters = {
      ...customization[label],
      color: newColor,
    }; */
    // dispatch(updatePoint(label, parameters));
  };

  const handleDelete = (e) => {
    const { dataset } = e.currentTarget;
    const { label } = dataset;
    dispatch(deletePoint(label));
  };

  const handleDeleteAll = () => {
    // dispatch(deleteAllPoints());
  };

  const handleRadiusChange = (/* e */) => {
    /* const { dataset, value } = e.target;
    const { label } = dataset;
    const parameters = {
      ...customization[label],
      radius: value,
    }; */
    // dispatch(updatePoint(label, parameters));
  };

  return (
    <PointList
      customization={{}}
      handleColorChange={handleColorChange}
      handleDelete={handleDelete}
      handleDeleteAll={handleDeleteAll}
      handleRadiusChange={handleRadiusChange}
      labelOrder={[]}
    />
  );
};

export default PointListContainer;
