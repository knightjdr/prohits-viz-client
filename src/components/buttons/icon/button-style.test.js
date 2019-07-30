import React from 'react';
import { render } from '@testing-library/react';

import Button from './button-style';

const theme = {
  colorPrimary1: '#00f',
  fontLight: '#fff',
  timingFunction: 'ease',
};

describe('Button style', () => {
  describe('primary', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button fill="primary" theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', theme.colorPrimary1);
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight);
    });

    it('should set transition timing function', () => {
      expect(container.firstChild).toHaveStyleRule('transition-timing-function', theme.timingFunction);
    });

    it('should set icon background color on focus', () => {
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.accentPrimary1, modifier);
    });

    it('should set icon color on focus', () => {
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1, modifier);
    });

    it('should set icon background color on hover', () => {
      const modifier = {
        modifier: '&:hover',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.accentPrimary1, modifier);
    });

    it('should set icon color on hover', () => {
      const modifier = {
        modifier: '&:hover',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1, modifier);
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
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });

    it('should set icon color on hover', () => {
      const modifier = {
        modifier: '&:hover',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });
  });
});
