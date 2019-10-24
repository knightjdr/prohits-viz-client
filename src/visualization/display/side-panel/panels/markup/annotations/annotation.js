import PropTypes from 'prop-types';
import React from 'react';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Input from '../../../../../../components/input/text/input-text-container';
import InputWithButton from '../../../../../../components/input/with-button/input-with-button-container';
import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Section from '../../section/section';
import Switch from '../../../../../../components/input/switch/switch-container';

import './annotation.css';

const Annotation = ({
  color,
  fontSize,
  handleAddAnnotation,
  handleClearAll,
  handleColorChange,
  handleFontSizeChange,
  handleToggleAnnotations,
  show,
}) => (
  <Section
    border={false}
    title="Annotations"
  >
    <div className="panel-annotation__input">
      <InputWithButton
        kind="secondary"
        buttonType="button"
        icon={faPlus}
        id="newAnnotation"
        inputType="text"
        placeholder="Annotation..."
        onClick={handleAddAnnotation}
      />
    </div>
    <div className="panel-annotation__grid">
      <Input
        id="annotationFontSize"
        label="Font size (px)"
        onChange={handleFontSizeChange}
        min="0"
        step="1"
        type="number"
        value={fontSize}
      />
      <Switch
        checked={show}
        id="showAnnotations"
        label="Show"
        onChange={handleToggleAnnotations}
      />
      <span className="panel-annotation__label">
        Dot color:
      </span>
      <ColorPicker
        color={color}
        onChange={handleColorChange}
        placement={['right', 'bottom']}
      />
      <span className="panel-annotation__label">
        Clear all:
      </span>
      <IconButton
        icon={faTrash}
        kind="warning"
        onClick={handleClearAll}
        type="button"
      />
    </div>
  </Section>
);

Annotation.propTypes = {
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleAddAnnotation: PropTypes.func.isRequired,
  handleClearAll: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleFontSizeChange: PropTypes.func.isRequired,
  handleToggleAnnotations: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Annotation;
