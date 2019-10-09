import PropTypes from 'prop-types';
import React from 'react';
import {
  faAngleDoubleUp,
  faArrowUp,
  faArrowToTop,
} from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../components/buttons/icon/button';

import './nav-controls.css';

const NavControls = ({
  disabled,
  elPosition,
  handlePageDown,
  handlePageEnd,
  handlePageStart,
  handlePageUp,
  handleRowDown,
  handleRowUp,
  isVisible,
}) => (
  <div
    className="nav-controls"
    style={{
      bottom: elPosition.bottom,
      right: elPosition.right,
      transform: elPosition.transform,
      visibility: isVisible ? 'visible' : 'hidden',
    }}
  >
    <Button
      disabled={disabled.up}
      icon={faArrowToTop}
      onClick={handlePageStart}
      type="button"
    />
    <Button
      disabled={disabled.up}
      icon={faAngleDoubleUp}
      onClick={handlePageUp}
      type="button"
    />
    <Button
      disabled={disabled.up}
      icon={faArrowUp}
      onClick={handleRowUp}
      type="button"
    />
    <Button
      disabled={disabled.down}
      icon={faArrowUp}
      onClick={handleRowDown}
      rotation={180}
      type="button"
    />
    <Button
      disabled={disabled.down}
      icon={faAngleDoubleUp}
      onClick={handlePageDown}
      rotation={180}
      type="button"
    />
    <Button
      disabled={disabled.down}
      icon={faArrowToTop}
      onClick={handlePageEnd}
      rotation={180}
      type="button"
    />
  </div>
);

NavControls.propTypes = {
  disabled: PropTypes.shape({
    down: PropTypes.bool,
    up: PropTypes.bool,
  }).isRequired,
  elPosition: PropTypes.shape({
    bottom: PropTypes.number,
    right: PropTypes.number,
    transform: PropTypes.string,
  }).isRequired,
  handlePageDown: PropTypes.func.isRequired,
  handlePageEnd: PropTypes.func.isRequired,
  handlePageStart: PropTypes.func.isRequired,
  handlePageUp: PropTypes.func.isRequired,
  handleRowDown: PropTypes.func.isRequired,
  handleRowUp: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default NavControls;
