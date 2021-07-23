import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Id from './id';

import { changeTaskName } from '../../../state/task/task-actions';

const IdContainer = ({
  id,
  name,
}) => {
  const dispatch = useDispatch();
  const [canEdit, setEditState] = useState(false);

  const displayID = name || id;

  const handleNameChange = (e, inputId, value) => {
    setEditState(!canEdit);
    dispatch(changeTaskName(id, value));
  };

  const handleEditToggle = () => {
    setEditState(!canEdit);
  };

  return (
    <Id
      canEdit={canEdit}
      id={displayID}
      handleEditToggle={handleEditToggle}
      handleNameChange={handleNameChange}
      name={name}
    />
  );
};

IdContainer.defaultProps = {
  name: '',
};

IdContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default IdContainer;
