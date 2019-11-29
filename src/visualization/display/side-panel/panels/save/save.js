import React from 'react';

import Archive from './archive/archive-container';
import Image from './image/image-container';
import Session from './session/session-container';

const Save = () => (
  <div className="panel panel__save">
    <Image />
    <Session />
    <Archive />
  </div>
);

export default Save;
