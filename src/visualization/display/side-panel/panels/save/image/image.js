import PropTypes from 'prop-types';
import React from 'react';
import { faSave } from '@fortawesome/pro-duotone-svg-icons';

import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';
import IconButton from '../../../../../../components/buttons/icon/button';

import './image.css';

const Image = ({
  handleChange,
  handleSave,
  imageType,
}) => (
  <Section
    border={false}
    title="Save Image"
  >
    <div className="panel__save-image">
      <Select
        onChange={handleChange}
        options={[
          { label: 'SVG', value: 'svg' },
          { label: 'PNG', value: 'png' },
        ]}
        value={imageType}
      />
      <IconButton
        icon={faSave}
        kind="secondary"
        onClick={handleSave}
      />
    </div>
  </Section>
);

Image.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
};

export default Image;
