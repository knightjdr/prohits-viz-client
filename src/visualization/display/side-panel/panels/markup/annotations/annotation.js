import PropTypes from 'prop-types';
import React from 'react';

import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Section from '../../section/section';
import Switch from '../../../../../../components/input/switch/switch-container';

import './annotation.css';

const Annotation = ({
  color,
  handleColorChange,
  handleToggleAnnotations,
  show,
}) => (
  <Section
    border={false}
    title="Annotations"
  >
    <div className="panel-annotation__grid">
      <span>
        Annotation color:
      </span>
      <ColorPicker
        color={color}
        onChange={handleColorChange}
        placement={['right', 'bottom']}
      />
      <Switch
        checked={show}
        id="showAnnotations"
        label="Show"
        onChange={handleToggleAnnotations}
      />
    </div>
  </Section>
);

Annotation.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleToggleAnnotations: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Annotation;
