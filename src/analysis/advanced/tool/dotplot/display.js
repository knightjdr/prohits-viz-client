import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';

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
      options={[
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Greyscale', value: 'grey' },
        { label: 'red', value: 'red' },
      ]}
      value={form.edgeColor}
      warning={errors.edgeColor}
    />
    <Select
      helpMessage={help.fillColor}
      helpTitle="Fill colour"
      id="fillColor"
      label="Fill colour"
      onChange={handleChange}
      options={[
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Greyscale', value: 'grey' },
        { label: 'red', value: 'red' },
      ]}
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
