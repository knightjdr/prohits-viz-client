import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Detached from './detached';
import usePortal from '../../../../../../hooks/portal/use-portal';
import useWindowDimension from '../../../../../../hooks/window-size/use-window-dimension';
import {
  intialContainerDimensions,
  minimapDimensions,
  viewportPadding,
} from './dimensions';

const DetachedContainer = ({
  children,
  minimap,
  toggleAttached,
}) => {
  const [containerDimensions, setContainerDimensions] = useState({ height: 0, width: 0 });
  const [imageSize, setImageSize] = useState({ height: 0, width: 0 });
  const [opaque, setOpacity] = useState(true);
  const [panelPosition, setPanelPosition] = useState({ right: 10, top: 10 });
  const [visibility, setVisibility] = useState(true);

  const portal = usePortal('mini-map');
  const windowSize = useWindowDimension(0);

  useEffect(() => {
    const updateDimensions = async () => {
      const newDimensions = await minimapDimensions(minimap);
      setImageSize(newDimensions);
    };
    updateDimensions();
  }, [minimap]);

  useEffect(() => {
    const maxHeight = windowSize.height - viewportPadding.height;
    const maxWidth = windowSize.width - viewportPadding.width;
    const newContainerDimensions = intialContainerDimensions(
      imageSize.height,
      imageSize.width,
      maxHeight,
      maxWidth,
    );
    setContainerDimensions(newContainerDimensions);
  }, [imageSize.height, imageSize.width, windowSize.height, windowSize.width]);

  return (
    <Detached
      containerDimensions={containerDimensions}
      minimap={minimap}
      opaque={opaque}
      panelPosition={panelPosition}
      portal={portal}
      setContainerDimensions={setContainerDimensions}
      setOpacity={setOpacity}
      setPanelPosition={setPanelPosition}
      setVisibility={setVisibility}
      toggleAttached={toggleAttached}
      visibility={visibility}
    >
      {children}
    </Detached>
  );
};

DetachedContainer.defaultProps = {
  minimap: null,
};

DetachedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  minimap: PropTypes.string,
  toggleAttached: PropTypes.func.isRequired,
};

export default DetachedContainer;
