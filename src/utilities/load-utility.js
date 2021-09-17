import PropTypes from 'prop-types';
import React from 'react';

import CrisprConvert from './utility/crispr-convert/crispr-convert-container';
import PVConvert from './utility/pvconvert/pvconvert-container';
import SaintDomainEnrich from './utility/saint-domain-enrich/saint-domain-enrich-container';
import SaintBiogridNetwork from './utility/saint-biogrid-network/saint-biogrid-network-container';
import SaintFEA from './utility/saint-fea/saint-fea-container';
import SaintStats from './utility/saint-stats/saint-stats-container';
import TextBiogridNetwork from './utility/text-biogrid-network/text-biogrid-network-container';

const loadUtilityComponent = (utility, errors) => {
  if (utility === 'crispr_convert') {
    return <CrisprConvert errors={errors} />;
  } if (utility === 'pvconvert') {
    return <PVConvert errors={errors} />;
  } if (utility === 'saint_biogrid_network') {
    return <SaintBiogridNetwork errors={errors} />;
  } if (utility === 'saint_domain_enrich') {
    return <SaintDomainEnrich errors={errors} />;
  } if (utility === 'saint_fea') {
    return <SaintFEA errors={errors} />;
  } if (utility === 'saint_stats') {
    return <SaintStats errors={errors} />;
  } if (utility === 'text_biogrid_network') {
    return <TextBiogridNetwork errors={errors} />;
  }
  return null;
};

const LoadUtility = ({
  errors,
  utility,
}) => (
  utility
  && (
    <div className="utility">
      {loadUtilityComponent(utility, errors)}
    </div>
  )
);

LoadUtility.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  utility: PropTypes.string.isRequired,
};

export default LoadUtility;
