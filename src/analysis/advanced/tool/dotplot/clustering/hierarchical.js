import PropTypes from 'prop-types';
import React from 'react';

import Select from '../../../../../components/select/select-container';
import Switch from '../../fields/switch';

const Hierarchical = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <>
    <Select
      id="distance"
      label="Distance metric"
      onChange={handleChange}
      options={[
        { label: 'binary', value: 'binary' },
        { label: 'Canberra', value: 'canberra' },
        { label: 'Euclidean', value: 'euclidean' },
        { label: 'Jaccard', value: 'jaccard' },
        { label: 'Manhattan', value: 'Manhattan' },
        { label: 'maximum', value: 'maximum' },
      ]}
      value={form.distance}
      warning={errors.distance}
    />
    <Select
      id="clusteringMethod"
      label="Clustering method"
      onChange={handleChange}
      options={[
        { label: 'average', value: 'average' },
        { label: 'centroid', value: 'centroid' },
        { label: 'complete', value: 'complete' },
        { label: 'McQuitty', value: 'mcquitty' },
        { label: 'median', value: 'median' },
        { label: 'single', value: 'single' },
        { label: 'Ward', value: 'ward' },
      ]}
      value={form.clusteringMethod}
      warning={errors.clusteringMethod}
    />
    <Switch
      helpMessage={help.clusteringOptimize}
      helpTitle="Optimize clustering"
      checked={form.clusteringOptimize}
      id="clusteringOptimize"
      label="Optimize clustering"
      onChange={handleChange}
    />
  </>
);

Hierarchical.propTypes = {
  errors: PropTypes.shape({
    clusteringMethod: PropTypes.string,
    clusteringOptimize: PropTypes.string,
    distance: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    clusteringMethod: PropTypes.string,
    clusteringOptimize: PropTypes.bool,
    distance: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    clusteringOptimize: PropTypes.node,
  }).isRequired,
};

export default Hierarchical;
