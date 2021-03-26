import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../../../../components/select/select-container';

import './plot.css';

const Plot = ({
  handlePlotChange,
  plotNames,
  selectedPlot,
}) => (
  plotNames.length > 1
  && (
    <div className="panel__info-plot">
      <Select
        id="selectedPlot"
        label="Plot"
        onChange={handlePlotChange}
        options={plotNames}
        value={plotNames[selectedPlot]}
        vertical={false}
      />
    </div>
  )
);

Plot.propTypes = {
  handlePlotChange: PropTypes.func.isRequired,
  plotNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPlot: PropTypes.number.isRequired,
};

export default Plot;
