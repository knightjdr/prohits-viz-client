import React from 'react';

import Link from '../../components/link/text/link';

const toolDescription = (tool) => {
  if (tool === 'condition-condition') {
    return (
      <p>
        Compare two conditions against each other in scatter plot form. See the
        {' '}
        <Link
          to="/help/analysis/condition-condition"
          visited={false}
        >
          help
        </Link>
        {' '}
        for more information on this tool.
      </p>
    );
  } if (tool === 'correlation') {
    return (
      <p>
        Correlation information for readouts across conditions is visualized as a heat map. This
        analysis is suitable for large datasets (typically &ge; 20 conditions) and can more easily
        display readout relationships in such circumstances than a dot plot. See the
        {' '}
        <Link
          to="/help/analysis/correlation"
          visited={false}
        >
          help
        </Link>
        {' '}
        for more information on this tool.
      </p>
    );
  } if (tool === 'dotplot') {
    return (
      <p>
        Quantitative information from condition-readout datasets is visualized as a dot plot. This
        is an ideal way of visualizing and familiarizing yourself with small to moderately sized
        data sets (&le; 20 conditions). See the
        {' '}
        <Link
          to="/help/analysis/dotplot"
          visited={false}
        >
          help
        </Link>
        {' '}
        for more information on this tool.
      </p>
    );
  } if (tool === 'scv') {
    return (
      <p>
        Visualize data on a single condition in a compact circular heatmap form. See the
        {' '}
        <Link
          to="/help/analysis/scv"
          visited={false}
        >
          help
        </Link>
        {' '}
        for more information on this tool.
      </p>
    );
  } if (tool === 'specificity') {
    return (
      <p>
        For each condition, the specificty of its significant readouts is calculated relative to
        the dataset as a whole and visualized as a scatter plot. This
        analysis is suitable for large datasets (typically &ge; 20 conditions). See the
        {' '}
        <Link
          to="/help/analysis/specificity"
          visited={false}
        >
          help
        </Link>
        {' '}
        for more information on this tool.
      </p>
    );
  }
  return null;
};

export default toolDescription;
