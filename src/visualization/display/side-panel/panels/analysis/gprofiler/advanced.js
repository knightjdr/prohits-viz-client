import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../../components/buttons/rectangular/button';
import InputCheckbox from '../../../../../../components/input/checkbox/input-checkbox-container';
import InputText from '../../../../../../components/input/text/input-text-container';
import InputTextArea from '../../../../../../components/input/text-area/input-text-area-container';
import SelectContainer from '../../../../../../components/select/select-container';

import './advanced.css';

const Advanced = ({
  handleChange,
  settings,
}) => (
  <div>
    <h3>Advanced options</h3>
    <div className="gprofiler__advanced-checkboxes">
      <InputCheckbox
        checked={settings.no_iea}
        id="no_iea"
        label="Exclude electronic annotations"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.measure_underrepresentation}
        id="measure_underrepresentation"
        label="Measure underrepresentation"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.ordered}
        id="ordered"
        label="Ordered query"
        onChange={handleChange}
      />
      <InputCheckbox
        checked={settings.all_results}
        id="all_results"
        label="Show non-signifcant results"
        onChange={handleChange}
      />
    </div>
    <div className="gprofiler__advanced-menus">
      <InputText
        id="geneSeparator"
        label="Gene separator"
        onChange={handleChange}
        placeholder="Symbol(s) for parsing leading gene symbol"
        value={settings.geneSeparator}
        vertical
      />
      <SelectContainer
        id="domain_scope"
        label="Background"
        onChange={handleChange}
        options={[
          { label: 'Annotated genes', value: 'annotated' },
          { label: 'Known genes', value: 'known' },
          { label: 'Custom', value: 'custom' },
        ]}
        value={settings.domain_scope}
      />
      {
        settings.domain_scope === 'custom'
        && (
          <InputTextArea
            id="background"
            label="Background genes"
            onChange={handleChange}
            rows={5}
            value={settings.background}
            vertical
          />
        )
      }
      <InputText
        id="user_threshold"
        label="Significance threshold"
        max={1}
        min={0}
        onChange={handleChange}
        value={settings.user_threshold}
        vertical
      />
      <SelectContainer
        id="numeric_ns"
        label="Namespace for numeric IDs"
        onChange={handleChange}
        options={[
          'AFFY_HUEX_1_0_ST_V2',
          'AFFY_HUGENE_1_0_ST_V1',
          'AFFY_HUGENE_2_0_ST_V1',
          'DBASS3',
          'DBASS5',
          'ENTREZGENE',
          'ILLUMINA_HUMANWG_6_V1',
          'MIM_GENE',
          'MIM_MORBID',
          'WIKIGENE',
        ]}
        value={settings.numeric_ns}
      />
      <SelectContainer
        id="significance_threshold_method"
        label="Multiple testing correction method"
        onChange={handleChange}
        options={[
          { label: 'Bonferroni', value: 'bonferroni' },
          { label: 'FDR', value: 'fdr' },
          { label: 'g_SCS', value: 'g_SCS' },
        ]}
        value={settings.significance_threshold_method}
      />
    </div>
  </div>
);

Advanced.propTypes = {
  handleChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    all_results: PropTypes.bool,
    background: PropTypes.string,
    domain_scope: PropTypes.string,
    geneSeparator: PropTypes.string,
    measure_underrepresentation: PropTypes.bool,
    no_iea: PropTypes.bool,
    numeric_ns: PropTypes.string,
    ordered: PropTypes.bool,
    significance_threshold_method: PropTypes.string,
    user_threshold: PropTypes.number,
  }).isRequired,
};

const ToggleContainer = ({
  showAdvanced,
  toggleAdvanced,
  ...props
}) => (
  <div className="gprofiler__advanced">
    <Button
      onClick={toggleAdvanced}
      kind="secondary"
      type="button"
    >
      {showAdvanced ? 'Hide advanced' : 'Show advanced'}
    </Button>
    { showAdvanced ? <Advanced {...props} /> : null}
  </div>
);

ToggleContainer.propTypes = {
  showAdvanced: PropTypes.bool.isRequired,
  toggleAdvanced: PropTypes.func.isRequired,
};

export default ToggleContainer;
