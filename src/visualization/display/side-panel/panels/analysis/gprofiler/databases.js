import PropTypes from 'prop-types';
import React from 'react';

import InputCheckbox from '../../../../../../components/input/checkbox/input-checkbox-container';

import './databases.css';

const Databases = ({
  handleChange,
  handleGoCheckboxChange,
  settings,
}) => (
  <div className="gprofiler__databases">
    <h3>Query databases</h3>
    <div>
      <InputCheckbox
        checked={settings.CORUM}
        id="CORUM"
        label="CORUM"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.GO}
        id="GO"
        label="Gene Ontology"
        onChange={handleGoCheckboxChange}
      />
      <div className="gprofiler__go-options">
        <InputCheckbox
          checked={settings['GO:BP']}
          id="GO:BP"
          label="Biological process"
          onChange={handleChange}
        />
        <InputCheckbox
          checked={settings['GO:CC']}
          id="GO:CC"
          label="Cellular component"
          onChange={handleChange}
        />
        <InputCheckbox
          checked={settings['GO:MF']}
          id="GO:MF"
          label="Molecular function"
          onChange={handleChange}
        />
      </div>
      <InputCheckbox
        checked={settings.HP}
        id="HP"
        label="Human phenotype ontology"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.HPA}
        id="HPA"
        label="Human Protein Atlas"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.KEGG}
        id="KEGG"
        label="KEGG"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.MIRNA}
        id="MIRNA"
        label="miRTarBase"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.REAC}
        id="REAC"
        label="Reactome"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.TF}
        id="TF"
        label="TRANSFAC"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.WP}
        id="WP"
        label="WikiPathways"
        onChange={handleChange}
      />
    </div>
  </div>
);

Databases.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleGoCheckboxChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    CORUM: PropTypes.bool,
    GO: PropTypes.bool,
    'GO:BP': PropTypes.bool,
    'GO:CC': PropTypes.bool,
    'GO:MF': PropTypes.bool,
    HPA: PropTypes.bool,
    HP: PropTypes.bool,
    KEGG: PropTypes.bool,
    MIRNA: PropTypes.bool,
    REAC: PropTypes.bool,
    TF: PropTypes.bool,
    WP: PropTypes.bool,
  }).isRequired,
};

export default Databases;
