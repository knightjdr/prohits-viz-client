import PropTypes from 'prop-types';
import React from 'react';

import Biclustering from './biclustering-container';
import Hierarchical from './hierarchical-container';
import Noclustering from './noclustering-container';
import Select from '../../fields/select';

const Clustering = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Clustering</h2>
    <Select
      helpMessage={help.clustering}
      helpTitle="Clustering type"
      id="clustering"
      label="Clustering type"
      onChange={handleChange}
      options={[
        { label: 'none', value: 'none' },
        { label: 'Hierarchical', value: 'hierarchical' },
        { label: 'Biclustering', value: 'biclustering' },
      ]}
      value={form.clustering}
      warning={errors.clustering}
    />
    {
      (form.clustering === 'hierarchical' || form.clustering === 'none')
      && <Hierarchical errors={errors} help={help} />
    }
    { form.clustering === 'biclustering' && <Biclustering help={help} /> }
    { form.clustering === 'none' && <Noclustering errors={errors} help={help} /> }
  </section>
);

Clustering.propTypes = {
  errors: PropTypes.shape({
    clustering: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    clustering: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    clustering: PropTypes.node,
  }).isRequired,
};

export default Clustering;
