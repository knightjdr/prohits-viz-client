import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faGlobeAmericas,
  faInfoCircle,
  faPenSquare,
  faSave,
  faTable,
} from '@fortawesome/pro-light-svg-icons';

const icons = {
  analysis: faTable,
  annotation: faPenSquare,
  info: faInfoCircle,
  map: faGlobeAmericas,
  save: faSave,
  settings: faCog,
};

const Tab = ({
  activeTab,
  onClick,
  tab,
}) => (
  <button
    className={`side-panel__tab ${activeTab === tab ? 'active' : 'inactive'}`}
    onClick={onClick}
    data-tab={tab}
    type="button"
  >
    <FontAwesomeIcon icon={icons[tab]} />
  </button>
);

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};

export default Tab;
