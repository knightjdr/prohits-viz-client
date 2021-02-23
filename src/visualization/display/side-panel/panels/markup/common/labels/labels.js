import PropTypes from 'prop-types';
import React from 'react';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../../../components/buttons/icon/button';
import Section from '../../../section/section';
import Switch from '../../../../../../../components/input/switch/switch-container';

const Labels = ({
  handleChange,
  handleClear,
  showAll,
}) => (
  <Section title="Labels">
    <div className="panel-markup__grid">
      <Switch
        checked={showAll}
        id="showAll"
        label="Show all"
        onChange={handleChange}
      />
      <div className="panel-markup__grid-label">
        Clear labels:
      </div>
      <IconButton
        icon={faTrash}
        kind="warning"
        onClick={handleClear}
        type="button"
      />
    </div>
  </Section>
);

Labels.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  showAll: PropTypes.bool.isRequired,
};

export default Labels;
