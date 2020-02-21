import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../fields/select';
import InputTextArea from '../../../../../components/input/text-area/input-text-area-container';

const Noclustering = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <>
    <Select
      helpMessage={help.conditionClustering}
      helpTitle="Cluster by condition"
      id="conditionClustering"
      label="Condition options"
      onChange={handleChange}
      options={[
        { label: 'Supply conditions', value: 'none' },
        { label: 'Cluster all conditions', value: 'conditions' },
      ]}
      value={form.conditionClustering}
      warning={errors.conditionClustering}
    />
    {
      form.conditionClustering === 'none'
      && (
        <InputTextArea
          id="conditionList"
          label="Conditions"
          onChange={handleChange}
          placeholder="Enter conditions as a comma-, whitespace- or newline-separated list"
          rows={5}
          value={form.conditionList}
          vertical
          warning={errors.conditionList}
        />
      )
    }
    <Select
      helpMessage={help.readoutClustering}
      helpTitle="Cluster by readout"
      id="readoutClustering"
      label="Readout options"
      onChange={handleChange}
      options={[
        { label: 'Supply readouts', value: 'none' },
        { label: 'Cluster all readouts', value: 'readouts' },
      ]}
      value={form.readoutClustering}
      warning={errors.readoutClustering}
    />
    {
      form.readoutClustering === 'none'
      && (
        <InputTextArea
          id="readoutList"
          label="Readouts"
          onChange={handleChange}
          placeholder="Enter readouts as a comma-, whitespace- or newline-separated list"
          rows={5}
          value={form.readoutList}
          vertical
          warning={errors.readoutList}
        />
      )
    }
  </>
);

Noclustering.propTypes = {
  errors: PropTypes.shape({
    conditionClustering: PropTypes.string,
    conditionList: PropTypes.string,
    readoutClustering: PropTypes.string,
    readoutList: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    conditionClustering: PropTypes.string,
    conditionList: PropTypes.string,
    readoutClustering: PropTypes.string,
    readoutList: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    conditionClustering: PropTypes.node,
    readoutClustering: PropTypes.string,
  }).isRequired,
};

export default Noclustering;
