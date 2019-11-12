import React from 'react';

import Gprofiler from './gprofiler';

const GprofilerContainer = () => {
  const handleSpeciesChange = () => {};

  const form = {
    organism: 'hsapiens',
  };

  return (
    <Gprofiler
      form={form}
      handleSpeciesChange={handleSpeciesChange}
    />
  );
};

export default GprofilerContainer;
