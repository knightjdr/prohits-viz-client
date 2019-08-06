import React from 'react';

import Load from './load';

const LoadContainer = () => {
  const handleChange = (e) => {
    console.log(e.currentTarget.files);
  };

  return (
    <Load
      handleChange={handleChange}
    />
  );
};


export default LoadContainer;
