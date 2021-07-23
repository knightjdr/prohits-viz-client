import PropTypes from 'prop-types';
import React from 'react';
import { faPen } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../components/buttons/icon/button';
import Input from '../../../components/input/text/input-text-container';

const Id = ({
  canEdit,
  id,
  handleEditToggle,
  handleNameChange,
  name,
}) => (
  <div className="tasks__table-id">
    {
      canEdit
        ? (
          <Input
            id={id}
            onBlur={handleEditToggle}
            onChange={handleNameChange}
            placeholder="New name or ID..."
            type="text"
            value={name}
          />
        )
        : <span>{id}</span>
    }
    <IconButton
      kind="transparent"
      icon={faPen}
      onClick={handleEditToggle}
      size="sm"
      type="button"
    />
  </div>
);

Id.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  handleEditToggle: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Id;
