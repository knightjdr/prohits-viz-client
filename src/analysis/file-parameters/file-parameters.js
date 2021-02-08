import PropTypes from 'prop-types';
import React from 'react';

import Columns from './columns';
import Conditions from './conditions';

import './file-parameters.css';

const FileParameters = ({
  errors,
  form,
  conditions,
  options,
  selectedtool,
  setColumn,
}) => (
  <>
    <Columns
      errors={errors}
      form={form}
      multipleAbundance={selectedtool === 'scv'}
      options={{
        abundance: options.abundance,
        condition: options.condition,
        readout: options.readout,
        score: options.score,
      }}
      selectedtool={selectedtool}
      setColumn={setColumn}
    />
    {
      selectedtool === 'condition-condition'
      && (
        <Conditions
          errors={errors}
          form={form}
          loading={conditions.loading}
          options={conditions.options}
          setColumn={setColumn}
        />
      )
    }
  </>
);

FileParameters.propTypes = {
  conditions: PropTypes.shape({
    loading: PropTypes.bool,
    options: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
  errors: PropTypes.shape({
    abundance: PropTypes.string,
    condition: PropTypes.string,
    conditionX: PropTypes.string,
    conditionY: PropTypes.string,
    readout: PropTypes.string,
    score: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    abundance: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    condition: PropTypes.string,
    conditionX: PropTypes.string,
    conditionY: PropTypes.string,
    readout: PropTypes.string,
    score: PropTypes.string,
  }).isRequired,
  options: PropTypes.shape({
    abundance: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
    condition: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
    readout: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
    score: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  selectedtool: PropTypes.string.isRequired,
  setColumn: PropTypes.func.isRequired,
};

export default FileParameters;
