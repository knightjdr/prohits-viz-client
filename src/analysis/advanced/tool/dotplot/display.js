import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';

const monoColors = [
  { label: 'blue', value: 'blue' },
  { label: 'green', value: 'green' },
  { label: 'greyscale', value: 'greyscale' },
  { label: 'red', value: 'red' },
  { label: 'yellow', value: 'yellow' },
];

const colorOptions = [
  { label: 'mono', optGroup: true },
  ...monoColors,
  { label: 'dual', optGroup: true },
  { label: 'blue-red', value: 'blueRed' },
  { label: 'blue-yellow', value: 'blueYellow' },
];

const Display = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Display</h2>
    <Select
      helpMessage={help.edgeColor}
      helpTitle="Edge colour"
      id="edgeColor"
      label="Edge colour"
      onChange={handleChange}
      options={monoColors}
      value={form.edgeColor}
      warning={errors.edgeColor}
    />
    <Select
      helpMessage={help.fillColor}
      helpTitle="Fill colour"
      id="fillColor"
      label="Fill colour"
      onChange={handleChange}
      options={colorOptions}
      value={form.fillColor}
      warning={errors.fillColor}
    />
  </section>
);

Display.propTypes = {
  errors: PropTypes.shape({
    edgeColor: PropTypes.string,
    fillColor: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    edgeColor: PropTypes.string,
    fillColor: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    edgeColor: PropTypes.node,
    fillColor: PropTypes.node,
  }).isRequired,
};

export default Display;
