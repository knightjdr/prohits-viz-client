import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../../../components/link/text/link';
import Switch from '../fields/switch';

const Output = ({
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Output</h2>
    <p>
      See the
      {' '}
      <Link
        href="/help"
        visited={false}
      >
        help
      </Link>
      {' '}
      for detailed information on the files output from this tool.
    </p>
    <Switch
      helpMessage={help.png}
      helpTitle="Generate PNG"
      checked={form.png}
      id="png"
      label="Generate PNG"
      onChange={handleChange}
    />
    <Switch
      helpMessage={help.verticalHeatmap}
      helpTitle="Generate traditional heat map"
      checked={form.verticalHeatmap}
      id="verticalHeatmap"
      label="Generate traditional heat map"
      onChange={handleChange}
    />
  </section>
);

Output.propTypes = {
  form: PropTypes.shape({
    png: PropTypes.bool,
    verticalHeatmap: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    png: PropTypes.node,
    verticalHeatmap: PropTypes.node,
  }).isRequired,
};

export default Output;
