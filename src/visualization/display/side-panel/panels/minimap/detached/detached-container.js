import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Detached from './detached';
import wrapperDimensions from './dimensions';
import usePortal from '../../../../../../hooks/portal/use-portal';

const DetachedContainer = ({
  minimap,
  toggleAttached,
}) => {
  const [containerDimensions, setContainerDimensions] = useState({});
  const [display, setDisplay] = useState(true);
  const [position, setPosition] = useState({ right: 10, top: 10 });

  const portal = usePortal('mini-map');

  useEffect(() => {
    const updateDimensions = async () => {
      const newDimensions = await wrapperDimensions(minimap);
      setContainerDimensions(newDimensions);
    };
    updateDimensions();
  }, [minimap]);

  const toggleMinimap = () => {
    setDisplay(!display);
  };

  return (
    <Detached
      containerDimensions={containerDimensions}
      minimap={minimap}
      portal={portal}
      position={position}
      showMinimap={display}
      toggleAttached={toggleAttached}
      toggleMinimap={toggleMinimap}
    />
  );
};

DetachedContainer.defaultProps = {
  minimap: null,
};

DetachedContainer.propTypes = {
  minimap: PropTypes.string,
  toggleAttached: PropTypes.func.isRequired,
};

export default DetachedContainer;
