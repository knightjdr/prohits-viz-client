import PropTypes from 'prop-types';
import React from 'react';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Input from '../../../../../../components/input/text/input-text-container';
import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Section from '../../section/section';
import Switch from '../../../../../../components/input/switch/switch-container';

import './annotation.css';

const Annotation = ({
  color,
  fontSize,
  handleAddAnnotation,
  handleAnnotationChange,
  handleClearAll,
  handleColorChange,
  handleFontSizeChange,
  handleToggleAnnotations,
  newAnnotation,
  show,
}) => (
  <Section
    border={false}
    title="Annotations"
  >
    <div className="panel-annotation__input">
      <div className="panel-annotation__input-inner">
        <Input
          id="newAnnotationInput"
          onChange={handleAnnotationChange}
          placeholder="Annotation..."
          type="text"
          value={newAnnotation}
        />
        <IconButton
          id="newAnnotationButton"
          icon={faPlus}
          kind="secondary"
          onClick={handleAddAnnotation}
          type="button"
        />
      </div>
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
        Color:
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
  handleAnnotationChange: PropTypes.func.isRequired,
  handleClearAll: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleFontSizeChange: PropTypes.func.isRequired,
  handleToggleAnnotations: PropTypes.func.isRequired,
  newAnnotation: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Annotation;
