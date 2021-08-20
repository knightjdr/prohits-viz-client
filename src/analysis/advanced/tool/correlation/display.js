import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';

const colorOptions = [
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
    fillColor: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    fillColor: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    fillColor: PropTypes.node,
  }).isRequired,
};

export default Display;
