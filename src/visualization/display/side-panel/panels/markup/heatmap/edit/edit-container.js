import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Edit from './edit';

import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import { updateDisplaySetting } from '../../../../../../../state/visualization/settings/display-actions';

const EditContainer = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => selectData(state, 'display'));

  const { deleteFromImage, reorderImage } = display;

  const handleDeleteToggle = () => {
    batch(() => {
      dispatch(updateDisplaySetting('deleteFromImage', !deleteFromImage));
      dispatch(updateDisplaySetting('reorderImage', false));
    });
  };

  const handleReorderToggle = () => {
    batch(() => {
      dispatch(updateDisplaySetting('reorderImage', !reorderImage));
      dispatch(updateDisplaySetting('deleteFromImage', false));
    });
  };

  return (
    <Edit
      deleteFromImage={deleteFromImage}
      handleDeleteToggle={handleDeleteToggle}
      handleReorderToggle={handleReorderToggle}
      reorderImage={reorderImage}
    />
  );
};

export default EditContainer;
