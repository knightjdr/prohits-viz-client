import React from 'react';
import { render } from '@testing-library/react';

import Button from './button-style';

const theme = {
  colorPrimary1: '#0000ff',
  fontLight: '#fff',
};

describe('Icon button style', () => {
  describe('default', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('transparent', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1);
    });

    it('should set before background color', () => {
      const modifier = {
        modifier: '&::before',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.colorPrimary1, modifier);
    });

    it('should set icon color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });
  });

  describe('square', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} square />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set border-radius', () => {
      expect(container.firstChild).toHaveStyleRule('border-radius', '0');
    });

    it('should set before border-radius', () => {
      const modifier = {
        modifier: '&::before',
      };
      expect(container.firstChild).toHaveStyleRule('border-radius', '0', modifier);
    });
  });
});
