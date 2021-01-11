import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../../components/divider/divider';
import Loading from '../../components/loading/element/loading';
import Select from '../../components/select/select-container';

const Conditions = ({
  errors,
  form,
  loading,
  options,
  setColumn,
}) => (
  <div className="analysis__condition">
    <Divider>Conditions</Divider>
    {
      loading
        ? (
          <div className="analysis__condition-loading">
            <Loading
              isLoading={loading}
              message="Reading conditions from file..."
            />
          </div>
        )
        : (
          <>
            <p>
              Select the conditions to compare.
            </p>
            <div className="analysis__condition-selectors">
              <Select
                id="conditionX"
                label="X-axis condition"
                onChange={setColumn}
                options={options}
                placeholder="Select condition..."
                value={form.conditionX}
                warning={errors.conditionX}
              />
              <Select
                id="conditionY"
                label="Y-axis condition"
                onChange={setColumn}
                options={options}
                placeholder="Select condition..."
                value={form.conditionY}
                warning={errors.conditionY}
              />
            </div>
          </>
        )
    }
  </div>
);

Conditions.propTypes = {
  errors: PropTypes.shape({
    conditionX: PropTypes.string,
    conditionY: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    conditionX: PropTypes.string,
    conditionY: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  setColumn: PropTypes.func.isRequired,
};

export default Conditions;
