import React from 'react';

import convertToExponent from './convert-to-exponent';

describe('Convert to exponent', () => {
  describe('as string', () => {
    it('should convert numbers using default options', () => {
      const options = {};
      const tests = [1, 10.3, 113.237, 0.001378];
      const expected = ['1×e^0', '1.03×e^1', '1.13×e^2', '1.38×e^-3'];
      tests.forEach((test, index) => {
        expect(convertToExponent(test, options)).toBe(expected[index]);
      });
    });

    it('should convert numbers using input options', () => {
      const options = { base: 10, precision: 1 };
      const tests = [1, 10.3, 113.237, 0.001378];
      const expected = ['1×10^0', '1×10^1', '1.1×10^2', '1.4×10^-3'];
      tests.forEach((test, index) => {
        expect(convertToExponent(test, options)).toBe(expected[index]);
      });
    });
  });

  describe('as node', () => {
    it('should convert numbers to node', () => {
      const options = { asNode: true, base: 10, precision: 2 };
      const tests = [113.237, 0.001378];
      const expected = [
        (
          <tspan key="node1">
            {1.13}
            ×
            {10}
            <tspan
              dx="1"
              dy="-5"
              fontSize="0.8em"
            >
              {2}
            </tspan>
          </tspan>
        ),
        (
          <tspan key="node2">
            {1.38}
            ×
            {10}
            <tspan
              dx="1"
              dy="-5"
              fontSize="0.8em"
            >
              {-3}
            </tspan>
          </tspan>
        ),
      ];
      tests.forEach((test, index) => {
        expect(JSON.stringify(convertToExponent(test, options))).toBe(JSON.stringify(expected[index]));
      });
    });
  });
});
