import PropTypes from 'prop-types';
import React from 'react';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Input from '../../../../../../components/input/text/input-text-container';
import InputWithButton from '../../../../../../components/input/with-button/input-with-button-container';
import Section from '../../section/section';
import Switch from '../../../../../../components/input/switch/switch-container';

const Annotation = ({
  fontSize,
  handleAddAnnotation,
  handleClearAll,
  handleFontSizeChange,
  handleToggleAnnotations,
  show,
}) => (
  <Section
    border={false}
    title="Annotations"
  >
    <div className="panel-markup__input">
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
    <div className="panel-markup__grid">
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
      <span className="panel-markup__label">
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
  fontSize: PropTypes.number.isRequired,
  handleAddAnnotation: PropTypes.func.isRequired,
  handleClearAll: PropTypes.func.isRequired,
  handleFontSizeChange: PropTypes.func.isRequired,
  handleToggleAnnotations: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Annotation;
