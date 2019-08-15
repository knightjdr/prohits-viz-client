import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Detached from './detached';
import { imageDimensions } from './dimensions';
import usePortal from '../../../../../../hooks/portal/use-portal';

const DetachedContainer = ({
  minimap,
  toggleAttached,
}) => {
  const [containerDimensions, setContainerDimensions] = useState({});
  const [opaque, setOpacity] = useState(true);
  const [position, setPosition] = useState({ right: 10, top: 10 });
  const [visibility, setVisibility] = useState(true);

  const portal = usePortal('mini-map');

  useEffect(() => {
    const updateDimensions = async () => {
      const newDimensions = await imageDimensions(minimap);
      setContainerDimensions(newDimensions);
    };
    updateDimensions();
  }, [minimap]);

  return (
    <Detached
      containerDimensions={containerDimensions}
      minimap={minimap}
      opaque={opaque}
      portal={portal}
      position={position}
      setContainerDimensions={setContainerDimensions}
      setOpacity={setOpacity}
      setPosition={setPosition}
      setVisibility={setVisibility}
      toggleAttached={toggleAttached}
      visibility={visibility}
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
