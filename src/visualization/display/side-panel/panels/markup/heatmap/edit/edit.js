import PropTypes from 'prop-types';
import React from 'react';

import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

const Edit = ({
  deleteFromImage,
  handleDeleteToggle,
  handleReorderToggle,
  reorderImage,
}) => (
  <Section title="Edit">
    <div className="panel-markup__grid">
      <Switch
        checked={deleteFromImage}
        id="deleteFromImage"
        label="Delete columns/rows"
        onChange={handleDeleteToggle}
      />
      <Switch
        checked={reorderImage}
        id="reorderImage"
        label="Reorder columns/rows"
        onChange={handleReorderToggle}
      />
    </div>
  </Section>
);

Edit.propTypes = {
  deleteFromImage: PropTypes.bool.isRequired,
  handleDeleteToggle: PropTypes.func.isRequired,
  handleReorderToggle: PropTypes.func.isRequired,
  reorderImage: PropTypes.bool.isRequired,
};

export default Edit;
