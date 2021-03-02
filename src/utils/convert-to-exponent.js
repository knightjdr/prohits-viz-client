import React from 'react';

const defaultOptions = {
  asNode: false,
  base: 'e',
  precision: 2,
};

const convertToExponent = (number, inputOptions = {}) => {
  const options = {
    ...defaultOptions,
    ...inputOptions,
  };
  const { asNode, base, precision } = options;

  const parts = Number.parseFloat(number).toExponential(precision).split('e').map((item) => Number(item));
  if (asNode) {
    return (
      <tspan>
        {parts[0]}
        ×
        {base}
        <tspan
          dx="1"
          dy="-5"
          fontSize="0.8em"
        >
          {parts[1]}
        </tspan>
      </tspan>
    );
  }
  return `${parts[0]}×${base}^${parts[1]}`;
};

export default convertToExponent;
