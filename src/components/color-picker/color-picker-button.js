import React from 'react';
import { faPalette } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../buttons/icon/button';

const ColorPickerButton = (
  <IconButton
    icon={faPalette}
    kind="secondary"
    type="button"
  />
);

export default ColorPickerButton;
